import React from 'react'
import BioPic from '../../assets/imgs/bio.jpg'
import { AboutContainer, AboutArticle, AboutPic, AboutInfo, AboutTitle, AboutCopy, AboutValues, ValuesSection, ValuesStatement, ValueIcon, ValueDesc } from './AboutSectionElements';

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutArticle>
        <AboutPic>
          <img src={BioPic} alt="Nick Turner" />
        </AboutPic>
        <AboutInfo>
          <AboutTitle>
            UX and Product Design Lead @ <a href="https://www.codescience.com/" target="blank">Code|Science</a>
          </AboutTitle>
          <AboutCopy>
          For over 6 years I have been a UX and Product Design Lead helping teams plan, build, and bring products to market 
          primarily on the Salesforce platform. As a Salesforce certified UX designer and seasoned professional with over 15 
          years experience, I have worked with a wide range of clients in a variety of industries including Ford, Rocket Mortgage, 
          IQVIA, Salesforce, Mailchimp and Twilio.
          </AboutCopy>
          <AboutCopy>
          In my role as a product design lead at CodeScience, I am part of a diverse design team focused on the needs of people 
          using enterprise software. I collaborate across teams and roles as part of an agile build team helping to coordinate 
          with our clients and define product vision, roadmaps, and requirements for new offerings and existing product releases. 
          Using a human-centered design approach, I work closely with Product Owners and Technical Architects to deeply understand 
          user problems and how to solve them in innovative ways that leverage both design best practices and technical capabilities, 
          meeting the user's and business' needs.
          </AboutCopy>
        </AboutInfo>
      </AboutArticle>
      <AboutValues>
        <ValuesSection>
          My Values
          <ValuesStatement>
            <ValueIcon>😇</ValueIcon>Be Open. Be Honest. Build Trust.
          </ValuesStatement> 
          <ValueDesc>
            Relationships are all about trust and I believe nothing can build that trust faster than being open and honest with each other.
            Real opportunities for learning and growth happen when people feel free to truly be themselves. As a life long learner, I always want to
            help facilitate the creation spaces and relationships that are inclusive, welcoming and where others can trust that being honest is the best policy.
          </ValueDesc>
          <ValuesStatement>
            <ValueIcon>🤔</ValueIcon>Allow yourself to fail.
          </ValuesStatement>
          <ValueDesc>
            Embracing failure is hard, but it's great way to better understand how to avoid the same pitfalls in the future. My biggest advances
            have often come after analyzing a failure and learning from it. Over the years I've trained myself to see failure a success. Maybe it's my 
            optimism, but I also see it as an essential part of the learning process.
          </ValueDesc>
          <ValuesStatement>
            <ValueIcon>🙌</ValueIcon>Lift up those around you.
          </ValuesStatement>
          <ValueDesc>
            I wouldn't be where I'm at without all the support I've had over the years from my family, my friends and my colleagues. They've recognized
             me when I'm successful and when I'm struggling with something. It's important that I give that recognition back to others as often as possible. 
             Whether it's mentorships, knowledge sharing or just being there to listen, I want to be a force of positivity and help build up those around me.
          </ValueDesc>
          <ValuesStatement>
            <ValueIcon>🧘</ValueIcon>Take care of yourself.
          </ValuesStatement>
          <ValueDesc>
            Possibly the most important value of mine is making sure I'm healthy - mentally, physically and emotionally. I can't be good to others if I'm not good 
            to myself. So, yes, I take time to disconnect, realign and recharge. We all need that and it's definitely a priority for me.    
          </ValueDesc>
        </ValuesSection>
      </AboutValues>
    </AboutContainer>
  )
}

export default AboutSection