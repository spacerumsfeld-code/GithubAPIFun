import { Primary } from '@github-apifun/ui/buttons/index';
import React from 'react';

export function Index() {
  /** State */
  const [inputValue, setInputValue] = React.useState<string>('');

  return (
    <div className="flex justify-center align-middle gap-2 flex-col">
      <input
        className="w-1/10"
        placeholder="Github ID"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Primary.Button
        text="Get followers"
        onClick={() => console.log('not yet')}
      />
    </div>
  );
}

export default Index;
