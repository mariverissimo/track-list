import styled from "styled-components";

const HabitosDesign = styled.div`
.container-geral{
padding-top: 20%;
height: 100vh;
overflow-y: hidden;
background-color: #D4D4D4;
}
span{
font-family: Lexend Deca;
font-weight: 400;
font-size: 22.98px;
line-height: 100%;
letter-spacing: 0%;
color: #126BA5;
}
.topo{
display: flex;
gap: 30%;
padding: 20px;
}
.small{
align-items: center;
justify-content: center;
width: 40px;
height: 35px;
font-family: Lexend Deca;
font-weight: 400;
font-size: 26.98px;
line-height: 100%;
text-align: center;
padding: 0;
color: #FFFFFF;
border-radius: 4.64px;
background-color: #52B6FF;
}
.habitos{
font-family: Lexend Deca;
font-weight: 400;
font-size: 17.98px;
line-height: 100%;
letter-spacing: 0%;
color: #666666;
}
.form-container{
margin-left: 20px;
position: relative;
width: 340px;
height: 180px;
padding: 20px;
border-radius: 5px;
display: flex;
justify-content: center;
background-color: #FFFFFF;
margin-bottom: 20px;
}
form input{
width: 303px;
height: 45px;
border-radius: 5px;
font-family: Lexend Deca;
font-weight: 400;
font-size: 19.98px;
line-height: 100%;
letter-spacing: 0%;
border-width: 1px;
}
.save{
font-family: Lexend Deca;
font-weight: 400;
font-size: 15.98px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
background-color: #52B6FF;
color: #FFFFFF;
}
.cancel{
background-color: #FFFFFF;
color: #52B6FF;
font-family: Lexend Deca;
font-weight: 400;
font-size: 15.98px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
}
input::placeholder{
font-family: Lexend Deca;
font-weight: 400;
font-size: 19.98px;
line-height: 100%;
color: #DBDBDB;
letter-spacing: 0%;
}
.form-buttons{
position: absolute;
bottom: 10px;
right: 10px;
}
.weekdays{
margin-top: 10px;
display:flex;
gap: 10px;
}
.weekday-button{
padding:0;
width: 30px;
height: 30px;
border-radius: 5px;
border-width: 1px;
color: #D4D4D4;
border: 1px solid #D4D4D4;
font-family: Lexend Deca;
font-weight: 400;
font-size: 19.98px;
line-height: 100%;
letter-spacing: 0%;
}
.weekday-button.selected{
color: #FFFFFF;
background-color: #D4D4D4;
}
.habitos{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
.habitos-container{
font-family: Lexend Deca;
font-weight: 400;
font-size: 19.98px;
line-height: 100%;
letter-spacing: 0%;
text-align: left;
color: #666666;
padding: 20px;
width: 340px;
height: auto;
border-radius: 5px;
background-color: #FFFFFF;
}
`
export default HabitosDesign;