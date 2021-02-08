# geobattle
This is a web project which aims to help with the planning and progress of GeoGuessr games.
A variable number players are challenged on one or multiple games of GeoGuessr. One of the players is the organizer, tasked to create challenges and provide the challenge links on the geobattle platform for all the players to play. On geoguessr.com, the winner is determined by the total number of points scored. On this platform, flexible scoring methods are available in order to experiment and reward players differently.

## Lexicon
### Challenge
A challenge is the most basic type of game on GeoGuessr. It consists of five rounds on which each player can score 0 to 5000 points.
### Round
A round starts at a given place in Google Map's streetview and lets the player travel and observe their environment in order to determine where they started in the first place by clicking on a world map. The player's score is calculated with the distance to the actual starting point.
### Battle
A battle consists of multiple challenges played in a row. Each challenge is generally played on a different map, ie. all of the points in a given challenge are restricted to particular areas of the world. (eg. a single country, a continent, cities only)
### Scoring
On Geoguessr, scoring is only tracked on a single challenge, which makes a "battle" format impossible to organize on geoguessr.com. The alternate solution is gathering all the scores on a spreadsheet. This project aims to automate this process. Also, the player ranking on a Geoguessr challenge is the sum of the points scored on all 5 rounds, which can create discrepancies.
The proposed scoring formula for a given geobattle round is the following : SCORE = (TOTAL NUMBER OF PLAYERS) - (NUMBER OF PLAYERS WHO BEAT YOU). On the one hand, it doesn't reward high Geoguessr scores if many players beat you, on the other hand it rewards consistency and doesn't handicap players who completely missed the target on one round.

## User story
### Organizer
The organizer is a player who is in charge of creating the challenges on geoguessr.com and sharing them for everyone to play.
Flow: 
- The organizer is on the main page of the geobattle platform. They click on a button that says "Create a battle". They are taken to the battle creation page.
- The battle creation page has text fields in which the organizer can enter the challenge links. As many challenges as possible can be linked.
- The battle creation page also allows the organizer to decide whether the battle will be played in teams or not.
- When done, they are provided with a link to be shared with other players, which they can visit themselves.

## Player
A player is anyone who visits a geobattle link and participates in the game.
