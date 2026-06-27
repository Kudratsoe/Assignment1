const express = require ('express');
const app = express ();
const PORT = 3000;
const bookRoutes = require ('./routes/bookRoute');
const path = require('path');

app.set('view engine','EJS');
app.set('views',path.join(__dirname,'views'));
app.set('json spaces', 2);

app.use('/',bookRoutes);

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`); 
    });
