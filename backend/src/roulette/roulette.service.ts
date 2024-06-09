import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Roulette, RouletteDocument } from "./roulette.schema";
import { Model } from "mongoose";
import { User, UserDocument } from "src/user/user.schema";

@Injectable()
export class RouletteService {
  constructor(
    @InjectModel(Roulette.name) private rouletteModel: Model<RouletteDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async spin(roulette_id: string) {
    const roulette = await this.rouletteModel
      .findById(roulette_id).exec();
    const user = await this.userModel
      .findOne().sort({ created_at: 1 }).exec();

    if (user.credits < roulette.price) {
      throw new HttpException("El usuario no tiene suficientes creditos", HttpStatus.FORBIDDEN);
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
    } else {
      user.fruits = [...user.fruits, { fruit: fruitToAdd, amount: 1 }]
    }

    user.markModified("fruits");

    user.save();

    return user;
  }

  async findAll() {
    return this.rouletteModel.find().exec();
  }
}
