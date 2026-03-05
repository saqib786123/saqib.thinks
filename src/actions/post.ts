"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function createPost(formData: FormData) {
    const reqHeaders = await headers();
    const session = await auth.api.getSession({
        headers: reqHeaders,
    });

    if (!session) {
        throw new Error("Unauthorized");
    }

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const tags = formData.get("tags") as string;
    const isDraft = formData.get("action") === "draft";

    // Naive slug generation
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.random().toString(36).substring(2, 6);

    await prisma.post.create({
        data: {
            title,
            slug,
            content,
            category,
            tags,
            published: !isDraft,
            authorId: session.user.id,
        },
    });

    revalidatePath("/admin");
    revalidatePath("/articles");
}
