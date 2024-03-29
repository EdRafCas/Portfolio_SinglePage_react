import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import SocialNetwork from '../video/socialnetwork_video.mp4';
import SpendManager from '../video/spend_manager_video.mp4';
import ShoppingCart from '../video/shopping_cart_video.mp4';
import CoffeShop from '../video/coffee_shop_video.mp4';
import TodoAppVideo from '../video/todoApp_video.MP4';
import TapAndMatchVideo from '../video/tap_and_match.mp4';
import RockPaperScissors from '../video/rock_paper_scissors_video.mp4';
import {Card, Card2, Title, DescriptionText} from './ProjectsElements'

const ExpenseApp = () => {
      return ( 
            <>
                  <Card>
                        <Title href={"https://react-app-lista-gastos-31e5d.web.app/"}
                               target="__blank">Spent-tracking</Title>
                        <DescriptionText>
                              This project was my first attempt at creating a functional, Firebase-hosted application.                             
                              <br/>
                              <br/>
                              The goal and purpose is to serve as "tracking" app, to access it requires the user to create an account (email and password are required) and login, once authenticated (firebase authentication) it receives data as "expenses", each one with a set amount of standart values (date, category, amount)  mantains a permanently visible acumulated of all the expenses whose dates are contained during a set timeframe (current month) and offers the possibility to edit/erase all values of all entries, at any time.
                              <br/>                  
                              <br/>                    
                              Some of the libraries i've implemented during this project were:
                              <br/>
                              <br/>
                              - React-Router(BrowserRouter, Route, Switch, Link)                    
                              <br/>
                              - Webfont                    
                              <br/>
                              - Styled-components                    
                              <br/>
                              - React-Helmet                   
                              <br/>
                              - Date-fns                   
                              <br/>
                              - React-day-picker                   
                        </DescriptionText>
                  </Card>
                  <Card2>
                        <BackgroundVideo  Description ShowVideo={SpendManager}/>
                  </Card2>
            </>

       );
}
const ShoppingCartApp = () => {
      return ( 
            <>
                  <Card>
                        <Title href={"https://cartshop-react.web.app/"}
                               target="__blank">E-Store Shopping Cart</Title>
                        <DescriptionText>
                        The aim was to create a blueprint for a generic online shop, the purpose was to emulate both the design and accessibility functions provided by the most frequently available online stores, that being: the ability to search through a catalogue of items, filter them through their characteristics and keep the selections in dynamic shopping cart.                
                        <br/>
                        <br/>
                        The search engine and cart adding-editing functionalities were all created from scratch using solely Javascript & React functionalities.
                        <br/>                    
                        <br/>                    
                        Some of the libraries i've implemented during this project were:
                        <br/>
                        - React-Router(BrowserRouter, Route, Switch, Link)                    
                        <br/>
                        - Webfont                    
                        <br/>
                        - Styled-components                    
                        <br/>
                        - React-Helmet                   
                        </DescriptionText>
                  </Card>
                  <Card2>
                        <BackgroundVideo  Description ShowVideo={ShoppingCart}/>
                  </Card2>
            </>

       );
}
const SocialNetworkApp = () => {
      return ( 
            <>
                  <Card>
                        <Title href={"https://socialnetwork-app-aca27.web.app/"}
                               target="__blank">Social network app (Twitter-like)</Title>
                        <DescriptionText>
                        Twitter needing no introduction, this app aims to emulate some of the aspects and features available in the web version.
                        <br/>
                        <br/>
                        Some of the main features:
                        <br/>
                        - Account Creation with unique username/alias selection.
                        <br/>
                        - Profile & background image selection and editable biography.
                        <br/>
                        - Shared timeline: for all registered users messages are organized solely by publication date, no followers-non followers restrictions (yet).         
                        <br/>
                        - Ability to perform "retweets" and "likes": much as the original version of the app, this interactions are counted and the numbers are shown and updated in live time.
                        <br/>
                        - Comments into a existing message: this comments will display the username of the original user and redirect to them, thus creating a "thread" timeline specifically for each message.
                        <br/>
                        - Personalized pages for each user: display background image chose by users, and grant access to the "like" timeline, that will only display messages, that the chosen user has "liked" manually.            
                        <br/>
                        - Bookmark timeline: accessible and visible only for the user logged in, essentially a private timeline.                
                        </DescriptionText>
                  </Card>
                  <Card2>
                        <BackgroundVideo  Description ShowVideo={SocialNetwork}/>
                  </Card2>
            </>

       );
}
const TapAndMatch = () => {
      return ( 
            <>
                  <Card>
                        <Title href={"https://tap-and-match-app.web.app/"}
                               target="__blank">Tap & match </Title>
                        <DescriptionText>
                        <br/>  
                        This small but content intensive project was made Drawing inspiration from the popular app "Duolingo" app and other popular games that feature a "match" of choices between to columns, in this case, English/Spanish words of common use.
                        <br/>                                                        
                        <br/>                                                      
                        The desired functionality (progress trough matching, and simultaneous animation on both sides when right/wrong) is achieved by using the useState, useEffect and useContext functionalities, all contained within the base React library.
                        </DescriptionText>
                  </Card>
                  <Card2>
                        <BackgroundVideo  Description ShowVideo={TapAndMatchVideo}/>
                  </Card2>
            </>

       );
}
const TodoApp = () => {
      return ( 
            <>
                  <Card>
                        <Title href={"https://todo-app-frontendmentor-fd084.web.app/"}
                               target="__blank">Todo app (FrontEndMentor)</Title>
                        <DescriptionText>
                        This Projects was made as a challenge as provided in <a 
                        href={"https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"}
                        target="__blank">frontendmentor.io</a>                        
                        <br/>                    
                        <br/>  
                        Starting from a basic folder with resources(svgs, icons, color palette) but no guidelines in the "how" the goal was to create simple notepad for simple, shortly phrased "tasks", this tasks could then be crossed as completed, and filtered on this basis.
                        <br/>
                        Another highlight for the project is the implementation of day/night mode with a toggle button, changing the styles/backgrounds to fit the current mode without reloading nor erasing the tasks already registered. This was achieved by integrating the <b>useState</b> functionality provided by react, in combination with <b>SASS </b>styles, that allows to reach specific components classes defined deep withing the virtual DOM tree, and at the same time pairing classes values to dynamic variables defined trough jsx conditionals to be defined in response to the value of react states.
                        <br/>  
                        <br/>  

                        Given that part to the goal was to create a plain, simple, easy to look&easy to handle app, there was need for a wide variety of libraries to be used and the project rest solely upon  <b>react-dom</b> functionalities and <b>JSX/CSS/SASS</b>syntax. 
                                                                                                                                

                        </DescriptionText>
                  </Card>
                  <Card2>
                        <BackgroundVideo  Description ShowVideo={TodoAppVideo}/>
                  </Card2>
            </>

       );
}
const CoffeShopApp = () => {
      return ( 
            <>
                  <Card>
                        <Title href={"https://coffee-shop-react.web.app/"}
                               target="__blank">Coffe shop landing page</Title>
                        <DescriptionText>
                        One of the first sites i made, this project was originally made in plain  HTML, CSS, SASS, and Js, then, as practice i decided to turn it into a React app as a way to explore compatibilities and advantages.                      
                        </DescriptionText>
                        <DescriptionText>
                        The main highlight would be the accesible single-page design and a dynamic menu(this is mean to be a coffe-shop after all), hosted as a database in firebase allowing the page to be updated easily without redeploying the already hosted page.   
                        <br/>                    
                        <br/>                    
                        Some of the libraries i've implemented during this project were:
                        <br/>
                        - React-Router(BrowserRouter, Route, Switch, Link)                    
                        <br/>
                        - Webfont                    
                        <br/>
                        - Styled-components                    
                                 
                        </DescriptionText>
                  </Card>
                  <Card2>
                        <BackgroundVideo  Description ShowVideo={CoffeShop}/>
                  </Card2>
            </>

       );
}
const RockPaperScissorsApp = () => {
      return ( 
            <>
                  <Card>
                        <Title href={"https://rock-paper-scissors-5a2c8.web.app/"}
                               target="__blank">Rock-Paper-Scissors (FrontEndMentor)</Title>
                        <DescriptionText>
                              This Projects was made as a challenge as provided in <a 
                              href={"https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"}
                              target="__blank">frontendmentor.io </a>                        
                              <br/>                    
                              <br/>  
                             Starting from a basic folder with resources(svgs, icons, color palette) but no guidelines in the "how" the goal was to create an interactive game that allowed the win-lose-tie interaction we all know from rock-paper-scissors, it simulates a seemingly random value upon choosing an option and keeps a record(locally stored) of results.
                              <br/>                    
                              <br/>                    
                              Some of the libraries i've implemented during this project were:
                              <br/>
                              - React-Router(BrowserRouter, Route, Switch, Link)                    
                              <br/>
                              - Webfont                    
                              <br/>
                              - Styled-components                    
                              <br/>
                              - React-Helmet                                    
                        </DescriptionText>
                  </Card>
                  <Card2>
                        <BackgroundVideo  Description ShowVideo={RockPaperScissors}/>
                  </Card2>
            </>

       );
}

export  {ExpenseApp, SocialNetworkApp, ShoppingCartApp, CoffeShopApp, RockPaperScissorsApp, TapAndMatch,TodoApp};