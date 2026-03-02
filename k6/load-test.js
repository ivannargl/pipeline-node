import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 10,        // 10 usuarios virtuales
  duration: '10s' // durante 10 segundos
};

export default function () {

  // Endpoint 1
  let health = http.get('http://localhost:3000/health');
  check(health, {
    'health status 200': (r) => r.status === 200,
  });

  // Endpoint 2
  let items = http.get('http://localhost:3000/items');
  check(items, {
    'items status 200': (r) => r.status === 200,
  });

  sleep(1);
}