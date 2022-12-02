import React from 'react';
import { useQuery } from 'react-query';
import getGithubFollowersById from '../api-callbacks/queries/getFollowers.query';
import { Primary } from '@github-apifun/ui/buttons/index';

export function Index() {
  /** State */
  const [inputValue, setInputValue] = React.useState<string>('');

  /** Data */
  const { data: followers, refetch: getFollowers } = useQuery(
    ['github-followers'],
    () => getGithubFollowersById(inputValue),
    {
      enabled: false,
    }
  );

  return (
    <div className="flex justify-center align-middle gap-2 flex-col">
      <input
        className="w-1/10"
        placeholder="Github ID"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Primary.Button text="Get followers" onClick={() => getFollowers()} />
    </div>
  );
}

export default Index;
