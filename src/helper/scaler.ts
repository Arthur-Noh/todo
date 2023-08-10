// 기준 해상도
const standardResolution = {
    width: 1920,
    height: 1080,
};

// 사용자 해상도
const userResolution = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// 반응형 길이
export const scaler = (width: number) => {
    const scale = userResolution.width / standardResolution.width;
    return Math.round(scale);
};

// 반응형 폰트 크기
export const fontScaler = (fontSize: number) => {
    const scale = Math.sqrt(userResolution.height / standardResolution.height);
    return Math.round(scale);
};