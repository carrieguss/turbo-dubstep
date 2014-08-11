// YELLING ABOUT SPORTS

var sportsApp = {};

sportsApp.key = "ak5wszy8vyct8hfpjcuu2yj8";

sportsApp.init = function(e) {
	event.preventDefault();

//	var defaultSport = $('#sport').val();

//	var defaultCity = $('#city').val();

//	var defaultFeeling = $('#emotion').val();

	sportsApp.getInfoBaseball();
	sportsApp.getInfoBasketball();
//	sportsApp.getInfoFootball();
//	sportsApp.getInfoHockey();
//	sportsApp.generateSentence();
//	sportsApp.displayCities();
//	sportsApp.displayTeams();
}

sportsApp.getInfoBaseball = function() {
	$.ajax({
	    url: 'http://api.espn.com/v1/sports/baseball/mlb/teams',
	    type: 'GET',
	    data: {
	    	apikey: sportsApp.key,
	    	format: 'json',
	    },
	    dataType: 'jsonp',
	    success: function(data){
	    	var mlbTeams = data.sports[0].leagues[0].teams;
	    	var mlbNortheast = [
	    		mlbTeams[0], // Baltimore Orioles
	    		mlbTeams[1], // Boston Red Sox
	    		mlbTeams[9], // New York Yankees
	    		mlbTeams[13], //...and Canada (Toronto Blue Jays)
	    		mlbTeams[19], // Washington Nationals
	    		mlbTeams[20], // New York Mets
	    		mlbTeams[21] // Phillies (Philadelphia)
	    		];
	    	var mlbNorthwest = [
	    		mlbTeams[11], // Seattle Mariners
	    		mlbTeams[26] // Colorado Rockies (Denver)
	    	];
	    	var mlbSoutheast = [
	    		mlbTeams[14], // Atlanta Braves
	    		mlbTeams[27], // Miami Marlins
	    		mlbTeams[29] // Tampa Bay Rays
	    	];
	    	var mlbSouthwest = [
	    		mlbTeams[2], // Los Angeles Angels
	    		mlbTeams[10], // Oakland Athletics
	    		mlbTeams[12], // Texas Rangers
	    		mlbTeams[17], // Houston Astros	 
	    		mlbTeams[18], // Los Angeles Dodgers   		
	    		mlbTeams[24], // San Diego Padres
	    		mlbTeams[25], // San Francisco Giants
	    		mlbTeams[28] // Arizona Diamondbacks

	    	];
	    	var mlbMidwest = [
	    		mlbTeams[3], // Chicago White Sox
	    		mlbTeams[4], // Cleveland Indians
	    		mlbTeams[5], // Detroit Tigers
	    		mlbTeams[6], // Kansas City Royals
	    		mlbTeams[8], // Minnesota Twins
	    		mlbTeams[15], // Chicago Cubs
	    		mlbTeams[16], // Cincinnati Reds
	    		mlbTeams[7], // Milwaukee Brewers
	    		mlbTeams[22], // Pittsburgh Pirates
	    		mlbTeams[23] // St. Louis Cardinals
	    	];

	    	console.log(mlbNortheast, mlbNorthwest, mlbSoutheast, mlbSouthwest, mlbMidwest); // Just checking.
	    	
	    	$('form').on('submit', function(e) {
      			e.preventDefault();

//     		if ($('#sport').val() == "baseball") &&
//	   		if ($('#city').val() == "MW") {
//	    		var team = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].name; // Has to happen on event trigger otherwise it only generates once.
//				var place = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].location;
//	    		} else {
//	    			if ($('#city').val() == "NY" || "NE" || "DC" || "TO" || "MTL" || "CAN" || "DQ") {
 //    				var team = mlbNortheast[Math.floor(mlbNortheast.length * Math.random())].name; 
	//				var place = mlbNortheast[Math.floor(mlbNortheast.length * Math.random())].location;
	  //  			} else {
	    //				if ($('#city').val() == "CALI" || "TX") {
	    //				var team = mlbSouthwest[Math.floor(mlbSouthwest.length * Math.random())].name; 
		//				var place = mlbSouthwest[Math.floor(mlbSouthwest.length * Math.random())].location;
		  //  			} else {
//		    				if ($('#city').val() == "DS") {
//	    					var team = mlbSoutheast[Math.floor(mlbSoutheast.length * Math.random())].name; 
//							var place = mlbSoutheast[Math.floor(mlbSoutheast.length * Math.random())].location;
//		    				}
//		    				else {
//		    					var team = mlbNorthwest[Math.floor(mlbNorthwest.length * Math.random())].name; 
//								var place = mlbNorthwest[Math.floor(mlbNorthwest.length * Math.random())].location;
//		    				}
//		    			};
	   		if ($('#city').val() == "MW") {
	    		var team = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].name; // Has to happen on event trigger otherwise it only generates once.
				var place = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].location;
	    		} else if ($('#city').val() == "NY" || $('#city').val() == "NE" || $('#city').val() == "DC" || $('#city').val() == "TO" || $('#city').val() == "MTL" || $('#city').val() == "CAN" || $('#city').val() == "DQ") {
     				var team = mlbNortheast[Math.floor(mlbNortheast.length * Math.random())].name; 
					var place = mlbNortheast[Math.floor(mlbNortheast.length * Math.random())].location;
	    		} else if ($('#city').val() == "CALI" || $('#city').val() == "TX") {
	    			var team = mlbSouthwest[Math.floor(mlbSouthwest.length * Math.random())].name; 
					var place = mlbSouthwest[Math.floor(mlbSouthwest.length * Math.random())].location;
		    	} else if ($('#city').val() == "DS") {
	    			var team = mlbSoutheast[Math.floor(mlbSoutheast.length * Math.random())].name; 
					var place = mlbSoutheast[Math.floor(mlbSoutheast.length * Math.random())].location;
		    	} else {
		    		var team = mlbNorthwest[Math.floor(mlbNorthwest.length * Math.random())].name; 
					var place = mlbNorthwest[Math.floor(mlbNorthwest.length * Math.random())].location;
	    		};
	    		

	    	var highWeepySentence = [
				zero = ["Did you hear that the " + team + " pooped in some guy's shower after their game in " + place + "? Hey, let's go to McDonald's."], // This took me fucking forever to figure out. I am dumb. 
				one = ["I heard the " + team + " died in " + place + " in 1972 and now they're all secretly ghosts."],
				two = ["Do you think the " + team + " ever eat pancakes together? I think it would be so sad if they never ate pancakes together."],
				three = ["They say it was crazy of the " + team + " to run naked in a loop around the entire geographical area of " + place + ", but 'crazy' is so subjective."],
				four = ["That ball looks like a soaring eagle. All the " + " are like beautiful soaring eagles. But everything that rises must fall."]
			];
			var smugPensiveSentence = [
				zero = ["According to three peer-reviewed studies, everyone playing for the " + team + " has been injecting steroids. Steroids are bad for you. I read that in another peer-reviewed study."],
				one = ["I can't believe the National League still doesn't allow designated hitters. It's obviously why " + team + " lost the game last night."],
				two = ["I know the " + team + " won last night but I just feel so much better when I'm doing yoga."],					
				three = ["Oh, I couldn't make it to the " + team + " game in " + place + ". I was DJing at Monsterkabinett in Berlin. Martha Stewart was there."],
				four = ["The " + team + " would never be playing New York-style baseball if it weren't for the Civil War."],
				five = ["I think the " + team + " vs. " + team + " game yesterday was fixed. It was like the dead-ball era all over again."],
				six = ["I know baseball experts consider their team owner to be perhaps the most influential owner in MLB history, but that should have no bearing on whether the " + team + " win in " + place + " tomorrow."],
				seven = ["The " + team + " should really invest in better artificial turf. It's throwing off their game."],
				eight = ["Well of course we won. The " + team + " ALWAYS win. Would you like a sip of my rare, single malt Macallan? It was bottled in 1910. It's spicy AND silky."],
				nine = ["I'm looking forward to the " + team + " game tomorrow. A pitching revolution would not be unprecedented."],
				ten = ["It was just dreadful to se the " + team + " lose yesterday. You know their pitcher chose to retire rather than face a 100-game suspension for his second positive steroid test, and I don't think they've recovered emotionally."]
			];
			var indignantSentence = [
				zero = ["Fuck that ump. He was obviously biased towards the " + team +"."],
				one = ["Did the " + team + " intentionally desecrate the " + team + " logo? That's some next-level meta shit."],
				two = ["The " + team + " are a disgrace to this and every city. They're a disgrace to the sport itself."],
				three = ["The " + team + " would have won if " + place + " wasn't such a miserable fucking city for sporting events."],
				four = ["Did you see the " + team + " game? What a fucked up call. I watched the slow-mo replay six times."],
				five = ["The " + team + " are being completely unreasonable in their demands for a post-deadline trade. It's like everyone from " + place + " was raised in a barn."]
			];
			var stokedSentence = [
				zero = ["Bro, I am so fucking stoked that the " + team + " won yesterday."],
				one = ["Bro, I am so fucking stoked that the " + team + " lost yesterday."],
				two = ["Bro, I am so fucking stoked that the " + team + " are playing the " + team + " in " + place + " on Sunday."],
				three = ["Bro, I am so fucking stoked that you live in " + place + " and love the " + team + ". Me too, bro. Me too."],
				three = ["Bro, the " + team + " cheerleaders are really, really hot."]
			];

				var cryify = highWeepySentence[Math.floor(highWeepySentence.length * Math.random())];
				var smuggify = smugPensiveSentence[Math.floor(mlbMidwest.length * Math.random())];
				var mad = indignantSentence[Math.floor(indignantSentence.length * Math.random())];
				var yaBro = stokedSentence[Math.floor(stokedSentence.length * Math.random())];

      			if ($('#sport').val() == "baseball" && 
      				$('#emotion').val() == "smug" || 
      				$('#emotion').val() == "pensive") {
      					$('#baseball p').text(smuggify);
      			} else if ($('#sport').val() == "baseball" && 
      				$('#emotion').val() == "high" || 
      				$('#emotion').val() == "weepy") {
      					$('#baseball p').text(cryify);
      			} else if ($('#sport').val() == "baseball" && 
      				$('#emotion').val() == "mad") {
      					$('#baseball p').text(mad);
      			} else if ($('#sport').val() == "baseball" && 
      				$('#emotion').val() == "stoked") {
      					$('#baseball p').text(stoked);
      			} else {
      				$('#basketball').html("<p>I love basketball</p>");
      			};

      	//	$('')
      //			{
    //  				$('#baseball').html("<p>I love baseball</p>");
  //    			} else {
      		//	alert(mad);
//      			}

      		});
	    } //End success actions. 100% sure I'm not supposed to make everything happen in here, but I can't figure out how the fuck else to do it.

 	}); // End of AJAX request...
} // End of baseball thinger



sportsApp.getInfoBasketball = function() {
	$.ajax({
	    url: 'http://api.espn.com/v1/sports/basketball/nba/teams',
	    type: 'GET',
	    data: {
	    	apikey: sportsApp.key,
	    	format: 'json',
	    },
	    dataType: 'jsonp',
	    success: function(data){
	    	var nbaTeams = data.sports[0].leagues[0].teams;
	    	var nbaNortheast = [
	    		nbaTeams[1], // Boston Celtics
	    		nbaTeams[16], // Brooklyn Nets
	    		nbaTeams[17], // New York Knicks
	    		nbaTeams[19], // Philadelphia 76ers
	    		nbaTeams[27] // Toronto Raptors
	    	];
	    	var nbaNorthwest = [
	    		nbaTeams[6], // Denver Nuggets
	    		nbaTeams[15], // Minnesota Timberwolves
	    		nbaTeams[24], // Oklahoma City Thunder
	    		nbaTeams[21], // Portland Trail Blazers
	    		nbaTeams[25] // Utah Jazz

	    	];
	    	var nbaSoutheast = [
	    		nbaTeams[0], // Atlanta Hawks
	    		nbaTeams[29], // Charlotte Hornets
	    		nbaTeams[13], // Miami Heat
	    		nbaTeams[18], // Orlando Magic
	    		nbaTeams[26] // Washington Wizards (D.C.)
	    	];
	    	var nbaPacific = [
	    		nbaTeams[8], // Golden State Warriors (Oakland, CA)
	    		nbaTeams[11], // Los Angeles Clippers
	    		nbaTeams[12], // Los Angeles Lakers
	    		nbaTeams[20], // Phoenix Suns (AZ)
	    		nbaTeams[22] // Sacramento Kings (CA)
	    	];
	    	var nbaSouth = [
	    		nbaTeams[5], // Dallas Mavericks
	    		nbaTeams[9], // Houston Rockets
	    		nbaTeams[28], // Memphis Grizzlies
	    		nbaTeams[2], // New Orleans Pelicans
	    		nbaTeams[23] // San Antonio Spurs
	    	];
	    	var nbaMidwest = [
	    		nbaTeams[3], // Chicago Bulls
	    		nbaTeams[4], // Cleveland Cavaliers
	    		nbaTeams[7], // Detroit Pistons
	    		nbaTeams[10], // Indiana Pacers
	    		nbaTeams[14] // Milwaukee Bucks
	    	];
	    
	    	console.log(nbaNortheast, nbaNorthwest, nbaSoutheast, nbaPacific, nbaSouth, nbaMidwest);
	    
			var team = nbaTeams[Math.floor(nbaTeams.length * Math.random())].name;
			var place = nbaTeams[Math.floor(nbaTeams.length * Math.random())].location;

//	    	$('#fuckingShit').append("Did you know the " + team + " are formally sponsored by the pope? I read it in the New York Times when I was in " + place + "."); // This shit works!!!! Need to make a randomizer.
	    }

 	});
}

/*
sportsApp.getInfoFootball = function() {
	$.ajax({
	    url: 'http://api.espn.com/v1/sports/football/nfl/teams',
	    type: 'GET',
	    data: {
	    	apikey: sportsApp.key,
	    	format: 'json',
	    },
	    dataType: 'jsonp',
	    success: function(data){
	    	var nflTeams = data.sports[0].leagues[0].teams;
	    	var nflNortheast = [
	    		nflTeams[], // 
	    		nflTeams[], //
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[] // 
	    	];
	    	var nflNorthwest = [
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[] // 

	    	];
	    	var nflSoutheast = [
				nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[] // 
	    	];
	    	var nflPacific = [
				nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[] // 
	    	];
	    	var nflSouth = [
				nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[] // 
	    	];
	    	var nflMidwest = [
				nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[], // 
	    		nflTeams[] // 
	    	];
	    
	    	console.log(nflNortheast, nflNorthwest, nflSoutheast, nflPacific, nflSouth, nflMidwest);
	    
			var team = nflTeams[Math.floor(nflTeams.length * Math.random())].name;
			var place = nflTeams[Math.floor(nflTeams.length * Math.random())].location;

	    	$('#fuckingShit').append("Did you know the " + team + " are formally sponsored by the pope? I read it in the New York Times when I was in " + place + "."); // This shit works!!!! Need to make a randomizer.
	    }

 	});
} */

$(function() {
	sportsApp.init();
});

//
// HERE'S A BUNCH OF SHIT I'M NOT USING ANYMORE BUT DON'T WANT TO DELETE BECAUSE WHAT IF I NEED IT LAAATERRRRRR
// ============================================================================================================

//sportsApp.displayCities = function(data) {
//sportsApp.displayInfoBaseball = function(data) {
//	$.each(data, function(i, team) {
//		var city = $('<h2>').text(team.location);
//		var teamName = $('<p>').text(team.name);
//		var combo = $('<div>').append(city, teamName);
//		$('#fuckingShit').append(combo);
//	});
//}

//sportsApp.displayTeams = function(data) {
//	$.each(data, function(i, team) {
//		var city = $('<h2>').text(team.location);
//		var teamName = $('<p>').text(team.name);
//		var combo = $('<div>').append(city, teamName);
//		$('#fuckingShit').append(teamName);
//	});
//}
	
//    success: function(response){
//  	console.log(response.sports[0].leagues[0].teams);
//  	sportsApp.displayInfoBaseball(response.sports[0].leagues[0].teams);
//	    	sportsApp.displayTeams(response.sports[0].leagues[0].teams);
//	    }

	    	
 //   	    var randomNumber = function(number){
	//	        return Math.floor(Math.random() * number + 1);
	//		};
	//		var randomTeamNameNE = function(mlbNortheast){
	//			var i = randomNumber(mlbNortheast.length);
	//			var team = mlbNortheast[i-1];
//				return team.name;
	//		};
	//		var randomTeamPlaceNE = function(mlbNortheast){
	//			var i = randomNumber(mlbNortheast.length);
	//			var team = mlbNortheast[i-1];
//				return team.location;
	//		};
//			var team = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].name;
//			var place = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].location;

//			var sentence = [
//				zero = ["I heard the " + team + " died in " + place + " in 1972 and now they're all secretly ghosts."],
//				one = ["Are you going to the game on Sunday? We're playing the " + team + "."],
//
//			];
		
//			$('#result').on('click', function(e) {
//				event.preventDefault();
	//			$('#poop').html("I heard the " + team + " pooped in some guy's shower after their game in " + place + ".");
	//			$('#poop').html("");
//				$('#poop').html("Did you know the " + team + " are funded by the pope?");
//			});
//	    	$('#fuckingShit').text("I heard the " + team + " pooped in some guy's shower after their game in " + place + "."); // This shit works!!!! Need to make a randomizer.

