import express from 'express';
import { loadModels } from './models';
import {
  RootRouter,
  UserRouter,
  PetRouter,
  ArticleRouter,
  PetServiceRouter,
} from './routes';

loadModels();

const app = express();

app.use(express.json());

// logger
app.use(async (req, res, next) => {
  const start: number = new Date().getTime()
  await next()
  const ms: number = new Date().getTime() - start
  console.info(`${req.method} ${req.originalUrl} - ${ms}ms`)
})

app.use('/', RootRouter);
app.use('/users', UserRouter);
app.use('/pets', PetRouter);
app.use('/articles', ArticleRouter);
app.use('/pet-services', PetServiceRouter);

// Not found
app.use((req, res, next) => {
  res.status(404).json({
    msg: 'not found!'
  });
});

export default app;