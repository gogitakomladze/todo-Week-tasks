import styled ,{css}from "styled-components";

export const SCreateDay = styled.div`
display: inline-flex;
background-color: white;
margin-left: 50px;

`

export const SCreateButtom = styled.button`
background-color: black;
color: white;
border: 1px solid white;
border-radius: 10px;

padding: 10px 20px;
margin-left: 20px;

${({ disabled }) =>
    disabled
    ? css`
    box-shadow: 0px 0px 10px 5px #EA5959;
    transition: 1s;
    `
    :""}
`
