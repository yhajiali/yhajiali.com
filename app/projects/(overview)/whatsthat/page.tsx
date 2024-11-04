import React from "react";
import { Metadata } from "next";

import Heading from "@/app/components/ui/Heading";
import Carousel from "@/app/components/ui/Carousel";
import CustomLink from "@/app/components/ui/CustomLink";
import { Skeleton } from "@/components/ui/skeleton";

import { projects } from "@/lib/projects";
import { whatsthat } from "@/lib/mockups";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | WhatsThat",
  description:
    "A native messaging platform developed with React Native and Expo.",
};

const page = () => {
  return (
    <main className="relative space-y-14 animate-fadein">
      <Heading title="WhatsThat" />

      <section className="space-y-4">
        <h3>Overview</h3>

        <p>
          WhatsThat? is messaging platform which allows users to communicate
          with each other. Users sign up for an account with WhatsThat where
          they can then search for, add contacts and create chats with
          individuals or groups of contacts.
        </p>
        <p>
          This was developed while studying Mobile App Development during
          university, where I was tasked with interacting with a comprehensive
          API to build full user, contact, and chat management functionality.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-center">Technology Stack</h3>

        <ul className="flex flex-wrap justify-evenly gap-5">
          {projects
            .filter((project) => project.title === "WhatsThat")
            .map((project) =>
              project.techstack.map((tech, index) => (
                <li
                  className="transition flex flex-col items-center gap-2 text-sm"
                  key={index}
                >
                  <tech.icon className="size-8" />
                  <p>{tech.label}</p>
                </li>
              ))
            )}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Features</h3>

        <ul className="list-disc list-inside text-secondary dark:text-secondary-dark">
          <li>
            <b>User Authentication</b>: Secure user sign-up, login, and logout.
          </li>
          <li>
            <b>Contact Management</b>: Add, view, block, and unblock contacts.
          </li>
          <li>
            <b>Chat Management</b>: Create/edit chats, send/edit messages, and
            manage group members.
          </li>
          <li>
            <b>Search Functionality</b>: Search for users and contacts
            effieciently with paginated results.
          </li>
          <li>
            <b>Profile Customization</b>: View and update user details.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h3 className="mb-6">Wireframing to Development</h3>

        <p>
          Before diving into development, I created detailed wireframes in Figma
          to map out the main user interfaces and interactions. This ensured a
          solid foundation for the app’s structure and flow.
        </p>

        <div className="space-y-2 text-center text-sm py-4">
          <iframe
            className="rounded-md w-full shadow-md"
            width="800"
            height="450"
            src="https://embed.figma.com/design/hXnIFsH4kfp9vkiNL6IGgM/WhatsThat-Wireframe?node-id=0-1&embed-host=share"
            allowFullScreen
          />

          <p>WhatsThat Wireframing - Navigation Structure & Screens</p>
        </div>

        <p>
          Having never used Figma before this project, I quickly adapted to the
          tool, which became essential for designing key screens like the
          authentication pages, chat view, and user profile.
        </p>
        <p>
          Seeing the transformation from initial wireframes to the final app
          highlights how the design evolved and improved over time. This process
          allowed me to refine the user experience and make thoughtful
          adjustments with attention to detail.
        </p>

        <Carousel
          images={whatsthat}
          caption="Key screens showcasing the seamless UI of the final product."
          portrait
        />

        <p>
          To see how it all comes together,{" "}
          <CustomLink
            href={"https:/github.com/yhajiali/whatsthat"}
            label="explore the complete project on GitHub"
          />{" "}
          and delve into the code behind the app.
        </p>
      </section>

      <section className="space-y-6">
        <h3>Technical Details</h3>

        <ul className="space-y-3 text-secondary dark:text-secondary-dark italic">
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          {/* <li>API Integration:</li>
          <li>State Management:</li>
          <li>Routing & Navigation:</li>
          <li>Code Snippets:</li> */}
        </ul>
      </section>

      <section className="space-y-6">
        <h3>Challenges & Thought Process</h3>

        <div className="space-y-3">
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
        </div>
      </section>

      <section className="space-y-6">
        <h3>Learnings</h3>

        <div className="space-y-3">
          <p>
            During the development of WhatsThat, I gained valuable experience in
            API integration, focusing on asynchronous calls and endpoint
            interactions to ensure smooth data flow between the app and server.
          </p>

          <p>
            My first experience with Figma highlighted the importance of
            wireframing in designing user-friendly interfaces, helping me
            visualize app structure and streamline the design process.
          </p>

          <p>
            I learned to manage state effectively in React Native and overcame
            the challenges of error handling, which enhanced my problem-solving
            skills.
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
