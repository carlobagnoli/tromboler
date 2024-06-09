import axios from "axios";
import { getURL } from "../../core";
import { RouletteInterface } from "./interfaces";

export class RouletteResource {
  constructor(
    public id: RouletteInterface["id"],
    public price: RouletteInterface["price"],
    public slots: RouletteInterface["slots"],
  ) {}

  static deserialize(roulette: any) {
    return new RouletteResource(
      roulette._id,
      roulette.price,
      roulette.slots,
    );
  }

  toObject(): RouletteInterface {
    return {
      id: this.id,
      price: this.price,
      slots: this.slots,
    };
  }

  static async list(): Promise<RouletteResource[]> {
    return axios.get(getURL() + "/roulette")
      .then((response) => {
        return response.data.map((res: any) => RouletteResource.deserialize(res));
      });
  }
}
