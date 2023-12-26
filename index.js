// Require the framework and instantiate it
var fastify = require('fastify')({ logger: false })
var axios = require('axios');

// Declare a route
fastify.post('/fetch', async (request, reply) => {
  return await axios(request.body).then(res => {
    return {
      status: res.status,
      statusText: res.statusText,
      data: res.data,
      headers: res.headers,
    }
  });
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()