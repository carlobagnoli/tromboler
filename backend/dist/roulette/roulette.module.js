"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouletteModule = void 0;
const common_1 = require("@nestjs/common");
const roulette_service_1 = require("./roulette.service");
const roulette_controller_1 = require("./roulette.controller");
const mongoose_1 = require("@nestjs/mongoose");
const roulette_schema_1 = require("./roulette.schema");
const user_schema_1 = require("../user/user.schema");
let RouletteModule = class RouletteModule {
};
exports.RouletteModule = RouletteModule;
exports.RouletteModule = RouletteModule = __decorate([
    (0, common_1.Module)({
        providers: [roulette_service_1.RouletteService],
        controllers: [roulette_controller_1.RouletteController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: roulette_schema_1.Roulette.name, schema: roulette_schema_1.RouletteSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
        ]
    })
], RouletteModule);
//# sourceMappingURL=roulette.module.js.map