import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

interface Props {
    category: string;
    name: string;
    price: number;
}
export const ProductListItems = ({ category, name, price }: Props) => {
    return (
        <Card className="p-6">
            <CardHeader className="p-0">
                {/* <CardDescription>Category - {category}</CardDescription> */}
                <CardDescription>{category}</CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex justify-center items-center h-[100px] bg-gray-300 my-5 rounded-xl">
                <CardTitle className="p-0">{name}</CardTitle>
            </CardContent>
            <CardFooter className="p-0 block">
                <p className="text-2xl text-center">${price}</p>
            </CardFooter>
        </Card>
    );
};
