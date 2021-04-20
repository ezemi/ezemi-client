import { Address } from './address';
import { Bank } from './bank';
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

  bankDetails: BankDetails;

  address: Address;

  card: EmiCard;

  panCard: string;

  adharCard: string;

  isApproved: boolean;

  role: String;
}
