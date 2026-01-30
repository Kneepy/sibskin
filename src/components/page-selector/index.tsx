import "./index.scss"
import { ROUTES } from "../../shared/constants/routes";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pathToRouteMap } from "../../shared/utils/router";

interface Props {
    touchContainer?: React.Ref<HTMLDivElement>
}

export const PageSelector = ({ touchContainer = null }: Props) => {
    const scrollThreshold = 3
    const [isScrolling, setIsScrolling] = useState(false)
    const navigate = useNavigate()
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

    useEffect(() => {
        // if (!containerRef.current) return;

        let touchStartY = 0;
        const touchThreshold = 20;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isScrolling) return;

            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;

            if (Math.abs(diff) > touchThreshold) {
                if (diff > 0) {
                    // Свайп вверх
                    navigateToPage(Math.min(currentPageIndex + 1, totalPages.length - 1));
                } else {
                    // Свайп вниз
                    navigateToPage(Math.max(currentPageIndex - 1, 0));
                }
            }
        };

        const container = document;
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentPageIndex, totalPages, isScrolling, navigateToPage]);

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