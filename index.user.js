// ==UserScript==
// @name        Force show NSFW posts on Twitter
// @namespace   Peach Scripts
// @match       https://twitter.com/*
// @homepageURL https://github.com/peach-porn/twitter-userscripts/tree/main
// @updateURL   https://raw.githubusercontent.com/peach-porn/twitter-userscripts/main/index.user.js
// @downloadURL https://raw.githubusercontent.com/peach-porn/twitter-userscripts/main/index.user.js
// @version     1.0
// @author      Peach.Porn team
// @grant       GM_addStyle
// @description 4/11/2024, 3:40:38 PM
// ==/UserScript==


GM_addStyle(`
  article div[aria-labelledby] > div > div > div > div > div {
    filter: none !important;
  }

  article div[aria-labelledby] > div > div > div > div > div:last-child {
    display: none !important;
  }
`)
