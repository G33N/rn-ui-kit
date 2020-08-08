import styled from 'styled-components/native';
import { StyledButton as StyledButtonBase } from '../Base/styled';

interface StyledLabelInterface {
    color?: string;
    disabled?: boolean;
    theme: any;
}

export const StyledButton = styled(StyledButtonBase)`
    align-items: center;
    background-color: ${({ theme, color, disabled }) =>
        disabled ? theme.colors.brand70 : color || theme.colors.brand50};
    border-radius: 8px;
    padding: 16px;
`;

export const StyledLabel = styled.Text<StyledLabelInterface>`
    color: ${({ theme, color, disabled }) => (disabled ? theme.colors.white : color || theme.colors.brand50)};
    font-style: normal;
    font-size: ${({ theme }: { theme: any }) => theme.sizes.s16};
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    ${({ theme }: { theme: any }) => theme.fonts.bold}
`;
