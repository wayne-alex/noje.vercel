const express = require('express');
const app = express();
const port = 3000;
const api = require('./index.js');

// Middleware to parse the request body as JSON
app.use(express.json());

// Define an endpoint to trigger the function
app.post('/send-message', (req, res) => {
  const messageContent = req.body.message;

  // Assuming you have a function called 'sendMessageToGroup' in your 'app.js' that sends a message to a WhatsApp group
  const resp = api.sendMessageToGroup('First Family', messageContent);
  
    res.send('Message successfully sent to First Family group: ' + messageContent);
  
});

// Start the server
app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
