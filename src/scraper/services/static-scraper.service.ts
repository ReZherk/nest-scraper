import { Injectable } from '@nestjs/common';
import axios from 'axios';
//import * as cheerio from 'cheerio';

@Injectable()
export class StaticScraperService {
  async scrape(url: string) {
    await axios.get<string>(url).then(function (response) {
      console.log(response);
    });
  }
}
