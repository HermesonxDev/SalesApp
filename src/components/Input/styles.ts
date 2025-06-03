import styled from "styled-components/native";

interface IContainerProps {
    width?: string,
    height?: string,
    backgroundColor?: string
}
export const Container = styled.TextInput<IContainerProps>`
    width: ${({ width }: IContainerProps) => width || '100%'};
    height: ${({ height }: IContainerProps) => height || 'unset'};
    background-color: ${({ backgroundColor }: IContainerProps) => backgroundColor || 'white'};
    border-width: 1px;
    border-radius: 5px;
    padding: 10px;
`;