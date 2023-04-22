export interface SearchTag {
  _id: string;
  name: string;
  createdAt: Date;
}

export interface Banner {
  _id: string;
  image: string;
  author: string;
  activeStatus: string;
  createdAt: string;
  updatedAtAt: string;
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
