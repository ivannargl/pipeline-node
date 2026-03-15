const request = require('supertest');
const app = require('../src/app');
const { calculateValue } = require('../src/logic');

describe('Suite de Pruebas de Calidad de Software', () => {

  describe('Pruebas Unitarias - Lógica de Inventario', () => {

    test('Debe calcular correctamente el valor total (10 * 5 = 50)', () => {
      const result = calculateValue(10, 5);
      expect(result).toBe(50);
    });

    test('Debe retornar 0 si se ingresan valores negativos', () => {
      const result = calculateValue(-10, 5);
      expect(result).toBe(0);
    });

    // VALIDACIÓN EXTRA 1 (JEST)
    test('Debe retornar 0 si el stock es negativo', () => {
      const result = calculateValue(10, -5);
      expect(result).toBe(0);
    });

    // VALIDACIÓN EXTRA 2 (JEST)
    test('Debe retornar 0 si precio es 0', () => {
      const result = calculateValue(0, 10);
      expect(result).toBe(0);
    });

  });

  describe('Pruebas de Integración - API Endpoints', () => {

    test('GET /health - Debe responder con status 200 y JSON correcto', async () => {
      const response = await request(app).get('/health');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('status', 'OK');
    });

    // VALIDACIÓN EXTRA 4 (SUPERTEST)
    test('GET /ruta-inexistente - Debe responder 404', async () => {
      const response = await request(app).get('/no-existe');
      expect(response.statusCode).toBe(404);
    });

  });
});
