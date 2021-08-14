import { Product } from "./Product";

export class StockDetail{
    idStockDetail : number;
    name:string;
    quantiteMin: number;
    quantiteMax: number;
    quantiteInstan: number;
    fabrication:  Date;
    dexpiration :  Date;
    produit: Product
}