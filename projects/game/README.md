# How to Meet Jayden Daniels

## Setting
This game takes place at Commanders Stadium on game-day. You navigate around the facility to help the commanders win.

## Map

![map image](game_project_map.png)


## Story

This game takes place at the Commanders stadium on game-day. You get to the
 stadium and really need to go to the bathroom, but, you discover a
 dark but intriguing hallway. You go down there, and look through a door
 that is labelled "locker-room". You see Jayden who is very nervous. You
must help him, but the door is locked by a key card. You must find it.
 You then go and find a security guard and steal his badge. You
 then go back to the locker room and give him advice. You also even say
 hi to Terry. You then go back in time and watch your team win the game.


## Global Variables

The most important variables are
`hasKeyCard` and `keyCardKnown`, both
booleans that track progress in the
story. Depending on these two variables,
some rooms will display different things. For example, the door to the
lockeroom will not be able to be opened unless you have the keycard
that you found earlier. The commanders won't win unless hasKeyCard.

I also have numeric variables called `minute` which keeps track of 
time. `minute` starts at 0 and counts up
with each move.

I have a little HUD map, and use a bunch of 
boolean variables to control which
rooms the player has discovered. A map is only displayed after the user
visits it.
