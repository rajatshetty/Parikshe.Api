import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user.model';
import { UserSchema } from '../schemas/user.schema';

@Component()
export class UserServices {

    constructor( @InjectModel(UserSchema) private readonly userModel: Model<User>) { }

    async create(model: User): Promise<User> {
        const createdUser = new this.userModel(model);
        return await createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }
    // public checkUserExists(name: string, password: string): any {
    //     const user = this.userMock.getUsers().find(x => x.name === name && x.password === password);
    //     if (user) {
    //         return true;
    //     } else {
    //         throw new UnauthorizedException('user not found');
    //     }
    // }
}