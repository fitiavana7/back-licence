import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { StatService } from 'src/user/stat.service';
import { GetUserByIdDto } from './dto/get-by-id.dto';
import { GetByMailDto } from './dto/get-mail.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserDto } from './dto/user.dto';
import { VerifyTokenDto } from './dto/verify-token.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService : UserService,
        private statService : StatService
    ){}

    @UseGuards()
    @Get()
    getUser(){
        return this.userService.getAllUsers()
    }

    @UseGuards()
    @Get("/mail/:mail")
    getByMail(@Param() data  :GetByMailDto){
        return this.userService.getByMail(data)
    }

    @UseGuards()
    @Get("/:userId")
    getById(@Param() data  :GetUserByIdDto){
        return this.userService.getById(data)
    }

    @Post('/register')
    create(@Body() data : UserDto){
        return this.userService.create(data)
    }

    @Post("/login")
    login(@Body() data  :LoginUserDto){
        return this.userService.login(data)
    }

    @UseGuards()
    @Get("/verify/:token")
    async verify(@Param() data  : VerifyTokenDto ){                
        return await this.userService.verifyToken(data)
    }

    @UseGuards()
    @Get("/stat/:id")
    async getStat(@Param() data  : {id : string} ){                
        return await this.statService.getCompanyStat(data.id)
    }
}
