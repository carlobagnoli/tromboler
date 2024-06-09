import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async findUnique() {
    return await this.userModel.findOne().sort({ created_at: 1 }).exec();
  }

  async updateCredits() {
    const user = await this.findUnique();
    
    const timeDiff = Math.abs(new Date(user.last_update).getTime() - Date.now()) / 1000 / 60;

    if (timeDiff < 1) {
      return;
    }

    user.credits++;

    user.save();
  }

  async updateLastUpdate() {
    const user = await this.findUnique();

    user.last_update = Date.now();

    user.save();
  }
}
