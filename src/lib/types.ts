export interface IProductLocalType {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface IProductsResponse {
  data: IProductLocalType[];
  totalPages: number;
  totalItems?: number;
}
