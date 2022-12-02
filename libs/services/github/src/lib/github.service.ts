import { createTokenAuth } from '@octokit/auth-token';
import { Octokit } from 'octokit';

export class GithubService {
  async getFollowersById(username: string) {
    const auth = createTokenAuth('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');
    const { token } = await auth();

    console.log('what token are we getting', token);
    const client = new Octokit({
      auth: token,
    });

    console.log('client?', client);
    let followers;

    try {
      followers = await client.request(`GET /users/${username}/followers`);
    } catch (e) {
      console.log(e);
    }

    console.log('followers from github method', followers);

    return followers;
  }
}
