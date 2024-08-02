import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
  timestamps: false,
})
class HistoricSalaryItem {
  @Prop({ required: true, type: mongoose.Schema.Types.String })
  titre: string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  description: string;

}

const HistoricSalaryItemSchema = SchemaFactory.createForClass(HistoricSalaryItem);
export default HistoricSalaryItemSchema
  