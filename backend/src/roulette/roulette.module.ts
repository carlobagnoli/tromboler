import { Module } from "@nestjs/common";
import { RouletteService } from "./roulette.service";
import { RouletteController } from "./roulette.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Roulette, RouletteSchema } from "./roulette.schema";
import { User, UserSchema } from "src/user/user.schema";

@Module({
  providers: [RouletteService],
  controllers: [RouletteController],
  imports: [
    MongooseModule.forFeature([{ name: Roulette.name, schema: RouletteSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ]
})
export class RouletteModule {}
