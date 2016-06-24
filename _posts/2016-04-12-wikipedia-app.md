---
layout: post
title: WikiPedia Search Engine [Project]
permalink: /wikipedia-search-engine/
excerpt: My workflow for building a Wikipedia Viewer as part of Free Code Camp's curriculum
image: wikipedia-homepage.png
---

My next task on FreeCodeCamp involved building a [Wikipedia Viewer](https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer) app which will pull article entries from Wikipedia using the MediaWiki Web API.

These were the user stories:

- Users can type queries in a search box and view the resulting Wikipedia entries.
- Users can view random Wikipedia articles by clicking a button.

I finished this project rather quickly because I knew exactly what to do after looking at the MediaWiki API which was perhaps due to my experience from the [Weather Project](http://www.ayoisaiah.com/weather-app/).

## Design

While thinking up design ideas for this project, I decided to lookup the Google homepage and search results page to see how they handled things.

I ended up taking most of my design inspiration from them as you'll see. 

First up, the homepage has the headline, search box and buttons at the centre of the page. The "I'm Feeling Lucky" button sends you to a random Wikipedia Page which fulfilled the second user story.

When the page loads, focus is given to the search box so that the user can begin typing his query immediately.

{% highlight javascript %}
window.onload = function() {
    document.getElementById("wiki-search-input").focus();
};
{% endhighlight %}

One thing I experimented with a bit is getting the results page to show up as soon as you start typing in the search box, imitating this feature on Google search.

![Google Homepage]({{ site.baseurl }}/images/google-homepage.gif  "Google Homepage")

I was able to replicate this on my app but I wasn't sure how it was going to function on touchscreens because in my tests, the page didn't respond to keypresses on my phone.

So to avoid unexpected behaviour, I ditched this idea and showed the results page only when the query was fully entered and the search button or Enter key was pressed which worked fine across mobile and desktop.

Overall, my design is nothing revolutionary but so long as it scales well on all device types, it's good enough for me.

## Logic

Diving into the code that pulled the results from Wikipedia, it wasn't all that hard to use the API to be honest.

I tried to tackle this challenge using the jQuery `$.getJSON` method to make the API call as I did with the Openweather API but it returned an error message concerning Cross Origin Resource Sharing (CORS).

On further investigation, I found another jQuery method  `$.ajax()` on Stack Overflow which worked. Apparently, I had to specify the dataType as "JSONP" (JSON with Padding) to get it to work.

```javascript
function ajax (keyword) {
	$.ajax({ 
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
		dataType: "jsonp",
		success: function(response) {
			console.log(response.query);
			if (response.query.searchinfo.totalhits === 0) {
				showError(keyword);
			}

			else {
				showResults(response);
			}
		},
		error: function () {
			alert("Error retrieving search results, please refresh the page");
		}
	});
}
```

The trickiest part of this project for me was getting the search results to link to their corresponding pages on Wikipedia. I spent quite a bit of time figuring how best to go about this.

I discovered that the url and title of each page was almost exactly the same. The only difference was that spaces in the title were replaced by underscores in the url.

So "JavaScript Libraries" becomes "JavaScript_Libraries" in the url.

Simply by grabbing each title, I replaced the spaces with underscores using a bit of Regex (which admittedly I don't know very well yet) and affixed it to the corresponding search result.

```javascript
var title = callback.query.search[m].title;
var url = title.replace(/ /g, "_");
...

$(".title-" + m).html("<a href='https://en.wikipedia.org/wiki/" + url + "' target='_blank'>" + callback.query.search[m].title + "</a>");
```

The last thing I did was to make an error function so that if a user's query does not match any results, it will simply display a few tips on the page to help the user improve search.

![Wikipedia - Error Page]({{ site.baseurl }}/images/wikipedia-error-page.png  "Wikipedia - Error Page")

So that was pretty much it for this project. You can view the final result on [Codepen](http://codepen.io/ayoisaiah/full/Kzvrbp).

## What's next

I'm halfway done with the Twitch API Project as I write this. Most of the design is done, only need to figure out a few things with the API. 

As a new semester at my University kicks off this week, things may become a bit slower with FCC but nonetheless it shouldn't stop me from putting a few hours in everyday.

If you want to reach out or connect with me, you can find me on [Twitter](https://twitter.com/ayisaiah) or [email me](mailto:sudo@ayisaiah.com).

Thanks for reading.