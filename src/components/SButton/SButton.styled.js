import styled, {css} from "styled-components";

export const SButton = styled.button`
 cursor: pointer;
padding: 12px;
border: solid 1px black;
background-color: transparent;
border-radius: 12px;
margin-bottom: 20px;

${({ isactive }) =>
    isactive
    ? css`
       color: white;
       background-color: black;
       transition: 1s;
    `
    :""}

`