import { StockDetail } from "./StockDetail";
import { Image } from "./Image";

export class Product{
    id: number;
    price: number;
    name: string;
    description : string;
    quantity : number;
    category : string;
    stockDetail : StockDetail;
    image? : Image ;
}
