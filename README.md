# ParentScape

Created by:
[Nadia Fatah](https://github.com/nadiaa-f),
[Amal Botan](https://github.com/Amal-botan/),
[Hashim Said-Ahmed](https://github.com/hsaidahmed)


ParentScape is a web application designed help parents and parents to be! 

Users can post questions, advice, tips etc. on our ParentFeed or hop in a room in ParentHouse to voice chat with other parents. Another cool feature exclusive for parents is our Babysitter finder where we share verified and vetted babysitters in your area!

## Final Product

!["Admin Dashboard"](https://github.com/Amal-botan/parentScape/blob/master/client/docs/1.gif?raw=true)
!["Babysitter"](https://github.com/Amal-botan/parentScape/blob/master/client/docs/2.gif?raw=true)
!["ParentFeed"](https://github.com/Amal-botan/parentScape/blob/master/client/docs/3.gif?raw=true)

## Tech Stack

- PostgresSQL
- Express
- React
- Node.js

## Project Setup

The following steps are to install locally on your machine:

1. Clone or download the repository
```
git@github.com:Amal-botan/parentScape.git
```
2. Navigate to the project directory and install dependencies
```
cd client
npm install
```
```
cd server
npm install
```
3. Run reset on PostgreSQL database and seed files on server folder
```
npm run db:reset
```
4. Launch server locally in server folder
```
npm run local
```
5. Launch client locally in client directory
```
npm start
```
