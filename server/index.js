const cors = require('cors');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 7000;

const availableRoutes= ['posts','comments','albums','photos','todos','users'];

app.use(cors());

app.use((req, res, next) => {
    const isAvailableRoute = availableRoutes.some(route => req.path.includes(route))

    if(!isAvailableRoute)
    {
        return res.status(404).send('Route not Found');
    }

    next();
});

app.use((req, res) => {
    fetch(`https://jsonplaceholder.typicode.com${req.path}`)
        .then(response => response.json())
        .then(json => res.json(json)).catch((error) => res.status(500).send(error))
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});