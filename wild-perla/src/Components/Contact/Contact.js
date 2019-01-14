import React from "react";
import { Section, Columns, Column, Content, Title, Field, FieldLabel, FieldBody, Input, Control, Button, Label, TextArea } from "bloomer";
import "./Contact.css";

const Contact = () => (
    <div>
        <Section id="contact">
            <Columns isCentered>
                <Column>
                    <Content>
                        <p>I'D LOVE TO HEAR FROM YOU! FILL OUT THE FORM BELOW AND YOU'LL HEAR BACK FROM ME SHORTLY.</p>
                    </Content>
                    <form method="POST" action="https://formspree.io/[ENTER EMAIL ADDRESS HERE]">
                        <Field>
                            <Label>Name</Label>
                            <Control>
                                <Input name="name" />
                            </Control>
                        </Field>
                        <Field>
                            <Label>Email</Label>
                            <Control>
                                <Input name="email" />
                            </Control>
                        </Field>
                        <Field>
                            <Label>Subject</Label>
                            <Control>
                                <Input name="subject" />
                            </Control>
                        </Field>
                    
                        <Field>
                        <Label>Message</Label>
                        <FieldBody>
                            <Field>
                                <Control>
                                    <TextArea name="message" className="messageBox" />
                                </Control>
                            </Field>
                        </FieldBody>
                        </Field>

                        <Field>
                        <FieldLabel /> {/* empty for spacing */}
                        <FieldBody>
                            <Field>
                                <Control>
                                    <Button type="submit">Submit</Button>
                                </Control>
                            </Field>
                        </FieldBody>
                        </Field>
                           
                    </form>
                </Column>
            </Columns>
        </Section>
    </div>
)

export default Contact;