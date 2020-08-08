import { Dimensions, Platform } from 'react-native';

import { calculateREMforDevice } from './fonts';

const calculatedRem = calculateREMforDevice(Dimensions.get('window'));

const platformFactor = Platform.OS === 'ios' ? 1.1 : 1;

const scale = (size: number) => size * calculatedRem * platformFactor;

const theme = {
    colors: {
        black: '#000000',
        brand40: '#7FFFB6',
        brand50: '#06C263',
        brand60: '#00803F',
        brand70: '#DCDCDC',
        brand80: '#0DD0A1',
        brand90: '#F5FAF7',
        deepTeal: '#003333',
        funGreen: '#00803f',
        juniper: '#648383',
        osloGray: '#8E9498',
        towerGray: '#A9BDBD',
        saltpan: '#f5faf7',
        white: '#FFFFFF',
        grey: '#f2f2f2',
        grey40: 'rgba(0,0,0,0.5)',
        grey30: 'rgba(220, 220, 220, 0.3)',
        grey20: 'rgba(192, 207, 221, 0.2)',
        blueGreyLight: '#F2F5F8',
        baseColor: 'rgba(0, 0, 0, .38)',
        malachite: '#06c263',
        hintOfGreen: '#f2fff8',
        bittersweet: '#FFF8F7',
        gradientArea: {
            g0: '#7FFFB6',
            g80: '#F5FAF7',
        },
        error: '#FF6666',
        transparent: 'transparent',
        disabled: '#104343',
    },
    fonts: {
        regular: (forStyled = true) => {
            return {
                fontFamily: 'Inter',
                fontWeight: 'normal',
            };
        },
        semiBold: (forStyled = true) => {
            if (Platform.OS === 'ios') {
                return {
                    fontFamily: 'Inter',
                    fontWeight: '600',
                };
            }
            return {
                fontFamily: 'Inter',
                fontWeight: '700',
            };
        },
        bold: (forStyled = true) => {
            return {
                fontFamily: 'Inter',
                fontWeight: 'bold',
            };
        },
    },
    shadows: {},
    sizes: {
        s10: `${scale(10)}px`,
        s12: `${scale(12)}px`,
        s13: `${scale(13)}px`,
        s14: `${scale(14)}px`,
        s16: `${scale(16)}px`,
        s18: `${scale(18)}px`,
        s20: `${scale(20)}px`,
        s24: `${scale(24)}px`,
        s26: `${scale(26)}px`,
        s28: `${scale(28)}px`,
        s30: `${scale(30)}px`,
        s32: `${scale(32)}px`,
        s40: `${scale(40)}px`,
        s48: `${scale(48)}px`,
        s52: `${scale(52)}px`,
    },
    scale,
};

export default theme;
