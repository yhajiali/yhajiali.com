import React from "react";
import { Metadata } from "next";

import Heading from "@/app/components/ui/Heading";
import Carousel from "@/app/components/ui/Carousel";
import CustomLink from "@/app/components/ui/CustomLink";

import { projects } from "@/lib/projects";
import { whatsthat } from "@/lib/carousel";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | WhatsThat",
  description:
    "A native messaging platform developed with React Native and Expo.",
};

const page = () => {
  return (
    <article className="space-y-14 animate-fadein">
      <Heading title="WhatsThat" subtitle="July 2023" />

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
      </section>

      <section className="space-y-6">
        <h3>Technical Details</h3>

        <p>
          For this project, I worked with an API server that provided endpoints
          covering user, contact, and chat management. This setup allowed users
          to sign up, log in, and handle their profiles while supporting
          features like searching for other users, managing contacts, and
          creating chat groups.
        </p>

        <p>
          I set up API requests for each endpoint and used <code>useState</code>{" "}
          and <code>useEffect</code> hooks to manage state and keep the data
          flowing smoothly between components, updating dynamically as users
          interacted with the app.
        </p>

        <figure className="space-y-3 py-3">
          <Image
            src="/projects/whatsthat/wt-notion.png"
            alt="My Notion - WhatsThat API Endpoints checklist"
            className="aspect-video size-full object-cover rounded-md shadow-md"
            width={400}
            height={300}
          />
          <figcaption>My Notion - WhatsThat API Endpoints</figcaption>
        </figure>

        <p>
          To manage navigation, I used React Native’s tab navigation, which
          provided an intuitive layout for users to switch between different
          sections, like chat, contacts, and settings. The tab-based structure
          kept the UI clean and simple to navigate.
        </p>

        <p>
          Each component was styled with React Native’s <code>StyleSheet</code>{" "}
          where I created dedicated stylesheets and applied them to components,
          keeping styles modular and easy to maintain.
        </p>
      </section>

      <section className="space-y-6">
        <h3>Challenges & Thought Process</h3>

        <div className="space-y-3"></div>

        <p>
          Developing WhatsThat introduced several challenges, especially with
          API interaction and error handling. One recurring issue was unexpected
          server and unauthorised errors, especially when interacting with
          DELETE or PATCH endpoints, like editing a message or unblocking a
          user.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 space-y-14 sm:space-y-0">
          <figure className="space-y-3 size-full">
            <Image
              src="/projects/whatsthat/wt-code-errorlog.png"
              alt="Server error when trying to edit a message"
              className="size-full object-cover rounded-md shadow-md"
              width={400}
              height={300}
            />
            <figcaption>Server error when trying to edit a message</figcaption>
          </figure>

          <figure className="space-y-3 size-full">
            <video
              src="/projects/whatsthat/wt-block-user.mov"
              className="aspect-video rounded-md shadow-md size-full"
              controls
            />
            <figcaption>
              Unauthorised error when trying to block a user
            </figcaption>
          </figure>
        </div>

        <p className="pt-24 sm:pt-12">
          Initially, these errors weren’t well-documented, so I had to debug by
          inspecting API responses and tweaking the request headers and body
          format. Through persistent trial and error, I was able to identify and
          resolve these issues by adapting the request structure to match API
          requirements more precisely.
        </p>

        <p>
          I also resolved issues with Axios after realizing that I had been
          using the incorrect syntax for some of the request methods, which
          contributed to the unauthorized errors I was facing.
        </p>

        <p>
          To see how the app all comes together,{" "}
          <CustomLink
            href={"https:/github.com/yhajiali/whatsthat"}
            label="explore the complete project on GitHub"
          />{" "}
          and delve into the code.
        </p>
      </section>

      <section className="space-y-6">
        <h3>Learnings</h3>

        <div className="space-y-3">
          <p>
            Ultimately, this project not only deepened my understanding of React
            Native and API integration but also highlighted the importance of
            resilience and thorough testing in app development. These
            experiences have sharpened my ability to troubleshoot and adapt,
            making me more confident in tackling complex mobile app features.
          </p>

          <p>
            My first experience with Figma highlighted the importance of
            wireframing in designing user-friendly interfaces, helping me
            visualize app structure and streamline the design process.
          </p>

          <p>
            Overall, I enjoyed developing this app and would love to explore
            more Mobile App Development in future.
          </p>
        </div>
      </section>
    </article>
  );
};

export default page;
