import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
/* import { AppController } from './app.controller';
import { AppService } from './app.service'; */
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://AthirsonSilva:root@nestjs-crud-api.d8ehbpn.mongodb.net/test',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
