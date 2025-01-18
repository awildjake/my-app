import type { Development } from "$lib/types.ts";

export async function load({ fetch }) {
    const response = await fetch('api/developments')
    const developments: Development[] = await response.json()
    return { developments }
}