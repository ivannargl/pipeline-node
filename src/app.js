const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pipeline Node API</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', sans-serif;
          background: #1e0334;
          color: #e2e8f0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .container { max-width: 700px; width: 100%; }
        .badge {
          display: inline-block;
          background: #22c55e;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
          letter-spacing: 1px;
        }
        h1 { font-size: 2rem; margin-bottom: 8px; }
        .subtitle { color: #94a3b8; margin-bottom: 40px; font-size: 0.95rem; }
        .endpoints { display: flex; flex-direction: column; gap: 12px; }
        .card {
          background: #211e3b;
          border: 1px solid #334155;
          border-radius: 10px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .method {
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          background: #0ea5e9;
          color: #fff;
          min-width: 50px;
          text-align: center;
        }
        .route { font-size: 1rem; font-weight: 600; flex: 1; }
        .desc { color: #94a3b8; font-size: 0.85rem; }
        .footer { margin-top: 40px; color: #b0b0b0; font-size: 0.8rem; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <span class="badge">EN LÍNEA</span>
        <h1>Pipeline Node API</h1>
        <p class="subtitle">API REST desplegada con CI/CD en Google Cloud · Docker · GitHub Actions</p>

        <div class="endpoints">
          <div class="card">
            <span class="method">GET</span>
            <div>
              <div class="route">/health</div>
              <div class="desc">Estado del servidor</div>
            </div>
          </div>
          <div class="card">
            <span class="method">GET</span>
            <div>
              <div class="route">/items</div>
              <div class="desc">Lista de productos disponibles</div>
            </div>
          </div>
        </div>

        <p class="footer">Desplegado automáticamente vía GitHub Actions · ${new Date().toLocaleDateString('es-MX', { dateStyle: 'long' })}</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/items', (req, res) => {
  const items = [
    { id: 1, name: 'Laptop', stock: 5, price: 1000 },
    { id: 2, name: 'Mouse', stock: 10, price: 50 }
  ];
  res.status(200).json(items);
});

module.exports = app;