// YELLING ABOUT SPORTS

var sportsApp = {};

sportsApp.key = "ak5wszy8vyct8hfpjcuu2yj8";

sportsApp.init = function() {

//	var defaultSport = $('#sport').val();

//	var defaultCity = $('#city').val();

//	var defaultFeeling = $('#emotion').val();

	sportsApp.getInfoBaseball();
//	sportsApp.getInfoBasketball();
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
	    	mlbTeams = data.sports[0].leagues[0].teams;
	    	mlbNortheast = [
	    		mlbTeams[0], // Baltimore Orioles
	    		mlbTeams[1], // Boston Red Sox
	    		mlbTeams[9], // New York Yankees
	    		mlbTeams[13], //...and Canada (Toronto Blue Jays)
	    		mlbTeams[19], // Washington Nationals
	    		mlbTeams[20], // New York Mets
	    		mlbTeams[21] // Phillies (Philadelphia)
	    		];
	    	mlbNorthwest = [
	    		mlbTeams[11], // Seattle Mariners
	    		mlbTeams[26] // Colorado Rockies (Denver)
	    	];
	    	mlbSoutheast = [
	    		mlbTeams[14], // Atlanta Braves
	    		mlbTeams[27], // Miami Marlins
	    		mlbTeams[29] // Tampa Bay Rays
	    	];
	    	mlbSouthwest = [
	    		mlbTeams[2], // Los Angeles Angels
	    		mlbTeams[10], // Oakland Athletics
	    		mlbTeams[12], // Texas Rangers
	    		mlbTeams[17], // Houston Astros	 
	    		mlbTeams[18], // Los Angeles Dodgers   		
	    		mlbTeams[24], // San Diego Padres
	    		mlbTeams[25], // San Francisco Giants
	    		mlbTeams[28] // Arizona Diamondbacks

	    	];
	    	mlbMidwest = [
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
	    	$('#fuckingShit').text(mlbNorthwest[0].name); // This shit works!!!! Need to make a randomizer.
	    

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

	    		];
	    	var nbaNorthwest = [

	    	];
	    	var nbaSoutheast = [

	    	];
	    	var nbaSouthwest = [

	    	];
	    	var nbaMidwest = [

	    	];
	    
	    	console.log(nbaNortheast, nbaNorthwest, nbaSoutheast, nbaSouthwest, nbaMidwest);
	    }

 	});
}

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

