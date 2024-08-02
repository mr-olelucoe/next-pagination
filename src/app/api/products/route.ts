import dbClient from "@/lib/db-client";
import { tree } from "next/dist/build/templates/app-page";

// const data = Array.from(Array(50)).map((item, index) => {
//     return {
//         id: index,
//         name: `product-${index + 1}`,
//         category: index % 3 ? "1" : "2",
//         price: Math.floor(Math.random() * 100),
//     };
// });

// const awaitTimeout = (delay: number) =>
//     new Promise((resolve) => setTimeout(resolve, delay));

// /**
//  * get products
//  */
// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url);
//     const pageParam = Number(searchParams.get("page")) ?? 1;
//     const sizeParam = Number(searchParams.get("size")) ?? 5;
//     const categoryParam = searchParams.get("category");

//     await awaitTimeout(100);

//     const response = categoryParam
//         ? data.filter((item) => item.category.trim() === categoryParam.trim())
//         : data;

//     const offset = (pageParam - 1) * sizeParam;
//     const totalPages = Math.ceil(response.length / sizeParam);

//     return Response.json(
//         {
//             totalPages,
//             totalItems: response.length,
//             data: response.slice(offset, offset + sizeParam),
//         },
//         { status: 200 }
//     );
// }

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const createData = async (categoryCount: number, productCount: number) => {
    await dbClient.product.deleteMany();
    await dbClient.category.deleteMany();

    for (let i = 1; i <= categoryCount; i++) {
        await dbClient.category.create({
            data: {
                name: `Category - ${i}`,
            },
        });
    }

    const categories = await dbClient.category.findMany();

    for (let i = 1; i <= productCount; i++) {
        await dbClient.product.create({
            data: {
                name: `Product - ${i}`,
                categoryId:
                    categories[randomIntFromInterval(0, categoryCount - 1)].id,
                description: `Description - ${i}`,
                price: Math.floor(Math.random() * 1000),
            },
        });
    }
};

/**
 * create started data
 */
export async function POST(request: Request) {
    const body = await request.json();
    const categoryCount = body?.categoryCount ?? 5;
    const productCount = body?.productCount ?? 50;

    await createData(categoryCount, productCount);
    const res = await dbClient.product.findMany({
        include: { category: true },
    });
    return Response.json(res, { status: 200 });
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const pageParam = Number(searchParams.get("page")) ?? 1;
    const sizeParam = Number(searchParams.get("size")) ?? 5;
    const categoryParam = searchParams.get("category");
    // console.log(searchParams);

    // const response = categoryParam
    //     ? data.filter((item) => item.category.trim() === categoryParam.trim())
    //     : data;

    const offset = (pageParam - 1) * sizeParam;
    // const totalPages = Math.ceil(response.length / sizeParam);

    const where = { categoryId: categoryParam ? categoryParam : { not: "" } };
    const count = await dbClient.product.count({
        where,
    });
    const res = await dbClient.product.findMany({
        skip: offset,
        take: sizeParam,
        where,
        include: { category: true },
    });

    const totalPages = Math.ceil(count / sizeParam);

    return Response.json(
        {
            totalPages,
            totalItems: count,
            data: res,
        },
        { status: 200 }
    );
    return Response.json(res, { status: 200 });
}
