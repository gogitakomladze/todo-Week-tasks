import styled, {css} from "styled-components";

export const SChooseWeek = styled.div`
border: solid 1px black;
padding: 12px;
margin: 12px;
gap: 12px;
display: inline-flex;
`;


export const SChooseWeekButton = styled.button`
cursor: pointer;
padding: 12px;
border: solid 1px black;
background-color: transparent;
border-radius: 12px;

${({ isactive }) =>
    isactive
    ? css`
       color: white;
       background-color: black;
       transition: 1s;
    `
    :""}
` 
