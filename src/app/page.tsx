import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-5xl">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
          Ideas that matter.<br /> Stories of hope.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl leading-relaxed">
          The digital newsroom and intellectual journal of a thinker exploring global politics, philosophy, and society.
        </p>
        <Button asChild size="lg" className="rounded-full px-8 text-md font-sans bg-slate-900 text-slate-50 hover:bg-slate-800">
          <Link href="/articles">Read Latest Writings</Link>
        </Button>
      </section>

      {/* Featured Section */}
      <section className="mb-20">
        <h2 className="font-sans text-xs uppercase tracking-widest text-slate-500 font-semibold mb-8 border-b border-slate-200 pb-2">
          Featured Story
        </h2>
        <div className="group cursor-pointer">
          <h3 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 group-hover:text-slate-700 transition-colors">
            Exploring the Intersection of Power, Society & Freedom
          </h3>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl">
            A deep dive into how modern bureaucratic systems shape human rights and our collective future, through the lens of political philosophy.
          </p>
          <div className="flex items-center text-sm text-slate-500 font-sans font-medium">
            <span>Mar 5, 2026</span>
            <span className="mx-2">&middot;</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Latest Writings */}
      <section>
        <h2 className="font-sans text-xs uppercase tracking-widest text-slate-500 font-semibold mb-8 border-b border-slate-200 pb-2">
          Latest Writings
        </h2>
        <div className="space-y-12">
          {[1, 2, 3].map((i) => (
            <article key={i} className="group cursor-pointer">
              <h3 className="font-serif text-2xl font-bold leading-tight mb-2 group-hover:text-slate-700 transition-colors">
                The Philosophy of Hope and Resistance in Modern Times
              </h3>
              <p className="text-slate-600 mb-3">
                When systems fail to deliver justice, hope ceases to be an emotion and becomes a philosophical imperative for survival.
              </p>
              <div className="flex items-center text-sm text-slate-500 font-sans font-medium">
                <span>Mar {10 - i}, 2026</span>
                <span className="mx-2">&middot;</span>
                <span>Philosophy</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
