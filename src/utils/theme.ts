import { ITheme, TThemeColor } from "../types";
import { getContrastYIQ, invertColor, lightenColor, hexToRgb } from "./colorMethods";

class DynamicTheme implements ITheme {

    palette = {
        primary: new ThemeColor("#9C6"),
        background: new ThemeColor("#FFF")
    }

    boundaries = {
        width: "1420px",
    }
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