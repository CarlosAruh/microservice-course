fetch('http://localhost:8765/hr-workers/workers', {
  headers: {
    accept: '*/*',
    'accept-language': 'en-US,en; q=0.9,pt-BR;q=0.8,pt;0.7',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mod': 'cors',
    'sec-fetch-site': 'cross-site',
  },
  referrer: 'http://localhost:3000',
  referrerPolicy: 'no-referrer-when-downgrade',
  body: null,
  method: 'GET',
  mode: 'cors',
  credentials: 'omit',
});
