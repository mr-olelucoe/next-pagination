import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface Props {
  selectedCategory?: string;
}
export const ProductCategoryFilter = ({ selectedCategory = "" }: Props) => {
  return (
    <div className={"flex gap-2"}>
      <Link href={"/shop"}>
        <Button variant={!selectedCategory ? "default" : "outline"}>All</Button>
      </Link>
      <Link href={"/shop/1"}>
        <Button variant={selectedCategory === "1" ? "default" : "outline"}>
          Category - 1
        </Button>
      </Link>
      <Link href={"/shop/2"}>
        <Button variant={selectedCategory === "2" ? "default" : "outline"}>
          Category - 2
        </Button>
      </Link>
      <Link href={"/shop/3"}>
        <Button variant={selectedCategory === "3" ? "default" : "outline"}>
          Category - 3
        </Button>
      </Link>
    </div>
  );
};
