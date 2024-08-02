import { Button } from "@/components/ui/button";
import { getCategoriesList } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const categories = await getCategoriesList();

    return (
        <div className="pageContainer">
            <h1 className="text-xl font-bold">HomePage</h1>
            <div className="flex flex-col gap-5 mt-10">
                <Link className="underline" href={"/shop"}>
                    Shop
                </Link>

                {categories &&
                    categories.map((item) => {
                        return (
                            <Link
                                key={item.id}
                                className="underline ps-3"
                                href={`/shop/${item.id}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
}
