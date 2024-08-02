import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  totalPages: number;
  currentPage: number;
  categoryId?: string;
}
export const Pagination = ({ currentPage, totalPages, categoryId }: Props) => {
  let buttons = [];
  if (totalPages < 3) {
    buttons = [...Array.from({ length: totalPages }, (_, i) => i + 1)];
  } else if (currentPage === 1) buttons = [...[1, 2, 3]];
  else if (currentPage === totalPages)
    buttons = [...[totalPages - 2, totalPages - 1, totalPages]];
  else {
    buttons = [currentPage - 1, currentPage, currentPage + 1];
  }

  const getHref = (page: number) => {
    return `/shop/${categoryId ? categoryId : ""}?page=${page}`;
  };

  const getPrevHref = () => {
    return `/shop/${categoryId ? categoryId : ""}?page=${currentPage - 1}`;
  };

  const getNextHref = () => {
    return `/shop/${categoryId ? categoryId : ""}?page=${currentPage + 1}`;
  };

  return (
    <div className="flex gap-4">
      {totalPages ? (
        <>
          {totalPages > 3 && (
            <Button disabled={currentPage === 1} variant={"link"}>
              <Link href={getPrevHref()}>
                <ArrowLeft />
              </Link>
            </Button>
          )}

          {buttons.map((item) => {
            return (
              <Link key={item} href={getHref(item)}>
                <Button variant={currentPage === item ? "default" : "outline"}>
                  {item}
                </Button>
              </Link>
            );
          })}
          {totalPages > 3 && (
            <Button disabled={currentPage === totalPages} variant={"link"}>
              <Link href={getNextHref()}>
                <ArrowRight />
              </Link>
            </Button>
          )}
        </>
      ) : null}
    </div>
  );
};
