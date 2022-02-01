import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import theme from '../Theme';

const ContactContainer = styled.div`
      position:relative;      
      height:60rem; /* 700px */
      display:flex;
      flex-direction:column;
      z-index:1;           
      /* border:solid #fff 3px; */
      width:100%;
      background:#000;
      justify-content:center;
      margin:auto;
      padding:10rem 10rem;
`
const ContainerColumns =styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 1fr 1fr);
      justify-items:center;
      margin:auto;
      @media(max-width: 720px){
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
`

const Card =styled.div`
      border:solid ${theme.mainBorder} 10px;
      margin:auto;
      height:auto;
      width:auto;
      color:#fff;
      border-radius:15px;
      max-width:60%;
      cursor:auto;
      color:${theme.mainText};
`
const Title=styled.h1`
      font-size:2rem;
      padding:2rem;
      padding-bottom:1rem;  
`

const Description=styled.p`
      max-width:100rem;
      font-size:1.5rem;
      padding:2rem;
`


const Label=styled.label`
      text-transform:uppercase;
      font-weight:800;
      font-size:1.5rem;
      @media(max-width: 720px){
            text-align:center;
        
    }
`
const ContactButton=styled.button`
      box-sizing: border-box;
      padding: 1rem 1rem;
      background-color: transparent;
      color: ${theme.mainText};
      fill: white;
      border: 3px solid ${theme.mainBorder};
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
`
const Input = styled.input`
      padding-left:1rem;
      font-size: 1rem;
      text-transform: uppercase;
      border: 5px solid ${theme.mainBorder};
      outline: none;
      height: ${(props) => props.name==="message" ? "9rem"
                              : props.name==="email" ? "3rem"    
                              : props.name==="name" ? "3rem"    
                              :"auto"};
      text-align:left;
      white-space:nowrap;
      overflow:scroll;
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

`


const Contact = () => {
      
      return ( 
            <ContactContainer>
                  <ContainerColumns>
                        <Card>
                              <Title>About Me</Title>
                              <Description>
                                    
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
                              onSubmit={()=>{
                                    console.log("Form Enviado")
                              }}
                        >
                              {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) =>(
                                    <Formulary 
                                          action="" 
                                          method="" 
                                          onSubmit={handleSubmit}>
                                          {console.log(errors)}
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
                                                cols="30"
                                                rows="20"
                                                type="text"
                                                placeholder="Leave us your message here"
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                          />
                                          <ContactButton type="submit"> SEND</ContactButton>
                                    </Formulary>
                              )}        
                        </Formik>
                  </ContainerColumns>
                  
            </ContactContainer>
       );
}
 
export default Contact;