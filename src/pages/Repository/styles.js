import styled from "styled-components";

export const Loading = styled.div`
color:#fff;
font-size:30px;
font-size:bold;
display:flex;
justify-content:center;
align-items:center;
height:100vh;`;

export const Container = styled.div`
max-width:700px;
background:#fff;
border-radius:4px;
box-shadow:0 0 20px rgba(0,0,0,0.1);
padding:30px;
margin: 80px auto;

h1{
    font-size:20px;
    display:flex;
    flex-direction:row;
    align-items:center;
    
    svg{
        margin-right:5px}}

`;

export const Owner = styled.header`
display:flex;
flex-direction:column;
align-items:center;

img{
    width:120px;
    border-radius:50%;
    margin=top:20px}
h1{
    font-size:25px;
    margin-top:10px;}
p{
    margin-top:5px;
    font-size:15px;
    color:#666;
    line-height:1.4;
    text-align:center;
    max-width:400px}
a{
    color:#599ec2;
    font-size:15px;
    text-decoration:none;
    margin-bottom:15px}
`; 

export const IssuesList = styled.ul`
padding-top:30px;
margin-top:30px;
border-top:1px solid #eee;
list-style:none;

li{
    display:flex;
    padding:15px 10px;
    border: 1px solid #eee;
    border-radius:4px;
    & + li {
        margin-top:10px; }
    img{
        width:35px;
        height:35px;
        border-radius:50%;
        border:2px solid #eee;}
    div{
        flex:1;
        margin-left:15px;
        strong{
            font-size:16px}
            a{
                text-decoration:none;
                color:#333;
                &:hover{
                    color:#7159ci;}
                }
            }
        p{
            margin-top:5px;
            font-size:12px
            color:#999;}}
    `;