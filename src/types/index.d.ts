export interface ITheme {
    palette: {
        primary: TThemeColor,
        background: TThemeColor
    }
}

export type TThemeColor = {
    main: string;
    darker: string;
    lighter: string;
}