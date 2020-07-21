# Classic YouTube Design

## What does it do?
This extension aims to recreate the classic YouTube layout and experience as much as possible within the new polymer layout.

## Why another extension?
As you may be aware, there already are several extensions which completely restore the old non-Polymer layout. However, they achieve this by linking to the old website, which will be discontinued in March 2020.

## How is this achieved?
As the old design is being discontinued, we are unfortunately forced to use the new Polymer layout, which, especially in non-Chromium based browsers, is much slower than the old one. Unless you completely rewrite the whole YouTube page, we pretty much can't do anything about that. But, what we can do: Write our own custom CSS and try to imitate the old design as much as possible! With the addition of some JavaScript we are able to replicate it at a rate of around 85 percent.

## Limitations
As stated above, we are pretty much forced to use the new Polymer substructure. So don't expect any performance improvements like with the [YouTube Classic addon](https://addons.mozilla.org/de/firefox/addon/youtube-classic/), because that actually redirects to the old, faster website, which is being discontinued. Also, we're not able to replicate the old design 1:1, there are many issues because of the completely new HTML structure of the Polymer layout. But we are working on it, and keep in mind that this is still preview software and not everything is finished yet. This includes dark-mode suppoert, which currently doesn't work because of hardcoded overwrites.

## Warning
We cannot guarantee that there are no issues. This addon is still in early development, and as soon as YouTube changes something, this addon may brick it. You can of course just turn it off until the matching bug-fix arrives, so for power users it should be no problem. Just don't try installing it on inexperienced users' PCs, it will probably do more harm than good.

## The future
Our next goals are:
- [ ] Adding a configuration popup menu for adjustable preferences
- [ ] Implementing support for all subpages
- [ ] Adding JavaScript to rearrange some HTML elements to more closely resemble the old layout
- [ ] Adding dark-mode support
- [ ] Adding settings for users to choose which elements should be changed and which not

Let's all hope the best and cross our fingers that Google doesn't break things as hard as in 2017 again!
