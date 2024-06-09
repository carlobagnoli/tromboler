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
exports.RouletteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const roulette_schema_1 = require("./roulette.schema");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../user/user.schema");
let RouletteService = class RouletteService {
    constructor(rouletteModel, userModel) {
        this.rouletteModel = rouletteModel;
        this.userModel = userModel;
    }
    async spin(roulette_id) {
        const roulette = await this.rouletteModel
            .findById(roulette_id).exec();
        const user = await this.userModel
            .findOne().sort({ created_at: 1 }).exec();
        if (user.credits < roulette.price) {
            throw new common_1.HttpException("El usuario no tiene suficientes creditos", common_1.HttpStatus.FORBIDDEN);
        }
        const total = roulette.slots.reduce((acc, slot) => acc + slot.chance, 0);
        const randomNumber = Math.random();
        let i = 0;
        let n = 0;
        while (n < 1.0) {
            n += roulette.slots[i].chance / total;
            if (randomNumber < n) {
                break;
            }
            i++;
        }
        user.credits -= roulette.price;
        const fruitToAdd = roulette.slots[i].fruit;
        if (-1 !== (i = user.fruits.findIndex((fruit) => fruit.fruit === fruitToAdd))) {
            user.fruits[i].amount++;
        }
        else {
            user.fruits = [...user.fruits, { fruit: fruitToAdd, amount: 1 }];
        }
        user.markModified("fruits");
        user.save();
        return user;
    }
    async findAll() {
        return this.rouletteModel.find().exec();
    }
};
exports.RouletteService = RouletteService;
exports.RouletteService = RouletteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(roulette_schema_1.Roulette.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], RouletteService);
//# sourceMappingURL=roulette.service.js.map