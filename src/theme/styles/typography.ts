import { fontScaler } from '../../helper/scaler';

// 폰트 정의
export interface ITypography {
    weight: {
        regular: string;
        medium: string;
        bold: string;
        extraBold: string;
    };
    size: {
        s1: number;
        s2: number;
        s3: number;
        m1: number;
        m2: number;
        m3: number;
        l1: number;
        l2: number;
        l3: number;
    };
}

export const typography: ITypography = {
    weight: {
        regular: '400',
        medium: '500',
        bold: '600',
        extraBold: '700',
    },
    size: {
        s1: fontScaler(9),
        s2: fontScaler(11),
        s3: fontScaler(13),
        m1: fontScaler(15),
        m2: fontScaler(17),
        m3: fontScaler(19),
        l1: fontScaler(21),
        l2: fontScaler(23),
        l3: fontScaler(25),
    },
};