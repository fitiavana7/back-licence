import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { SalairesDto } from 'src/salaires/dto/salaires.dto';
import { Salaires, SalairesDocument } from 'src/salaires/schema/salaires.schema';
import { WorksService } from 'src/works/works.service';

@Injectable()
export class SalairesService {
    constructor(
        @InjectModel(Salaires.name) 
        private readonly salairesModel: Model<SalairesDocument>,
        private workService : WorksService
      ) {}

    async getAll(){
        return await this.salairesModel.find({});
    }

    async getByCompany(id : ObjectId){
        return await this.salairesModel.find({userId : id});
    }

    async getByWork(id : ObjectId){
        return await this.salairesModel.find({workId : id});
    }
    
    async getByEmployee(id : ObjectId){
        const data = await this.salairesModel.find({employeeId : id});
        data.map(async(el)=>{
            el.workId = await this.workService.getTitleById(String(id))
        })
        return data
    }
    
    async getById(id : ObjectId){
        return await this.salairesModel.findOne({_id : id});
    }

    async create(data : SalairesDto){
        return this.salairesModel.create(data)
    }
    
    async delete(id : ObjectId){
        return this.salairesModel.deleteOne({_id : id})
    }

}