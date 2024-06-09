import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RouletteDocument = Roulette & Document;

@Schema({ collection: "roulette" })
export class Roulette {
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  slots: { fruit: string, chance: number }[];
}

export const RouletteSchema = SchemaFactory.createForClass(Roulette);
