import { PriceDate } from './Date';

export type Price = {
  start_date: PriceDate;
  finish_date: PriceDate;
  price: number;
};
