import { createTokenAuth } from '@octokit/auth-token';
import { Octokit } from 'octokit';

export class GithubService {
  async getABunchofFollowers(username: string) {
    let followerCount = 0;
    const followers: any = {};

    const getFollowersRecursively = async (username: string) => {
      if (followerCount >= 100) return;
      else {
        followers[username] = await this.getFollowerByUsername(username);
        followerCount += followers[username]?.length ?? 0;
      }
      await Promise.all(
        followers[username]?.map(
          async ({ login }: { login: string }) =>
            // await (followers[login] = await getFollowersRecursively(login))
            await (followers[login] = await this.getFollowerByUsername(login))
        )
      );
    };

    await getFollowersRecursively(username);

    return followers;
  }

  private async getFollowerByUsername(username: string) {
    const auth = createTokenAuth('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');
    const { token } = await auth();

    const client = new Octokit({
      auth: token,
    });

    let followers;
    try {
      const githubResponse = await client.request(
        `GET /users/${username}/followers`
      );
      followers = githubResponse.data;
    } catch (e) {
      console.log(e);
    }

    return followers;
  }
}
