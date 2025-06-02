import styled from "styled-components/native";

declare module 'styled-components/native' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secondary: string,
            tertiary: string,
        }
    }
}