import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee } from './schema/employee.schema';
import { EmployeeService} from './employee.service';
import EmployeeSchema from './schema/employee.schema';
import { EmployeeController } from 'src/employee/employee.controller';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])
    ],
    controllers: [EmployeeController],
    providers: [EmployeeService],
    exports: [EmployeeService]
  })
  export class EmployeeModule {}
