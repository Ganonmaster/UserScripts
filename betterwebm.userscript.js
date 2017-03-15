// ==UserScript==
// @name        Better Webm Options
// @namespace   http://userscripts.org/
// @description Mutes and loops webm videos
// @include     http://*/*.webm
// @include     https://*/*.webm
// @include     file://*/*.webm
// @version     1
// @grant       none
// ==/UserScript==

document.getElementsByTagName("video")[0].loop = true;
document.getElementsByTagName("video")[0].volume = 0;