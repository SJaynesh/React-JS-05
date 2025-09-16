class ProductAPIService {
    productURL: string = "http://localhost:8000/products";

    async fetchAllProudct() {
        const res = await fetch(this.productURL);
        const data = await res.json();
        return data;
    }

    async addProductData(body: any) {
        const res = await fetch(this.productURL, {
            method: "POST",
            body: JSON.stringify(body)
        });

        return res.ok;
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