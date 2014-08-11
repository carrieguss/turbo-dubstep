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
			var team = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].name;
			var place = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].location;

			var sentence = [
				one = ["I heard the " + team + " in " + place + " died."],
				"I heard that too",
				"Me three"
			];
			var placeholder1
//			$('#result').on('click', function(e) {
//				event.preventDefault();
	//			$('#poop').html("I heard the " + team + " pooped in some guy's shower after their game in " + place + ".");
	//			$('#poop').html("");
//				$('#poop').html("Did you know the " + team + " are funded by the pope?");
//			});
//	    	$('#fuckingShit').text("I heard the " + team + " pooped in some guy's shower after their game in " + place + "."); // This shit works!!!! Need to make a randomizer.
	    	
	    	$('form').on('submit', function(e) {
      			e.preventDefault();
      			if ($('#sport').val() == "baseball") {
      				$('#baseball').html("<p>I love baseball</p>");
      			} else {
      				alert(sentence[0]);
      			}

 //     				$('#poop').append("I heard the " + team + " pooped in some guy's shower after their game in " + place + ".");
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

