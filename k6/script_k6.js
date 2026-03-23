import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 10,         // Simula 10 usuarios al mismo tiempo [cite: 117]
  duration: '30s', // Durante 30 segundos
};

export default function () {
  // 1. Petición a la raíz (Genera métricas de tráfico) [cite: 13]
  http.get('http://localhost:3000/'); 
  
  // 2. Petición a /health (Para ver estados 200) [cite: 104]
  http.get('http://localhost:3000/health');
  
  // 3. Petición a una ruta que no existe (Para generar errores 404/500 y verlos en Grafana) [cite: 106]
  http.get('http://localhost:3000/error-test');

  sleep(1); // Espera 1 segundo entre ráfagas
}