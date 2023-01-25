import styled, {keyframes, css} from "styled-components";

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

export const Form = styled.form`
margin-top:15px;
display:flex;
flex-direction:row;

input{
    flex:1;
    border: 1px solid #eee;
    padding:7px 15px;
    border-radius:4px;
    font-size:16px;}`;

const spin = keyframes`
from{
    transform:rotate(0deg);
}to{
    transform:rotate(360deg); 
}`
    
export const SubmitButton = styled.button.attrs(props => ({type:'submit', disabled:props.loading,}))`
background:#2a98f4;
border:0;
padding:2px 12px;
margin-left:4px;
border-radius:4px;
display:flex;
align-items:center;
justify-content: center;

&[disabled]{
    cursor: not-allowed;
    opacity:0.6;
} 
${props=> props.loading && css`svg{animation: ${spin} 2s linear infinite;}`}`;

export const List = styled.ul`
list-style:none;
margin-top:18px;

li{
    padding:15px 0;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center; 

    &+li{
        border-top:1px solid #eee;}

    a{
        color:#599ec2;
        text-decoration:none;
        cursor:pointer;}}`;