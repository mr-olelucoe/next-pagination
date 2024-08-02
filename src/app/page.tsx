import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pageContainer">
      <h1 className="text-xl font-bold">HomePage</h1>
      <div className="flex flex-col gap-5 mt-10">
        <Link className="underline" href={"/shop"}>Shop</Link>
        <Link className="underline ps-3" href={"/shop/1"}>Category 1</Link>
        <Link className="underline ps-3" href={"/shop/2"}>Category 2</Link>

      </div>
    </div>
  );
}
