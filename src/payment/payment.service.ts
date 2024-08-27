import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { PaymentDto } from 'src/payment/dto/payment.dto';
import { Payment, PaymentDocument } from 'src/payment/schema/payment.schema';

@Injectable()
export class PaymentService {
    constructor(
        @InjectModel(Payment.name) 
        private readonly paymentModel: Model<PaymentDocument>,
      ) {}

    async getAll(){
        return await this.paymentModel.find({});
    }

    async getByCompany(id : string){
        return await this.paymentModel.find({companyId : id});
    }

    async getByWork(id : string){
        return await this.paymentModel.find({workId : id});
    }

    async checkIfPaid(id : string){
        
    }
    
    async getByEmployee(id : string){
        return await this.paymentModel.find({employeeId : id});
    }
    
    async getById(id : string){
        return await this.paymentModel.findOne({_id : id});
    }

    async create(data : PaymentDto){
        return this.paymentModel.create(data)
    }
    
    async delete(id : string){
        return this.paymentModel.deleteOne({_id : id})
    }

    async getTotalPayments(id : string){
        return await this.paymentModel.count({companyId : id})
    }

    async getTotalPayed(id : string){
        // const total = await this.paymentModel.aggregate([
        //     { $match : { companyId : id } },
        //     { $group : { _id : null , total : { $sum : '$amount' } } }
        // ])
        // return total[0].total || 0
        return 2
    }
}