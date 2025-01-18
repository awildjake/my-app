import { json } from "@sveltejs/kit"
import type { Development } from "$lib/types.ts"


async function getDevelopments() {
    let developments = []

    const paths = import.meta.glob('/src/developments/*.md', {
        eager: true
    })

    
    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file=== 'object' &&  'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Development, 'slug'>
            const development = { ...metadata, slug } satisfies Development
            development.published && developments.push(development)
        }
    }

    developments = developments.sort((first, second) => first.units - second.units);

    return developments
}

export async function GET() {
    const developments = await getDevelopments()
    return json(developments)
}

