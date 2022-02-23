import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import SpendManager from '../video/spend_manager_video.mp4';
import {Card, Card2, Title, DescriptionText} from './ProjectsElements'

const ExpenseApp = () => {
      return ( 
            <>
                  <Card>
                        <Title>Finance tracking</Title>
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
                        <BackgroundVideo  Description ShowVideo={SpendManager}/>
                  </Card2>
            </>

       );
}
const ShopApp = () => {
      return ( 
            <>
                  <Card>
                        <Title>Shop</Title>
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
                        <BackgroundVideo  Description ShowVideo={SpendManager}/>
                  </Card2>
            </>

       );
}

export  {ExpenseApp, ShopApp};