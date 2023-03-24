"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.C2cModule = void 0;
const common_1 = require("@nestjs/common");
const c2c_service_1 = require("./c2c.service");
const c2c_controller_1 = require("./c2c.controller");
let C2cModule = class C2cModule {
};
C2cModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [c2c_controller_1.C2cController],
        providers: [c2c_service_1.C2cService],
    })
], C2cModule);
exports.C2cModule = C2cModule;
//# sourceMappingURL=c2c.module.js.map