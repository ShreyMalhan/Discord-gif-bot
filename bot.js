console.log('Hello World');
require('dotenv').config();

const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);



client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('I am Ready');
}

client.on('message', spamMessage);

async function spamMessage(msg) {
    let tokens = msg.content.split(" ");

    if (tokens[0] === '!bot') {
        msg.channel.send('Hi, I am The Gif Bot. My role on this server will be to help you send a cool gif. All you need to do is type \" !gif \" in front of your message and I will find and send a gif related to your message. Try \" !gif Elon Musk \" ')
    }
    else if (tokens[0] === '!gif') {
        let keywords = 'video games';
        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }

        if (keywords === 'hondacivid' || keywords === 'HondaCivid' || keywords === 'Hondacivid') {
            msg.channel.send('https://tenor.com/view/honda-civic-honda-civid-beamng-3am-gif-25012473');
        }
        else if (keywords === 'closingshifttonight') {
            msg.channel.send('https://tenor.com/view/work-shift-breaking-bad-heisenberg-breaking-bad-walter-white-gif-24732845');
        }
        else {
            let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=off`
            let response = await fetch(url);
            let json = await response.json();
            if (json == null) {
                msg.channel.send('No gifs related to this keyword!');
            }
            const index = Math.floor(Math.random() * json.results.length);
            msg.channel.send(json.results[index].url);
        }
    }

}
