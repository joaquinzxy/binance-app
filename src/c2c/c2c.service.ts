import { createHmac } from 'crypto';
import { Injectable } from '@nestjs/common';
import { GetTokenDTO } from './dto/getToken.dto';

@Injectable()
export class C2cService {
  constructor() {}

  async getInfo(getTokenDto: GetTokenDTO) {
    // Replace with your own API key and secret
    const { apiKey, apiSecret, timeStampDiff = 0 } = getTokenDto;

    // Define the endpoint URL
    const endpoint = '/sapi/v1/c2c/orderMatch/listUserOrderHistory';

    const { serverTime } = await (
      await fetch('https://api.binance.com/api/v3/time')
    ).json();

    // Define the request parameters
    const params = {
      timestamp: serverTime + timeStampDiff,
    };

    // Generate the query string
    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    // queryString = timestamp=1334123123&operation=Sell&

    // Generate the signature
    const signature = createHmac('sha256', apiSecret)
      .update(queryString)
      .digest('hex');

    // Define the request headers
    const headers = {
      'Content-Type': 'application/json',
      'X-MBX-APIKEY': apiKey,
    };

    const response = await fetch(
      `https://api.binance.com${endpoint}?${queryString}&signature=${signature}`,
      {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'X-MBX-APIKEY': apiKey,
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      },
    );

    const data = await response.json();

    return data;
  }
}
