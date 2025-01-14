export type Phase = 'Under Review' | 'Approved'

export type Development = {
    title: string
    slug: string
    address: string
    developer: string
    municipality: string
    units: number
    phase: Phase
    permits: Record<string, any>
    geometry: any[]
    published: boolean
}