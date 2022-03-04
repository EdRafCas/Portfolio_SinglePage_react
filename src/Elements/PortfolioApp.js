import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import SpendManager from '../video/spend_manager_video.mp4';
import ShoppingCart from '../video/shopping_cart_video.mp4';
import CoffeShop from '../video/coffee_shop_video.mp4';
import RockPaperScissors from '../video/rock_paper_scissors_video.mp4';
import {Card, Card2, Title, DescriptionText} from './ProjectsElements'

const ExpenseApp = () => {
      return ( 
            <>
                  <Card>
                        <Title href={"https://react-app-lista-gastos-31e5d.web.app/"}
                               target="__blank">Spent-tracking</Title>
                        <DescriptionText>
                              This project is the most challenging one i've done so far: a functional, Firebase-hosted application.                             
                              <br/>
                              <br/>
                              The goal and purpose is to serve as "tracking" app, to access it requires the user to create an account (email and password are required) and login, once authenticated (firebase authentication) it receives "expenses", it allows to set a date, a category, and an amount to each one of the data entries, mantains a permanently visible acumulated of all the expenses whose dates are contained during the ongoing month and offers the possibility to edit/erase all values of all entries, at any time.
                              <br/>
                              Firebase-hosting all database                    
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
                        In this project my aim was to create a blueprint for a generic online clothing shop, the purpose was to emulate both the design and accesibility functions provided by the most frequeantly available online stores, that being: the ability to search trough a catalogue of items, filter them trough their caracteristics and keep the selections in dynamic shopping cart.                
                        <br/>
                        <br/>
                        The page design (color palette and elements placement) are taken from several existing sites (no need to reinvent the wheel), search engine and cart adding-editing functionalities were all created from scratch.
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
                               target="__blank">Rock-Paper-Scissors </Title>
                        <DescriptionText>
                              This Projects was made as a challenge as provided in <a 
                              href={"https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"}
                              target="__blank">frontendmentor </a>                        
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

export  {ExpenseApp, ShoppingCartApp, CoffeShopApp, RockPaperScissorsApp};