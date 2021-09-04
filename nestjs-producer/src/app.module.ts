import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeORMConfig } from './configs/typeorm-config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig()), ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
