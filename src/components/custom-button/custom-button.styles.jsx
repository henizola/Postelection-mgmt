import styled from 'styled-components';

export const CoustomButtonContainer=styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
cursor: pointer;
display: flex;
justify-content: center;

  border: 1px solid black;
color: black;
background:transparent;
&:hover {
    background-color: #fcba03;
    color: black;
    border: 1px solid black;
  }
  margin:auto;
`