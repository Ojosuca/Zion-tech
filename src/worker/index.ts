import { Hono } from 'hono'

// ADICIONE ESTA INTERFACE - é obrigatória para a tipagem do Hono
interface Env {
  // Defina suas variáveis de ambiente do Cloudflare aqui
  // Exemplo (quando precisar):
  // DB: D1Database;
  // KV: KVNamespace;
  // API_KEY: string;
}

const app = new Hono<{ Bindings: Env }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app