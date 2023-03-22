const crypto = require('crypto');
const https = require('https');
import fs from 'fs';
import { promisify } from 'util';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { fsync, writeFileSync } from 'fs';
import { hostname } from 'os';
import { map } from 'rxjs';
import { GetTokenDTO } from './dto/getToken.dto';

@Injectable()
export class C2cService {
  constructor(private readonly httpService: HttpService) {}

  async getInfo(getTokenDto: GetTokenDTO) {
    // Replace with your own API key and secret
    const { apiKey, apiSecret } = getTokenDto;

    // Define the endpoint URL
    const endpoint = '/sapi/v1/c2c/orderMatch/listUserOrderHistory';

    // Define the request parameters
    const params = {
      timestamp: Date.now() + 500,
    };

    // Generate the query string
    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    // queryString = timestamp=1334123123&operation=Sell&

    // Generate the signature
    const signature = crypto
      .createHmac('sha256', apiSecret)
      .update(queryString)
      .digest('hex');

    // Define the request headers
    const headers = {
      'Content-Type': 'application/json',
      'X-MBX-APIKEY': apiKey,
    };

    // Define the request options
    const options = {
      hostname: 'api.binance.com',
      path: `${endpoint}?${queryString}&signature=${signature}`,
      method: 'GET',
      headers,
    };

    const response = await fetch(
      `https://api.binance.com${endpoint}?${queryString}&signature=${signature}`,
      {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
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
