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
            <p className="mb-6 text-lg uppercase tracking-widest text-text-secondary">
              Hi, I&apos;m Max. Welcome to RZMRN.
            </p>
            <p className="text-2xl font-light leading-relaxed text-text-primary">
              This is my creative practice and digital sub-brand. As a Director
              of Post-Production and Motion Designer, I work with clients and
              teams worldwide — engineering both high-end visual stories and the
              technical workflows behind them.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-text-secondary">
              I don&apos;t just cut video; I build systems. Most recently,
              I&apos;ve been managing and scaling massive video course
              productions in the EdTech space. Whether I&apos;m handling huge
              volumes of educational content or crafting dynamic automotive
              commercials for brands like Mazda and Lotus, my approach is
              strictly practical. I integrate custom AI and automation pipelines
              into post-production to eliminate the routine bottlenecks, so the
              focus stays entirely on the creative work.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              My background is rooted in managing the chaos of large-scale
              productions. During my time as the full-time director for the
              Mazowsze ensemble, my work went far beyond a single flagship film.
              I ran the visual production for their tours, directed multi-camera
              live broadcasts, and designed large-scale animated campaigns for
              national digital billboards, including Warsaw Central Station.
            </p>
            <p className="text-lg font-medium leading-relaxed text-text-primary">
              For me, post-production is an engineering challenge just as much as
              an artistic one.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Based in Poland, available for remote commercial projects, brand
              films, and motion design commissions globally.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
