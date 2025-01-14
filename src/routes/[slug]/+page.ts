import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const development = await import(`../../developments/${params.slug}.md`)

		return {
			content: development.default,
			meta: development.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}