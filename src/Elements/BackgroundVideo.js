import React from 'react';
import styled from 'styled-components';


const ShowProject =styled.div`
      position:absolute;
      content:"";
      top: 0px;
      right:0px;
      bottom:0px;
      left:0px;
      opacity:${(props) => props.Description ? "1.0" : "0.5"};
      background-repeat: no-repeat;
      background-position: center;
      background-size: 176.25rem; /* 2820px */
      @media(max-width: 1200px){
            /* opacity:0.5 */;
      }
`
const VideoBackground=styled.video`
      position:fixed;
      width:100%;
      left:50%;
      top:50%;
      height:100%;
      transform:translate(-50%,-50%);
      z-index:-1;
`

const BackgroundVideo = ({ShowVideo, Description}) => {
      return ( 
            <ShowProject Description={Description} >
                  <VideoBackground autoPlay loop muted>
                        <source src={ShowVideo} type="video/mp4"/>
                  </VideoBackground>
            </ShowProject>
       );
}
 
export default BackgroundVideo;