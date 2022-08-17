import { ILimitsBD } from 'constants/Limits';

export const bd1: Array<ILimitsBD> = [
  { header: 'Team members', first_number: '3', second_number: '6', color: 'blue', 
  text_under_line: 'Need more members?'},
  {
    header: 'Outgoing e-invoices',
    first_number: 'Unlimited',
    second_number: '',
    color: 'red',
    text_under_line: 'Send as many e-invoices as you want.'
  },
  {
    header: 'Connected sources (banks)',
    first_number: '5',
    second_number: '5',
    color: 'blue',
    text_under_line: 'Need more banks to connect?'
  },
];

export const bd2: Array<ILimitsBD> = [
  { header: 'Team members', first_number: '6', second_number: '6', color: 'blue',  text_under_line: 'Need more members?'},
  { header: 'Security', first_number: '3', second_number: '5', color: 'green', text_under_line: 'Send information about security'},
  { header: 'Business profile', first_number: '4', second_number: '5', color: 'red', text_under_line: 'Business profile'},
];
