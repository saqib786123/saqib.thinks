"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "@/actions/post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewPostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const action = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value");
        formData.append("action", action || "draft");

        try {
            await createPost(formData);
            router.push("/admin");
        } catch (err) {
            console.error(err);
            alert("Failed to save post");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-8 max-w-4xl mx-auto h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-serif font-bold tracking-tight">New Article</h1>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-8">
                <div className="space-y-4">
                    <Input
                        name="title"
                        placeholder="Article Title..."
                        className="text-4xl font-serif font-bold border-0 focus-visible:ring-0 px-0 h-auto placeholder:text-slate-300 bg-transparent shadow-none rounded-none border-b focus-visible:border-slate-800"
                        required
                        autoFocus
                    />
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <Input name="category" placeholder="Category (e.g. Philosophy)" className="border-0 bg-slate-50" />
                        </div>
                        <div className="flex-1">
                            <Input name="tags" placeholder="Tags (comma separated)" className="border-0 bg-slate-50" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 min-h-[500px]">
                    <textarea
                        name="content"
                        className="w-full h-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none font-mono text-sm leading-relaxed"
                        placeholder="Write your content here... (Markdown supported visually)"
                        required
                    />
                </div>

                <div className="flex justify-end gap-4 pb-8 border-t pt-4">
                    <Button type="submit" variant="outline" value="draft" disabled={loading}>
                        Save as Draft
                    </Button>
                    <Button type="submit" value="publish" disabled={loading}>
                        Publish Article
                    </Button>
                </div>
            </form>
        </div>
    );
}
