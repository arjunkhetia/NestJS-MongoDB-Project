import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs_demo'), // Connect to MongoDB
    UsersModule,
  ],
})
export class AppModule {}
