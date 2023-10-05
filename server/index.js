import express from 'express'
import cors from 'cors'
import { download } from './download.js'
import { transcribe } from './transcribe.js'
import { summarize } from './summarize.js'

const serve = express()
serve.use(express.json())
serve.use(cors())

serve.get('/summary/:id', async (request ,response ) => {
  await download(request.params.id)

  const result = await transcribe()
  
  return response.json({ result })
})

serve.post('/summary', async (request, response) => {
  const result = await summarize(request.body.text)

  return response.json({ result })
})

serve.listen(3333, () => console.log('Server is runnig on port 3333'))
