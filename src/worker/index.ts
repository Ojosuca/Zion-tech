import { Hono } from 'hono'

// Se você mantiver o worker-configuration.d.ts, use:
// import type { Env } from '../../worker-configuration'

// Se remover o worker-configuration.d.ts, defina localmente:
interface Env {
  // Suas bindings do Cloudflare Worker
}

const app = new Hono<{ Bindings: Env }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app