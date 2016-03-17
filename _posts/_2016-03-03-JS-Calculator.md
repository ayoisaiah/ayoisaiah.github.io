---
layout: post
title: ﻿Building a JavaScript Calculator 
---

I have been underground in terms of blogging over the last few months. This is partly because I've not been coding as much as I used to due to other commitments. 

However, I feel I beginning to get into it again so I may as well 

--- 

So right now, I'm supposed to be working on a building a Pomodoro Clock according to the FreeCodeCamp curriculum. But I've not made any progress on the clock so far in two weeks so I just felt it would make sense for me to jump one step ahead to the Calculator project before returning to the Pomodoro clock later. 

And that's exactly what I did! 

The Calculator project was really simple, I developed a working logic pretty quickly and I just built on that. So I used Jquery for this project to make things even easier. 

##Design inspiration 

[insert gnome calculator screenshot] 

I took my design inspiration for the calculator from Gnome Calculator, the one I have on my computer. It has many modes but I felt the basic mode was just enough at this time. 

I was not able to implement the square root and square functions but I may look into that one later. 

##Logic

[insert WorkFlowy screenshot]

My idea was to push the numbers and operators into an array, concatenate the array ( using array.join() ) and then evaluating the joined array. 

Pushing the operators and concatinating was easy, I already knew how to do that in the Basic Bonfires section. However, to evaluate the joined array, I had to do a bit of Googling. So I found the eval() function which was perfect for what I wanted, it gave the correct result to all my results. 

One little thing bugged me though. My JavaScript Linter (I use JSCS lint) put a yellow flag on the line where I used the eval() function. This usually happens when I forget to add a semi-colon or something like that. 

But here, my syntax was correct. So I checked the message at the bottom of my editor which read 'eval could be harmful'. 

[insert eval message screenshot]

On reading this, I was a bit alarmed so I looked up the negative effects of using eval. Almost all the sites I read advised against using eval() and I also read it would be phased out in upcoming ECMAscript versions.

So being the "best practices" freak that I am, I sought out alternatives. But after a few hours of searching and trying different things, I was not able to get anything else to work. So I gave up and stuck with eval. 

The other thing I struggled with initially was giving error messages to the user. I wanted the calculator to print an error message if the operation was not valid. 

So I did some searching again and found the try, catch syntax which worked pretty well for what I wanted. Basically, once the equals to button is clicked, it will try to evaluate the operation. If it's valid, it prints the answer in the screen and appends the operation to the history. 

If there's an error, it will simply print "syntax error" on the screen so that the user can correct the mistake.
