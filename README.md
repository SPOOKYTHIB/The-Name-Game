# The Name Game
A mini game in which the player must find the right gender for a given name.

# Prerequisites

You will need to have these two dependencies installed on your computer:

- **MySQL**
- **Node.js**

If necessary, go through the **MySQL** setup before proceeding, and make sure to enter the correct information in the **databaseConnect** function located in `src/routes.js`.

# Installation

First, open a terminal window at the project root. Type the command to login into **MySQL**, and tell it to run the provided script on the same line.

> Example:
> `mysql -u root -p < DatabaseScript.sql`

Once the database is setup, install project dependencies using `npm install`, then run the server using `node src/server.js`.

And that's it! The game should now be ready. Access [localhost:3000](http://localhost:3000) and play!

# How to play

It is as simple as it seems. A random name will appear in the middle of the page, and you will have to guess its corresponding gender. You gain one point for each correct answer, and conversely, lose one for each wrong one. However, be careful, as some names are mixed ones, and chosing **Male** or **Female** will not count as a correct answer!

Once you reach 20 points, you win! And if you drop down to 0... well, you know what happens.

Also, there is a catch... names are in French!

<sub><sup>PS: I chose my project name as a reference to the second season of *American Horror Story* 👀.</sup></sub>