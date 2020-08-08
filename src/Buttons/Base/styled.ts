import styled from 'styled-components/native';

interface StyledButton {
    color?: string;
    theme: unknown;
    disabled?: boolean;
    disabledColor?: string;
}

interface StyledLabelInterface {
    color?: string;
}

export const StyledButton = styled.TouchableOpacity<StyledButton>`
    align-items: center;
    background-color: ${({ theme, color, disabled, disabledColor }: any) =>
        disabled ? disabledColor || theme.colors.grey : color || theme.colors.brand50};
    border-radius: 8px;
    padding: 16px;
    width: 100%;
`;

export const StyledLabel = styled.Text<StyledLabelInterface>`
    color: ${({ theme }: { theme: any }) => theme.colors.white};
    font-style: normal;
    font-size: ${({ theme }: { theme: any }) => theme.sizes.s16};
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    ${({ theme }: { theme: any }) => theme.fonts.semiBold}
`;
