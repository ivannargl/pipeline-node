const app = require('./app');
const client = require('prom-client'); // Cliente de Prometheus

const PORT = 3000;

// 1. Habilitar métricas por defecto de Node.js (RAM, CPU del proceso) 
client.collectDefaultMetrics();

// 2. Crear métricas personalizadas (Contador de peticiones) 
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total de peticiones HTTP procesadas',
  labelNames: ['metodo', 'ruta', 'estado_http']
});

// Métrica personalizada (Usuarios activos simulados) 
const activeUsersGauge = new client.Gauge({
  name: 'active_users_current',
  help: 'Número actual de usuarios activos simulados'
});

// Middleware para contar cada petición que llega a tu servidor
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.labels(req.method, req.path, res.statusCode.toString()).inc();
  });
  next();
});

// 3. RUTA VITAL: Endpoint /metrics donde Prometheus leerá los datos 
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.send(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Métricas disponibles en http://localhost:${PORT}/metrics`);
});