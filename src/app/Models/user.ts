import { Address } from 'node:cluster';
import { BankDetails } from './bank-details';
import { EmiCard } from './emi-card';

export class User {
  userId: number;

  firstname: string;

  lastname: string;

  password: string;

  email: string;

  phoneNo: string;

  companyName: string;

  companyAddress: string;

  designation: string;

  bankDetaills: BankDetails;

  address: Address;

  card: EmiCard;

  PanCardNo: string;

  isApproved: boolean;

  role: String;
}
