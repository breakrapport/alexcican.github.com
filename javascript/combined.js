// inview script
(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);



// turbolinks script
var anchoredLink,assetsChanged,browserCompatibleDocumentParser,browserIsntBuggy,browserSupportsPushState,cacheCurrentPage,changePage,constrainPageCacheTo,createDocument,crossOriginLink,currentState,executeScriptTags,extractLink,extractTitleAndBody,extractTrackAssets,fetchHistory,fetchReplacement,handleClick,ignoreClick,initializeTurbolinks,initialized,installClickHandlerLast,intersection,loadedAssets,noTurbolink,nonHtmlLink,nonStandardClick,pageCache,recallScrollPosition,referer,reflectNewUrl,reflectRedirectedUrl,rememberCurrentState,rememberCurrentUrl,rememberInitialPage,removeHash,requestMethod,requestMethodIsSafe,resetScrollPosition,targetLink,triggerEvent,visit,xhr,_ref,__hasProp={}.hasOwnProperty,__indexOf=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++){if(t in this&&this[t]===e)return t}return-1};initialized=false;currentState=null;referer=document.location.href;loadedAssets=null;pageCache={};createDocument=null;requestMethod=((_ref=document.cookie.match(/request_method=(\w+)/))!=null?_ref[1].toUpperCase():void 0)||"";xhr=null;visit=function(e){if(browserSupportsPushState){cacheCurrentPage();reflectNewUrl(e);return fetchReplacement(e)}else{return document.location.href=e}};fetchReplacement=function(e){var t,n=this;triggerEvent("page:fetch");t=removeHash(e);if(xhr!=null){xhr.abort()}xhr=new XMLHttpRequest;xhr.open("GET",t,true);xhr.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml");xhr.setRequestHeader("X-XHR-Referer",referer);xhr.onload=function(){var e;e=createDocument(xhr.responseText);if(assetsChanged(e)){return document.location.reload()}else{changePage.apply(null,extractTitleAndBody(e));reflectRedirectedUrl(xhr);if(document.location.hash){document.location.href=document.location.href}else{resetScrollPosition()}return triggerEvent("page:load")}};xhr.onloadend=function(){return xhr=null};xhr.onabort=function(){return rememberCurrentUrl()};xhr.onerror=function(){return document.location.href=e};return xhr.send()};fetchHistory=function(e){var t;cacheCurrentPage();if(t=pageCache[e.position]){if(xhr!=null){xhr.abort()}changePage(t.title,t.body);recallScrollPosition(t);return triggerEvent("page:restore")}else{return fetchReplacement(document.location.href)}};cacheCurrentPage=function(){rememberInitialPage();pageCache[currentState.position]={url:document.location.href,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset};return constrainPageCacheTo(10)};constrainPageCacheTo=function(e){var t,n,r;r=[];for(t in pageCache){if(!__hasProp.call(pageCache,t))continue;n=pageCache[t];if(t<=currentState.position-e){r.push(pageCache[t]=null)}else{r.push(void 0)}}return r};changePage=function(e,t,n){document.title=e;document.documentElement.replaceChild(t,document.body);if(n){executeScriptTags()}currentState=window.history.state;return triggerEvent("page:change")};executeScriptTags=function(){var e,t,n,r,i,s,o,u,a,f,l,c,h;f=document.body.getElementsByTagName("script");h=[];for(s=0,u=f.length;s<u;s++){i=f[s];if(!((l=i.type)===""||l==="text/javascript")){continue}t=document.createElement("script");c=i.attributes;for(o=0,a=c.length;o<a;o++){e=c[o];t.setAttribute(e.name,e.value)}t.appendChild(document.createTextNode(i.innerHTML));r=i.parentNode,n=i.nextSibling;r.removeChild(i);h.push(r.insertBefore(t,n))}return h};reflectNewUrl=function(e){if(e!==document.location.href){referer=document.location.href;return window.history.pushState({turbolinks:true,position:currentState.position+1},"",e)}};reflectRedirectedUrl=function(e){var t;if((t=e.getResponseHeader("X-XHR-Current-Location"))&&t!==document.location.pathname+document.location.search){return window.history.replaceState(currentState,"",t+document.location.hash)}};rememberCurrentUrl=function(){return window.history.replaceState({turbolinks:true,position:Date.now()},"",document.location.href)};rememberCurrentState=function(){return currentState=window.history.state};rememberInitialPage=function(){if(!initialized){rememberCurrentUrl();rememberCurrentState();createDocument=browserCompatibleDocumentParser();return initialized=true}};recallScrollPosition=function(e){return window.scrollTo(e.positionX,e.positionY)};resetScrollPosition=function(){return window.scrollTo(0,0)};removeHash=function(e){var t;t=e;if(e.href==null){t=document.createElement("A");t.href=e}return t.href.replace(t.hash,"")};triggerEvent=function(e){var t;t=document.createEvent("Events");t.initEvent(e,true,true);return document.dispatchEvent(t)};extractTrackAssets=function(e){var t,n,r,i,s;i=e.head.childNodes;s=[];for(n=0,r=i.length;n<r;n++){t=i[n];if((typeof t.getAttribute==="function"?t.getAttribute("data-turbolinks-track"):void 0)!=null){s.push(t.src||t.href)}}return s};assetsChanged=function(e){var t;loadedAssets||(loadedAssets=extractTrackAssets(document));t=extractTrackAssets(e);return t.length!==loadedAssets.length||intersection(t,loadedAssets).length!==loadedAssets.length};intersection=function(e,t){var n,r,i,s,o;if(e.length>t.length){s=[t,e],e=s[0],t=s[1]}o=[];for(r=0,i=e.length;r<i;r++){n=e[r];if(__indexOf.call(t,n)>=0){o.push(n)}}return o};extractTitleAndBody=function(e){var t;t=e.querySelector("title");return[t!=null?t.textContent:void 0,e.body,"runScripts"]};browserCompatibleDocumentParser=function(){var e,t,n,r;e=function(e){return(new DOMParser).parseFromString(e,"text/html")};t=function(e){var t;t=document.implementation.createHTMLDocument("");t.open("replace");t.write(e);t.close();return t};if(window.DOMParser){n=e("<html><body><p>test")}if((n!=null?(r=n.body)!=null?r.childNodes.length:void 0:void 0)===1){return e}else{return t}};installClickHandlerLast=function(e){if(!e.defaultPrevented){document.removeEventListener("click",handleClick);return document.addEventListener("click",handleClick)}};handleClick=function(e){var t;if(!e.defaultPrevented){t=extractLink(e);if(t.nodeName==="A"&&!ignoreClick(e,t)){visit(t.href);return e.preventDefault()}}};extractLink=function(e){var t;t=e.target;while(!(!t.parentNode||t.nodeName==="A")){t=t.parentNode}return t};crossOriginLink=function(e){return location.protocol!==e.protocol||location.host!==e.host};anchoredLink=function(e){return(e.hash&&removeHash(e))===removeHash(location)||e.href===location.href+"#"};nonHtmlLink=function(e){return e.href.match(/\.[a-z]+(\?.*)?$/g)&&!e.href.match(/\.html?(\?.*)?$/g)};noTurbolink=function(e){var t;while(!(t||e===document)){t=e.getAttribute("data-no-turbolink")!=null;e=e.parentNode}return t};targetLink=function(e){return e.target.length!==0};nonStandardClick=function(e){return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey};ignoreClick=function(e,t){return crossOriginLink(t)||anchoredLink(t)||nonHtmlLink(t)||noTurbolink(t)||targetLink(t)||nonStandardClick(e)};initializeTurbolinks=function(){document.addEventListener("click",installClickHandlerLast,true);return window.addEventListener("popstate",function(e){var t;if((t=e.state)!=null?t.turbolinks:void 0){return fetchHistory(e.state)}})};browserSupportsPushState=window.history&&window.history.pushState&&window.history.replaceState&&window.history.state!==void 0;browserIsntBuggy=!navigator.userAgent.match(/CriOS\//);requestMethodIsSafe=requestMethod==="GET"||requestMethod==="";if(browserSupportsPushState&&browserIsntBuggy&&requestMethodIsSafe){initializeTurbolinks()}this.Turbolinks={visit:visit}



// save website to cache
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);



// hides address bar on iPhone
if (navigator.userAgent.match(/iPhone/i)) {
  /* hides Safari address bar on iPhone */
  window.addEventListener("load",function() {
    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 500);
  });
}



// check to see if supports LocalStorage
function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

// save the state in LocalStorage
function save() {
  if (!supportsLocalStorage()) {return false;}
  if (localStorage['display_grid']) {
    localStorage.removeItem('display_grid');
  } else {
    localStorage['display_grid'] = 'yes';
  }
  load();
}

// load the state from LocalStorage
function load() {
  if (localStorage['display_grid'] === 'yes') {
    $('body').addClass('has_grid');
    $('.grid .hidden').removeClass().addClass('visible');
    $('.grid span:nth-of-type(1)').removeClass().addClass('hidden');
  } else {
    $('body').removeClass();
    $('.grid .visible').removeClass().addClass('hidden');
    $('.grid span:nth-of-type(1)').removeClass().addClass('visible');
  }
}

// loads from localStorage grid if enabled
load();

// on grid button click do something
$('.grid').click(function() {
  save();
  return false;
})



//get pixel ratio, default to 1
var devicePixelRatio = window.devicePixelRatio || 1,
    screenWidth = window.innerWidth * devicePixelRatio;

// load images only when in viewport
$('.image_container').one('inview', function(event, visible) {
  if (visible) {
    $(this).children().each(function() {
      var noscriptTag = $(this)[0];

      var imgAlt = noscriptTag.getAttribute("data-alt");
      var img_regular = noscriptTag.getAttribute("data-src");
      var img_retina = noscriptTag.getAttribute("data-src-retina");
      var img = document.createElement("img");

      if (imgAlt) {
        img.setAttribute("alt", imgAlt);
      }

      if (screenWidth > 1260) {
        img.setAttribute("src", img_retina);
      } else {
        img.setAttribute("src", img_regular);
      }

      $(this).parent().append(img);
    });
  }
});



// animates the twitter share button
$('.twitter_button').hover(function() {
  $(this).addClass('pulse');
}, function() {
  $(this).removeClass('pulse');
})

// previous post animation of content on link hover
$('.previous_post').hover(function() {
  $('body').addClass('move_right');
}, function() {
  $('body').removeClass('move_right');
})

// next post animation of content on link hover
$('.next_post').hover(function() {
  $('body').addClass('move_left');
}, function() {
  $('body').removeClass('move_left');
})



// calculates how many images and sets width of image containers
$('.design_images').hover(function() {
  var number = -1,
      width;
  $(this).children().each(function() {
    number++;
  })
  width = 99 / number;
  $(this).children('.image_container').css('width', width+'%');
  $(this).children('.cover_image').fadeOut('500');
}, function() {
    // on mouseout shows the cover image again
    $(this).children('.cover_image').css('display', 'block');
})


// on click outside the content hides the expanded window
$('body').mouseup(function(e) {
  var container = $('.expand_container>div');
  if (e.target.className == "icon case_study_icon load_external_content changed_to_close") {
    // do nothing
  } else {
    if (container.has(e.target).length === 0) {
      if (expanded == true) {
        hidesCaseStudy();
      }
    }
  }
})



$('body').keydown(function(e) {
  if (e.metaKey || e.ctrlKey) {
    // do nothing
  } else {
    // on ESC hides the expanded window
    if (e.keyCode === 27)
      hidesCaseStudy();

    // previous post with keyboard (<)
    if (e.keyCode === 37) {
      var url = $('.previous_post').attr("href");
      if (url !== undefined)
        window.location = url;
    }

    // next post with keyboard (>)
    if (e.keyCode === 39) {
      var url = $('.next_post').attr("href");
      if (url !== undefined)
        window.location = url;
    }

    // work (w) / home (h)
    if ((e.keyCode === 87) || (e.keyCode === 72)) {
      var url = $('.work').attr("href");
      if (url !== undefined)
        window.location = url;
    }

    // about (a)
    if (e.keyCode === 65) {
      var url = $('.about').attr("href");
      if (url !== undefined)
        window.location = url;
    }

    // blog (b)
    if (e.keyCode === 66) {
      var url = $('.blog').attr("href");
      if (url !== undefined)
        window.location = url;
    }

    // contact (c) / mail (m)
    if ((e.keyCode === 67) || (e.keyCode === 77)) {
      var url = $('.contact').attr("href");
      if (url !== undefined)
        window.location = url;
    }
  }
})



var expanded = false,
    scroll_position;
    oldPageTitle = $(document).attr('title')
    hashURL = location.hash.substr(1);

// if hash is not empty finds link with same href and loads it
if (hashURL !== '') {
  $('section').each(function(){
    var link = $(this).find('a:first');
    var url = link.attr('href');
    if (url == hashURL) {
      var parentContainer = link.parent('section');
      loadCaseStudy(parentContainer, url);
    }
  });
}


// on case study click loads external content, scrolls to top, blurs other text, hides elements under clicked
$('.load_external_content').click(function(e) {
  e.preventDefault();
  var parentContainer = $(this).parent('section');
  var url = $(this).attr("href");
  loadCaseStudy(parentContainer, url);
  return false;
});

function loadCaseStudy(parentContainer, url) {
  // means that content is expanded, hide everything
  if (expanded == true) {
    hidesCaseStudy();
  } else {
    // adds class to container for CSS animation/position
    var link = parentContainer.find('a').addClass('changed_to_close');
    parentContainer.addClass('expand_container');
    parentContainer.parent().addClass('is_expanded');
    $('body').addClass('expanded');

    // saves scrolling position
    if (hashURL !== '') {
      var offset = link.offset().top;
      scroll_position = offset - 600;
    } else {
      scroll_position = $(window).scrollTop();
    }

    // changes hashtag of url
    document.location.hash = url;

    // loads external URL page and changes title
    parentContainer.append($(document.createElement("div")).load(url + ' #content_to_load', function(responseText) {
      var title = responseText.match(/<title>([^<]*)/)[1];
      document.title = title;
    }).html('<p class="loading">Loading&#8230;</p>').hide().fadeIn('slow'));

    // scrolls to top of parent div
    $('html, body').animate({
      scrollTop: parentContainer.parent('div').offset().top
    }, 500);

    // hides elements underneath
    parentContainer.parent().nextAll().addClass('hidden');

    expanded = true;
  }
}

// hides the loaded case study
function hidesCaseStudy() {
  $('title').text(oldPageTitle);
  
  // replace hashtag in URL
  window.history.replaceState("", document.title, window.location.pathname + window.location.search);
  
  var parentContainer = $('.expand_container');
  // removes class from container for CSS animation/position
  parentContainer.children('a.case_study_icon').removeClass('changed_to_close');

  parentContainer.removeClass('expand_container');
  parentContainer.parent().removeClass('is_expanded');
  $('body').removeClass('expanded');

  // removes loaded content
  parentContainer.children('div').remove();

  // scrolls to button
  $("html, body").animate({
    scrollTop: scroll_position
  }, 500);

  // shows elements underneath
  parentContainer.parent().nextAll().removeClass('hidden');

  expanded = false;
  return false;
}

// round reading time
$(".reading_time").text(function (index, value) {
  return Math.round(parseFloat(value));
});