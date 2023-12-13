import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 1000 },
    { duration: '10s', target: 1000 },
    { duration: '5s', target: 0 },
  ],
  discardResponseBodies: true,
};

export default () => {
  const product = Math.floor(Math.random() * 1000011);
  http.get(`http://localhost:3000/products/${product}`);
  sleep(1);
};