import React from 'react';

import { StyledButton, StyledLabel } from './styled';
import { Props } from './interfaces';

const Button = ({ onPress, label, qaTest, disabled, color, disabledColor }: Props): React.ReactElement => (
    <StyledButton onPress={onPress} disabled={disabled} testID={qaTest} color={color} disabledColor={disabledColor}>
        <StyledLabel>{label}</StyledLabel>
    </StyledButton>
);

export default Button;
