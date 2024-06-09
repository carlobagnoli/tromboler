import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get()
  async getUser() {
    await this.userService.updateCredits();
    await this.userService.updateLastUpdate();
    return await this.userService.findUnique();
  }
}
