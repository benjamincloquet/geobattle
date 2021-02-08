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
When playing a classic challenge on GeoGuessr, one player picks a map, creates the challenge and shares a link with the others. Geobattle uses that same process.
The organizer is a player who is in charge of creating the challenges on geoguessr.com and sharing them for everyone to play.
##### Flow 
- The organizer is on the main page of the geobattle platform. They click on a button that says "Create a battle". They are taken to the battle creation page.
- The battle creation page has text fields in which the organizer can enter the previously created challenge links. As many challenges as needed can be linked.
- The battle creation page also allows the organizer to decide whether the battle will be played in teams or not.
- When done, they are provided with a link to be shared with other players, which they can visit themselves.
- The link directs everyone to the battle page. Aside from the challenge links, the organizer has visible options (eg. to manage teams) on the same page.

## Player
A player is anyone who visits a geobattle link and participates in the game.
##### Flow 
- The player receives a link to a battle. Depending on whether they have played previously, either case a or b happens:
- Case a: the player has never played before. They are redirected on a login page in order to login with Discord (OAuth). This process comes from the assumption that players generally chat on Discord while playing, allowing us to assume all players will already have a Discord account. Upon logging in, they are prompted to link their GeoGuessr account to their Discord login. This allows the platform to correctly track scores when the game is running. This idea comes from the fact that GeoGuessr doesn't allow third-party login with limited user info (yet). The only caveat with such a process is that anyone could link your GeoGuessr profile with their Discord login on the geobattle platform, though it wouldn't really make sense in the first place.
- Case b: the player is logged in with Discord and has linked their GeoGuessr account. They are brought to the battle page, where they can find the link(s) to the challenge(s) and play.
- When a player is done playing on GeoGuessr, they can come back to the geobattle platform and click a button that says "I am done playing" in order for the platform to retrieve their scores and compute their current rank, and go on to the next challenge.

## Asynchrony
GeoGuessr challenges are not designed to be played simultaneously between players. While it is encouraged to play a battle more or less at the same time, the platform is designed to let players do each challenge whenever they want.
The pros: this means we don't have to ensure everyone is completely synchronous! Rankings can be computed each time a player indicates they are done playing. Players can go in and out of a battle and complete challenges at their own pace.
Realtime features can although be used in order to update the rankings without needing to refresh the page.
The cons: since not everyone finishes each challenge at the same time, this means we need to tell the app to fetch the scores manually (eg. by having the players click a button that says "I am done playing"), or periodically (eg. every 5 minutes).
