import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import HistoricSalaryItemSchema from 'src/employee/schema/historic-salary-item.schema';

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

  @Prop({ required: false, type: [HistoricSalaryItemSchema] , default : [] })
  historicSalary ;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  companyId;
}

const EmployeeSchema = SchemaFactory.createForClass(Employee);
export default EmployeeSchema;
