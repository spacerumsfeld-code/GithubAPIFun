## Welcome

Contained herein is my STS assessment. I'd say it was a good bit of fun, and more than anything I tried to demonstrate proficiency in NX repo organization, whipping up a full-stack app with shared libraried in no time in line with industry standards, and a bit of recursive play, though I really end up returning followers of followers. With more time I'd go into the recursive playground more!

## Getting Started

1. clone and pull this repository.
2. run `npm i`
3. run `make dev`
4. Visit localhost:4200 and click the 'get followers' button to interact with the API!
5. ???
6. Profit

## Objective

My objective for this has been to: have fun, make at least a decent attempt at the stated recursive objective, and, demonstrate other competences such as:

1. Organizing code for large, disparate projects in a cohesive way
2. Having a test suite ready to go
3. Basic best practices with APIs, in this context the serverless variety.
4. Demonstrate full-stack competence by linking together a basic client and backend cohesively.
5. Re-usable blocks of code in the form of NX libraries, my examples being an API service and a UI library.
6. Rudiments of a CI/CD pipeline that includes testing and only re-deploying affected code.

## Notes

1. Needless to say, a token would not usually be present in commited code. I can't emphasize enough that something like a DotEnv vault (pull/push collections of secrets even into Dockerized environments) would be my go-to, but decided to opt for having a token present for convenience for this assessment.
