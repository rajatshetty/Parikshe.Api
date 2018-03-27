import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserServices } from '../services/user.services';
import { User } from '../model/user.model';

@Controller('ok')
export class UserController {
    constructor(private readonly userServices: UserServices) { }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userServices.getUsers();
    }

    @Post('login')
    async checkUserExists( @Body() model: any): Promise<any> {
        return this.userServices.checkUserExists(model.userName, model.password);
    }
}