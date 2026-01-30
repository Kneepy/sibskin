import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import { PageSelector } from "../../components/page-selector";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { ROUTES } from "../constants/routes";
import { pathToRouteMap } from "../utils/router";

export const MainLayout = () => {
    const location = useLocation();
    const previousRouteRef = useRef<ROUTES | null>(null);
    const touchContainerRef = useRef<HTMLDivElement>(null);

    const currentRoute = pathToRouteMap(location.pathname);

    const direction = useMemo(() => {
        const previousRoute = previousRouteRef.current;

        if (previousRoute !== null && previousRoute !== currentRoute) {
            const allRoutes = Object.values(ROUTES);
            const indexFrom = allRoutes.indexOf(previousRoute);
            const indexTo = allRoutes.indexOf(currentRoute);
            return indexTo > indexFrom ? 1 : -1;
        }

        previousRouteRef.current = currentRoute;
        return 1;
    }, [currentRoute]);

    return (
        <div className="page">
            <Header />
            <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                    initial={{ opacity: 0, y: direction * 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            duration: .8,
                        },
                    }}
                    key={location.pathname}
                    style={{ flex: 1, position: "relative" }}
                >
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, position: "absolute", width: "100%", height: "100%" }}>
                        <Outlet />
                    </div>
                </motion.div>
            </AnimatePresence>
            <PageSelector />
        </div>
    )
}