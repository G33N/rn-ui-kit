import styled from 'styled-components/native';
import { StyledButton as StyledButtonBase } from '../Base/styled';

interface StyledLabelInterface {
    color?: string;
    theme: any;
    disabled?: boolean;
}

export const StyledButton = styled(StyledButtonBase)`
    align-items: center;
    background-color: transparent;
    padding: 18px 0;
`;

export const StyledLabel = styled.Text<StyledLabelInterface>`
    color: ${({ theme, color, disabled }) => (disabled ? theme.colors.brand70 : color || theme.colors.brand50)};
    font-style: normal;
    font-size: ${({ theme }: { theme: any }) => theme.sizes.s16};
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    ${({ theme }: { theme: any }) => theme.fonts.semiBold}
`;
