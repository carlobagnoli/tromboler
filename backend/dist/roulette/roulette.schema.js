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
exports.RouletteSchema = exports.Roulette = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Roulette = class Roulette {
};
exports.Roulette = Roulette;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Roulette.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Roulette.prototype, "slots", void 0);
exports.Roulette = Roulette = __decorate([
    (0, mongoose_1.Schema)({ collection: "roulette" })
], Roulette);
exports.RouletteSchema = mongoose_1.SchemaFactory.createForClass(Roulette);
//# sourceMappingURL=roulette.schema.js.map