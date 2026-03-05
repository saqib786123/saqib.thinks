import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-3xl">
            <header className="mb-16">
                <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900">
                    About saqib.thinks
                </h1>
            </header>

            <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-serif prose-p:leading-relaxed">
                <p className="text-2xl font-sans text-slate-600 font-light mb-8 leading-snug">
                    I am a content creator, journalist, and thinker exploring the intersection of global politics, philosophy, human rights, and the stories of hope that connect us all.
                </p>

                <p>
                    Welcome to my digital newsroom and intellectual journal. <strong>saqib.thinks</strong> was born out of a desire to create a space for deep, distraction-free reading in a world increasingly dominated by fleeting content and superficial analysis.
                </p>

                <h2 className="font-sans font-bold text-2xl mt-12 mb-4">The Mission</h2>
                <p>
                    My work is dedicated to exploring the systemic structures that shape our reality. Whether dissecting the shifting paradigms of global power, philosophical inquiries into the nature of society, or amplifying the voices of those fighting for fundamental human rights, the goal remains the same: to uncover the truth and present it with clarity and integrity.
                </p>

                <p>
                    I believe that journalism is not merely the recitation of facts, but the courageous pursuit of understanding. It requires empathy, intellectual rigor, and an unwavering commitment to honesty.
                </p>

                <h2 className="font-sans font-bold text-2xl mt-12 mb-4">The Approach</h2>
                <p>
                    This platform is designed to respect your time and attention. You will find no sensationalist clickbait, no intrusive advertisements, and no algorithm designed to hijack your focus. The design is deliberately minimal, inspired by the best editorial traditions, prioritizing the written word and the ideas it conveys.
                </p>

                <p>
                    Thank you for reading, and for joining me in this ongoing intellectual journey.
                </p>
            </div>
        </div>
    );
}
