# ordak-farmer
a discord selfbot that use ordak persion memer bot cmds
# how to add tokens?
add your tokens in a file called tokens.txt
# how to setup?
## using replit
you need to make a repl and go to secrets tab then
add the secrets on the example.env and another secret called tokens and copy & paste all your tokens.txt in it then delete tokens.txt and
then run the selfbot

## those who are not using replit
if your hosting provider is not giving away your bot files you can simply add your tokens to tokens.txt and skip the tokens part on env file
so you need to make a .env file that should look like this
```
channel="" # channel id for running cmds

webhook="" # webhook url

prefix="" # message commands prefix (run <arg> & pay <owner or id>)

ownerid="" # selfbot owner id
```

# running it up
excute this cmds in console
```
npm install

node .
```
