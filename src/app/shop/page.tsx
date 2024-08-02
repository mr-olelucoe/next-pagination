import { ProductList } from "@/components/productList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShopPage({
    searchParams,
}: {
    searchParams: { page: string | undefined };
}) {
    return (
        <div className="pageContainer">
            <Link href={"/"}>
                <Button>Go Home Page</Button>
            </Link>
            <div className="pt-10">
                <ProductList page={searchParams.page} />
            </div>
        </div>
    );
}
