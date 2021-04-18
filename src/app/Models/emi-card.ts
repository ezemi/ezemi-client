import { CardType } from './card-type';

export class EmiCard {
  emiCardNo: string;

  credit: number;

  creditLeft: number;

  cardType: CardType;

  expiryDate: Date;

  isActivated: boolean;
}
