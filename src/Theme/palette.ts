export interface Palette {
    p6: string;
    p5: string;
    p4: string;
    p3: string;
    p2: string;
    p1: string;
    p0: string;
    s6: string;
    s5: string;
    s4: string;
    s3: string;
    s2: string;
    s1: string;
    s0: string;
    t6: string;
    t5: string;
    t4: string;
    t3: string;
    t2: string;
    t1: string;
    t0: string;
    f6: string;
    f5: string;
    f4: string;
    f3: string;
    f2: string;
    f1: string;
    f0: string;
    b6: string;
    b5: string;
    b4: string;
    b3: string;
    b2: string;
    b1: string;
    info: string;
    success: string;
    warning: string;
    error: string;
}

export type PaletteInput = {
    readonly [K in keyof Palette]+?: Palette[K];
};

const createPalette = (palette: PaletteInput): Palette => {
    const {
        p6 = '#00371B',
        p5 = '#004A24',
        p4 = '#00803F',
        p3 = '#06C263',
        p2 = '#2AE386',
        p1 = '#80FFB6',
        p0 = '#E5FFF0',
        s6 = '#081414',
        s5 = '#0A2121',
        s4 = '#092D2D',
        s3 = '#003333',
        s2 = '#104343',
        s1 = '#006666',
        s0 = '#99CCCC',
        t6 = '#BED8D8',
        t5 = '#D9EBEB',
        t4 = '#E0E9E9',
        t3 = '#E4EBE7',
        t2 = '#F5FAF7',
        t1 = '#F2F5F8',
        t0 = '#FFFFFF',
        f6 = '#4A6161',
        f5 = '#5E7B7B',
        f4 = '#9FB0B0',
        f3 = '#C3CCCC',
        f2 = '#DBDEDB',
        f1 = '#E8E8E8',
        f0 = '#F5F5F5',
        b6 = '#0A171C',
        b5 = '#0F2027',
        b4 = '#1A2A30',
        b3 = '#1F333A',
        b2 = '#3F575A',
        b1 = '#424E54',
        info = '#18ABFF',
        success = '#0DD0A1',
        warning = '#FFD426',
        error = '#FF6961',
    } = palette;

    return {
        p6,
        p5,
        p4,
        p3,
        p2,
        p1,
        p0,
        s6,
        s5,
        s4,
        s3,
        s2,
        s1,
        s0,
        t6,
        t5,
        t4,
        t3,
        t2,
        t1,
        t0,
        f6,
        f5,
        f4,
        f3,
        f2,
        f1,
        f0,
        b6,
        b5,
        b4,
        b3,
        b2,
        b1,
        info,
        success,
        warning,
        error,
    };
};

export default createPalette;
