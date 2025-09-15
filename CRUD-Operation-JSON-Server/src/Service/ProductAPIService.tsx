class ProductAPIService {
    productURL: string = "http://localhost:8000/products";

    async fetchAllProudct() {
        const res = await fetch(this.productURL);
        const data = await res.json();
        return data;
    }
}

export interface ProductType {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    stock: number;
    description: string;
}

export const productAPIService = new ProductAPIService();