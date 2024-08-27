import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({
  timestamps: false,
})
export class Employee {

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  firstName : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  lastName : string;

  @Prop({ required: true, type: mongoose.Schema.Types.Number })
  age : number;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  gender : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  adress : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  phone : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  matrimoniale : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  mail : string;

  @Prop({ required: true, type: mongoose.Schema.Types.Date })
  hiringDate : Date;

  @Prop({ required: false, type: mongoose.Schema.Types.Date })
  leavingDate : Date;

  @Prop({ required: true, type: mongoose.Schema.Types.Boolean })
  isCurrentEmployee : boolean;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  companyId;
}

const EmployeeSchema = SchemaFactory.createForClass(Employee);
export default EmployeeSchema;
