import { Module } from '@nestjs/common';

import { StaticScraperService } from './scraper/services/static-scraper.service';
import { ScraperController } from './scraper/scraper.controller';

@Module({
  imports: [],
  controllers: [ScraperController],
  providers: [StaticScraperService],
})
export class AppModule {}
