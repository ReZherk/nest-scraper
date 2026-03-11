import { Module } from '@nestjs/common';

import { StaticScraperService } from './scraper/services/static-scraper.service';
import { ScraperController } from './scraper/scraper.controller';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
  ],
  controllers: [ScraperController],
  providers: [StaticScraperService],
})
export class AppModule {}
