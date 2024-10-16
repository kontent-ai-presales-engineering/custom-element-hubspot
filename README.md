# Getting Started

To start the development server run:
- `npm ci` - install dependencies
- `npm run dev` start the development server usually on the https://localhost:8888 (the port can be different if 8888 is already in use)
- The `npm run dev` generates a self-signed certificate for the development server.
  Open the url in a browser and proceed to the website through the browser warning.
- Once you proceed, the browser will remember the exception and will not ask again. (Works in chromium-based browsers)
  Then the element will properly load in the `iframe` in Kontent.ai.
- This element requires no configuration in Kontent.ai content type.

`npm run dev` uses `netlify dev` under the hood to run a netlify function locally.
The function is needed to load forms from hubspot and avoid passing the Hubspot access key to the FE application.
You can find the function here `netlify/functions/load-available-forms.mts`.

