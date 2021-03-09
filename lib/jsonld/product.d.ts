import { FC } from 'react';
declare type ReviewRating = {
  bestRating?: string;
  ratingValue: string;
  worstRating?: string;
};
declare type Author = {
  type: string;
  name: string;
};
declare type Publisher = {
  type: string;
  name: string;
};
export declare type Review = {
  author: Author;
  datePublished?: string;
  reviewBody?: string;
  name?: string;
  publisher?: Publisher;
  reviewRating: ReviewRating;
};
declare type Offers = {
  price: string;
  priceCurrency: string;
  priceValidUntil?: string;
  itemCondition?: string;
  availability?: string;
  url?: string;
  seller: {
    name: string;
  };
};
declare type AggregateOffer = {
  priceCurrency: string;
  lowPrice: string;
  highPrice?: string;
  offerCount?: string;
};
export declare type AggregateRating = {
  ratingValue: string;
  reviewCount: string;
};
export interface ProductJsonLdProps {
  keyOverride?: string;
  productName: string;
  images?: string[];
  description?: string;
  brand?: string;
  reviews?: Review[];
  aggregateRating?: AggregateRating;
  offers?: Offers | Offers[];
  aggregateOffer?: AggregateOffer;
  sku?: string;
  gtin8?: string;
  gtin13?: string;
  gtin14?: string;
  mpn?: string;
}
export declare const buildReviewRating: (rating: ReviewRating) => string;
export declare const buildAuthor: (author: Author) => string;
export declare const buildPublisher: (publisher: Publisher) => string;
declare const ProductJsonLd: FC<ProductJsonLdProps>;
export default ProductJsonLd;
