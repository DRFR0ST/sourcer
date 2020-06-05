declare module 'classnames';

export interface ITheme {
    palette: {
        primary: TThemeColor,
        background: TThemeColor
    }

    boundaries: {
        width: string,
    }
}

export type TThemeColor = {
    main: string;
    darker: string;
    lighter: string;
    rgb: { r: number, g: number, b: number } | null
    text: string;
    inverted: string;
}
