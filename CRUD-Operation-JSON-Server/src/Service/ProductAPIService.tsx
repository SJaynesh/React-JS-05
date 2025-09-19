class ProductAPIService {
    productURL: string = "http://localhost:8000/products/";

    // Fetch All Products
    async fetchAllProudct() {
        const res = await fetch(this.productURL);
        const data = await res.json();
        return data;
    }

    // Add Products
    async addProductData(body: any) {
        const res = await fetch(this.productURL, {
            method: "POST",
            body: JSON.stringify(body)
        });

        return res.ok;
    }

    // Fetch Single Product
    async fetchSingleProduct(id: string) {
        const res = await fetch(this.productURL + id);

        const data = await res.json()

        console.log(data);

        return data;
    }

    // Update Product
    async updateProduct(id: string, body: any) {
        const res = await fetch(this.productURL + id, { method: "PATCH", body: JSON.stringify(body) });
        return res.ok;
    }

    // Delete Product
    async deleteProduct(id: string) {
        const res = await fetch(this.productURL + id, {
            method: "DELETE"
        });

        return res.ok;
    }
}

export interface ProductType {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    stock: number;
    description: string;
}

export const productAPIService = new ProductAPIService();