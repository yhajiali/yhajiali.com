export default function Home() {
  return (
    <section className="flex flex-col gap-16 md:gap-24">
      <div className="animate-fadein space-y-6">
        <figure className="animate-popout size-14 md:size-16">
          <div className="bg-background-secondary size-full rounded-full flex items-center justify-center font-semibold">
            YH
          </div>
        </figure>
        <div className="animate-fadein space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            I'm Yusuf Haji Ali.
          </h1>
          <p className="max-w-lg text-secondary">
            I'm a 26 year old Software Engineer based in the UK. Currently
            exploring new AI technologies, I've started by building projects
            using OpenAI's API 👨🏽‍💻
          </p>
        </div>
      </div>
    </section>
  );
}
