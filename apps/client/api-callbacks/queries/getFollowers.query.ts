import axios from 'axios';

const getGithubFollowersById = async (id: string) => {
  let followers;

  try {
    followers = await axios.get(
      `http://localhost:4200/api/github/get-followers?id=${id}`
    );
  } catch (e) {
    console.log(e);
  }

  return followers.data;
};

export default getGithubFollowersById;
