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

  console.log('followers baby', followers);

  return (
    <div className="w-1/2 h-1/2">
      <div className="flex gap-2 flex-col w-32 border-2">
        <input
          placeholder="Github ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Primary.Button text="Get followers" onClick={() => getFollowers()} />
      </div>
    </div>
  );
}

export default Index;
