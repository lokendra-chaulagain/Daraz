export interface SearchTag {
  id: string;
  name: string;
  createdAt: Date;
}

export interface Banner {
  id: string;
  image: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
