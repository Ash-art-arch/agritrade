// products.d.ts
declare module '../products.js' {
    export const allProducts: Product[];
    // Define type for Product if needed
    export interface Product {
      title: string;
      price: number;
      imgSrc: string;
      category: string;
    }
  }
  