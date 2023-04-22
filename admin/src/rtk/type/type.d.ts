export interface SearchTag {
  _id: string;
  name: string;
  createdAt: string;
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
  status: string;
  author: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubCategory {
  _id: string;
  name: string;
  activeStatus: string;
  author: string;
  slug: string;
  category: object;
  createdAt: string;
  updatedAt: string;
}


export interface MiniCategory {
  _id: string;
  name: string;
  author: string;
  image: string;
  slug: string;
  category: object;
  subCategory: object;
  activeStatus: string;
  createdAt: string;
  updatedAt: string;
}

export interface Size {
  _id: string;
  name: string;
  createdAt: string;
}

export interface Color {
  _id: string;
  name: string;
  createdAt: string;
}

export interface Genre {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
