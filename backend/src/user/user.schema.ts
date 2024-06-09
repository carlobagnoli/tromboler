import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema({ collection: "user" })
export class User {
  @Prop({ required: true })
  fruits: { fruit: string, amount: number }[];
  @Prop({ required: true })
  credits: number;
  @Prop({ required: true })
  last_update: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
