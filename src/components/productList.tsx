"use server";
import React from "react";
import { IProductLocalType, IProductsResponse } from "../lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ProductListItems } from "./productListItems";
import { Pagination } from "./pagination";
import { ProductCategoryFilter } from "./productCategoryFilter";

const COUNT_ITEMS_ON_PAGE = 9;

interface Props {
  categoryId?: string;
  page?: string | undefined;
}
export const ProductList = async ({ categoryId = "", page = "1" }: Props) => {
  const apiPage = Number(page) ? Number(page) : "1";
  const apiCategory = categoryId ? `&category=${categoryId}` : "";

  const getCategoriesList = async (): Promise<
    IProductsResponse | undefined | null
  > => {
    const query = `?page=${apiPage}&size=${COUNT_ITEMS_ON_PAGE}${apiCategory}`;
    console.log(query);
    const res = await fetch(`http://localhost:3000/api/products/${query}`, {
      next: { revalidate: 0 },
    });
    const r = await res.json();
    if (!res.ok) {
      return undefined;
    }
    return r;
  };

  const products = await getCategoriesList();

  return (
    <div>
      {products && (
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-3">
            <p className="">total items: {products.totalItems}</p>
            <p className="">total pages: {products.totalPages}</p>
          </div>
          <div className="col-span-3">
            <ProductCategoryFilter selectedCategory={categoryId} />
          </div>
          {products.data.map((item) => {
            return (
              <ProductListItems
                key={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
              />
            );
          })}
          <div className="col-span-3 py-10 mb-5 flex justify-center items-center">
            <Pagination
              currentPage={Number(apiPage)}
              totalPages={products.totalPages}
              categoryId={categoryId}
            />
          </div>
        </div>
      )}
    </div>
  );
};
