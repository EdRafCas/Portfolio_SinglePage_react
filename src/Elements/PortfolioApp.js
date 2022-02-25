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
                        <Title>Finance tracking</Title>
                        <DescriptionText>
                              This project is the most challenging one i've done so far: a functional, Firebase-hosted application.                             
                              <br/>
                              <br/>
                              The purpose is to serve as "tracking" app, to be used it requires the user to create an account (email and password are required) and login, once authenticated(firebase authentication) it records and categorises "expenses", it allows to set a date, a concept, and an amount to each one of the data entries, it mantains a permanently visible score of the expenses whose dates are containing during the ongoing month and offers the possibily to edit/erase all values of all entries.
                              <br/>                    
                              <br/>                    
                              Some of the libraries i've implemented during this project were:
                              <br/>
                              ♥ React-Router(BrowserRouter, Route, Switch, Link)                    
                              <br/>
                              ♥ Webfont                    
                              <br/>
                              ♥ Styled-components                    
                              <br/>
                              ♥ React-Helmet                   
                              <br/>
                              ♥ Date-fns                   
                              <br/>
                              ♥ React-day-picker                   
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
                        <Title>E-Store Shopping Cart</Title>
                        <DescriptionText>
                        This is a project where i used several libraries simultaneously to achieve what is by far the most complex product i've achieved so far: a functional, Firebase-hosted application.                             
                        <br/>
                        <br/>
                        The purpose is to serve as "tracking" app, by first requiring the creation of an account (email and password are required) and login into the app it allows the record, and categorization of "expenses", to set a date, a concept, and an amount to each one of the entries, it mantains a permanent track of expenses during the current month and offers the possibily to edit/erase all values of all entries recorded.    
                        <br/>                    
                        <br/>                    
                        Some of the libraries i've implemented during this project were:
                        <br/>
                        ♥ React-Router(BrowserRouter, Route, Switch, Link)                    
                        <br/>
                        ♥ Webfont                    
                        <br/>
                        ♥ Styled-components                    
                        <br/>
                        ♥ React-Helmet                   
                        <br/>
                        ♥ Date-fns                   
                        <br/>
                        ♥ React-day-picker                   
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
                        <Title>Coffe</Title>
                        <DescriptionText>
                        This is a project where i used several libraries simultaneously to achieve what is by far the most complex product i've achieved so far: a functional, Firebase-hosted application.                             
                        </DescriptionText>
                        <DescriptionText>
                              The purpose is to serve as "tracking" app, by first requiring the creation of an account (email and password are required) and login into the app it allows the record, and categorization of "expenses", to set a date, a concept, and an amount to each one of the entries, it mantains a permanent track of expenses during the current month and offers the possibily to edit/erase all values of all entries recorded.    
                              <br/>                    
                              <br/>                    
                              Some of the libraries i've implemented during this project were:
                              <br/>
                              ♥ React-Router(BrowserRouter, Route, Switch, Link)                    
                              <br/>
                              ♥ Webfont                    
                              <br/>
                              ♥ Styled-components                    
                              <br/>
                              ♥ React-Helmet                   
                              <br/>
                              ♥ Date-fns                   
                              <br/>
                              ♥ React-day-picker                   
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
                        <Title>Rock-Paper-Scissors Game</Title>
                        <DescriptionText>
                        This is a project where i used several libraries simultaneously to achieve what is by far the most complex product i've achieved so far: a functional, Firebase-hosted application.                             
                        </DescriptionText>
                        <DescriptionText>
                              The purpose is to serve as "tracking" app, by first requiring the creation of an account (email and password are required) and login into the app it allows the record, and categorization of "expenses", to set a date, a concept, and an amount to each one of the entries, it mantains a permanent track of expenses during the current month and offers the possibily to edit/erase all values of all entries recorded.    
                              <br/>                    
                              <br/>                    
                              Some of the libraries i've implemented during this project were:
                              <br/>
                              ♥ React-Router(BrowserRouter, Route, Switch, Link)                    
                              <br/>
                              ♥ Webfont                    
                              <br/>
                              ♥ Styled-components                    
                              <br/>
                              ♥ React-Helmet                   
                              <br/>
                              ♥ Date-fns                   
                              <br/>
                              ♥ React-day-picker                   
                        </DescriptionText>
                  </Card>
                  <Card2>
                        <BackgroundVideo  Description ShowVideo={RockPaperScissors}/>
                  </Card2>
            </>

       );
}

export  {ExpenseApp, ShoppingCartApp, CoffeShopApp, RockPaperScissorsApp};