# The Name Game
A mini game in which the player must find the right gender for a given name.

# Prerequisites

You will need to have these two dependencies installed on your computer:

- **MySQL**
- **Node.js**

You will also need to create a [**Gender-Api account**](https://gender-api.com/) which will provide you an API key. Retrieve it from your account page and paste it in the **api_key** variable in `src/javascript.js`.

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

# How it works / Technical side

*The Name Game* is using the **Express.js** framework to display the main page (with **EJS** for HTML templates), as well as **Node.js** for the server side.

When the player presses the **Play** button twice, the application establishes a connection to his local database and retrieves all of the names inside. Then, whenever he presses a "gender" button, the app calls the **Gender-API** and compares his answer to the gender found by the API. If it's the same, then the player gains a point. If not, he loses one.
If the accuracy of the API response is lower than 85%, the name is considered as mixed. Pressing any other button than the "Mixed" one will then make the player lose a point.

## How it could be improved

I think a lot of aspects of this project can be improved with some more time. Here are some ideas I came up with:

- The global UI of the game can probably be improved by a lot: a cleaner interface, prettier buttons..., anything that could make it look more friendly. For now, it was kept as simple as possible. Changes would have to be made in the CSS style file, and I could probably add some more elements in the EJS templates.
- A small popup notification saying that the previous name was a mixed one, in case the player got a wrong answer; indeed, mixed names are not always obvious, and losing a point to it can confuse the player, and make him think that a bug happened.
- The application could ask the user to enter his API key when first launching the game; which means it would have to check if the variable is already filled (with a correct value, not just "Enter your API key here"), and if not, ask for a user input.
- Currently, the player is forced to press the **Play** button twice, otherwise the game won't start. It is a bug I have been facing since I implemented the database connection (for some reason, the connection is not instantly made and it prevents data from being retrieved, and thus from displaying a random name) and that I am willing to fix.

I had to create this application pretty quickly, so I could not really optimize it fully for its initial "release", otherwise it would have took too long, but I am really considering improving it overtime!

## How long did it take?

I have worked on this project for between two to four hours during three evenings because I had to work on other projects for my school during the day, so I would say I took around nine or ten hours to complete it. It can seem a lot for a such game, but please keep in mind that I had to learn Express.js basics as well as EJS, which I didn't know until now, and I really implied myself in making this app as clean and professionnal as possible, with a clear and commented code.

## Conclusion

I really liked to work on this project, which allowed me to acquire knowledge on both Express and Node. The subject was interesting and fun to set up while being a good challenge, and I intend to keep working on it to make it better!

<sub><sup>PS: I chose my project name as a reference to the second season of *American Horror Story* 👀.</sup></sub>