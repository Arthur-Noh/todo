// 색상 정의
export interface IWhite {
    base: string;
}

export interface IBlack {
    base: string;
}

export interface IGray {
    base: string;
}

export const white: IWhite = {
    base: '#FFFFFF',
};

export const black: IBlack = {
    base: '#000000',
};

export const gray: IGray = {
    base: '#808080',
};

export const colors = {
    white,
    black,
    gray,
};