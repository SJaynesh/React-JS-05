import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/Home/HomePage";
import AddProductPage from "../Pages/Add Products/AddProductPage";
import ViewProudctPage from "../Pages/View Products/ViewProduct";
import ContactPage from "../Pages/Contact/ContactPage";
import { productAPIService } from "../Service/ProductAPIService";



export const routes = createBrowserRouter([
    {
        path: "/",
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
                path: 'add-product',
                Component: AddProductPage,
            },
            {
                path: 'view-products',
                loader: async () => {
                    return await productAPIService.fetchAllProudct();
                },
                Component: ViewProudctPage,
            },
            {
                path: 'contact',
                Component: ContactPage,
            }
        ]
    }
]);