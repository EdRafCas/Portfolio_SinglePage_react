import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    min height:750px;
    max-height:100rem;
    background: #000;
    width: 100%;
    min-width: 375px;
    max-width:176.25rem;
    overflow-y: auto;
    border-radius: 0; 
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    position: relative;
    z-index: 100;
    
    
`;

export default Container;