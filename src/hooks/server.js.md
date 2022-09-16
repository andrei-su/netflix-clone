// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

const stripe = require('stripe');
const express = require('express');
const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_e8792a84ddafc1ff23b7d86259fcca7daa0db06bb5f8b6427b19e12790535c97";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // Then define and call a function to handle the event checkout.session.completed
      break;
    case 'customer.subscription.created':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.created
      break;
    case 'customer.subscription.deleted':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.deleted
      break;
    case 'customer.subscription.updated':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.updated
      break;
    case 'price.created':
      const price = event.data.object;
      // Then define and call a function to handle the event price.created
      break;
    case 'price.deleted':
      const price = event.data.object;
      // Then define and call a function to handle the event price.deleted
      break;
    case 'price.updated':
      const price = event.data.object;
      // Then define and call a function to handle the event price.updated
      break;
    case 'product.created':
      const product = event.data.object;
      // Then define and call a function to handle the event product.created
      break;
    case 'product.deleted':
      const product = event.data.object;
      // Then define and call a function to handle the event product.deleted
      break;
    case 'product.updated':
      const product = event.data.object;
      // Then define and call a function to handle the event product.updated
      break;
    case 'tax_rate.created':
      const taxRate = event.data.object;
      // Then define and call a function to handle the event tax_rate.created
      break;
    case 'tax_rate.updated':
      const taxRate = event.data.object;
      // Then define and call a function to handle the event tax_rate.updated
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));