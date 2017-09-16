'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

// Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES

app.get('/', function(req, res) {
	res.send("Hi I am a chatbot")
})
//access token
let token = "EAABoaWplT7MBAL5hU4EHnyZBHy7YIRUuwIUAGFgtMURcoxPPztWoYV4nhXKdmwPugdV3b84VmixXLhhdyR2B5jibpGiYZComRma0CXreMUJ8GPQDXtxCcanKcQP2TdYcSRsGgTN7vhGLVlA2ZCmZAu62FhoCROTUL7pvRlwnVAZDZD"

// Facebook 

app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "salm9n") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})
//Message handling
app.post('/webhook/', function(req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id
		if (event.message && event.message.text) {
			let text = event.message.text
			if(text.includes("!pacers"))
				sendText(sender, "The Indiana Pacers were established in 1967. They have won 3 ABA titles but have yet to win an NBA title. They have 9 division titles and 5 Hall of Fame players. ")
			else if(text.includes("!warriors"))
				sendText(sender, "The Golden State Warriors were established in 1946 originally as the Philadephia Warriors. They have won 5 NBA Championships, and as of 2017 are the third most valuable NBA franchise according to Forbes.")
			else if(text.includes("!bulls"))
				sendText(sender, "The Chicago Bulls were established in 1966. They are known for popularizing the NBA worldwide, as well as winning 6 NBA Championships. As of 2017 they are the 4th most valuable franchise according to Forbes")
			else if(text.includes("!lakers"))
				sendText(sender, "The Los Angeles Lakers were established in 1947. They are one of the most esteemed NBA franchises in the league with 16 NBA Championships. They have 21 Hall of Famers and are the 2nd most valuable franchise according to Forbes.")
			else if(text.includes("!spurs"))
				sendText(sender, "The San Antonio Spurs were established in 1976. They have won 5 NBA Championships and 22 division titles. Despite being a small market franchise, they are one of the most esteemed teams in NBA history.")
			else if(text.includes("!knicks"))
				sendText(sender, "The New York Knicks were established in 1949. One of the oldest franchises, they have a humble 2 NBA Championships. Along with the Boston Celtics they are only 1 of 2 NBA teams still located in its original city. They are also the most valuable franchise in the NBA currently according to Forbes.")
			else if(text.includes("!thunder"))
				sendText(sender, "The Oklahoma City Thunder were established in 2008. They took the place of the late Seattle Supersonics. Despite being such a young organization, they already have a finals NBA appearance. Oklahoma City fans are known as among the most passionate franchises in the league.")
			else if(text.includes("!celtics"))
				sendText(sender, "The Boston Celtics were established in 1946. They are the most successful franchise to date with a record 17 NBA Championships. They field a close rivalry with the Los Angeles Lakers.")
			else if(text.includes("!rockets"))
				sendText(sender, "The Houston Rockets were established in 1967. They have won a modest 2 NBA championships along with 4 Western Conference Titles. They famously picked up Yao Ming as a rookie which gained the franchise a large Chinese following. ")
			else if(text.includes("!raptors"))
				sendText(sender, "The Toronto Raptors were established in 1995. They are unique for being the only team in the NBA operating in Canada. Being a new franchise, they have 0 NBA Titles or Conference Titles. However, with a whole country behind them, they have one of the most passionate fanbases.")
			else if(text.includes("!heat"))
				sendText(sender, "The Miami Heat were established in 1988 as part of the NBA Expansion Project. They have already accrued 3 NBA Titles since then. in 2013, they won 27 games in a row, the 3rd longest streak in NBA History.")
			else if(text.includes("!bucks"))
				sendText(sender, "The Milwaukee Bucks were established in 1968. They have 1 NBA Title and 2 Conference Titles. Despite being one of the oldest teams in the league, they are ranked as the 4th last valued team in the league.")
			else if(text.includes("!clippers"))
				sendText(sender, "The Los Angeles Clippers were founded in 1970. They are the only NBA team to share a city with another team (Los Angeles Lakers). They have 0 NBA Titles and Conference Titles, making them one of the least successful franchises in the league.")
			else if(text.includes("!76ers"))
				sendText(sender, "The Philadelphia 76ers were established in 1946. They have fieled some of the greatest players in NBA History. They have had moderate success with 3 NBA Championships and 9 Conference Titles. The 76ers have some of the most passionate fans in the league. ")
			else if(text.includes("!nets"))
				sendText(sender, "The Brooklyn Nets were founded in 1967. They were called the New Jersey Nets until 2012. They have 2 ABA Championships, making them one of the oldest teams in the league but still have 0 NBA Titles. ")
			else if(text.includes("!pelicans"))
				sendText(sender, "The New Orlean Pelicans were estalished in 2002. They were formerly known as the New Orlean Hornets until 2012. Being on the newer teams in the league, the Pelicans have 0 NBA Titles and 0 Conference Titles. They do have the honor of building up NBA superstar Chris Paul however.")
			else if(text.includes("!mavericks"))
				sendText(sender, "The Dallas Mavericks were etablished in 1980. They got their first NBA titles in 2011, by performing one of the largest upsets in NBA History against the Miami Heat. Despite being so new, they are the 9th most valuable organization in the NBA according to Forbes.")
			else if(text.includes("!trailblazers"))
				sendText(sender, "The Portland Trailblazers were established in 1970. A moderately succssful fanchise, they have 1 NBA Title an 3 Conference Titles. They have some of the most passionate fanbases in the league, and are known for having bright rookies plauged with injury problems :(")
			else if(text.includes("!suns"))
				sendText(sender, "The Phoenix Suns were established in 1968. Despite being one of the oldest teams in the league, they still have 0 NBA Titles and 2 Conference Titles. This team saw some moderate success in the mid 2000's, but apart from that, they are one of the least successful teams in the league.")
			else if(text.includes("!wizards"))
				sendText(sender, "The Washington Wizards were established in 1961. They have 1 NBA Title to their name acquired in 1978. The Wizards are only 1 of 2 teams to have had Micheal Jordan play for them, although they acquired Mike in his declining years.")
			else if(text.includes("!pistons"))
				sendText(sender, "The Detriot Pistons were established in 1941. They have 3 NBA Titles and 7 Conference Titles. The Pistons are famous for ruining one of the best seasons in Indiana Pacers history by starting the worst fight in NBA History- known as The Malice in the Palice.")
			else if(text.includes("!kings"))
				sendText(sender, "The Sacremento Kings were established in 1923, making them one of the oldest teams in Basketball history. They have only managed to win 1 NBA Title and 1 Conference title since however. The Kings were famously robbed of an NBA Finals appearence in 2002 by the Los Angeles Lakers and the NBA.")
			else if(text.includes("!timberwolves"))
				sendText(sender, "The Minnesota Timberwolves were established in 1989. They have found almost 0 success since then with only 1 Division Title to their name in 2004. They did draft one of the most acclaimed players in the NBA however, Kevin Garnett, who led them to that same Divison Title in 04.")
			else if(text.includes("!hawks"))
				sendText(sender, "The Atlanta Hawks were established in 1946, making them one of the oldest teams in the league. They have 1 NBA Title and 4 Conference Titles. In recent years, they have been known to play very well in the regular season and then lose early in the playoffs, to the fans dismay.")
			else if(text.includes("!grizzlies"))
				sendText(sender, "The Memphis Grizzlies were established in 1995, making them a newer team in the league. They are one of the only teams to have 0 NBA, Conference, and Division Titles. Despite their struggles, they do field one of the best fanbases in the league.")
			else if(text.includes("!nuggets"))
				sendText(sender, "The Denver Nuggets were established in 1967. They have 0 NBA and Conference Titles, but bewilderingly have 10 Divison Titles. They have been one of the least successful teams in the league, despite being around for the ABA.")
			else if(text.includes("!hornets"))
				sendText(sender, "The Charlotte Hornets were established in 1988. They were known as the Charlotte Bobcats until 2013. Along with the Memphis Grizzlies, they have 0 NBA Titles, Conference Titles, and Division Titles. They are famously owned by NBA Legend Micheal Jordan however.")
			else if(text.includes("!magic"))
				sendText(sender, "The Orlando Magic were established in 1989. They have had marginal success since, with 2 Conference Titles and 5 Division Titles. They have had some of the most talent over the years with names like Shaquille O Neal, Penny Hardaway, Tracy McGracy and Dwight Howard, however have never managed to make any of them work to success.")
			else if(text.includes("!jazz"))
				sendText(sender, "The Utah Jazz were established in 1974. They have 0 NBA Titles, 2 Conference Titles, and 9 Division Titles. They famously lost the 1997 and 1998 NBA Finals to Micheal Jordan, who made one of the most clutch shots in NBA History to seal the finals. ")
			else if(text.includes("!cavaliers"))
				sendText(sender, "The Cleveland Cavaliers were established in 1970. They have 1 NBA Title and 4 Conference Titles. They were one of the worst franchises in NBA History until they drafted Lebron James in 2003, who turned the franchise around and won them their first championship in 2016.")


			else 
				sendText(sender, "Please input ![teamname] for information. \nExample: !pacers")
		}
	}
	res.sendStatus(200)
})
//Sending the Message
function sendText(sender, text) {
	let messageData = {text: text}
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: token},
		method: "POST",
		json: {
			recipient: {id: sender},
			message : messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}

app.listen(app.get('port'), function() {
	console.log("running: port")
})