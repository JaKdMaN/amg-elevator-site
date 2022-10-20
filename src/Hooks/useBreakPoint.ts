import {useState} from "react";

export const useBreakPoint = (): number => {
    const [width, setWidth] = useState(document.documentElement.clientWidth);

    window.addEventListener("resize", () => {
        setWidth(document.documentElement.clientWidth);
    })
    return width;
};