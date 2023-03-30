import { Links } from './Link';
import { Price } from './Price';

export type Room = {
  room_number: number;
  title: string;
  description: string;
  price: Price;
  links: Links;
};

export type RoomsResponce = Room[];
