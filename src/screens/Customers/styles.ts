import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const Grid = styled.View`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 80%;
    gap: 30px;
`;

export const Body = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 5px;
    border-radius: 5px;
    align-items: center;
    background-color:rgb(219, 219, 219);
`;

export const Actions = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
    width: 50%;
`;

export const Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
    width: 50%;
`;