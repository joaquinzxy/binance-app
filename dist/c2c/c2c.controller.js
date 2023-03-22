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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.C2cController = void 0;
const common_1 = require("@nestjs/common");
const c2c_service_1 = require("./c2c.service");
const getToken_dto_1 = require("./dto/getToken.dto");
let C2cController = class C2cController {
    constructor(c2cService) {
        this.c2cService = c2cService;
    }
    create(getTokenDTO) {
        return this.c2cService.getInfo(getTokenDTO);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getToken_dto_1.GetTokenDTO]),
    __metadata("design:returntype", void 0)
], C2cController.prototype, "create", null);
C2cController = __decorate([
    (0, common_1.Controller)('c2c'),
    __metadata("design:paramtypes", [c2c_service_1.C2cService])
], C2cController);
exports.C2cController = C2cController;
//# sourceMappingURL=c2c.controller.js.map