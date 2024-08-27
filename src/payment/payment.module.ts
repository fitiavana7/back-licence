import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentController } from 'src/payment/payment.controller';
import { PaymentService } from 'src/payment/payment.service';
import PaymentSchema, { Payment } from 'src/payment/schema/payment.schema';

@Module({
  providers: [PaymentService],
  controllers: [PaymentController] ,
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  ],
  exports: [PaymentService],
})
export class PaymentModule {}