import { Component, Inject, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../../auth';
import { UserMock } from '../../mock/users.mock';
@Component()
export class AccountServices {

    private readonly userMock: UserMock;

    constructor(private authService: AuthService) {
        this.userMock = new UserMock();
    }

    public signIn(email: string, password: string): any {
        const user = this.userMock.getUsers().find(x => x.email === email && x.password === password);
        if (user) {
            return this.authService.createToken(email);
        } else {
            throw new UnauthorizedException('user not found');
        }
    }

}