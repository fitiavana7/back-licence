import { Injectable } from '@nestjs/common';
import { EmployeeService } from 'src/employee/employee.service';
import { PaymentService } from 'src/payment/payment.service';
import { WorksService } from 'src/works/works.service';

@Injectable()
export class StatService {
    constructor(
        private employeeService : EmployeeService,
        private paymentService : PaymentService,
        private workService : WorksService
      ) {}

    async getCompanyStat(id: string){
        return { 
            totalEmployees : await this.employeeService.getTotalSalaries(id),
            totalPayed : await this.paymentService.getTotalPayed(id),
            totalWorks : await this.workService.getTotalWork(id),
            totalPayments : await this.paymentService.getTotalPayments(id)
        }
    }
}