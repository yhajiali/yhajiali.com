import Link from "next/link";
import Map from "./components/ui/Map";

export default function Home() {
  return (
    <>
      <section className="space-y-12">
        <div className="animate-fadein space-y-6">
          <figure className="animate-popout size-14 md:size-16">
            <div className="bg-background-secondary size-full rounded-full flex items-center justify-center font-semibold">
              YH
            </div>
          </figure>
          <div className="animate-fadein space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              I'm Yusuf Haji Ali.
            </h1>
            <p className="max-w-xl text-secondary">
              I'm a 26 year old Software Engineer based in the UK. Currently
              exploring new AI technologies, I've started by building projects
              using OpenAI's API 👨🏽‍💻
            </p>
          </div>
        </div>

        <div className="animate-fadein grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <Map lng={-2.244644} lat={53.483959} />
            <div className="absolute bottom-4 left-4 flex items-center rounded-lg bg-neutral-100/75 px-4 py-1.5 backdrop-blur dark:bg-neutral-900/75 md:bottom-6 md:left-6">
              <p className="text-sm font-medium text-primary">Manchester, UK</p>
            </div>
          </div>
          <div className="relative">
            <Map lng={-2.244644} lat={53.483959} />
            <div className="absolute bottom-4 left-4 flex items-center rounded-lg bg-neutral-100/75 px-4 py-1.5 backdrop-blur dark:bg-neutral-900/75 md:bottom-6 md:left-6">
              <p className="text-sm font-medium text-primary">Manchester, UK</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-secondary animate-fadein space-y-6">
        <div className="space-y-3">
          <h2 className="text-x text-foreground">Ongoing Projects</h2>
          <p className="max-w-xl">
            Some of my current passion projects. I'm always keen to listen to
            feedback (I've still got much to learn!)
          </p>
        </div>

        <div className="animated-list flex flex-nowrap snap-x snap-mandatory gap-6 overflow-x-scroll md:grid grid-cols-2 md:overflow-auto no-scrollbar">
          <div className="col-span-1 min-w-72 snap-start transition-opacity border border-background-secondary rounded-lg p-3">
            <h3 className="text-lg font-semibold text-foreground">Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="col-span-1 min-w-72 snap-start transition-opacity border border-background-secondary rounded-lg p-3">
            <h3 className="text-lg font-semibold text-foreground">Project 2</h3>
            <p>Description of Project 2</p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-x text-foreground">Get in touch!</h2>
          <p className="max-w-xl">
            Need more details, or interested in working together? Reach out at
            any of my{" "}
            <Link
              href="/links"
              className="underline underline-offset-4 hover:text-foreground transition-colors duration-200"
            >
              links
            </Link>
            . I'd be happy to connect!
          </p>
        </div>
      </section>
    </>
  );
}
