import cors from 'cors'
import express from 'express'

import { convert } from './convert.js'
import { download } from './download.js'
import { transcribe } from './transcribe.js'
import { summarize } from './summarize.js'

const serve = express()
serve.use(express.json())
serve.use(cors())

serve.get('/summary/:id', async (request ,response ) => {
  try {
    await download(request.params.id)
    const audioConverted = await convert()
    const result = await transcribe(audioConverted)
    
    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

serve.post('/summary', async (request, response) => {
  try {
    const result = await summarize(request.body.text)
    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

serve.listen(3333, () => console.log('Server is runnig on port 3333'))
