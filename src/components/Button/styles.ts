import styled from "styled-components/native";

interface IContainerProps {
    width?: string,
    height?: string,
    backgroundColor?: string
}

export const Container = styled.TouchableOpacity<IContainerProps>`
    width: ${({ width }: IContainerProps) => width || '100%'};
    height: ${({ height }: IContainerProps) => height || '40px'};
    background-color: ${({ backgroundColor }:IContainerProps ) => backgroundColor || '#E15610'};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 20px;
`;