"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.C2cService = void 0;
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
let C2cService = class C2cService {
    constructor() { }
    async getInfo(getTokenDto) {
        const { apiKey, apiSecret, timeStampDiff } = getTokenDto;
        const endpoint = '/sapi/v1/c2c/orderMatch/listUserOrderHistory';
        const params = {
            timestamp: Date.now() + timeStampDiff,
        };
        const queryString = Object.keys(params)
            .map((key) => `${key}=${params[key]}`)
            .join('&');
        const signature = (0, crypto_1.createHmac)('sha256', apiSecret)
            .update(queryString)
            .digest('hex');
        const headers = {
            'Content-Type': 'application/json',
            'X-MBX-APIKEY': apiKey,
        };
        const response = await fetch(`https://api.binance.com${endpoint}?${queryString}&signature=${signature}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-MBX-APIKEY': apiKey,
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        });
        const data = await response.json();
        return data;
    }
};
C2cService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], C2cService);
exports.C2cService = C2cService;
//# sourceMappingURL=c2c.service.js.map