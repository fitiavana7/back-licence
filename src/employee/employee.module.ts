import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee } from './schema/employee.schema';
import { EmployeeService} from './employee.service';
import EmployeeSchema from './schema/employee.schema';
import { EmployeeController } from 'src/employee/employee.controller';
import { SalairesModule } from 'src/salaires/salaires.module';
import { PaymentModule } from 'src/payment/payment.module';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])
      ,SalairesModule,PaymentModule
    ],
    controllers: [EmployeeController],
    providers: [EmployeeService],
    exports: [EmployeeService]
  })
  export class EmployeeModule {}
