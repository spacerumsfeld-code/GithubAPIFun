## This document will summarize the actions taken to complete this project, as well as random thoughts along the way.

1. Blueprint: create Next App to interact with API. Instantiate Github service as NX library (demonstrating principle of code re-use, this service may be used elsewhere in the future).
   --Next app generated. Simply used NRWL/NEXT generator.
   --established github service as NX library for code org and re-use. Template for now.
   --added tailwind for rudimentary styling for client
   --added makefile for unified place to run commands. Old school!
   --added re-usable UI library as NX library to demonstrate concept of reusable library across apps.
   --Added layout for rudimentary client, some components for fun.
2. Build serverless endpoint to interact with Github service.
   --NextConnect to establish router for endpoint. One endpoint is allllll we need!
3. Use some tool or other to plug client (verrryyyy rudimentary frontend) with this serverless endpoint.
   --decided to use React Query to plu client in to serverless endpoint, plumbing all complete so we can get to actually getting followers now =).
4. Create the actual Github service method that will do the job we are being asked to do.
   --implemented octokit client to connect to github API
   --implemented basic personal token auth.
5. Looks like we'll want to brush up on recursion. Hurrah.
6. Test solution.
