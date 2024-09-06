import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './schema/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { GetByMailDto } from './dto/get-mail.dto';
import { VerifyTokenDto } from './dto/verify-token.dto';
import { GetUserByIdDto } from './dto/get-by-id.dto';
import { ChangePasswordDto } from 'src/user/dto/change-password.dto';
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) 
        private readonly userModel: Model<UserDocument>,
        private jwtService : JwtService
      ) {}

    async getAllUsers(){
        return await this.userModel.find({});
    }

    async getById(data : GetUserByIdDto){
        return await this.userModel.findOne({_id : data.userId});
    }

    async getByMail(data  :GetByMailDto){
        const {mail} = data
        return await this.userModel.find({mail});
    }

    async login(data : LoginUserDto){
        const { mail, password } = data

        const user = await this.userModel.findOne({ mail });

        if (!user) {
            throw new UnauthorizedException("account not found");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if (!isPasswordMatched) {
            throw new UnauthorizedException("incorrect password");
        }
        const token = this.jwtService.sign(
            { 
                _id: user._id  , 
                mail : user.mail,
            },
            {secret : process.env.JWT_SECRET}
            )

        return { token }
    }

    async changePassword(id : string ,data  : ChangePasswordDto){
        const user = await this.userModel.findOne({ _id : id });
        const isPasswordMatched = await bcrypt.compare(data.password, user.password)
        if (!isPasswordMatched) {
            throw new UnauthorizedException("incorrect password");
        }
        user.password = await bcrypt.hash(data.newPassword, 10)
        return user.save()
    }

    async update(id : string ,data  : UserDto){
        const user = await this.userModel.findOne({ _id : id });
        if (!user) {
            throw new BadRequestException("User not found");
        }
        user.name = data.name
        user.location = data.location
        user.phone = data.phone
        user.creationDate = data.creationDate
        user.mail = data.mail
        return user.save()
    }

    async create(data : UserDto){
        const found = await this.userModel.findOne({ mail : data.mail });

        if (found) {
            throw new BadRequestException("Ce mail est dejà utilisé");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)
        
        const user = this.userModel.create(
            {...data , 
                password : hashedPassword
            }
        ) 
 
        const token = this.jwtService.sign({ 
            _id: (await user)._id ,
            mail : data.mail,
         },
         {secret : process.env.JWT_SECRET}
         )
        
        return { token }    
    }

    async verifyToken(data : VerifyTokenDto){
        return await this.jwtService.verify(data.token , {secret : process.env.JWT_SECRET})
    }

}