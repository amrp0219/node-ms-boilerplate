import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (_req: Request, res: Response) =>
  res.status(200).send('Main Router response')
);

router.get('/ping', (_req: Request, res: Response) =>
  res.status(200).send('pong')
);

export const mainRouter = router;
