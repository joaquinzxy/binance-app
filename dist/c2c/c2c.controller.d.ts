import { C2cService } from './c2c.service';
import { GetTokenDTO } from './dto/getToken.dto';
export declare class C2cController {
    private readonly c2cService;
    constructor(c2cService: C2cService);
    create(getTokenDTO: GetTokenDTO): Promise<any>;
}
