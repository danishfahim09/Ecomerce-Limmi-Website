import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Column,
    Row,
} from '@react-email/components';


import * as React from 'react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const EmailTemplate = ({ name = "", redirectUrl = "/login", linkText , description ,subject}) => (
   
    <Html>
        <Head />
        <Body style={main}>
            <Preview>
                {subject}
            </Preview>
            <Container style={container}>
                <Img
                    src={`${baseUrl}/static/github.png`}
                    width="32"
                    height="32"
                    alt="Github"
                />

                <Text style={title}>
                    <strong>@{name}</strong>, a personal access was created on your
                    account.
                </Text>

                <Section style={section}>
                    <Text style={text}>
                        Hey <strong>{name}</strong>!
                    </Text>
                    <Text style={text}>
                       {description}
                    </Text>

                    <Link style={button} href={`${baseUrl}/${redirectUrl}`}>
                    {linkText}
                    </Link>
                    <Button style={button}>View your token</Button>
                </Section>

                <Section>
                    <Row style={footerLogos}>
                        <Column style={{ width: '66%' }}>
                            <Img
                                src={`${baseUrl}/static/slack-logo.png`}
                                width="120"
                                height="36"
                                alt="Slack"
                            />
                        </Column>
                        <Column>
                            <Section>
                                <Row>
                                    <Column>
                                        <Link href="/">
                                            <Img
                                                src={`${baseUrl}/static/slack-twitter.png`}
                                                width="32"
                                                height="32"
                                                alt="Slack"
                                                style={socialMediaIcon}
                                            />
                                        </Link>
                                    </Column>
                                    <Column>
                                        <Link href="/">
                                            <Img
                                                src={`${baseUrl}/static/slack-facebook.png`}
                                                width="32"
                                                height="32"
                                                alt="Slack"
                                                style={socialMediaIcon}
                                            />
                                        </Link>
                                    </Column>
                                    <Column>
                                        <Link href="/">
                                            <Img
                                                src={`${baseUrl}/static/slack-linkedin.png`}
                                                width="32"
                                                height="32"
                                                alt="Slack"
                                                style={socialMediaIcon}
                                            />
                                        </Link>
                                    </Column>
                                </Row>
                            </Section>
                        </Column>
                    </Row>
                </Section>

                <Text style={links}>
                    <Link style={link}>Your security audit log</Link> ・{' '}
                    <Link style={link}>Contact support</Link>
                </Text>

                <Text style={footer}>
                    GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
                </Text>
            </Container>
        </Body>
    </Html>
);
export default EmailTemplate

const main = {
    backgroundColor: '#ffffff',
    color: '#24292e',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};
const socialMediaIcon = {
    display: 'inline',
    marginLeft: '32px',
};
const footerLogos = {
    marginBottom: '32px',
    paddingLeft: '8px',
    paddingRight: '8px',
    display: 'block',
};
const container = {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '20px 0 48px',
};

const title = {
    fontSize: '24px',
    lineHeight: 1.25,
};

const section = {
    padding: '24px',
    border: 'solid 1px #dedede',
    borderRadius: '5px',
    textAlign: 'center',
};

const text = {
    margin: '0 0 10px 0',
    textAlign: 'left',
};

const button = {
    fontSize: '14px',
    backgroundColor: '#28a745',
    color: '#fff',
    lineHeight: 1.5,
    borderRadius: '0.5em',
    padding: '12px 24px',
};

const links = {
    textAlign: 'center'
};

const link = {
    color: '#0366d6',
    fontSize: '12px',
};

const footer = {
    color: '#6a737d',
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '60px',
};