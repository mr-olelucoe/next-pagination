"use server";
import React from "react";
import { ProductListItems } from "./productListItems";
import { Pagination } from "./pagination";
import { ProductCategoryFilter } from "./productCategoryFilter";
import { getCategoriesList, getProductList } from "@/lib/services";

interface Props {
    categoryId?: string;
    page?: string | undefined;
}
export const ProductList = async ({ categoryId = "", page = "1" }: Props) => {
    const apiPage = Number(page) ? page : "1";
    const apiCategory = categoryId ? `&category=${categoryId}` : "";

    const products = await getProductList(categoryId, apiPage);
    const categories = await getCategoriesList();

    return (
        <div>
            {products && (
                <div className="grid grid-cols-3 gap-10">
                    <div className="col-span-3">
                        <p className="">total items: {products.totalItems}</p>
                        <p className="">total pages: {products.totalPages}</p>
                    </div>
                    <div className="col-span-3">
                        <ProductCategoryFilter
                            selectedCategory={categoryId}
                            categories={categories}
                        />
                    </div>
                    {products.data.map((item) => {
                        return (
                            <ProductListItems
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                category={item.category.name}
                            />
                        );
                    })}
                    <div className="col-span-3 py-10 mb-5 flex justify-center items-center">
                        <Pagination
                            totalItems={products.totalItems}
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
