import { GithubService } from '@github-apifun/services/github';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const githubService = new GithubService();

const githubRouter = nc<NextApiRequest, NextApiResponse>({
  onError: (err, _req, res) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (_req, res) => {
    res.status(404).end('Page is not found');
  },
});

githubRouter.get('/api/github/get-followers', async (req, res) => {
  const { id } = req.body as { id: string };

  let followers;
  try {
    followers = await githubService.getFollowersById(id);
  } catch (e) {
    console.log(e);
  }

  res.json({ followers });
});

export default githubRouter;
