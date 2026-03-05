import Link from "next/link";
import { notFound } from "next/navigation";

// Since we are mocking database currently
const MOCK_ARTICLE = {
    title: "Exploring the Intersection of Power, Society & Freedom",
    content: `
    <p>The modern era presents a profound challenge to classical liberalism and the democratic ideals that emerged from the Enlightenment. As bureaucratic systems become increasingly complex, the individual's relationship with power has fundamentally shifted.</p>
    
    <p>We see this not just in the overt actions of governments, but in the subtle architecture of technology, corporate monopolies, and the very structure of our daily lives. The question is no longer just "who holds power?" but "how is power distributed in a system where no single entity seems fully in control?"</p>
    
    <blockquote>Freedom is not merely the absence of coercion; it is the presence of agency within the structures that define our reality.</blockquote>

    <p>In rethinking our approach to society, we must look beyond traditional political boundaries and understand the systemic nature of true freedom. This requires a renewed commitment to philosophical inquiry—asking the hard questions about what it means to be human in an age of algorithmic decision-making and unprecedented concentration of wealth.</p>
    
    <p>The role of the journalist and the thinker in this era is not just to report facts, but to provide the necessary intellectual framework for understanding them. Without this framework, facts are easily manipulated, and the truth remains obscured.</p>
  `,
    date: "Mar 5, 2026",
    readTime: "8 min read",
    author: "Saqib",
    category: "Philosophy",
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Minimal slug check
    if (!slug) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-3xl">
            <header className="mb-12">
                <div className="flex items-center gap-3 text-sm text-slate-500 font-sans font-medium mb-6">
                    <Link href="/articles" className="hover:text-slate-900 transition-colors">Articles</Link>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-slate-800 bg-slate-100 px-2 py-0.5 rounded-full text-xs">{MOCK_ARTICLE.category}</span>
                </div>

                <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight leading-tight text-slate-900 mb-8">
                    {MOCK_ARTICLE.title}
                </h1>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                        {MOCK_ARTICLE.author[0]}
                    </div>
                    <div>
                        <div className="font-medium text-slate-900">{MOCK_ARTICLE.author}</div>
                        <div className="text-sm text-slate-500 flex items-center gap-2">
                            <span>{MOCK_ARTICLE.date}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{MOCK_ARTICLE.readTime}</span>
                        </div>
                    </div>
                </div>
            </header>

            <div
                className="prose prose-lg md:prose-xl prose-slate max-w-none font-serif prose-p:leading-relaxed prose-headings:font-sans prose-headings:font-bold prose-blockquote:border-l-4 prose-blockquote:border-slate-800 prose-blockquote:text-slate-800 prose-blockquote:font-medium prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: MOCK_ARTICLE.content }}
            />
        </article>
    );
}
