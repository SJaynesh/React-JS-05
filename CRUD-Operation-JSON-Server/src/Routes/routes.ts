import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/Home/HomePage";
import AddProductPage from "../Pages/Add Products/AddProductPage";
import ViewProudctPage from "../Pages/View Products/ViewProduct";
import ContactPage from "../Pages/Contact/ContactPage";
import { productAPIService } from "../Service/ProductAPIService";
import EditProductPage from "../Pages/Edit Product/EditProductPage";


export const routerNames = {
    home: '/',
    addProduct: '/add-product',
    viewProduct: '/view-products',
    editProduct: '/edit-product/:id',
    contact: '/contact',
}


export const routes = createBrowserRouter([
    {
        path: routerNames.home,
        Component: App,
        children: [
            {
                index: true,
                loader: async () => {
                    return await productAPIService.fetchAllProudct();
                },
                Component: HomePage,
            },
            {
                path: routerNames.addProduct,
                Component: AddProductPage,
            },
            {
                path: routerNames.viewProduct,
                loader: async () => {
                    return await productAPIService.fetchAllProudct();
                },
                Component: ViewProudctPage,
            },
            {
                path: routerNames.editProduct,
                loader: async ({ params }) => {
                    console.log(params.id);
                    return await productAPIService.fetchSingleProduct(params.id as string);
                },
                Component: EditProductPage,
            },
            {
                path: routerNames.contact,
                Component: ContactPage,
            }
        ]
    }
]);