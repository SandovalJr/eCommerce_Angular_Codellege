export interface Brandsinterface {
  id: number;
  brand: string;
}

export interface DepartamentsInterface {
  id: number;
  department: string;
}

export interface ProductsInterface {
    id: number;
    brand: number;
    department: number;
    model: string;
    description: Array<string>;
    rating: number;
    price: number;
    msi: boolean;
    meses?: Array<number>;
    img: string;
}
