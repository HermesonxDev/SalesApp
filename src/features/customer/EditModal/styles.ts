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
    height: 75%;
    width: 90%;
`;

export const Fields = styled.View`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Buttons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const SwitchField = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    height: 5%;
`;