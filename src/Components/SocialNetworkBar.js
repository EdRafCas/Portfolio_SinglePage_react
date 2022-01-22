import React from 'react';
import styled from 'styled-components';

const SocialNetworks=styled.div`
      position:absolute;
      top:15rem;
      left:0rem;
      width:10rem;
      background:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      z-index:1;
      p{
            font-size:4rem;
            color:#000
      }
`

const SocialNetworkBar = () => {
      return ( 
            <SocialNetworks>
                 <div><p>Face</p></div> 
                 <div><p>instagram</p></div> 
                 <div><p>Github</p></div> 
                 <div><p>Github</p></div> 
            </SocialNetworks>
       );
}
 
export default SocialNetworkBar;