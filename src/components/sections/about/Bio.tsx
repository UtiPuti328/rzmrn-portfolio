import Container from "@/components/ui/Container";

export default function Bio() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <h1 className="font-heading text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          About
        </h1>
        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <p className="text-2xl font-light leading-relaxed text-text-primary">
              I&apos;m a director of post-production and motion designer who
              believes the best visual stories emerge from the tension between
              physical craft and digital precision.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-text-secondary">
              With over 15 years in the industry, I&apos;ve worked across
              commercials, music videos, documentaries, and brand films. My
              approach starts with understanding the narrative — then finding the
              visual language that serves it best.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              I&apos;m drawn to projects that push boundaries: mixing analog and
              digital processes, experimenting with unconventional editing
              rhythms, and treating post-production as a creative discipline
              rather than a technical afterthought.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Based in Warsaw, working remotely with clients worldwide.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
