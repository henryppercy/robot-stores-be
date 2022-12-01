import Express from 'express';
import { routes } from './config/routes';

const app = Express();
const port = 3001;

app.use(Express.json());
routes(app);

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
});