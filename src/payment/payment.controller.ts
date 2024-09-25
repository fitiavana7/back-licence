import { Body, Controller, Delete, Get, Param, Post , UseGuards } from '@nestjs/common';
import { PaymentDto } from 'src/payment/dto/payment.dto';
import { PaymentService } from 'src/payment/payment.service';
import { GetByIdDto } from 'src/salaires/dto/get-by-id.dto';

@Controller('payment')
export class PaymentController {

    constructor(
        private paymentService : PaymentService
    ){}

    @UseGuards()
    @Get('company/:id')
    getByCompany(@Param() data : {id : string}){
        return this.paymentService.getByCompany(data.id)
    }

    @UseGuards()
    @Get('employee/:id')
    getByEmployee(@Param() data : {id : string}){
        return this.paymentService.getByEmployee(data.id)
    }

    @UseGuards()
    @Get('payment/check/:id')
    checkIfPaid(@Param() data : {id : string}){
        return this.paymentService.getByWork(data.id)
    }
    
    @UseGuards()
    @Get('company-total/:id')
    getTotalByCompany(@Param() data : {id : string}){
        return this.paymentService.getTotalAmountByCompany(data.id)
    }
    
    @UseGuards()
    @Get('work/:id')
    getByWork(@Param() data : {id : string}){
        return this.paymentService.getByWork(data.id)
    }
    
    @UseGuards()
    @Get(':id')
    getByUser(@Param() data : {id : string}){
        return this.paymentService.getById(data.id)
    }

    @UseGuards()
    @Post()
    create(@Body() data : PaymentDto){
        return this.paymentService.create(data)
    }

    @UseGuards()
    @Delete(':id')
    delete(@Param() data : {id : string}){
        return this.paymentService.delete(data.id)
    }
}
