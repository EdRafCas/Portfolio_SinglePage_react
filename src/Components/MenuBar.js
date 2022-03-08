import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../Theme';

const OptionsContainer= styled.div`
      width:100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr 1fr 1fr);
      height:15vh;
      max-height:10rem;
      background:#000;
      overflow: hidden
      overflow:block;
      z-index:1;
      max-height:15rem;
      @media(max-width: 760px){ 
            height:10vh;
            min-height:3rem; 
           
      } 
`
const Option1=styled(Link)`
      display:flex;
      height:50%;
      width:auto;
      padding:0.5rem;
      color:${theme.mainText};
      flex-direction:column;
      justify-content:center;
      margin:auto;
      transition: 0.5s ease all;
      text-decoration:none;
      :hover{
            
            background-color: black;
            border:solid 3px ${theme.mainRed};     
      }
      @media(min-width: 761px){
            transform: scale(1.3);
      }
      @media(min-height: 761px){
            transform: scale(1.3);
      }
      

`
const Option2=styled(Link)`
      display:flex;
      height:50%;
      width:auto;
      padding:0.5rem;
      color:${theme.mainText};
      flex-direction:column;
      justify-content:center;
      margin:auto;
      transition: .5s ease all;
      text-decoration:none;
      :hover{
            
            background-color: black;
            
            border:solid 3px #fff;
      }
      @media(min-width: 761px){
            transform: scale(1.3);
      }
`
const Option3=styled(Link)`
      display:flex;
      height:60%;
      width:auto;
      padding:0.5rem;
      color:${theme.mainText};
      flex-direction:column;
      justify-content:center;
      margin:auto;
      transition: .5s ease all;
      text-decoration:none;
      :hover{
            background-color: black;
            border:solid 3px blue;
      }
      @media(min-width: 761px){
            transform: scale(1.3);
      }

`
const Texto =styled.h1`
      font-size:1.5rem;
      align-self:center;
      width:auto;
      text-align:center;
      transition: .5s ease all;
      /* &:hover{
            font-size:3rem;   
      } */
      @media(min-width: 761px){
            ${Option1}:hover &{
                  text-shadow: 5px 5px 5px grey;
                  font-size:2rem;
            };
            ${Option2}:hover &{
                  text-shadow: 5px 5px 5px grey;
                  font-size:2rem;
            };
            ${Option3}:hover &{
                  text-shadow: 5px 5px 5px grey;
                  font-size:2rem;
            };
      }
      @media(max-width: 760px){ 
            font-size:1rem; 
           
      } 

      
`

const MenuBar = () => {
      return ( 
            <OptionsContainer>
                  <Option1 to={"/Projects"}>
                                    <Texto>PROJECTS</Texto>
                  </Option1 >
                  <Option2  to={"/AboutMe"}>
                                    <Texto>ABOUT ME</Texto>
                  </Option2>
                  <Option3  to={"/Contact"}>
                        <Texto>CONTACT</Texto>
                  </Option3>
            </OptionsContainer>
       );
}
 
export  default MenuBar;