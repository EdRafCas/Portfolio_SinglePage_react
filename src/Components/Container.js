import styled from 'styled-components';

const Container = styled.div`
    background: #000;
    width: 100%;
    max-width:200rem;
    min-width:71.25rem; /* 1140px */
    /* max-width: 71.25rem; /* 1140px */ */
    height: 100%;
    min-height:70rem; /* 1280px */
    overflow-y: auto;
    /* box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05); */
    border-radius: 0; 
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    
    z-index: 100;

    @media(max-width: 71.25rem){ 
        width: 95%;
        min-width:45rem;
           
    }
    @media(max-width: 45rem){ 
        width: 100%;
        min-width:37.5rem;
           
    }
 
`;

export default Container;