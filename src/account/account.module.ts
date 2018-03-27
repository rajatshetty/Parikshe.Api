import { Module } from '@nestjs/common';
import { SignInController } from './controllers/sign-in.controller';
import { SignUpController } from './controllers/sign-up.controller';
import { AccountServices } from './services/account.service';
import { AuthService } from '../auth';
@Module({
    imports: [],
    controllers: [SignInController, SignUpController],
    components: [AccountServices, AuthService],
})
export class AccountModule {

}