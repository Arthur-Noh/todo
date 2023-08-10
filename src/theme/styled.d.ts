import 'styled-components';
import { ITypography } from './styles/typography';
import { IWhite, IBlack, IGray } from './styles/palettes';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: IWhite,
            black: IBlack,
            gray: IGray,
        };
        base: {
            smallPadding: number,
            mediumPadding: number,
            largePadding: number,
            smallRadius: number,
            mediumRadius: number,
            largeRadius: number,
        };
        typography: ITypography;
    }
}
