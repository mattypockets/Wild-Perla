import React from "react";
import { Section, Columns, Column, Content, Title, Field, FieldLabel, FieldBody, Input, Control, Button, Label, TextArea } from "bloomer";
import "./Footer.css";

const Footer = () => (
    <div>
        <Footer id='footer'>
            <Container>
                <Content>
                    <Columns>
                        <Column isFull>
                            <p>
                                <Icon  className='far fa-copyright' /> WILD PERLA, LLC
                            </p>
                        </Column>
                    </Columns>
                    <Content>
                        <Icon href='https://www.facebook.com/wildperla/' className='fab fa-facebook-f' target='_blank'/>
                        <Icon href='http://instagram.com/wildperla' className='fab fa-instagram' target='_blank'/>
                    </Content>
                </Content>
            </Container>
        </Footer>
    </div>
)

export default Footer;