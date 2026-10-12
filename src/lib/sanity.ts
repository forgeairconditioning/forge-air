import { createClient } from '@sanity/client'

const client = createClient({
    projectId: import.meta.env.SANITY_PROJECT_ID,
    dataset: import.meta.env.SANITY_DATASET,
    apiVersion: '2026-10-10',
    useCdn: false,
})

export default client   