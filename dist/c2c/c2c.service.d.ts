import { HttpService } from '@nestjs/axios';
import { GetTokenDTO } from './dto/getToken.dto';
export declare class C2cService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getInfo(getTokenDto: GetTokenDTO): Promise<any>;
}
