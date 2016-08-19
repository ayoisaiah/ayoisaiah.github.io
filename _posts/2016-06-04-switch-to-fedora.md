---
layout: post
title: Why I switched to Fedora from Arch Linux
permalink: /switching-to-fedora/
excerpt: I discuss the motives behind my recent switch to Fedora after eight months with Arch Linux and what it was like to try out a new Linux distro
teaser: switching-to-fedora-featured.jpg
---


I've been a Linux user for a little over a year now and within that time, I've done my fair share of distro hopping which includes experiences with Ubuntu, Elementary OS, Arch Linux and now Fedora.

Like many other people, my first experience with a Linux distro was Ubuntu and things went generally just fine. 

The one major thing I disliked about Ubuntu was that the software packages available in the official repos were almost always one or two versions behind and I didn't care much for using outdated software.

After a while I found out about Elementary OS and was drawn by the impressive design of Pantheon (the default desktop environment) so I switched to that. But because Elementary OS is based on Ubuntu, they rely on more or less the same software packages so that didn't solve the issue of outdated software and I experienced some other annoying bugs with Elementary which prompted me to look at other non Ubuntu-based distros. 

I had read about Arch Linux previously but was put off by the installation procedure which was pretty daunting for a Linux beginner like myself. 

Around this time, I discovered [Evo/lution](http://www.evolutionlinux.com/) which is basically a GUI installer for Arch Linux and I found a [great tutorial](http://xmodulo.com/install-arch-linux-easy-way-evolution.html) which walked me through the process of using Evo/lution to get Arch up and running on my computer.

Arch fulfilled all my needs for a while; It had the largest selection of software I can imagine (via the AUR) and all the latest updates were available almost as soon as they are released. It was true *bleeding edge*. 

While I was satisfied with Arch for the most part, things did break from time to time but even then, a fix was minutes away with the comprehensive Arch Wiki proving ever sufficient for whatever I needed.

However, a couple of months ago, I noticed things were breaking a little too often and it was no longer interesting to fix stuff all the time. Now, I must admit it's probably all my fault because I didn't do a good job of maintaining my system. 

The thing is, with a rolling release distro like Arch, you have to be careful with a lot of things like the packages you install, how often you update your system e.t.c. I was trying experimental stuff in the testing and unstable repos so it's no wonder that I ran into problems.

Around last month, I decided that while Arch had all the bleeding edge characteristics that I wanted, it ultimately wasn't for me because I couldn't maintain it properly. 

What I was looking for was something that combined the stability of Ubuntu and bleeding edge characteristics of Arch. I read about Fedora and it seemed a good fit so I set out to install it on my computer.

I guess the real reason I went with Fedora was that it is commonly regarded to have the best implementation of Gnome which happened to be my DE of choice in Arch. Apparantly, Fedora is popular amongst Gnome developers so things tend to work better there.

Having made my decision to go with Fedora, I burned the ISO on a USB drive and installed it on my computer. The installer (*anaconda*) was perharps a little confusing to use but it didn't take long for me to figure it out and finish up the installation.

Everything worked fine out of the box and I was able to get my development environment setup fairly quickly. Seriously, it's been amazing thus far, the Gnome 3 experience is better than ever and all the apps that weren't working properly for me on Arch now worked perfectly!

Although Fedora is not rolling release like Arch, the packages get updated frequently so I still get the latest versions of most of the software I use not long after they are released. Major releases are every six months and upgrading between releases is very smooth from what I've heard.

There are quite a few differences between Fedora and the other distros I've used, the biggest of which is probably DNF, the package manager for Fedora. DNF is really easy to use and there's not much difference in the syntax compared to Ubuntu's *apt-get* or *apt*. 

Installing Software
---

<figure>
	<img src="{{ site.baseurl }}/assets/images/switching-to-fedora-gnome-software.jpg" alt="">
</figure>

Out of the box, Fedora 23 comes with some useful software (like Firefox & LibreOffice) and installing more isn't hard at all if you use Gnome Software which actually works very well unlike when I first tried it on Arch. 

However, Fedora doesn't ship with proprietory, non-free software (such as media codecs) but you can get all the "non-free" stuff via RPMFusion and [Fedy](http://folkswithhats.org/).

Since I was coming from Arch, I was used to getting any software I wanted quick and easy as it was almost always certain to be available in the AUR if not in the official repos.

Unfortunately, this is not the case in Fedora. On the plus side, most Linux software providers make .rpm packages alongside .deb packages which is cool but sometimes, this is not the case and your only option is to compile from source.

I haven't encountered this situation much for it to be a problem but this is something you should keep in mind if you plan to switch to Fedora anytime soon.

Issues
---

I won't pretend Fedora is perfect because it is not. I've encountered my fair share of annoyances but nothing too serious as to impede my overall satisfaction with the distro.

One such annoyance I had with DNF was that it takes too much bandwith (more than 30mb) to update the repository metadata when I run *dnf update* and sometimes, it automatically runs in the background which could be annoying because it prevents me from running any dnf related commands until the background process finish running. Anyway, I've fixed all that now to more reasonable defaults.

The other thing is SELinux, which I've never had previous experience with before. Apparantly, it is some security feature that determines which software can access what resources and it's enabled by default in Fedora. 

As it was interfering with the smooth running of my system, I had to [disable it](http://mednis.info/2015-12-15_how-to-disable-selinux-on-fedora.html). Further research showed that a lot of people don't like it and usually get it disabled so I wonder why the Fedora developers persist with keeping it on by default. *C'mon guys.*

---

Overall, my experience with Fedora is pretty great and as long as things continue to work properly, I will most likely stick with it for the long haul.

That said, I won't rule out trying out Arch again in the future because I truely love the package manager *pacman* and the fact that it is totally community driven. Perhaps as I become a more competent Linux user, I'll be able to handle things more carefully.