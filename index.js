const express = require('express');
const app = express();

require('./config/mongo')();
require('./config/sessions')(app);
require('./config/flash')(app);
require('./config/views')(app);
require('./config/staticfiles')(app, express);
require('./config/parsing')(app);

require('./routes/main.js')(app);
require('./routes/products.js')(app);

require('./server.js')(app);