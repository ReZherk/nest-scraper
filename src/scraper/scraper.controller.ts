import { Controller, Get, Query } from '@nestjs/common';
import { StaticScraperService } from './services/static-scraper.service';

@Controller('scraper')
export class ScraperController {
  constructor(private readonly staticScraper: StaticScraperService) {}

  @Get('static')
  async scrapeStatic(@Query('url') url: string) {
    await this.staticScraper.scrape(url);
    return `Se ejecuto  la ruta  static y se mando como parametro:${url}`;
  }
}
