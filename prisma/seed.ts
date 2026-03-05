import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Create a default user
    const user = await prisma.user.upsert({
        where: { email: 'saqib@example.com' },
        update: {},
        create: {
            email: 'saqib@example.com',
            name: 'Saqib',
            emailVerified: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    })

    console.log({ user })

    // Create initial articles
    const articles = [
        {
            slug: "exploring-the-intersection-of-power",
            title: "Exploring the Intersection of Power, Society & Freedom",
            content: "A deep dive into how modern bureaucratic systems shape human rights and our collective future, through the lens of political philosophy. [Full content placeholder]",
            category: "Philosophy",
            published: true,
            authorId: user.id,
        },
        {
            slug: "the-philosophy-of-hope",
            title: "The Philosophy of Hope and Resistance in Modern Times",
            content: "When systems fail to deliver justice, hope ceases to be an emotion and becomes a philosophical imperative for survival. [Full content placeholder]",
            category: "Human Rights",
            published: true,
            authorId: user.id,
        },
        {
            slug: "global-politics-shift",
            title: "The Silent Shift in Global Politics",
            content: "Emerging markets are rewriting the rules of diplomacy, leaving traditional powers attempting to catch up in a multi-polar world. [Full content placeholder]",
            category: "Global Politics",
            published: true,
            authorId: user.id,
        },
    ]

    for (const article of articles) {
        await prisma.post.upsert({
            where: { slug: article.slug },
            update: {},
            create: article,
        })
    }

    console.log('Seed data created successfully')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
