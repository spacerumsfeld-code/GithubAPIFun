## Overview

The purpose of this coding challenge is to test your ability to develop software for the STS organization. You are free to use any language, library, and/or methodology you are most comfortable with. All submissions must be an original work by the author/candidate.

- Code should be checked into a public GitHub repository.

- Documentation should be present at the root of the repository, and, at minimum, should include the following:

  - A description of the problem being solved

  - Instructions for how to build and/or execute the code

  - Any notes pertinent for users who intend to interact with the code

## Requirements

Write an HTTP API endpoint that accepts a GitHub ID and returns a collection of GitHub IDs that represent _followers_ of the GitHub ID that was passed. Continue this process for each follower, their followers, and so on.

- Accept the input GitHub ID with the request in any way you choose.

- Response data should be returned in JSON format.

- Organization of the JSON data in the response is up to you. Choose the most appropriate way to represent this dataset.

- The relationship between any given GitHub ID in the response, and who they follow, should be discernible from the response.

- Because the response dataset could be very large, stop processing followers when either of the below conditions are true:

  - You have 100 total GitHub IDs in the response.

  - You have exhausted all successive followers up to 4 layers deep.

## Tips

You’ll need a GitHub account to complete this coding challenge. You may sign up for free. GitHub provides API’s for retrieving followers. Please see the [GitHub API documentation](https://developer.github.com/v3/users/followers/)

## Evaluation

The following factors will be used in STS’s evaluation of the completed submission:

- correctness: Does the work satisfy the requirements as described?

- creativity: How is the code organized? What, if any, abstractions were drawn in the implementation?

- completeness: Do the supporting artifacts (documentation, comments, tests, build instructions, etc) allow for straightforward consumption/execution of the submission?

## Bonus

Bonus work is **optional**. Not completing bonus requirements does **not** count against your candidacy for a position with STS.

Cycles (relationships between followers that repeat) can occur in the response in different ways. In the simplest case, two users can follow each other, but more complex cycles can occur as well. Detect cycles in your response and omit repeating occurrences.
