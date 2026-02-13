export interface NavLink {
  label: string;
  href: string;
}

export interface Property {
  id: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Service {
  title: string;
  description: string;
  href: string;
}

export interface ResourceTopic {
  title: string;
  description: string;
  href: string;
}
