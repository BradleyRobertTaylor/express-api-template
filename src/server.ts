import app from './app';
import { envVariables } from './env';

const startServer = () => {
  const PORT = envVariables.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
};

startServer();
