import octokitClient from './octokit.client';

export class GithubService {
  private readonly client = octokitClient;

  async getFollowersById(username: string) {
    let followers;

    try {
      followers = await this.client.request(`GET /users/${username}/followers`);
    } catch (e) {
      console.log(e);
    }
    console.log('username!', username);

    return followers;
  }
}
