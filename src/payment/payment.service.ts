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

    async getTotalAmountByCompany(companyID: string){        
        const data = await this.getByCompany(companyID)
        let total = 0
        data.map((e)=> total += e.amount)
        return total
    }
    
    //     // Retourne la somme ou 0 si aucun résultat
    //     return result.length > 0 ? result[0].totalAmount : 0;
    // }

    // async getHighestAmountPayment(companyID: string): Promise<Paiement | null> {
    //     return await this.paiementModel
    //       .findOne({ companyID: companyID }) // Filtre par companyID
    //       .sort({ amount: -1 }) // Trie par montant décroissant
    //       .exec(); // Exécute la requête et retourne le premier document
    // }

    async deleteByEmployee(id : string){
        return await this.paymentModel.deleteMany({_id : id})
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