import { ITheme, TThemeColor } from "../types";
import { getContrastYIQ, invertColor, lightenColor } from "./colorMethods";

class DynamicTheme implements ITheme {

    palette = {
        primary: new ThemeColor("#9C6"),
        background: new ThemeColor("#FFF")
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
}

export default DynamicTheme;