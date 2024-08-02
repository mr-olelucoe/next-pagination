import { ProductList } from "@/components/productList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props{
  params: {category: string}
  searchParams: {page: string | undefined }
}
export default function CategoryPage({params, searchParams}: Props) {
  
  
  
  return (
    <div className="pageContainer">
      <Link href={"/"}>
      <Button>Go Home Page</Button>
      </Link>
      <div className="pt-10">

        <ProductList categoryId={params.category} page={searchParams.page}/>
      </div>
    </div>
  );
}
