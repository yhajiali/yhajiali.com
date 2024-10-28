import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type EmailTemplateProps = {
  email: string;
  message: string;
};

export const EmailTemplate = ({ email, message }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>{message}</Text>

        <Section style={btnContainer}>
          <Button style={button} href={`mailto:${email}`}>
            Reply to {email}
          </Button>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          &copy; {new Date().getFullYear()} Yusuf Haji-Ali. All rights reserved
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#006cd2",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
