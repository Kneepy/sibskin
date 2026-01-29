import "./index.scss"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../shared/constants/routes";

export const Header = () => {

    function getPageBuyRoute(route: ROUTES): string {
        switch (route) {
            case ROUTES.ABOUT_US:
                return "О бренде"
            case ROUTES.PRODUCTS:
                return "Продукция"
            case ROUTES.BUY:
                return "Где купить"
            case ROUTES.FEEDBACK:
                return "Обратная связь"
        }
    }

    return (
        <header>
            <div className="logo">
                SIBSKIN
            </div>
            <ul className="menu">
                {
                    Object.values(ROUTES).map((route, i) =>
                        <NavLink
                            to={{ pathname: route }}
                            className={({ isActive }) => isActive ? "active menu__item" : "menu__item"}
                        >{ getPageBuyRoute(route) }</NavLink>
                    )
                }
            </ul>

        </header>
    )
}