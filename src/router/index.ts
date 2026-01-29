import {createBrowserRouter} from "react-router-dom";
import { Products } from "../pages/products";
import { MainLayout } from "../shared/layouts/main-layout";
import { AboutUs } from "../pages/about-us";
import { RootRedirect } from "../components/routing/root-redirect";
import { ROUTES } from "../shared/constants/routes";
import { Feedback } from "../pages/feedback";
import { Buy } from "../pages/buy";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: RootRedirect,
            },
            {
                path: ROUTES.PRODUCTS,
                Component: Products,
            },
            {
                path: ROUTES.ABOUT_US,
                Component: AboutUs
            },
            {
                path: ROUTES.FEEDBACK,
                Component: Feedback
            },
            {
                path: ROUTES.BUY,
                Component: Buy
            }
        ]
    }
])