import { scaler } from "../../helper/scaler";

// 그 외 사이즈 정의
export interface IBase {
    // Component Padding
    smallPadding: number;
    mediumPadding: number;
    largePadding: number;
    // Component Radius
    smallRadius: number;
    mediumRadius: number;
    largeRadius: number;
}

export const base: IBase = {
    smallPadding: scaler(8),
    mediumPadding: scaler(16),
    largePadding: scaler(24),
    smallRadius: scaler(4),
    mediumRadius: scaler(8),
    largeRadius: scaler(12),
};

