import { Octokit } from 'octokit';
import { createTokenAuth } from '@octokit/auth-token';

const octokitClient = new Octokit({
  auth: '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',
});

export default octokitClient;
