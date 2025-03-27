import styled from "styled-components";

const LoginDesign = styled.div`
.container{
margin-top: 30%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
form input{
width: 303px;
height: 45px;
border-radius: 5px;
border-style: solid;
border-width: 1px;
border-color: #D4D4D4;
background-color: #FFFFFF;
font-family: Lexend Deca;
font-weight: 400;
font-size: 19.98px;
line-height: 100%;
letter-spacing: 0%;
}
input::placeholder{
color: #DBDBDB;
}
form{
display: flex;
flex-direction: column;
gap: 10px;
}
button{
width: 303px;
height: 45px;
align-items:center;
justify-content:center;
background-color: #52B6FF;
font-family: Lexend Deca;
font-weight: 400;
font-size: 20.98px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
color: #FFFFFF;
}
.link-container{
margin-top:30px;
}
.link{
color: #52B6FF;
font-family: Lexend Deca;
font-weight: 400;
font-size: 13.98px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
text-decoration: underline;
text-decoration-style: solid;
text-decoration-offset: 0%;
text-decoration-thickness: 0%;
}
`

export default LoginDesign