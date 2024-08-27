import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SalairesDto } from 'src/salaires/dto/salaires.dto';
import { WorksDto } from 'src/works/dto/works.dto';
import { Works, WorksDocument } from 'src/works/schema/works.schema';

@Injectable()
export class WorksService {
    constructor(
        @InjectModel(Works.name) 
        private readonly worksModel: Model<WorksDocument>,
      ) {}

    async getAll(){
        return await this.worksModel.find({});
    }

    async getById(id : string){
        return await this.worksModel.findOne({_id : id});
    }

    async getByCompany(id : string){
        return await this.worksModel.find({companyId : id});
    }

    async create(data : WorksDto , id : string){
        return this.worksModel.create({...data , companyId : id})
    }

    async delete(id : string){
        return this.worksModel.deleteOne({_id  :id})
    }

    async getTotalWork(id : string){
        return await this.worksModel.count({companyId  :id})
    }

    async update(id : string , data){
        return await this.worksModel.updateOne({_id  :id} , {$set : data})
    }

    async getTitleById(id : string){
        const work = await this.worksModel.findOne({_id  :id})
        return work?.title || ''
    }

}