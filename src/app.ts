import Express from 'express';
import { routes } from './config/routes';
import cors from 'cors';

const app = Express();
const port = 3001;

app.use(cors());
app.use(Express.json());

routes(app);

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
});
