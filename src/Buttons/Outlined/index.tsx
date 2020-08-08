import React from 'react';

import { StyledButton, StyledLabel } from './styled';
import { Props } from './interfaces';

const Button = ({ onPress, label, qaTest, disabled, color }: Props): React.ReactElement => (
    <StyledButton onPress={onPress} disabled={disabled} color={color} testID={qaTest}>
        <StyledLabel color={color}>{label}</StyledLabel>
    </StyledButton>
);

export default Button;
