import styled from "styled-components";

export const SRenderHeader = styled.div`
background-color: wheat;
margin-left: 10px;
margin-top: 10px;
text-align: center;
`

export const SRenderDay = styled.div`
background-color: wheat;
display: grid;
grid-template-columns: auto auto;


input{
    margin-top: 10px;
    margin-left: 10px;
    padding: 5px 5px;
    background-color: white;
    width: 180px;
    border: 1px solid black;


}
button{
    background-color: black;
    color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 6px 2px;
    margin-left: 5px;
    margin-top: 8px;

    cursor: pointer;
}
button:hover{
    box-shadow: 0px 0px 10px 2px black;
    transition: 0.2s;
}
`