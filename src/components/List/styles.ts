import styled from "styled-components/native";

interface IMarkerProps {
    backgroundColor: string
}

export const Container = styled.View`
    width: 90%;
    height: 80%;
    overflow: hidden;
`;

export const Content = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 5px;
    border-radius: 5px;
    align-items: center;
    background-color:rgb(219, 219, 219);
    overflow: hidden;
`;

export const Marker = styled.View<IMarkerProps>`
    background-color: ${({ backgroundColor }: IMarkerProps ) => backgroundColor};
    height: 100%;
    width: 10px;
    border-radius: 5px;
    margin-left: -9px;
`;

export const Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
    width: 70%;
`;

export const Actions = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
    width: 30%;
`;