import styled from "styled-components/native";

interface IContainerProps {
    margin?: string
}

export const Container = styled.Text`
    margin: ${({ margin }: IContainerProps) => margin || '0px'};
    font-weight: bold;
    font-size: 32px;
`;