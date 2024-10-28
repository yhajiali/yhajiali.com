"use client";

import React, { useState, useEffect, useRef } from "react";
import Input from "./ui/Input";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactData, setContactData] = useState({});
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    formRef.current = document.getElementById(
      "contact-form"
    ) as HTMLFormElement; // Accessing document in useEffect
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true);

    const response = await fetch("/api/send/", {
      method: "POST",
      body: JSON.stringify(contactData),
    });

    if (response.ok) {
      // Handle successful submission
      toast({
        description: "Your message has been sent",
      });
      formRef.current?.reset();
    } else {
      // Handle error
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12" id="contact-form">
      <div className="flex flex-col items-center gap-y-5 gap-x-4 [&>*]:w-full sm:flex-row">
        <Input
          label="First name"
          id="firstname"
          placeholder={"John"}
          type="text"
          onChange={(e) =>
            setContactData({ ...contactData, firstName: e.target.value })
          }
        />
        <Input
          label="Last name"
          id="lastname"
          placeholder={"Doe"}
          type="text"
          onChange={(e) =>
            setContactData({ ...contactData, lastName: e.target.value })
          }
        />
      </div>

      <Input
        label="Email"
        id="email"
        placeholder={"you@domain.com"}
        type="email"
        onChange={(e) =>
          setContactData({ ...contactData, email: e.target.value })
        }
      />

      <Input
        label="Subject"
        id="subject"
        placeholder={"Let's connect and discuss!"}
        type="text"
        onChange={(e) =>
          setContactData({ ...contactData, subject: e.target.value })
        }
      />

      <div className="space-y-3 animate-fadein">
        <Input
          label="Message"
          id="message"
          placeholder={"💼 I have a great opportunity for you..."}
          textarea
          onChange={(e) =>
            setContactData({ ...contactData, message: e.target.value })
          }
        />
        <button className="w-full inline-flex justify-center px-4 py-2 text-white font-medium bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-lg duration-150">
          {isSubmitting ? (
            <AiOutlineLoading3Quarters className="size-5 animate-spin" />
          ) : (
            "Send"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
