import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaModule } from './materia/materia.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: 'practica03',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MateriaModule,
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
