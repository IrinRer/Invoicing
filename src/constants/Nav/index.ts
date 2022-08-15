export enum RouteEnum {
  PROFILE ='profle',
  SECURITY = 'security',
  NOTIFICATIONS ='notifications',
  E_INVOICING = 'e-invoicing',
  BUSINESS_PROFILE ='business-profile',
  PLAN_LIMITS = '/',
  TEAM = 'team'
}

export interface IDataHeader {
  header: string,
  price: string,
  header_features: string,
  price_features: string,
};