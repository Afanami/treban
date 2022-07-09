## Description

A simple Trello style dashboard intended for individual use to track personal tasks and progress made towards each task.

## Tech Stack

For this project I wanted to try learning a few new tools to see how they feel for me.

- Next.js
- TypeScript
- GraphQL
- Apollo Server
- Apollo Client
- Nexus
- Prisma
- PostgreSQL

## Project Vision

Initially, I want to just to create a simple Trello/JIRA type board in which users will be able to quickly create tasks and monitor them with ease using technology I'm interested in. This board will be unique for each individual user with no sharing access for the moment as the intended usage is at a more personal tracker level.

I want to remove the annoying authentication process users need to take with the more mainstream versions (Trello) and allow users to just get straight into using the application and cache their data into the client-side. Users will be given a warning and allowed to opt-in to whether they want to authenticate as the benefits would be more secure storage of their boards with cross-client access.

After the initial build phase, I want to implement some functionality into this project which would be more targetted towards Student use by having features to quickly apply pomodoro technique while they use the board. They'll be able to select a task and start timers based on the task. This will help them track progress and hours put into certain tasks.

I also want to add filtering and a tagging system which would allow users to segregate and find their tasks quickly based on their tags i.e. HOME/WORK/SCHOOL etc

## Project Progress

Setting up basic NEXT.js template code. Setup Prisma and connect with Heroku. Create data Models with GraphQL Nexus and also setup basic GraphQL endpoints, types, context and resolvers.

- Next step to setup apollo client to query GraphQL endpoint
