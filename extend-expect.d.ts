declare namespace jest {
    interface Matchers<R> {
        toHaveStyleRule: import('jest-styled-components/native').jest.Matchers<R>['toHaveStyleRule'];
    }
}
