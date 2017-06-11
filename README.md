# Penguin 🐧
<p align="center">
<img src="https://juicy.eggplants.org/kfhv0y.jpg" width:150px height:150px>
</p>

> Penguin is a multipurpose Discord bot, written with the Discord community in mind. Currently this bot is in its early stages and is nowhere close to ready to being used, as it is still being developed. Anyone can contribute to this project. If you'd like, just send in a pull request but first read the [CONTRIBUTE](https://github.com/Swan/Penguin/blob/master/CONTRIBUTE.md) file to view the standards.

# Getting Started
To get the bot running yourself, you'll need to go through a few steps:
* Clone or download the repository
* Run `npm install` to install the dependencies
* Set up a [Mongo](https://www.mongodb.com/) Database or just use [mLab](https://mlab.com/)
* Configure the bot in [config.json](https://github.com/Swan/Penguin/blob/master/config/config.example.json)
* Run `npm start` to start the bot

# Features Checklist
Below are the list of features to be added to the bot. If you have anymore, feel free to let me know so I can add it to the list.

**General Commands**
* `;help` - Sends a message to the user with command information [✓]

**Admin Commands**
* `;mute @user length` - Mutes a user for a given amount of time [✗]
* `;unmute @user` - Unmutes a user [✗]
* `;ban @user` - Bans a user from the guild [✗]
* `;kick @user` - Kicks a user from the guild [✗]
* `;disable (command)` - Disables a command entirely onm the guild [✗]
* `;enable (command)` - Enables a command to be used on the guild [✗]
* `;filtercmd (channelId OR channelName)` - Only allows a command to be used in a specific channel [✗] 
* `;log enable (channel)` - Turns on server logging to a specific channel [✗]
* `;log disable` - Turns off server logging completely [✗]
* `;setmuterole (role)` - Sets the role for users to be muted on the server [✗]
* `;setwelcome (message)` - Sets a custom welcome message for when users join the guild [✗]
* `;setbye (message)` - Sets a custom bye message for when users leave the guild [✗]

**Fun Commands**
* `;cat` - Sends a random cat photo
* `;nsfw (search)` - Sends a nsfw photo with a given search term [✗]
* `;trivia` - Starts a game of trivia in the guild [✗]
* `;triviaend` - Ends a game of trivia in the guild [✗]

**Other**
* Mute evasion. If someone leaves and joins the server while muted, the role will be given back. [✗]
* osu!/Ripple score tracking [✗]

**Web**
* General website with information for the bot. [✗]
* Invite link [✗]
* Possibly a panel to change settings online [✗]

# LICENSE 

tl;dr - Do whatever you want with the source.

MIT License

Copyright (c) 2017 Swan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

