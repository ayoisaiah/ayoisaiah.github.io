---
layout: post
title: Building a Simon Game + Achievement Unlocked
permalink: /simon-game/
excerpt: My final Front-End project on Free Code Camp involved making a Simon Game which challenges your memory by forcing you to remember patterns of button clicks
---

My final Front-End project on Free Code Camp involved making a Simon Game which is basically a game that tests your memory by forcing you to remember the exact patterns of random button presses.

Before starting this project, I had never heard of the Simon Game so I had to look it up a bit to see how the game worked. I also installed a version of the game on my phone to test it out and it was suprisingly fun and challenging.

The gameplay is really simple. The app has four coloured buttons that will produce a unique tone when pressed. The computer will begin a round by pressing the buttons in a random order and the player would have to reproduce that order of button presses to score a point and initialise the next round. The number of steps (button presses) will increase per round.

After playing the game a bit, I developed a working logic in my mind of how I could manipulate arrays to produce the same effects.

##Design

![Simon Game design]({{ site.baseurl }}/images/post-images/simon-game-design.png  "Simon Game Design")

Most of the Simon Game projects I've seen were built in a similar style to the [example project](https://codepen.io/FreeCodeCamp/full/obYBjE) but I wanted to add a little bit of uniqueness to my game so I settled on using a 2x2 grid of large buttons instead.

Truth be told, I took this idea from the Simon Game app on my phone which was setup in a similar manner. However, to make the buttons really standout, I made them sport a clicking effect using CSS transitions and transforms.

The next issue was getting the app to play a unique tone when each button is pressed. Free Code Camp provided links to mp3 files that could be used which was really thoughtful so I just used those. 

As I have never attempted to play audio files in a web browser, I had to search Stack Overflow to find a way of doing this and specifically how to play the sound on button press. The [solution I found](https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click) seemed a pretty neat way of doing it so I simply modified the code to make it work for my situation.

```
<!-- HTML -->
<audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" id="sound-0"></audio><audio src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3" id="sound-1"></audio>
<audio src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" id="sound-2"></audio>
<audio src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" id="sound-3"></audio>

/*JavaScript*/

$(".tile").click(function (e) {
	var idNum = e.currentTarget.id.substr(5); //returns the tile number
	function playAudio () {
		var audio = document.getElementById("sound-" + idNum); 
		audio.play();
	}  
	playAudio();
    //More code goes here
  }
```

##Logic

My logic for this project was simply to push the number id for each button into `computerArray` when the computer triggers the button presses and simply compare each index in the array with `userArr` which contains ids for each button the user clicks.

If the indexes in both arrays are all identical (that is if they contain the same numbers), the game progresses to the next round but if the user fails to match the order of button presses, an alert is displayed and the game is ended.

```
	if (computerArr[kount] !== userArr[kount]) {
		alert('Ouch you lose!');
		endGame();
	}
```

Translating this logic into code wasn't as straightforward as I thought and I had to tweak my ideas quite a bit before everything clicked. I'm not going to bore you with the gory details though. 

The full code and effects can be viewed on [CodePen](http://codepen.io/ayoisaiah/full/bpPRNJ/).

This was one of my favourite projects so far which and it proved fitting way to complete the Front-End section of Free Code Camp.

I hope I can kick on from here and continue to improve and build great things.

![Front-End Certificate]({{ site.baseurl }}/images/post-images/front-end-cert.png  "Front-End Certificate")

*If you want to reach out or connect with me, you can find me on [Twitter](https://twitter.com/ayisaiah) or [email me](mailto:ayisaiah@gmail.com).*