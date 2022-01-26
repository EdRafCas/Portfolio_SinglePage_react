import React,{useState} from 'react';
import styled from 'styled-components';
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
      border-radius:1.5rem;
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
      font-size:16px;
      @media(max-width: 720px){
            text-align:center;
        
    }
`
const ContactButton=styled.button`
      box-sizing: border-box;
      padding: 8px 12px;
      background-color: transparent;
      color: #000000;
      fill: #000000;
      border: 3px solid #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      transition: all 0.4s ease;
      :hover{
            color:#fff;
            background:#000000;
            
            :active{
                  border: 3px double #fff;
                  font-size: 16px;
                  font-weight: 800;
            }   
      }
`
const Input = styled.input`
    font-size: 12px;
    text-transform: uppercase;
    border: 3px solid ${theme.mainBorder};
    outline: none;
    height: ${(props) => props.name==="message" ? "150px"
                        : props.name==="email" ? "50px"    
                        : props.name==="name" ? "50px"    
                        :"auto"};
      text-align:left;
      white-space:nowrap;
      overflow:scroll;
`;
const TextArea =styled.textarea`
      font-size: 12px;
      text-transform: uppercase;
      border: none;
      border: 3px solid ${theme.mainBorder};
      outline: none;
      height: ${(props) => props.name==="email" ? "50px"    
                        : props.name==="name" ? "50px"    
                        :"auto"};
      text-align: justify;
      white-space:normal;
      overflow:scroll;

`


const Contact = () => {
      const [inputName, changeInputName] = useState("");
      const [inputEmail, changeInputEmail] = useState("");
      const [textMessage, changeTextMessage] = useState("");

      const handleChange = (e) =>{
            if(e.target.name ==="name"){
                  changeInputName(e.target.value)
            }if(e.target.name ==="email"){
                  changeInputEmail(e.target.value)
            }if (e.target.name ==="message"){
                  changeTextMessage(e.target.value)
            }
      }
      const showValue = (e) => {
            /* e.preventDefault(); */
            console.log(inputName,inputEmail, textMessage)
      }

      return ( 
            <ContactContainer>
                  <ContainerColumns>
                        <Card>
                              <Title>About Me</Title>
                              <Description>
                                    
                              </Description>
                        </Card>
                        <Formulary>
                                    <Label>Name</Label>
                                    <Input
                                          type="text"
                                          name="name"
                                          id="name"
                                          placeholder="Name"
                                          value={inputName}
                                          onChange={handleChange}
                                    />
                                    <Label>Email</Label>
                                    <Input
                                          type="email"
                                          name="email"
                                          id="email"
                                          placeholder=""
                                          value={inputEmail}
                                          onChange={handleChange}
                                    />
                                    <Label>Message</Label>
                                    <TextArea message
                                          cols="30"
                                          rows="20"
                                          type="text"
                                          name="message"
                                          id="message"
                                          placeholder="Leave us your message here"
                                          value={textMessage}
                                          onChange={handleChange}
                                    />
                                    <ContactButton type="submit" onClick={showValue}>SEND</ContactButton>
                        </Formulary>
                  </ContainerColumns>
                  
            </ContactContainer>
       );
}
 
export default Contact;