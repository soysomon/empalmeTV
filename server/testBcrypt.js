const bcrypt = require('bcryptjs');

const hash = '$2b$10$mhgmiVtE7HrlkjE.8hMzvu33e9hu9R667gJsN5KKnX8aFlmcJKWUa'; // Hash de tu documento
const password = 'empalmeTV@@13';

bcrypt.compare(password, hash, (err, result) => {
  if (err) console.error('Error:', err);
  console.log('Contraseña coincide:', result);
});