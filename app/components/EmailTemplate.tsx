import * as React from "react";

interface EmailTemplateProps {
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  email,
}) => (
  <div>
    <p>{message}</p>
    <p>get back to me at {email}</p>
  </div>
);
