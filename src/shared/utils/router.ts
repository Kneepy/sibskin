import { ROUTES } from "../constants/routes";

export const pathToRouteMap = (path: string): ROUTES => {

    if (path.startsWith('/')) path = path.substring(1);

    const [_, routeValue] = Object.entries(ROUTES).find(([_, v]) => v === path) ?? []

    return Object.values(ROUTES).includes(routeValue as ROUTES)
        ? routeValue as ROUTES
        : ROUTES.PRODUCTS;
}