import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Formik} from 'formik';
import theme from '../Theme';
import emailjs from '@emailjs/browser';
import {Helmet} from "react-helmet";

const ContactContainer = styled.div`
      position:relative;      
      height:85vh; /* 700px */
      max-height:85rem;
      min-height:600px;
      width:100%;
      min-width:375px;
      display:flex;
      flex-direction:column;
      z-index:1;           
      /* border:solid #fff 3px; */
      background:#000;
      justify-content:center;
      padding:5rem 5rem;
      
      @media(max-width: 1140px){     
      }
      @media(max-width: 760px){ 
             
            padding:0rem 2.5rem;     
      } 
      @media(max-width: 375px){ 
            /* height:35rem; */
            height:90vh;
            padding:0rem 2.5rem;
      } 
`
const ContainerColumns =styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 1fr 1fr);
      justify-items:center;
      margin:auto;
      @media(max-width: 1000px){
            grid-template-columns: repeat(1,1fr);  
      }
`
const Formulary = styled.form` 
      width:100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color:${theme.mainText};
      gap:1rem;
      input {
            width: 100%;
            text-align: left;
            &::placeholder {
                  color: rgba(0,0,0,.2);
            }
      }
      @media(max-width: 760px){ 
            gap:0.5rem;          
      } 
`

const Card =styled.div`
      border:/* solid ${theme.mainBorder} 5px; */ none;
      margin:auto;
      height:auto;
      width:auto;
      color:#fff;
      border-radius:15px;
      max-width:60%;
      cursor:auto;
      color:${theme.mainText};
      text-align:center;
      
      @media(max-width: 760px){
            max-width:100%;
      }
      @media(max-width: 375px){  
      }
`
const Description=styled.p`
      font-size:1.5rem;
      padding:2rem;
      @media(max-width: 1000px){ 
            font-size:1rem;
            padding:0.5rem;
      }
      @media(max-width: 375px){ 
            font-size:0.8rem;
            padding-bottom:0.5rem;
            text-align:left;
            padding-left:0;
            width:80%
      }
`
const Label=styled.label`
      text-transform:uppercase;
      font-weight:800;
      font-size:1.5rem;
      @media(max-width: 1000px){
            
      }
      @media(max-width: 760px){
            font-size:1rem;   
      }
`
const ContactButton=styled.button`
      box-sizing: border-box;
      background-color: transparent;
      color: ${theme.mainText};
      fill: white;
      border: 5px solid ${theme.mainBorder};
      font-size: 2rem;
      font-weight: 800;
      line-height: 1.42rem;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      transition: all 0.4s ease;
      height:5rem;
      :hover{
            color:${theme.mainBorder};
            background:${theme.mainText};
            border: none;
            
            :active{
                  border: 3px solid ${theme.mainBorder};
                  color:${theme.background};
                  font-size: 2.5rem;
                  padding: 0.5rem 0.5rem;
                  font-weight: 800;
            }   
      }
      @media(max-width: 760px){ 
            font-size: 1rem;
            height:2rem;
            border: 3px solid ${theme.mainBorder}; 
            :hover{
                             
                  :active{
                        
                        font-size: 1.1rem;   
                  }   
            }
      } 
      @media(max-width: 375px){ 
      } 
`
const Input = styled.input`
      padding-left:1rem;
      font-size: 1rem;
      text-transform: uppercase;
      border: 5px solid ${theme.mainBorder};
      outline: none;
      height: ${(props) =>    props.name==="messag" ? "9rem"
                              : props.name==="email" ? "3rem"    
                              : props.name==="name" ? "3rem"    
                              :"auto"};
      text-align:left;
      white-space:nowrap;
      overflow:scroll;
      @media(max-width: 760px){
            padding-left:0.5rem;
            font-size: 1rem;
            height:2rem;
            border: 2px solid ${theme.mainBorder};
      }
`;
const TextArea =styled.textarea`
      padding:1rem;
      font-size: 1rem;
      text-transform: uppercase;
      border: none;
      border: 5px solid ${theme.mainBorder};
      outline: none;
      height: ${(props) => props.name==="email" ? "3rem"    
                        : props.name==="name" ? "3rem"    
                        :"auto"};
      text-align: justify;
      white-space:normal;
      overflow:scroll;
      @media(max-width: 760px){
            text-align:center;
            font-size:1rem;
            border: 2px solid ${theme.mainBorder};   
      }
`
const ButtonBack=styled(Link)`
      display: flex;
      position:absolute;
      top:5%;
      right:5%;
      height: 3rem;
      width: 5rem;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: none;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      background: ${theme.mainText};
      text-decoration:none;
      font-size: 1.5rem;
      font-weight:800;
      color:#000;
      svg{
            margin-right: 5px;
            margin-left: 5px;
            font-size: 1.5rem;
            transition: all 0.4s ease-in;
      }
      :hover{
            box-shadow: 9px 9px 33px ${theme.mainText}, -9px -9px 33px ${theme.mainText};
            transform: translateY(-2px);
            svg{
                  font-size: 1.3rem;
                  transform: translateX(-10px);
            }
      }
      @media(max-width: 930px){ 
            height: 2.5rem;
            width: 3rem;
            font-size: 1rem;
            svg{
                  margin-right: 0px;
                  margin-left: 0px;
                  font-size: 1rem;
            }
            :hover{
                  box-shadow: 6px 6px 22px ${theme.mainText}, -6px -6px 22px ${theme.mainText};
                  transform: translateY(-1px);
                  svg{
                        font-size: 1rem;
                        transform: translateX(-5px);
                  }
            }
      }
      @media(max-width: 490px){ 
            top:2%;
            font-size: 1rem;
            svg{
                  margin-right: 0px;
                  margin-left: 0px;
                  font-size: 0.5rem;

            }
            
            
      }
`

const Contact = () => {
      const [formSent, changeFormSent] = useState(false);
      console.log(process.env);
      function sendEmail(object){
        
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, object, process.env.REACT_APP_EMAILJS_ID)
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
      }

      return ( 
      <>
            <Helmet >
                  <title>Contact</title>
            </Helmet>
            <ContactContainer>
                  <ButtonBack to="/">
                        <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                        </svg>
                  </ButtonBack>
                  <ContainerColumns>
                        <Card>
                              <Description>
                                    Leave me your message/feedback and we'll stay in touch!
                              </Description>
                        </Card>
                        <Formik 
                              initialValues={{
                                    name:"",
                                    email:"",
                                    message:""
                              }}
                              validate={(values) =>{
                                    let errorMessage = {};
                                    
                                    //validation name
                                    if(!values.name){
                                          errorMessage.name ="Please insert your name"
                                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                                          errorMessage.name ="Your name can only contain letters and spaces"
                                    }
                                    //validation name
                                    if(!values.email){
                                          errorMessage.email ="Please insert your email"
                                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                                          errorMessage.email ="Insert a valid email address"
                                    }
                                    return errorMessage;
                              }}
                              onSubmit={(values, {resetForm})=>{
                                          resetForm();
                                          changeFormSent(true);
                                          console.log("Form Enviado")
                                          setTimeout(()=>changeFormSent(false), 5000)
                                          sendEmail(values)
                                          
                              }}
                        >
                              {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) =>(
                                    <Formulary 
                                          action="" 
                                          method="" 
                                          onSubmit={handleSubmit}>
                                          <Label htmlFor='name'>Name</Label>
                                          <Input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                          />
                                          {touched.name && errors.name && <p>{errors.name}</p>}
                                          <Label htmlFor="email">Email</Label>
                                          <Input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="mail@mail.com"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                          />
                                          <Label htmlFor="message">Message</Label>
                                          {touched.email && errors.email &&  <p>{errors.email}</p>}
                                          <TextArea
                                                name="message"
                                                id="message"
                                                cols="25"
                                                rows="10"
                                                type="text"
                                                placeholder="Leave us your message here"
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                          />
                                          <ContactButton type="submit"> SEND</ContactButton>
                                          {formSent &&<p>Your message has been sent</p>}
                                    </Formulary>
                              )}        
                        </Formik>
                  </ContainerColumns>
                  
            </ContactContainer>
      </> 
      );
}
 
export default Contact;