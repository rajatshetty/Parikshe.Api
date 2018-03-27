import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserServices } from '../services/user.service';
import { User } from '../models/user.model';

@Controller('user')
export class UserController {
    constructor(private readonly userServices: UserServices) { }

    @Get('findAll')
    async findAll(): Promise<User[]> {
        return this.userServices.findAll();
    }

    @Post()
    async create( @Body() model: User): Promise<User> {
        return this.userServices.create(model);
    }
}
