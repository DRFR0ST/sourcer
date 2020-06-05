import { ITheme, TThemeColor } from "../types";
import { getContrastYIQ, invertColor, lightenColor, hexToRgb } from "./colorMethods";

class DynamicTheme implements ITheme {

    palette = {
        primary: new ThemeColor("#579ed9"),
        background: new ThemeColor("#d8e6f2")
    }

    boundaries = {
        width: "1240px",
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