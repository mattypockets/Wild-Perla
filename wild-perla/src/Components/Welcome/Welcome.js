import React from "react";
import { Section, Container, Content, Column, Columns, Image } from 'bloomer';
import './Welcome.css'


const Welcome = () => (

    <div>
        <Section>
            <Container>
                <Image src="images/WP_main_header.jpg" />
                <Content id="welcomeContent">
                    <h1>WILD PERLA</h1>
                    <h5>COLORFUL, SCANDINAVIAN-INSPIRED GOODS WITH A MINIMALIST FLAIR.</h5>
                </Content>
                <Columns>
                    <Column isSize="1/2">
                        <Image src="images/WP_main_img_left.jpg" />
                    </Column>
                    <Column isSize="1/2">
                        <Image src="images/WP_main_img_right.jpg" />
                    </Column>
                </Columns>
            </Container>
        </Section>
    </div>    

)

export default Welcome;