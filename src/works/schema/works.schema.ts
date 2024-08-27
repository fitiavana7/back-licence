import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type WorksDocument = Works & Document;

@Schema({
  timestamps: false,
})
export class Works {

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  title : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  description : string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  isInDirection : string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  companyId;

}

const WorksSchema = SchemaFactory.createForClass(Works);
export default WorksSchema;
