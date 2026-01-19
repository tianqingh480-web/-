
export interface ProductSpec {
  label: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  price: string; // Display price for the grid
  category: string;
  image: string;
  desc: string;
  specs?: ProductSpec[];
}

export interface Farmer {
  id: number;
  name: string;
  location: string;
  avatar: string;
  story: string;
}

export interface Policy {
  id: number;
  title: string;
  date: string;
  summary: string;
}

export interface Feedback {
  id: number;
  user: string;
  rating: number;
  comment: string;
  avatar: string;
}
