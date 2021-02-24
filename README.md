#Discord Gif Bot

####This project is deployed via [Heroku](https://dashboard.heroku.com/apps/discord-gif-b0t) 
<br>

To add this bot to your Discord Server type `discord.com/oauth2/authorize?client_id=798686796824969288&scope=bot` as the url.
**_Note:_** I am using free deployment service provided by heroku which limits the activity of this bot to 550 hours per month. If you add this bot to your server and find it offline, it means the bot has used all its 550 hours for the month.

<br>
###About The Project
Sending gifs has become a major part of our conversations and helps to convey our feelings in a humours way.  
As the name suggests, this is a Discord bot written in JavaScript which helps you send a random gif related to the text messages you send in the chat.  


<br>
###How it Works
Many webites and API's sole purpose is to stay up-to-date with the gif community. They provide a way to search for the most relevant gif their users are looking for.  
This bot also uses an API provided by Tenore to fullfil its responsibility, that is to share your emotions via gifs.

When the user wants to send a gif, all he needs to do is add `!gif` in front of the message. For example, sending *!gif parkour the office* in the chat will triger the bot to send a gif related to parkour and the office. 

![A gif of parkour](Images/parkoure.gif)
<br>

###Requirements
Before we dive into the code, lets first lists the things you need to write your own version of the bot.

* A Bot Tokken
A bot tokken is something which is unique to your bot and connects it to your code. To get your bot tokken, you need to [create a new application](https://discord.com/developers/applications) on the discord developers portal. After creating your bot, you can get your Bot Tokken under the `Bot` option on the left.
**Caution:** If you want your bot to be safe and run well, never reveal your bot tokken to anybody.
<br>

* An API Key
Since this bot sends requests to an external API to search for the keywords provided by the user, you need to have an API key to access those API features. Consider using Tenor and its API for your bot as it provides [free API Key](https://tenor.com/gifapi) and gives you access to its huge database of gifs.
**Caution:** Same as Bot Tokken, an API key should also be never revealed.

<br>
###Understanding the Code
Now you are all set up to be the Mark Zuckerberg for this bot. But, to work on the functionality of your bot, you first need to connect it to your code.

>const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN); 

The code mentioned above inside `bot.js` takes care of it for you. Notice the `process.env.BOTTOKEN`, it is where your bot tokken will go but since it is a lethal error to reveal your token to outside world, I wrapped it inside an [envirnment variable](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html) to keep it safe.

Next is to write the functionality of your bot. This is the place where you can be as creative as you want and make your bot do anything you desire.  
This bot checks each message sent in the chat and divides it into tokens. If the message begins with *!gif* it will know that its his time to shine. It will store the rest of the message (after !gif) as the search keywords and will fetch the API URL. The URL contains two things, the search keyworks and your API Key which I also wrapped in an envirnment variable.  
The bot then waits for the response from the API. Once it receives the response, it converts the response into JSON format. The bot then can easily work on the JSON formatted response to select a random gif to send in the chat.

And this is how you send a gif with a bot that you have created. *Pretty neat right!*

<br>
####WrapUp
I hope you learnt something from this reading. Feel free to use this bot in your discord server or fork this whole repository. 

>“The computer was born to solve problems that did not exist before.”
— Bill Gates