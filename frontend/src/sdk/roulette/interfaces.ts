export interface SlotInterface {
  fruit: string;
  chance: number;
}

export interface RouletteInterface {
  id: string;
  price: number;
  slots: SlotInterface[];
}

