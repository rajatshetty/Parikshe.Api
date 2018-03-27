import { Controller, Post, HttpStatus, HttpCode, Get, Body } from '@nestjs/common';
import { AccountServices } from '../services/account.service';

@Controller('account')
export class SignInController {

    constructor(private accountServices: AccountServices) { }

    @Post('signin')
    async signIn( @Body() model: any): Promise<any> {
        return this.accountServices.signIn(model.email, model.password);
    }
}