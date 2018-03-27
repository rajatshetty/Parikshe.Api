import { Controller, Post, HttpStatus, HttpCode, Get } from '@nestjs/common';

@Controller('account')
export class SignUpController {

    @Get('signup')
    async signUp(): Promise<any> {
        return null;
    }
}