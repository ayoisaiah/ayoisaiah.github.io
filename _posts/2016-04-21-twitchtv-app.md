---
layout: post
title: Building a TwitchTv App [Project]
permalink: /twitch-tv-project/
excerpt: How I tackled the last intermediate front-end project on Free Code Camp
---

Last week, I tackled the last of the Intermediate Front-End Projects which involved building a [TwitchTv App](https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api) using the Twitch API to display the status of a set of Twitch Streamers.

These were the user stories for this project:

1. ​Users can see whether Free Code Camp is currently streaming on Twitch.tv.
2. ​Users can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
3. ​If a Twitch streamer is currently streaming, Users can see additional details about what they are streaming.
4. ​Users will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed).

#Design

The design of my app is quite similar to the [example app](https://codepen.io/FreeCodeCamp/full/Myvqmo/) given in the project description.

The only major difference is the search input at the top of the page which I put there for the fifth user story (more on this below).

I used [Skeleton](http://getskeleton.com/) to help with basic styling and responsiveness so everything looks good on desktop and mobile.

For the profile pictures, I used background images instead of `<img>` tags. This is because simply by setting the `background-size` to `cover`, it allows the image to scale to the size of it's container no matter the dimensions. 

This is something I learnt while working on the [Random Quote Generator project](http://ayoisaiah.com/random-quote-generator/) and it was nice to put it to practice again here.

![Twitch Tv Design]({{ site.baseurl }}/images/post-images/twitchtv-design.png  "Twitch Tv Design")

##Thought Process

First, I made an array of Twitch Streamers and used a `for` loop to iterate through the array and make consecutive AJAX requests so that I could fetch the data for each streamer. 

```
var twitchStreamers = ["dreamhackcs", "skyzhar", "freecodecamp", "faceittv", "comster404", "brunofin", "terakilobyte", "robotcaleb", "sheevergaming", "esl_sc2", "ogamingsc2", "jacksofamerica"];

...

for (var i = 0; i < twitchStreamers.length; i++) {
		ajax();
}

...

function ajax () {
		$.ajax({
			url: "https://api.twitch.tv/kraken/streams/" + twitchStreamers[i] + "?callback=?",
			dataType: "jsonp",
			data: {
				format: "json"
			},

			success: function (data) {
				fetchData(data);
			},

			error: function () {
				console.log("unable to access json");
			}
		});
	}
```

If the AJAX request is successful, it calls another function `fetchData()` which simply fetches the required data from the JSON output such as the username, status, url and display picture for each channel and calls the `updateHTML()` function which simply takes the data and updates the DOM. 

```
function fetchData (data) {

		if (data.stream === null) {
			url = data._links.channel.substr(38);
			updateOfflineUsers();
		}

		else if (data.status == 422 || data.status == 404) {
			status = data.message;
			updateHTML(".unavailable");
	 	}

		else {
			if (data.stream.channel.logo !== null) {
				picture = 'url("' + data.stream.channel.logo + '")';
			}

			else {
				picture = 'url("https://cdn.rawgit.com/ayoisaiah/freeCodeCamp/master/twitch/images/placeholder-2.jpg")';
			}
			url = data._links.channel.substr(38);
			status = "<a href='https://twitch.tv/" + url + "' target='_blank'" + "'>" + data.stream.channel.display_name +  "</a>" + " is currently streaming " + data.stream.game;
			updateHTML(".online");
		}
	}
```

For offline streamers, there was an extra step. I had to make another API call using https://api.twitch.tv/kraken/channels/ to fetch data for each channel because the first call (using https://api.twitch.tv/kraken/streams/) provided no info about the channels except the fact that they were not online at that moment.

```
	function updateOfflineUsers () { //If users are offline, make new ajax request to find user info
		$.ajax({
			url: "https://api.twitch.tv/kraken/channels/" + url,
			dataType: "jsonp",
			data: {format: "json"},
			success: function (json) {
				status = "Channel " + "'<a href='" + json.url + "' target='_blank'" + "'>" + json.display_name + "</a>'" + " is currently offline";
				if (json.logo !== null) {
					picture = 'url("' + json.logo + '")';
				}
				else {
					picture = 'url("https://cdn.rawgit.com/ayoisaiah/freeCodeCamp/master/twitch/images/placeholder-2.jpg")';
				}
				updateHTML(".offline");
			}
		});
	}
```
Once I had those in place, the four user stories were completed and I was ready to go. At this point, I marked the project as completed but soon after, I thought it  would be really cool to extend the functionality of the app a little bit.

This was when I added a fifth user story:

- Users can search for TwitchTv Streamers and view whether they are online or not.

So I made a search function that takes the input of the user and uses it to make the API call:

```
	function search () {
		$(".online, .offline, .unavailable").empty();
		showAll();	
		var searchQuery = $(".search-twitch").val();
		var user = searchQuery.replace(/[^A-Z0-9_]/ig, "");
		$.ajax({
			url: "https://api.twitch.tv/kraken/streams/" + user,
			dataType: "jsonp",
			data: {
				format: "json"
			},

			success: function (data) {
				fetchData(data);					
			}
		});
	}
```
I used a bit of regex to remove special characters and spaces from the users query leaving only numbers, letters and underscores. I think this is important because Twitch does not allow special characters (such as $, &, e.t.c) or spaces in the usernames, so it was necessary to filter those out.

It also helps so that if a user searches for something like "free code camp" (seperating whole words with spaces) instead of "freecodecamp", it still returns the expected relevant result.

![Twitch Tv App design]({{ site.baseurl }}/images/post-images/twitchtv-search.png  "Twitch Tv App design")

So that was pretty much it for this project. You can view the [final version](http://codepen.io/ayoisaiah/full/MyGjpz/) on Codepen.

##Key Takeaway

Even as I write this blog post, several ways to improve the user experience on my app continue to pop into my head so my key takeaway from this project is:

**Software is never finished.** [It is a process and it is always evolving](http://scripting.com/davenet/1995/09/03/wemakeshittysoftware.html).

##What's next

Right now, I'm pushing hard to finish the [Intermediate Algorithm Scripting](https://www.freecodecamp.com/map-aside#nested-collapseIntermediateAlgorithmScripting) section on FCC in the next couple of days so that I can quickly move on to the Advanced Algorithm section.

My (short-term) goal remains claiming the [Front-End Certification](http://www.freecodecamp.com/challenges/claim-your-front-end-development-certificate) by the end of May and if all goes well, i should be able to get it by then. Wish me luck.

If you want to reach out or connect with me, you can find me on [Twitter](https://twitter.com/ayisaiah) or [email me](mailto:ayisaiah@gmail.com).