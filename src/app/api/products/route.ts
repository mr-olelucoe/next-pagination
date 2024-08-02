const data = Array.from(Array(50)).map((item, index) => {
  return {
    id: index,
    name: `product-${index + 1}`,
    category: index % 3 ? "1" : "2",
    price: Math.floor(Math.random() * 100),
  };
});

const awaitTimeout = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageParam = Number(searchParams.get("page")) ?? 1;
  const sizeParam = Number(searchParams.get("size")) ?? 5;
  const categoryParam = searchParams.get("category");

  await awaitTimeout(100);

  const response = categoryParam
    ? data.filter((item) => item.category.trim() === categoryParam.trim())
    : data;

  const offset = (pageParam - 1) * sizeParam;
  const totalPages = Math.ceil(response.length / sizeParam);

  return Response.json(
    {
      totalPages,
      totalItems: response.length,
      data: response.slice(offset, offset + sizeParam),
    },
    { status: 200 }
  );
}
