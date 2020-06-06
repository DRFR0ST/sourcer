import { ITheme, TThemeColor } from "../types";
import { getContrastYIQ, invertColor, lightenColor, hexToRgb } from "./colorMethods";

class DynamicTheme implements ITheme {

    palette = {
        primary: new ThemeColor("#579ed9"),
        background: new ThemeColor("#d8e6f2")
    }

    boundaries = {
        width: "1240px",
        padding: "24px",
        rightOffset: getRightOffset(1240, 24) + "px"
    }

    shadow = [
        "0",
        "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    ]
    
}

const getRightOffset = (maxWidth: number, defaultOffset: number) => {
    if(maxWidth >= window.innerWidth) return defaultOffset;
    return (((window.innerWidth - maxWidth)- 16)/2) || 24;
}


class ThemeColor implements TThemeColor {
    public main: string;
 
    constructor(baseColor: string) {
        this.main = baseColor;   
    }

    get darker() {
        return lightenColor(this.main as unknown as string, 15);
    }

    get lighter() {
        return lightenColor(this.main as unknown as string, 10);
    }

    get inverted() {
        return invertColor(this.main as unknown as string);
    }

    get text() {
        return getContrastYIQ(this.main as unknown as string);
    }
    
    get rgb() {
        return hexToRgb(this.main);
    }
}

export default DynamicTheme;