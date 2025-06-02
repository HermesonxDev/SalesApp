import styled from "styled-components/native";

interface IContainerProps {
    padding?: string,
}

export const Container = styled.Text<IContainerProps>`
    padding: ${({ padding }: IContainerProps) => padding || '0'};
    font-weight: bold;
`;