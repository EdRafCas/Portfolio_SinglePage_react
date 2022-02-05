import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../Theme';

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
            transform: scale(1.3);
            border:solid 3px ${theme.mainRed};     
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
            transform: scale(1.3);
            border:solid 3px #fff;
      }
`
const Option3=styled(Link)`
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
            transform: scale(1.3);
            border:solid 3px blue;
      }
`

const Texto =styled.h1`
      font-size:2rem;
      align-self:center;
      width:auto;
      /* &:hover{
            font-size:3rem;   
      } */
      
      ${Option1}:hover &{
            text-shadow: 5px 5px 5px grey;
            font-size:3rem;
      };
      ${Option2}:hover &{
            text-shadow: 5px 5px 5px grey;
            font-size:3rem;
      };
      ${Option3}:hover &{
            text-shadow: 5px 5px 5px grey;
            font-size:3rem;
      };
      
`
const OptionsContainer= styled.div`
      width:100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr 1fr 1fr);
      height:10rem;
      background:#000;
      overflow: hidden
      position:relative;
      overflow:block;
      z-index:1;
`





const MenuBar = ({changeBackground1, changeBackground2, changeBackground3}) => {
      return ( 
            <OptionsContainer>
                  <Option1 to={"/Projects"}
                                    onMouseEnter={()=>changeBackground1(true)}
                                    onMouseLeave={()=>changeBackground1(false)}>
                                    <Texto>PROJECTS</Texto>
                  </Option1 >
                  <Option2  to={"/AboutMe"}        
                                    onMouseEnter={()=>changeBackground2(true)}
                                    onMouseLeave={()=>changeBackground2(false)}>
                                    <Texto>ABOUT ME</Texto>
                  </Option2>
                  <Option3  to={"/Contact"}         
                                    onMouseEnter={()=>changeBackground3(true)}
                                    onMouseLeave={()=>changeBackground3(false)}>
                        <Texto>CONTACT</Texto>
                  </Option3>
            </OptionsContainer>
       );
}
 
export  default MenuBar;