import { ILimitsBD } from 'constants/Limits';

export const bd1: Array<ILimitsBD> = [
  { header: 'Team members', first_number: '3', second_number: '6' },
  {
    header: 'Outgoing e-invoices',
    first_number: 'Unlimited',
    second_number: '',
  },
  {
    header: 'Connected sources (banks)',
    first_number: '5',
    second_number: '5',
  },
];

export const bd2: Array<ILimitsBD> = [
  { header: 'Team members', first_number: '6', second_number: '6' },
  { header: 'Security', first_number: '3', second_number: '5' },
  { header: 'Business profile', first_number: '4', second_number: '5' },
];
