import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema({
  timestamps: false,
})
export class Payment {

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  companyId : string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  employeeId : string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  workId : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  title : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  commentaire : string;

  @Prop({ required: true, type: mongoose.Schema.Types.Date })
  paymentDate : Date;

  @Prop({ required: true, type: mongoose.Schema.Types.Number })
  amount : number;

  @Prop({ required: true, type: mongoose.Schema.Types.Number })
  plus : number;
  @Prop({ required: true, type: mongoose.Schema.Types.Boolean })
  havePlus : boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.String })
  plusDescription : string;

  @Prop({ required: true, type: mongoose.Schema.Types.Number })
  moins : number;
  @Prop({ required: true, type: mongoose.Schema.Types.Boolean })
  haveMoins : boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.String })
  moinsDescription : string;

}

const PaymentSchema = SchemaFactory.createForClass(Payment);
export default PaymentSchema;
