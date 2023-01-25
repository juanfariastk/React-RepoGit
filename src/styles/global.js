import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;}
html, body, #root{
    min-height:100%;}
body{
    -webkit-font-smothig:antialiased !important;
    background:#8eb7e6;}
body,input,button{
    color:#222;
    font-size:14px;
    font-family:Helvetica, arial;}
button{
    cursor:pointer;}`;