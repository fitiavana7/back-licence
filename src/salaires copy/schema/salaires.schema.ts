import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type SalairesDocument = Salaires & Document;

@Schema({
  timestamps: false,
})
export class Salaires {

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  userId : string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  employeeId : string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  workId : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  applicationDate : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  description : string;

}

const SalairesSchema = SchemaFactory.createForClass(Salaires);
export default SalairesSchema;
