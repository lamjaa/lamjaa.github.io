<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>CodePen Embed - Building a Vertical Timeline With CSS and a Touch of JavaScript</title>
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="bxXSPhqV/oHTZTtTD06W0i3bJCMB3rOOROUkQXtH7QUySgAd/r5YS8ENtykDRyTW+vlskb7kOT9uSwqLZBrx7A==" />
<link rel="stylesheet" media="all" href="https://cpwebassets.codepen.io/assets/embed/embed-18b19a76af339b59ea953ea1186c8f37ab98142d372752954eb2130728c6b9d1.css" />
<style>
    .hide {
      display: none !important;
    }

    #result-box {
      background: #1e1f26;
      color: #e3e4e8;
    }
    .embed-footer,
    .embed-nav {
      background: #1e1f26;
      
    }
    .embed-nav .code-types a,
    .embed-nav .result-button-list a,
    .action-button {
      color: #e3e4e8;
      background-color: #444857;
    }
    .embed-nav .code-types a.active,
    .embed-nav .result-button-list a.active,
    .action-button.active {
      background: #5a5f73;
      color: #e3e4e8;
      box-shadow: inset 0px 3px #868ca0;
    }
    .embed-nav .logo-wrap .edit-on-codepen {
      color: #e3e4e8;
    }

    .embed-nav svg {
      stroke: #e3e4e8 !important;
    }
  </style>
<link rel="stylesheet" media="all" href="https://cpwebassets.codepen.io/assets/editor/themes/highcontrast-dark-ebf64e2dd95a914790e5558297a4fdda15d615c4cc27415ac7624e16f66439b2.css" />
<meta name="monetization" content="$ilp.uphold.com/biyqg2MkQKbe">
</head>
<body id="the-body" style="--borderWidth: 0;" class="codepen-embed-body  static">
<nav class="embed-nav group" id="embed-nav">
<ul class="code-types">
<li class="code-type">
<a id="html-link" href="#html-box" role="button" aria-pressed="false">
HTML
</a>
</li>
<li class="code-type">
<a id="css-link" href="#css-box" role="button" aria-pressed="false">
CSS
</a>
</li>
<li class="code-type">
<a id="js-link" href="#js-box" role="button" aria-pressed="false">
JS
</a>
</li>
</ul>
<ul class="result-button-list result-button-list-modal">
<li class="results results-type">
<a id="result-link" href="#result-box" class="active" aria-pressed="true" role="button">
Result
</a>
</li>
<li>
<a href="#resources-link" id="skip-results-iframe-link">Skip Results Iframe</a>
</li>
</ul>
</nav>
<div id="output" data-border-style="none" data-header="true">
<div id="html-box" class="code-wrap code-box box " role="region" aria-label="HTML">
<pre tabindex="0"><code data-lang="htmlmixed" id="actual-html-code">&lt;section class=&quot;intro&quot;&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;h1&gt;Vertical Timeline &amp;darr;&lt;/h1&gt;
  &lt;/div&gt;
&lt;/section&gt;

&lt;section class=&quot;timeline&quot;&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1934&lt;/time&gt; At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1937&lt;/time&gt; Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1940&lt;/time&gt; Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1943&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1946&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1956&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1957&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1967&lt;/time&gt; Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1977&lt;/time&gt; Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;1985&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;2000&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div&gt;
        &lt;time&gt;2005&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
      &lt;/div&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/section&gt;
&lt;footer class=&quot;page-footer&quot;&gt;
  &lt;span&gt;made by &lt;/span&gt;
  &lt;a href=&quot;https://georgemartsoukos.com/&quot; target=&quot;_blank&quot;&gt;
    &lt;img width=&quot;24&quot; height=&quot;24&quot; src=&quot;https://assets.codepen.io/162656/george-martsoukos-small-logo.svg&quot; alt=&quot;George Martsoukos logo&quot;&gt;
  &lt;/a&gt;
&lt;/footer&gt;</code></pre>
</div>
<div id="css-box" class="code-wrap code-box box " role="region" aria-label="CSS">
<pre tabindex="0"><code data-lang="css" id="actual-css-code">*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: normal 16px/1.5 &quot;Helvetica Neue&quot;, sans-serif;
  background: #456990;
  color: #fff;
  overflow-x: hidden;
  padding-bottom: 50px;
}


/* INTRO SECTION
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.intro {
  background: #f45b69;
  padding: 100px 0;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
}


/* TIMELINE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul {
  background: #456990;
  padding: 50px 0;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #fff;
}

.timeline ul li::after {
  content: &quot;&quot;;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
  z-index: 1;
}

.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 400px;
  padding: 15px;
  background: #f45b69;
}

.timeline ul li div::before {
  content: &quot;&quot;;
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) div {
  left: 45px;
}

.timeline ul li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #f45b69 transparent transparent;
}

.timeline ul li:nth-child(even) div {
  left: -439px;
}

.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #f45b69;
}

time {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}


/* EFFECTS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul li::after {
  transition: background 0.5s ease-in-out;
}

.timeline ul li.in-view::after {
  background: #f45b69;
}

.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.timeline ul li:nth-child(odd) div {
  transform: translate3d(200px, 0, 0);
}

.timeline ul li:nth-child(even) div {
  transform: translate3d(-200px, 0, 0);
}

.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}


/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media screen and (max-width: 900px) {
  .timeline ul li div {
    width: 250px;
  }
  .timeline ul li:nth-child(even) div {
    left: -289px;
    /*250+45-6*/
  }
}

@media screen and (max-width: 600px) {
  .timeline ul li {
    margin-left: 20px;
  }
  .timeline ul li div {
    width: calc(100vw - 91px);
  }
  .timeline ul li:nth-child(even) div {
    left: 45px;
  }
  .timeline ul li:nth-child(even) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #f45b69 transparent transparent;
  }
}


/* EXTRA/CLIP PATH STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.timeline-clippy ul li::after {
  width: 40px;
  height: 40px;
  border-radius: 0;
}

.timeline-rhombus ul li::after {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.timeline-rhombus ul li div::before {
  bottom: 12px;
}

.timeline-star ul li::after {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.timeline-heptagon ul li::after {
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
}

.timeline-infinite ul li::after {
  animation: scaleAnimation 2s infinite;
}

@keyframes scaleAnimation {
  0% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.25);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}


/* FOOTER STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.page-footer {
  position: fixed;
  right: 0;
  bottom: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  color: black;
  background: rgba(255, 255, 255, 0.65);
}

.page-footer a {
  display: flex;
  margin-left: 4px;
}</code></pre>
</div>
<div id="js-box" class="code-wrap code-box box " role="region" aria-label="JS">
<pre tabindex="0"><code data-lang="javascript" id="actual-js-code">(function () {
  &quot;use strict&quot;;

  // define variables
  var items = document.querySelectorAll(&quot;.timeline li&quot;);

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top &gt;= 0 &amp;&amp;
      rect.left &gt;= 0 &amp;&amp;
      rect.bottom &lt;=
        (window.innerHeight || document.documentElement.clientHeight) &amp;&amp;
      rect.right &lt;= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i &lt; items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add(&quot;in-view&quot;);
      }
    }
  }

  // listen for events
  window.addEventListener(&quot;load&quot;, callbackFunc);
  window.addEventListener(&quot;resize&quot;, callbackFunc);
  window.addEventListener(&quot;scroll&quot;, callbackFunc);
})();
</code></pre>
</div>
<div id="result-box" class="code-box active zoom-1" role="region" aria-label="Result">
<iframe allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write" allowfullscreen="true" allowpaymentrequest="true" allowTransparency="true" class="result-iframe  " frameborder="0" id="result-iframe" loading="lazy" name="CodePen Preview for Building a Vertical Timeline With CSS and a Touch of JavaScript" sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" scrolling="yes" title="CodePen Preview for Building a Vertical Timeline With CSS and a Touch of JavaScript" data-src="https://cdpn.io/tutsplus/fullembedgrid/QNeJgR?animations=run&type=embed" src="https://cdpn.io/tutsplus/fullembedgrid/QNeJgR?animations=run&type=embed">
  </iframe>
</div>
<div id="about-box">
<div class="about-container">
<div class="about-user">
<a href="https://codepen.io/tutsplus" target="_blank" rel="noopener"><img src="https://assets.codepen.io/210284/internal/avatars/users/default.png?fit=crop&amp;format=auto&amp;height=256&amp;version=10&amp;width=256" loading="lazy" alt="" class="about-image"></a>
<div class="about-user-info">
<p>
This Pen is owned by <a href="https://codepen.io/tutsplus" target="_blank" rel="noopener">Envato Tuts+</a> on <a href="https://codepen.io" target="_blank" rel="noopener">CodePen</a>.
</p>
<p>
<a href="/tutsplus" target="_blank" rel="noopener" class="about-user-more">
See more by @tutsplus on CodePen
</a>
</p>
</div>
</div>
</div>
</div>
<div id="resources-box" class="resources-box">
<h3>External CSS</h3>
<p>
This Pen doesn't use any external CSS resources.
</p>
<h3>External JavaScript</h3>
<p>
This Pen doesn't use any external JavaScript resources.
</p>
</div>
</div>
<footer class="embed-footer" id="embed-footer">
<button id="resources-link" class="resources-link action-button bottom left" href="#resources-box" aria-pressed="false" role="button">
Resources
</button>
<ul class="scaling-choices bottom right">
<li><button class="action-button" id="zoom-button-1">1×</button></li>
<li><button class="action-button" id="zoom-button-05">0.5×</button></li>
<li><button class="action-button" id="zoom-button-025">0.25×</button></li>
</ul>
<button id="rerun-button" class="action-button rerun-button bottom right rerun-button-modal">
Rerun
</button>
</footer>
<script nonce="mrRKF5oS3t0=">
    __processedPen = {"html":"&lt;section class=&quot;intro&quot;&gt;\n  &lt;div class=&quot;container&quot;&gt;\n    &lt;h1&gt;Vertical Timeline &amp;darr;&lt;/h1&gt;\n  &lt;/div&gt;\n&lt;/section&gt;\n\n&lt;section class=&quot;timeline&quot;&gt;\n  &lt;ul&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1934&lt;/time&gt; At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1937&lt;/time&gt; Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1940&lt;/time&gt; Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1943&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1946&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1956&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1957&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1967&lt;/time&gt; Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1977&lt;/time&gt; Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;1985&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;2000&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.\n      &lt;/div&gt;\n    &lt;/li&gt;\n    &lt;li&gt;\n      &lt;div&gt;\n        &lt;time&gt;2005&lt;/time&gt; In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.\n      &lt;/div&gt;\n    &lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/section&gt;\n&lt;footer class=&quot;page-footer&quot;&gt;\n  &lt;span&gt;made by &lt;/span&gt;\n  &lt;a href=&quot;https://georgemartsoukos.com/&quot; target=&quot;_blank&quot;&gt;\n    &lt;img width=&quot;24&quot; height=&quot;24&quot; src=&quot;https://assets.codepen.io/162656/george-martsoukos-small-logo.svg&quot; alt=&quot;George Martsoukos logo&quot;&gt;\n  &lt;/a&gt;\n&lt;/footer&gt;","css":"*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font: normal 16px/1.5 &quot;Helvetica Neue&quot;, sans-serif;\n  background: #456990;\n  color: #fff;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n}\n\n\n/* INTRO SECTION\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n.intro {\n  background: #f45b69;\n  padding: 100px 0;\n}\n\n.container {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\n\n/* TIMELINE\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n.timeline ul {\n  background: #456990;\n  padding: 50px 0;\n}\n\n.timeline ul li {\n  list-style-type: none;\n  position: relative;\n  width: 6px;\n  margin: 0 auto;\n  padding-top: 50px;\n  background: #fff;\n}\n\n.timeline ul li::after {\n  content: &quot;&quot;;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: inherit;\n  z-index: 1;\n}\n\n.timeline ul li div {\n  position: relative;\n  bottom: 0;\n  width: 400px;\n  padding: 15px;\n  background: #f45b69;\n}\n\n.timeline ul li div::before {\n  content: &quot;&quot;;\n  position: absolute;\n  bottom: 7px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.timeline ul li:nth-child(odd) div {\n  left: 45px;\n}\n\n.timeline ul li:nth-child(odd) div::before {\n  left: -15px;\n  border-width: 8px 16px 8px 0;\n  border-color: transparent #f45b69 transparent transparent;\n}\n\n.timeline ul li:nth-child(even) div {\n  left: -439px;\n}\n\n.timeline ul li:nth-child(even) div::before {\n  right: -15px;\n  border-width: 8px 0 8px 16px;\n  border-color: transparent transparent transparent #f45b69;\n}\n\ntime {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n\n\n/* EFFECTS\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n.timeline ul li::after {\n  transition: background 0.5s ease-in-out;\n}\n\n.timeline ul li.in-view::after {\n  background: #f45b69;\n}\n\n.timeline ul li div {\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n\n.timeline ul li:nth-child(odd) div {\n  transform: translate3d(200px, 0, 0);\n}\n\n.timeline ul li:nth-child(even) div {\n  transform: translate3d(-200px, 0, 0);\n}\n\n.timeline ul li.in-view div {\n  transform: none;\n  visibility: visible;\n  opacity: 1;\n}\n\n\n/* GENERAL MEDIA QUERIES\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n@media screen and (max-width: 900px) {\n  .timeline ul li div {\n    width: 250px;\n  }\n  .timeline ul li:nth-child(even) div {\n    left: -289px;\n    /*250+45-6*/\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .timeline ul li {\n    margin-left: 20px;\n  }\n  .timeline ul li div {\n    width: calc(100vw - 91px);\n  }\n  .timeline ul li:nth-child(even) div {\n    left: 45px;\n  }\n  .timeline ul li:nth-child(even) div::before {\n    left: -15px;\n    border-width: 8px 16px 8px 0;\n    border-color: transparent #f45b69 transparent transparent;\n  }\n}\n\n\n/* EXTRA/CLIP PATH STYLES\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.timeline-clippy ul li::after {\n  width: 40px;\n  height: 40px;\n  border-radius: 0;\n}\n\n.timeline-rhombus ul li::after {\n  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n}\n\n.timeline-rhombus ul li div::before {\n  bottom: 12px;\n}\n\n.timeline-star ul li::after {\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n}\n\n.timeline-heptagon ul li::after {\n  clip-path: polygon(\n    50% 0%,\n    90% 20%,\n    100% 60%,\n    75% 100%,\n    25% 100%,\n    0% 60%,\n    10% 20%\n  );\n}\n\n.timeline-infinite ul li::after {\n  animation: scaleAnimation 2s infinite;\n}\n\n@keyframes scaleAnimation {\n  0% {\n    transform: translateX(-50%) scale(1);\n  }\n  50% {\n    transform: translateX(-50%) scale(1.25);\n  }\n  100% {\n    transform: translateX(-50%) scale(1);\n  }\n}\n\n\n/* FOOTER STYLES\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.page-footer {\n  position: fixed;\n  right: 0;\n  bottom: 20px;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  color: black;\n  background: rgba(255, 255, 255, 0.65);\n}\n\n.page-footer a {\n  display: flex;\n  margin-left: 4px;\n}","js":"(function () {\n  &quot;use strict&quot;;\n\n  // define variables\n  var items = document.querySelectorAll(&quot;.timeline li&quot;);\n\n  // check if an element is in viewport\n  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport\n  function isElementInViewport(el) {\n    var rect = el.getBoundingClientRect();\n    return (\n      rect.top &gt;= 0 &amp;&amp;\n      rect.left &gt;= 0 &amp;&amp;\n      rect.bottom &lt;= (\n      window.innerHeight || document.documentElement.clientHeight) &amp;&amp;\n      rect.right &lt;= (window.innerWidth || document.documentElement.clientWidth));\n\n  }\n\n  function callbackFunc() {\n    for (var i = 0; i &lt; items.length; i++) {if (window.CP.shouldStopExecution(0)) break;\n      if (isElementInViewport(items[i])) {\n        items[i].classList.add(&quot;in-view&quot;);\n      }\n    }window.CP.exitedLoop(0);\n  }\n\n  // listen for events\n  window.addEventListener(&quot;load&quot;, callbackFunc);\n  window.addEventListener(&quot;resize&quot;, callbackFunc);\n  window.addEventListener(&quot;scroll&quot;, callbackFunc);\n})();"};
    __preprocessors = {
      "html": "none",
      "css": "none",
      "js": "none"
    };
    __preprocessorNames = {
      "html": "HTML",
      "css": "CSS",
      "js": "JS"
    };
    __editable = false;
    __embed_prefill = false;
  </script>
<script src="https://cpwebassets.codepen.io/assets/embed/embed-9f1a415a44cfe8e4d97e9ce137ce6c7d22c4e79549d83d996eeea31051ab8f76.js"></script>
</body>
</html>
