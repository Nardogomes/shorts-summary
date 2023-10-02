import express from 'express'
import cors from 'cors'
import { download } from './download.js'

const serve = express()

serve.use(cors())

serve.get('/summary/:id', (request ,response ) => {
  const videoId = request.params.id
  
  download(videoId)
  
  response.json({ result: "Download realizado com sucesso." })
})

serve.listen(3333, () => console.log('Server is runnig on port 3333'))
