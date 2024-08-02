// export interface IProductLocalType {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
// }

// export interface IProductsResponse {
//   data: IProductLocalType[];
//   totalPages: number;
//   totalItems?: number;
// }

export interface ICategoryType {
    id: string;
    name: string;
}

export interface IProductType {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: ICategoryType;
}

export interface IProductsResponse {
    data: IProductType[];
    totalPages: number;
    totalItems?: number;
}
