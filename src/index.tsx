import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import { request } from 'http';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'coco',
          type: 'deposit',
          category: 'merda',
          amount: 10000,
          createdAt: new Date('2021-02-12 09:00:39'),
        },
        {
          id: 2,
          title: 'mijo',
          type: 'withdraw',
          category: 'limpo',
          amount: 5000,
          createdAt: new Date('2021-02-17 10:00:39'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

