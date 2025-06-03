import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30%;
    width: 90%;
`;

export const Fields = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Options = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;