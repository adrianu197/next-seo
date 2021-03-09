import { FC } from 'react';
import { Address } from '../types';
declare type AggregateRating = {
  ratingValue: string;
  ratingCount: string;
};
declare type Geo = {
  latitude: string;
  longitude: string;
};
declare type OpeningHoursSpecification = {
  opens: string;
  closes: string;
  dayOfWeek: string | string[];
  validFrom?: string;
  validThrough?: string;
};
declare type Rating = {
  ratingValue: string;
  worstRating?: string;
  bestRating?: string;
  reviewAspect?: string;
};
declare type Review = {
  author: string;
  datePublished: string;
  reviewBody: string;
  reviewRating: Rating;
  name?: string;
};
export interface LocalBusinessJsonLdProps {
  keyOverride?: string;
  type: string;
  id: string;
  name: string;
  description: string;
  url?: string;
  telephone?: string;
  address: Address;
  geo?: Geo;
  images?: string[];
  rating?: AggregateRating;
  review?: Review[];
  priceRange?: string;
  servesCuisine?: string | string[];
  sameAs?: string[];
  openingHours?: OpeningHoursSpecification | OpeningHoursSpecification[];
}
declare const LocalBusinessJsonLd: FC<LocalBusinessJsonLdProps>;
export default LocalBusinessJsonLd;
