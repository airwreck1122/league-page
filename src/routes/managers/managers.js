export const managers = [
   {
     "roster": 3,  // ID of the roster that the manager manages
     "name": "Eric",
     "tookOver": 2009, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "EP",
     "bio": "2 Time Back to Back 2011 2012 Champion",
     "photo": "/managers/name.jpg", // done
     "fantasyStart": 2014, // when did the manager start playing fantasy football
     "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Babysitting", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Losing", // Can be anything (usually your rival's name)
       //link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 3854, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     //"valuePosition": "FS", // Favorite position (QB, WR, RB, TE, etc.)
     //"rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "All Gas No Brake",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
]
