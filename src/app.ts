import fastify from 'fastify'

export const app = fastify()

app.get('/hello', () => {
  return "Iniciando projeto"
})