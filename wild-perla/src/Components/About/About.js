import React from "react";
import { Section, Container, Content, Image } from 'bloomer';
import './About.css'


const About = () => (

    <div>
        <Section>
            <Container>
                <Image src="/images/WP_about.jpg" />
                <Content className="aboutContent">
                    <p>HI GUYS! I'M MAGGIE. WILD PERLA IS MY STATIONERY BUSINESS, BORN OUT OF MY DEEP LOVE FOR MAKING AND CREATING.
                    DESPITE A MORE FORMAL BACKGROUND IN ADVERTISING AND FREELANCE DESIGN WORK, I HAVE ALWAYS LOVED ILLUSTRATION AND
                    DREAMT OF STARTING MY OWN LINE OF PRINTED GOODS.</p>
                    
                    <p>I LIVE IN THE LOVELY CITY OF ST. PAUL WITH MY HUSBAND AND RESCUE PUP. MINNESOTA'S RICH SCANDINAVIAN CULTURE
                    AND PRAIRIE LIFE ARE THE INSPIRATION FOR MUCH OF MY WORK, AND WE LOVE CALLING THIS STATE HOME.</p>
                </Content>
            </Container>
        </Section>
    </div>    

)

export default About;