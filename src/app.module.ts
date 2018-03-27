import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CorsMiddleware } from './middleware/cors.middleware';
import { UserServices } from './services/user.services';
import { UserController } from './controllers/user.controller';
import { ApiModule } from './api/api.module';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user';

@Module({
  imports: [ApiModule, AccountModule, UserModule,
  MongooseModule.forRoot('mongodb://localhost/parikshe')],
  controllers: [AppController, UserController],
  components: [UserServices],
})
<<<<<<< HEAD
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(CorsMiddleware).forRoutes(
      { path: '/**', method: RequestMethod.ALL },
    );
  }
}
=======
export class AppModule {}
>>>>>>> 4a63be4f106a8d01ed75cdd6b5e9ad4bf0e0396f
