import express from 'express'
import cors from 'cors'

const serve = express()

serve.use(cors())

serve.get('/summary/:id', (request ,response ) => {
  const videoId = request.params.id
  console.log(videoId)
  response.send('Só alegria')
})

serve.listen(3333, () => console.log('Server is runnig on port 3333'))
