export interface SearchTag {
  _id: string;
  name: string;
  createdAt: Date;
}

export interface Banner {
  _id: string;
  image: string;
  createdAt: Date;
}

export interface Category {
  _id: string;
  name: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Size {
  _id: string;
  name: string;
  createdAt: Date;
}

export interface Color {
  _id: string;
  name: string;
  createdAt: Date;
}

export interface Genre {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: Date;
}

export interface SubCategory {
  _id: string;
  name: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}
