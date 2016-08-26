---
layout: post
title: Exploring the HTML5 download attribute
permalink: /html5-download-attribute/
excerpt: A short introduction to the HTML5 download attribute and how it can be used to download resources from the web
teaser: download.png
customjs: https://cdn.jsdelivr.net/caniuse-embed/1.0.1/caniuse-embed.min.js
---
At work today, I faced an interesting problem. I wanted to link to a media file in a blog post so that users can download the file but I discovered that the browser opens the file instead of downloading it.

So I did a little research and stumbled upon the `download ` attribute for hyperlinks in HTML5 which specifies to the browser that any hyperlink where it is applied is to be used for downloading a resource.

So basically, when you link to a file, instead of navigation to the file (like in the case of PDF files or images), it would instead, show a dialog where you can choose to download the file to your computer.

## The Syntax

All you need to do is place the `download` attribute on your `<a>` element. If you don't specify a value for the attribute, it will download as the name of the file.

```html
<!-- Will download the image as konsole.png -->
<a href="https://ayoisaiah.xyz/assets/images/konsole.png" download>Download Image</a>
```

**Try it out:** Download <a href="https://ayoisaiah.xyz/assets/images/konsole.png" download>Konsole.png</a>

You might also want to specify a different filename for the file or document by setting a value on the `download` attribute.

```html
<!-- Will download the image as KDE Terminal App.png -->
<a href="https://ayoisaiah.xyz/assets/images/konsole.png" download="KDE Terminal App.png">Download Image</a>
```

Of course, one can always change the name of the file when saving to disk but it's always good to have control over the default settings especially in the case of generated files with unweidly file names.

However, while testing this feature, I noticed that Chrome ignores the attribute value and uses the filename instead. 

Firefox, on the other hand, only allows downloading files from your own domain using this method due to [some security concerns](https://bugzilla.mozilla.org/show_bug.cgi?id=676619). If the file is from another domain, it will ignore the `download` attribute and open the file instead.

**Try it out**: Download <a href="https://ayoisaiah.xyz/assets/images/konsole.png" download="KDE Terminal App.png">KDE Terminal App.png</a>

## Browser Support

Although the `download` attribute was added to the specification over four years ago, Safari doesn't support it and neither does IE or Opera Mini. However, Chrome, Firefox, and Edge (version 13 and above) support it just fine.

<p class="ciu_embed" data-feature="download" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=download">Can I Use download?</a> Data on support for the download feature across the major browsers from caniuse.com.
</p>

If you need to support browsers who do not recognise this attribute yet, you may have to implement a fallback method for those browsers or consider a different approach altogether.

---

If you learnt something from this reading this article, please do share with others  who might benefit as well. Thanks.