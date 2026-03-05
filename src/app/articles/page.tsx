import Link from "next/link";
import { Button } from "@/components/ui/button";

const MOCK_ARTICLES = [
    {
        slug: "exploring-the-intersection-of-power",
        title: "Exploring the Intersection of Power, Society & Freedom",
        excerpt: "A deep dive into how modern bureaucratic systems shape human rights and our collective future, through the lens of political philosophy.",
        date: "Mar 5, 2026",
        readTime: "8 min read",
        category: "Philosophy",
    },
    {
        slug: "the-philosophy-of-hope",
        title: "The Philosophy of Hope and Resistance in Modern Times",
        excerpt: "When systems fail to deliver justice, hope ceases to be an emotion and becomes a philosophical imperative for survival.",
        date: "Mar 3, 2026",
        readTime: "5 min read",
        category: "Human Rights",
    },
    {
        slug: "global-politics-shift",
        title: "The Silent Shift in Global Politics",
        excerpt: "Emerging markets are rewriting the rules of diplomacy, leaving traditional powers attempting to catch up in a multi-polar world.",
        date: "Feb 28, 2026",
        readTime: "12 min read",
        category: "Global Politics",
    },
];

export default function ArticlesPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-4xl">
            <header className="mb-16">
                <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-4 text-slate-900">
                    Articles & Essays
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                    Deep dives, intellectual explorations, and stories from the field.
                </p>
            </header>

            <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                {["All", "Global Politics", "Philosophy", "Human Rights", "Stories of Hope"].map((tag) => (
                    <Button key={tag} variant={tag === "All" ? "default" : "outline"} className="rounded-full rounded-md whitespace-nowrap">
                        {tag}
                    </Button>
                ))}
            </div>

            <div className="space-y-16">
                {MOCK_ARTICLES.map((article) => (
                    <article key={article.slug} className="group">
                        <Link href={`/articles/${article.slug}`}>
                            <div className="cursor-pointer">
                                <div className="flex items-center gap-3 text-sm text-slate-500 font-sans font-medium mb-3">
                                    <span>{article.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                    <span className="text-slate-800 bg-slate-100 px-2 py-0.5 rounded-full text-xs">{article.category}</span>
                                </div>
                                <h2 className="font-serif text-3xl font-bold leading-tight mb-3 group-hover:text-slate-700 transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-500">{article.readTime}</span>
                                    <span className="text-sm font-medium text-slate-900 group-hover:underline">Read article &rarr;</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
