import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RouletteModule } from "./roulette/roulette.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    RouletteModule,
    UserModule,
  ],
})
export class AppModule {}
