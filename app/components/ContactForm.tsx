"use client";

import React from "react";
import Input from "./ui/Input";

const ContactForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-12">
      <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
        <Input
          label="First name"
          id="firstname"
          placeholder={"Enter your first name"}
          type="text"
        />
        <Input
          label="Last name"
          id="lastname"
          placeholder={"Enter your last name"}
          type="text"
        />
      </div>
      <div>
        <Input
          label="Email"
          id="email"
          placeholder={"you@example.com"}
          type="email"
        />
      </div>

      <div className="space-y-3 animate-fadein">
        <Input
          label="Message"
          id="message"
          placeholder={"💼 I have a great opportunity for you..."}
          textarea
        />
        <button className="w-full px-4 py-2 text-white font-medium bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-lg duration-150">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
