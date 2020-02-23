import * as contentful from 'contentful'

export default contentful.createClient({
  space: process.env.VUE_APP_CTF_SPACE_ID,
  accessToken: process.env.VUE_APP_CTF_CDA_ACCESS_TOKEN
})