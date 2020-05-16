import styled from 'styled-components'

export const Dashcontainer=styled.div`
        font-size:40px;
        border:2 px solid ;
        margin-top:20px;
        background-color:rgba(214, 234, 232, 1);
        box-shadow: 5px 3px gray ;
        border-radius:5px 5px;
        text-align:center;
        margin-left:10px;
        cursor:pointer;
        width:270px;
        color:rgb(28, 129, 129);
        border:1px solid black;
        &:hover{
            background-color:rgb(28, 129, 129);
            box-shadow: 5px 3px  rgba(28, 129, 129,.5);
            color:black;
        }
        @media(max-width:768px){
            font-size:20px;
            width:127px;
            text-align:stat;


        }

`