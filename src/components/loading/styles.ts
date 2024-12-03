import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: #808080;
`;

export const LoadIndicator = styled.ActivityIndicator
    .attrs(() => ({
        color: '#fff'

    }))``;