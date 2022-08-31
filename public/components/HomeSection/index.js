import React from 'react';
import { HomeContainer, HomeHeadline, HomeSubhead, HomeContent } from './HomeSectionElements';

const HomeSection = () => {
  return (
    <HomeContainer>
      <HomeHeadline>
        Hello! I'm Nick Turner
      </HomeHeadline>
      <HomeSubhead>
        I like to design software products for humans, make electronic music on synthesizers &amp; cook homemade pizzas.
      </HomeSubhead>
      <HomeContent>
        I'm a UX and product design lead based out of Chattanooga, TN. I currently work at <a href="https://www.codescience.com/" target="blank">Code|Science</a> building
        enterprise solutions for clients on the Salesforce Platform. I'm an incredibly curious 
        tinkerer with a passion for exploring possibly through mutually beneficial research and 
        collaborative creativity.
      </HomeContent>
    </HomeContainer>
  )
}

export default HomeSection