module.exports = {
    preset: 'react-native',
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
        '^.+\\.tsx?$': 'ts-jest',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/styled.ts', '!src/index.ts', '!src/Theme/*'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: './test-results/',
                outputName: 'junit.xml',
            },
        ],
    ],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
        },
    },
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>'],
    modulePathIgnorePatterns: ['<rootDir>/src/Theme', '<rootDir>/test/setup.js'],
    setupFiles: ['./test/setup.js'],
};
