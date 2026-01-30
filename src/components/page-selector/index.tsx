import "./index.scss"
import { ROUTES } from "../../shared/constants/routes";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pathToRouteMap } from "../../shared/utils/router";

export const PageSelector = () => {
    const scrollThreshold = 20
    const [isScrolling, setIsScrolling] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const totalPages = Object.values(ROUTES)
    const currentRoute = pathToRouteMap(location.pathname)
    const currentPageIndex = totalPages.indexOf(currentRoute);

    const navigateToPage = useCallback((index: number) => {
        if (index < 0 || index >= totalPages.length || isScrolling) return;

        setIsScrolling(true);
        const targetPage = totalPages[index];
        navigate(targetPage);

        setTimeout(() => setIsScrolling(false), 800);
    }, [])

    const handleWheel = useCallback((e: WheelEvent) => {
        if (isScrolling) return;

        e.preventDefault();
        const delta = Math.abs(e.deltaY) > scrollThreshold ? e.deltaY : 0;

        if (delta > 0) {
            navigateToPage(Math.max(currentPageIndex - 1, 0));
        } else if (delta < 0) {
            navigateToPage(Math.min(currentPageIndex + 1, totalPages.length - 1));
        }
    }, [currentPageIndex, totalPages.length, navigateToPage, isScrolling, scrollThreshold]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        e.preventDefault();

        if (e.key === "ArrowDown") {
            navigateToPage(Math.min(currentPageIndex + 1, totalPages.length - 1));
        } else if (e.key === "ArrowUp") {
            navigateToPage(Math.max(currentPageIndex - 1, 0))
        }

    }, [currentPageIndex, totalPages.length, navigateToPage])

    useEffect(() => {
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleWheel]);

    return (
        <div className="page-selector">
            {
                totalPages.map((_, index) =>
                    <div
                        key={index}
                        onClick={() => navigateToPage(index)}
                        className={`page-locator ${index === currentPageIndex ? "active" : ""}`}
                    ></div>
                )
            }
        </div>
    )
}