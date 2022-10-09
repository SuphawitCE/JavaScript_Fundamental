# subordinater

Let's get all your subordinates.

## Assumptions

1. One user can have only 1 role, as the given data structure.
1. RoleIds and UserIds are unique.

## Solution formulation

Steps I thought of and executed for solving the get subordinates for given user:

1. Get user by user id from list of users
1. Get all child roles of the given users' role
    1. [Nest](https://github.com/SuphawitCE/subordinater/blob/master/src/repository/role.js#L7) roles for the given role to get a tree of roles
    1. Get all [descendent](https://github.com/SuphawitCE/subordinater/blob/master/src/repository/role.js#L15) role ids for all children of given role
1. Get all users that have the roles from step 2

Step 2 has the main logic in my solution, it can be found in the role repository.

## Libraries/Tools used

* No main dependency. It might have been easier/less code to do this with something like [Lodash](https://lodash.com/), but that would defeat the purpose of the coding task.
* Written in node with some ES6 syntax. tested on Node v12.13.1
* Uses Jest for testing

## How to setup

Run the following commands to setup, given `node` and `npm` is available:

1. git clone git@github.com:SuphawitCE/subordinater.git
1. cd subordinater
1. npm install
1. node index.js -> to see a test output

## Running tests

* To run the tests run `npm t` or `jest` on the project root.
* For code coverage run `npm run test:cov` , coverage files will be in the `coverage` folder.

The current coverage is 100%.

![Code Coverage](https://user-images.githubusercontent.com/170554/93594827-edcc8d00-f9f9-11ea-992a-4c20c5694bf8.png)

## Decisions and tradeoffs

1. Basic require is chosen in place of ES6 imports and class keyword for ease.
1. I have chosen more of a functional/procedural path with more pure functions than object oriented pattern. I think it is better in this small problem space than trying to model or use a design pattern like composition design pattern where a user will have a role object.
1. Setting users and roles as class variable (this.roles) can be one fast way to encapsulate the data. I was focused more on getting the result and testing the code with a high code coverage.
1. There are places to improve. Still, I would not opt to do them all for a small problem domain like this one. As software engineers we need to find a balance.

## If it was a bigger project

This is a coding challenge and scope is quite small. If it was a bigger real project, doing the following would be better:

1. More focus on architecture and software design would be necesssary. For a solution of ~80 lines it would be over optimization IMHO.
1. Choosing typescript or using some validator like [validator](https://github.com/validatorjs/validator.js) or [Joi](https://github.com/hapijs/joi) for validation would be better.
1. If a RDBMS is used, it would be easier to solve this with a relational database and a select SQL than on the code.
1. It would be great to have some mutation testing in place like [Stryker](https://stryker-mutator.io/) to
know how effective the tests are in addition to the coverage.
1. For a team project, it will be good to have the project dockerized.