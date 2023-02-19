import { Color, Spacement, Font } from './themes/components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: Color;
        spacement: Spacement;
        font: Font;
    }
}