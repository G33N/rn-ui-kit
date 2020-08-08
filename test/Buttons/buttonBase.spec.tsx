import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components/native';
import { ThemeProvider } from 'styled-components/native';

import theme from '../../src/Theme/theme';

import Button from '../../src/Buttons/Base';

const defaultProps = {
    label: 'test label',
    qaTest: 'ButtonTest',
    onPress: jest.fn(),
};

/*  
Should have:
A text with “test label”
A testID with "ButtonTest"
A onPress action.
A disabled state that prevent onPress action
*/
describe('Button base', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const wrapper = renderer
                .create(
                    <ThemeProvider theme={theme}>
                        <Button {...defaultProps} />
                    </ThemeProvider>,
                )
                .toJSON();

            expect(wrapper).toMatchSnapshot();
        });
        it('should match to snapshot - with color prop', () => {
            const wrapper = renderer
                .create(
                    <ThemeProvider theme={theme}>
                        <Button {...defaultProps} color={'#000000'} />
                    </ThemeProvider>,
                )
                .toJSON();

            expect(wrapper).toMatchSnapshot();
        });
        it('should render with a label', () => {
            const wrapper = shallow(<Button {...defaultProps} />);

            expect(wrapper.text()).toBe(defaultProps.label);
        });
        it('should render with a TestID', () => {
            const wrapper = shallow(<Button {...defaultProps} />);

            expect(wrapper.prop('testID')).toBe(defaultProps.qaTest);
        });
    });
    describe('Interaction', () => {
        describe('onPressHandler', () => {
            it('should call onPress', () => {
                const mockOnPress = jest.fn();
                const wrapper = shallow(<Button {...defaultProps} onPress={mockOnPress} />);

                wrapper.simulate('press');

                expect(mockOnPress).toHaveBeenCalledTimes(1);
            });
            it('should not call onPress on disabled', () => {
                const mockOnPress = jest.fn();
                const wrapper = shallow(<Button {...defaultProps} onPress={mockOnPress} disabled={true} />);

                expect(wrapper.prop('disabled')).toBe(true);
            });
        });
    });
});
