import dbClient from "@/lib/db-client";

export async function GET(request: Request) {
    const res = await dbClient.category.findMany();
    return Response.json(res, { status: 200 });
}
