import app from './app';
import { PORT } from './config';

async function startServer() {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
}

startServer();
