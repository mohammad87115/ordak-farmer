# Ordak farmer
a discord selfbot that use ordak persion memer bot cmds
# How to add tokens?
add your tokens in a file called tokens.txt
# How to setup?
## Using replit
[![Run on Repl.it](https://blog.replit.com/images/new_logo/logotype.png)](https://replit.com/@mohammadmoham39/ordak-farmer-v2)
<p>Clone my repl with this button and go to secrets tab, then
add the secrets on the example.env and another secret called tokens and add your token in it then delete tokens.txt and
then run the selfbot
</p>

**you can only run with 1 token in replit,**
**replit is so slow for running this code and its not recommended**
## Those who are not using replit
if your hosting provider is not giving away your bot files you can simply add your tokens to tokens.txt and skip the tokens part on env file
so you need to make a .env file that should look like this
```
channel="" # channel id for running cmds

webhook="" # webhook url

prefix="" # message commands prefix (run <arg> & pay <owner or id>)

ownerid="" # selfbot owner id
```

# Running it up
excute this cmds in console
```
npm install

node .
```
### daki.cc hosting tutorial video

[Click to watch the video](https://cdn.discordapp.com/attachments/1092405538035343452/1136986284745834607/Ordak_Farmer.mp4)

# Run it in Moblile app?
- 1 Install termux app from F droid or [myket](https://myket.ir)
- 2 After installation run the termux app and use this commands one by one:
```
apt update && apt upgrade -y

package install git

package install nodejs

git clone https://github.com/mohammad87115/ordak-farmer

cd ordak-farmer

npm i 
```
After Installing Node Modules You should fill `tokens.txt` and `.env` by following this commands: 
```
nano tokens.txt

nano .env
```

your .env file that should look like this
```
channel="" # channel id for running cmds

webhook="" # webhook url

prefix="" # message commands prefix (run <arg> & pay <owner or id>)

ownerid="" # selfbot owner id
```

For saving the file you should Use ```CTRL + X``` , press `y` and enter for one time

## running the project

After all this commands , U can run your project with the command `node index.js`

## did your termux app closed?
No problem , open the ordak farmer project by using command `cd ordak-farmer` and use `node index.js`

### termux tutorial video

[Watch the video](https://media.discordapp.net/attachments/966322288289009684/1136776743122911242/inshot_20230804_010222721_8nq0.mp4
)

# Contributers
[M. logique](https://github.com/m-logique)

# give me Cofe
<a href="https://www.coffeebede.com/m.logique"><img class="img-fluid" src="https://coffeebede.ir/DashboardTemplateV2/app-assets/images/banner/default-yellow.svg" /></a>
