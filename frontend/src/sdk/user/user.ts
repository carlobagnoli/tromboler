import axios from "axios";
import { getURL } from "../../core";

export interface UserInterface {
  fruits: { fruit: string, amount: number }[],
  credits: number;
  lastUpdate: number;
};

export class UserResource {
  constructor(
    public fruits: UserInterface["fruits"],
    public credits: UserInterface["credits"],
    public lastUpdate: UserInterface["lastUpdate"],
  ) {}
  
  static deserialize(user: any) {
    return new UserResource(
      user.fruits,
      user.credits,
      user.last_update,
    );
  }

  toObject(): UserInterface {
    return {
      fruits: this.fruits,
      credits: this.credits,
      lastUpdate: this.lastUpdate,
    };
  }

  static async list(): Promise<UserResource> {
    return axios.get(getURL() + "/user")
      .then((response) => {
        return UserResource.deserialize(response.data);
      })
  }

  static async spin(id: string): Promise<UserResource> {
    return axios.get(getURL() + `/roulette/spin/${id}`)
      .then((response) => {
        return UserResource.deserialize(response.data);
      });
  }
}
