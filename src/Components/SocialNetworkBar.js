import React from 'react';
import styled from 'styled-components';

const SocialNetworks=styled.div`
      width:100%;
      background:#fff;
      display:flex;
      flex-direction:row;
      justify-content:center;
      p{
            font-size:4rem;
            color:#000
      }
`

const SocialNetworkBar = () => {
      return ( 
            <SocialNetworks>
                 <div><p>Face</p></div> 
                 <div><p>instagram</p>></div> 
                 <div><p>Github</p></div> 
                 <div><p>Github</p></div> 
            </SocialNetworks>
       );
}
 
export default SocialNetworkBar;