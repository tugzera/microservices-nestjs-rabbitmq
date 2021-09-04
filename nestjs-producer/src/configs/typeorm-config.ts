import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig = (): TypeOrmModuleOptions => {
  return {
    type: 'mongodb',
    host: process.env.MONGODB_HOST,
    port: Number(process.env.MONGODB_PORT),
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASS,
    database: process.env.MONGODB_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
  };
};
