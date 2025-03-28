import styled from "styled-components";

const HojeDesign = styled.div`
.container-geral{
padding-top: 40%;
background-color:rgb(245, 243, 243);
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
gap: 20px;
}
span{
font-family: Lexend Deca;
font-weight: 400;
font-size: 22.98px;
line-height: 100%;
letter-spacing: 0%;
color: #126BA5;
text-align: left;
}
p{
margin: 0;
}
.lista-habitos{
margin-left: 10%;
display: flex;
flex-direction: column;
gap: 10px;
}
.habito-container{
width: 80%;
height: 91px;
border-radius: 5px;
padding: 15px;
display: flex;
justify-content: space-between;
background-color: #FFFFFF;
border: solid 1px #E7E7E7;
}
.habito-container p{
font-family: Lexend Deca;
font-weight: 400;
font-size: 19.98px;
line-height: 100%;
letter-spacing: 0%;
color: #666666;
}
.info{
display: flex;
flex-direction: column;
text-align: left;
gap: 10px;
}
.info button{
display: flex;
align-items: center;
justify-content: center;
}
.little-text span{
display: flex;
flex-direction: column;
text-align: left;
gap: 10px;
font-family: Lexend Deca;
font-weight: 400;
font-size: 12.98px;
line-height: 100%;
letter-spacing: 0%;
color: #666666;
}
.check{
width: 69px;
height: 69px;
border-radius: 5px;
background-color: #EBEBEB;
border: solid 1px #E7E7E7;
}
.check.green{
background-color: #8FC549;
border: solid 1px #8FC549;
}
`
export default HojeDesign;