
import express, { Application} from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/');
// Global error handler middleware
app.use(globalErrorHandler);
// Not Found 
app.use(notFound)
export default app;
