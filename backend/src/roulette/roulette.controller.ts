import { Controller, Get, HttpException, HttpStatus, Param, Res } from "@nestjs/common";
import { RouletteService } from "./roulette.service";

@Controller("/roulette")
export class RouletteController {
  constructor(
    private readonly rouletteService: RouletteService,
  ) {}

  @Get()
  async getRoulettes() {
    return this.rouletteService.findAll();
  }

  @Get("/spin/:id")
  async spinRoulette(@Param("id") id: string) {
    try {
      return await this.rouletteService.spin(id);
    } catch (err) {
      throw err;
    }
  }
}
