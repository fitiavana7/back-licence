import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: false,
})
export class User {

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  name : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  location : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  phone : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  creationDate : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  mail : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  password : string;

}

const UserSchema = SchemaFactory.createForClass(User);
export default UserSchema;
