import { COUNT_ITEMS_ON_PAGE, DOMAIN_API } from "./const";
import { ICategoryType, IProductsResponse } from "./types";

export const getProductList = async (
    categoryId: string,
    page: string
): Promise<IProductsResponse | undefined | null> => {
    const apiPage = Number(page) ? Number(page) : "1";
    const apiCategory = categoryId ? `&category=${categoryId}` : "";

    const query = `?page=${apiPage}&size=${COUNT_ITEMS_ON_PAGE}${apiCategory}`;

    const res = await fetch(`${DOMAIN_API}products/${query}`, {
        next: { revalidate: 0 },
    });
    const r = res.json();
    if (!res.ok) {
        return undefined;
    }
    return r;
};

export const getCategoriesList = async (): Promise<
    ICategoryType[] | undefined | null
> => {
    const res = await fetch(`${DOMAIN_API}categories`, {
        next: { revalidate: 600 },
    });
    const r = res.json();
    if (!res.ok) {
        return undefined;
    }
    return r;
};
