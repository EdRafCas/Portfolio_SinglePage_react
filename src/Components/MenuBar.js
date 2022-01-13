import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Option1=styled(Link)`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      background:#000;
      transition: .5s ease all;
      border: none;
      text-decoration:none;
      :hover{
            border: none;
            color: white;
            background-color: black;
            transform: scale(1.3);
            border:solid 3px red;     
      }
`
const Option2=styled(Link)`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      transition: .5s ease all;
      text-decoration:none;
      :hover{
            border: none;
            color: white;
            background-color: black;
            transform: scale(1.3);
            border:solid 3px #fff;
      }
`
const Option3=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      transition: .3s ease all;
      :hover{
            border: none;
            color: white;
            background-color: black;
            transform: scale(1.3);
            border:solid 3px blue;
      }
`

const Texto =styled.h1`
      font-size:2rem;
      align-self:center;
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
const LanguagesContainer= styled.div`
      width:100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr 1fr 1fr);
      height:15rem;
      background:#000;
      z-index:1;
`





const MenuBar = ({changeBackground1, changeBackground2, changeBackground3}) => {
      return ( 
            <LanguagesContainer>
                  <Option1 to={"/Projects"}
                                    onMouseEnter={()=>changeBackground1(true)}
                                    onMouseLeave={()=>changeBackground1(false)}>
                                    <Texto>PROJECTS</Texto>
                  </Option1 >
                  <Option2  to={"/Projects"}        
                                    onMouseEnter={()=>changeBackground2(true)}
                                    onMouseLeave={()=>changeBackground2(false)}>
                                    <Texto>ABOUT ME</Texto>
                  </Option2>
                  <Option3          onMouseEnter={()=>changeBackground3(true)}
                                    onMouseLeave={()=>changeBackground3(false)}>
                        <Texto>CONTACT</Texto>
                  </Option3>
            </LanguagesContainer>
       );
}
 
export  default MenuBar;