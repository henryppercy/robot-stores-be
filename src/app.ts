import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
});