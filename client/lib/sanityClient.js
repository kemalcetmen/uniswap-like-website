import sanityClient from '@sanity/client'
require('dotenv').config()


const TOKEN_ID  = process.env.TOKEN_ID;

const PROJECT_ID = process.env.PROJECT_ID;
export const client = sanityClient({
    projectId:PROJECT_ID,
    dataset: 'production',
    apiVersion: 'v1',
    token: TOKEN_ID,
    useCdn: false,
    ignoreBrowserTokenWarning: true
}) 