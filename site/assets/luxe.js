/* ============================================================
   FoundDirect — luxe.js  ·  shared behaviour for all demos
   Custom thin-line icon sprite · language · nav · motion · gallery
   Progressive enhancement: content is visible without JS.
   ============================================================ */
(function(){
  /* ---- custom icon sprite (no emojis, 1.4px thin-line) ---- */
  var SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>'
  +'<symbol id="ic-pool" viewBox="0 0 24 24"><path d="M3.5 15.5c1.4 0 1.4-1.3 2.8-1.3s1.4 1.3 2.8 1.3 1.4-1.3 2.9-1.3 1.4 1.3 2.8 1.3 1.4-1.3 2.8-1.3 1.4 1.3 2.9 1.3"/><path d="M3.5 19.5c1.4 0 1.4-1.3 2.8-1.3s1.4 1.3 2.8 1.3 1.4-1.3 2.9-1.3 1.4 1.3 2.8 1.3 1.4-1.3 2.8-1.3 1.4 1.3 2.9 1.3"/><path d="M8 14V6.4A2.1 2.1 0 0 1 12 6.4M8 9.5h4"/></symbol>'
  +'<symbol id="ic-tub" viewBox="0 0 24 24"><path d="M3 12.5h18v2.6a3.9 3.9 0 0 1-3.9 3.9H6.9A3.9 3.9 0 0 1 3 15.1z"/><path d="M5.5 19v1.6M18.5 19v1.6"/><path d="M8 9.4c0-1 .9-1.4.9-2.5S8 4.6 8 3.5M12 9.4c0-1 .9-1.4.9-2.5S12 4.6 12 3.5M16 9.4c0-1 .9-1.4.9-2.5S16 4.6 16 3.5"/></symbol>'
  +'<symbol id="ic-dining" viewBox="0 0 24 24"><path d="M6.5 3v7.2M4.5 3v3.2a2 2 0 0 0 4 0V3M6.5 10.2V21"/><path d="M16.5 3c-1.6 1-2.3 3.1-2.3 5.2 0 1.7.8 2.6 2.3 2.6M16.5 10.8V21M16.5 3c1.6 1 2.3 3.1 2.3 5.2 0 1.7-.8 2.6-2.3 2.6"/></symbol>'
  +'<symbol id="ic-wifi" viewBox="0 0 24 24"><path d="M2.5 8.6C8 3.8 16 3.8 21.5 8.6M5.4 11.9C9 8.7 15 8.7 18.6 11.9M8.4 15.3c2.1-1.9 5.1-1.9 7.2 0"/><circle cx="12" cy="19" r=".9" fill="currentColor" stroke="none"/></symbol>'
  +'<symbol id="ic-parking" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="3.4"/><path d="M9.4 16.5V7.8h3.4a2.45 2.45 0 0 1 0 4.9H9.4"/></symbol>'
  +'<symbol id="ic-breakfast" viewBox="0 0 24 24"><path d="M4.5 9.5h11.5v4.2a4.2 4.2 0 0 1-4.2 4.2H8.7a4.2 4.2 0 0 1-4.2-4.2z"/><path d="M16 10.4h2.2a2.1 2.1 0 0 1 0 4.2H16"/><path d="M7.6 3.2c-.5.8-.5 1.6 0 2.4M11.2 3.2c-.5.8-.5 1.6 0 2.4"/><path d="M3.5 21h13.5"/></symbol>'
  +'<symbol id="ic-coffee" viewBox="0 0 24 24"><path d="M5 8.5h11v5a4.5 4.5 0 0 1-4.5 4.5H9.5A4.5 4.5 0 0 1 5 13.5z"/><path d="M16 9.4h2.3a2.1 2.1 0 0 1 0 4.2H16"/><path d="M8 3.2c-.5.8-.5 1.6 0 2.4M12 3.2c-.5.8-.5 1.6 0 2.4"/></symbol>'
  +'<symbol id="ic-service" viewBox="0 0 24 24"><path d="M3.3 17.6h17.4"/><path d="M5.4 17.6a6.6 6.6 0 0 1 13.2 0"/><path d="M12 8.4V7"/><circle cx="12" cy="6.1" r=".95" fill="currentColor" stroke="none"/></symbol>'
  +'<symbol id="ic-aircon" viewBox="0 0 24 24"><rect x="3" y="4.8" width="18" height="7.2" rx="1.8"/><path d="M6 9.3h9.5"/><path d="M7 15.2c0 1.5 1.1 1.5 1.1 3.1M12 15.2c0 1.5 1.1 1.5 1.1 3.1M17 15.2c0 1.5 1.1 1.5 1.1 3.1"/></symbol>'
  +'<symbol id="ic-laundry" viewBox="0 0 24 24"><rect x="5" y="2.8" width="14" height="18.4" rx="2.4"/><circle cx="12" cy="13.4" r="4.4"/><circle cx="8.1" cy="6" r=".75" fill="currentColor" stroke="none"/><path d="M9.6 12.6a3.1 3.1 0 0 1 4.4 1.7"/></symbol>'
  +'<symbol id="ic-access" viewBox="0 0 24 24"><circle cx="13.2" cy="4.3" r="1.7"/><path d="M11 7.4v5.3h4.2l2.4 5.2"/><path d="M11.3 12.9a5.2 5.2 0 1 0 4.6 7.1"/></symbol>'
  +'<symbol id="ic-mountain" viewBox="0 0 24 24"><path d="M2.5 19.5l6-9.6 3.4 5.3 1.7-2.7 4.1 7z"/><path d="M2.5 19.5h19"/><circle cx="16.6" cy="6.8" r="1.8"/></symbol>'
  +'<symbol id="ic-leaf" viewBox="0 0 24 24"><path d="M4.5 19.5c0-8.2 6.2-13.2 14.5-14 1 8.3-4 14.6-12.4 14.6-1.1 0-2.1-.5-2.1-2z"/><path d="M8.5 19c1.6-4.4 4.4-7.4 8.5-9.4"/></symbol>'
  +'<symbol id="ic-lotus" viewBox="0 0 24 24"><path d="M12 20.5c-4.2 0-7.4-2.6-7.4-6.3 2.1 0 3.7 1 4.5 2.4C8.4 12.4 8 9.8 12 6.2c4 3.6 3.6 6.2 2.9 10.4.8-1.4 2.4-2.4 4.5-2.4 0 3.7-3.2 6.3-7.4 6.3z"/><path d="M12 20.5V12"/></symbol>'
  +'<symbol id="ic-hands" viewBox="0 0 24 24"><path d="M3 14c2.5-2 5-2 7 0M14 14c2-2 4.5-2 7 0"/><path d="M5 13.5C5 9 8 6 12 6s7 3 7 7.5"/><path d="M9 10.5c0-2 1.3-3 3-3s3 1 3 3"/></symbol>'
  +'<symbol id="ic-droplet" viewBox="0 0 24 24"><path d="M12 3.5c3 4 6 6.7 6 10.3A6 6 0 0 1 6 13.8C6 10.2 9 7.5 12 3.5z"/><path d="M9.5 14.2a2.6 2.6 0 0 0 2.5 2.5"/></symbol>'
  +'<symbol id="ic-flower" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.4"/><path d="M12 9.6c-.8-2.4.4-4.6 0-5.6-.4 1-.8 3.2 0 5.6M12 14.4c.8 2.4-.4 4.6 0 5.6.4-1 .8-3.2 0-5.6M9.6 12c-2.4-.8-4.6.4-5.6 0 1-.4 3.2-.8 5.6 0M14.4 12c2.4.8 4.6-.4 5.6 0-1 .4-3.2.8-5.6 0"/></symbol>'
  +'<symbol id="ic-candle" viewBox="0 0 24 24"><rect x="8.5" y="9" width="7" height="11" rx="1.5"/><path d="M12 9V6.5"/><path d="M12 6.5c0-1.4-1.4-1.8-1.4-3C11.4 4 13 4.4 13 6.1c0 .6-.4 1-.999.4z"/><path d="M7 20.5h10"/></symbol>'
  +'<symbol id="ic-flame" viewBox="0 0 24 24"><path d="M12 3c.5 3-2.5 4.5-2.5 7.5 0 1 .6 1.8 1.3 2.2C10.2 11 11 9.8 12 9c2.2 1.8 3.5 3.6 3.5 6a5.5 5.5 0 0 1-11 0c0-2 .8-3.4 2-5"/></symbol>'
  +'<symbol id="ic-wine" viewBox="0 0 24 24"><path d="M7.5 3.5h9l-.6 5a3.9 3.9 0 0 1-7.8 0z"/><path d="M7.4 6.5h9.2M12 12.4V20M8.5 20h7"/></symbol>'
  +'<symbol id="ic-tooth" viewBox="0 0 24 24"><path d="M12 4.5C9.5 3 6 3.3 5 6c-1 2.6 0 6 .8 9.5.5 2.2.6 4.5 2 4.5 1.6 0 1.3-3.2 2.5-5.4.5-.9 2.9-.9 3.4 0 1.2 2.2.9 5.4 2.5 5.4 1.4 0 1.5-2.3 2-4.5C19 12 20 8.6 19 6c-1-2.7-4.5-3-7-1.5z"/></symbol>'
  +'<symbol id="ic-shield" viewBox="0 0 24 24"><path d="M12 3.5l7 2.4v5.6c0 4.3-3 7.4-7 9-4-1.6-7-4.7-7-9V5.9z"/><path d="M8.8 11.7l2.3 2.3 4-4.4"/></symbol>'
  +'<symbol id="ic-sparkle" viewBox="0 0 24 24"><path d="M12 3c.6 4.2 1.8 5.4 6 6-4.2.6-5.4 1.8-6 6-.6-4.2-1.8-5.4-6-6 4.2-.6 5.4-1.8 6-6z"/><path d="M18.5 14.5c.3 1.7.8 2.2 2.5 2.5-1.7.3-2.2.8-2.5 2.5-.3-1.7-.8-2.2-2.5-2.5 1.7-.3 2.2-.8 2.5-2.5z"/></symbol>'
  +'<symbol id="ic-smile" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 13.5a4.5 4.5 0 0 0 7 0"/><circle cx="9" cy="9.8" r=".7" fill="currentColor" stroke="none"/><circle cx="15" cy="9.8" r=".7" fill="currentColor" stroke="none"/></symbol>'
  +'<symbol id="ic-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="2.2"/><path d="M3.5 9.5h17M8 3.2v3.6M16 3.2v3.6"/></symbol>'
  +'<symbol id="ic-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.2V12l3.2 2"/></symbol>'
  +'<symbol id="ic-compass" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M15.6 8.4l-1.8 5.4-5.4 1.8 1.8-5.4z"/></symbol>'
  +'<symbol id="ic-map" viewBox="0 0 24 24"><path d="M9 4.5 3.5 6.7v12.8L9 17.3l6 2.2 5.5-2.2V4.5L15 6.7z"/><path d="M9 4.5v12.8M15 6.7v12.8"/></symbol>'
  +'<symbol id="ic-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"/></symbol>'
  +'<symbol id="ic-camera" viewBox="0 0 24 24"><path d="M3.5 8.5a2 2 0 0 1 2-2h2l1.3-2h6.4L16.5 6.5h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.4"/></symbol>'
  +'<symbol id="ic-van" viewBox="0 0 24 24"><path d="M2.5 7h11v9h-11zM13.5 10h3.5l3 3v3h-6.5z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></symbol>'
  +'<symbol id="ic-ticket" viewBox="0 0 24 24"><path d="M3.5 7.5h17v3a1.8 1.8 0 0 0 0 3.6v3h-17v-3a1.8 1.8 0 0 0 0-3.6z"/><path d="M14 7.5v9" stroke-dasharray="1.5 2.2"/></symbol>'
  +'<symbol id="ic-paw" viewBox="0 0 24 24"><ellipse cx="12" cy="15" rx="4" ry="3.2"/><circle cx="6.8" cy="11.5" r="1.5"/><circle cx="17.2" cy="11.5" r="1.5"/><circle cx="9.4" cy="8.2" r="1.4"/><circle cx="14.6" cy="8.2" r="1.4"/></symbol>'
  +'<symbol id="ic-cake" viewBox="0 0 24 24"><path d="M4 20.5h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/><path d="M4 15.5c1.3 0 1.3 1.2 2.7 1.2S8 15.5 9.3 15.5s1.3 1.2 2.7 1.2 1.3-1.2 2.7-1.2 1.3 1.2 2.6 1.2 1.4-1.2 2.7-1.2"/><path d="M12 11.5V8M12 6.8c0-1-1-1.3-1-2.3.7.3 2 .7 2 2 0 .5-.4.8-1 .3z"/></symbol>'
  +'<symbol id="ic-heart" viewBox="0 0 24 24"><path d="M12 20s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 8.2 3.7 3.7 0 0 1 19 10.7c0 5-7 9.3-7 9.3z"/></symbol>'
  +'<symbol id="ic-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.5a3 3 0 0 1 0 5.8M16.5 13.5a5.5 5.5 0 0 1 4 5.5"/></symbol>'
  +'<symbol id="ic-pin" viewBox="0 0 24 24"><path d="M12 21c4-4.2 6.5-7.6 6.5-11A6.5 6.5 0 0 0 5.5 10c0 3.4 2.5 6.8 6.5 11z"/><circle cx="12" cy="10" r="2.3"/></symbol>'
  +'<symbol id="ic-phone" viewBox="0 0 24 24"><path d="M5 4h3.3l1.6 4-2 1.3a11 11 0 0 0 4.8 4.8l1.3-2 4 1.6V21a1 1 0 0 1-1.1 1A15.5 15.5 0 0 1 4 6.1 1 1 0 0 1 5 4z"/></symbol>'
  +'<symbol id="ic-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/></symbol>'
  +'<symbol id="ic-chat" viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3.5V16H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/></symbol>'
  +'<symbol id="ic-arrow" viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></symbol>'
  +'<symbol id="ic-fb" viewBox="0 0 24 24"><path d="M14.5 8.5h2.2V5.4h-2.4c-2.1 0-3.4 1.4-3.4 3.6v1.7H8.6v3.1h2.3V21h3.2v-7.2h2.2l.4-3.1h-2.6V9.3c0-.6.3-.8.8-.8z"/></symbol>'
  +'<symbol id="ic-ig" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4.6"/><circle cx="12" cy="12" r="4"/><circle cx="16.8" cy="7.2" r=".9" fill="currentColor" stroke="none"/></symbol>'
  +'<symbol id="ic-star" viewBox="0 0 24 24"><path d="M12 3l2.5 5.6 6 .6-4.5 4 1.3 5.9L12 21l-5.3 3.1 1.3-5.9-4.5-4 6-.6z" fill="currentColor" stroke="none"/></symbol>'
  +'</defs></svg>';
  var d=document.createElement('div');d.style.cssText='position:absolute;width:0;height:0;overflow:hidden';d.innerHTML=SPRITE;
  document.addEventListener('DOMContentLoaded',function(){document.body.insertBefore(d,document.body.firstChild);init();});

  /* ---- image sizing + assignment ---- */
  function px(u,w,h){h=h||Math.round(w*0.66);return u.indexOf('=w')>-1?u:(u+'=w'+w+'-h'+h+'-k-no');}
  window.luxePx=px;

  function init(){
    var IMG=window.IMG||[];
    document.querySelectorAll('[data-img]').forEach(function(el){
      var i=+el.dataset.img;if(IMG[i]==null)return;
      var big=el.closest('.hero-media')||el.closest('.feature-bg');
      el.src=big?px(IMG[i],2000,1200):px(IMG[i],1280,1280);
      el.loading='eager';el.decoding='async';
    });
    /* gallery */
    var grid=document.getElementById('gallery-grid');
    if(grid){
      var used=window.GAL_USED||[];
      var shapes=['big','tall','tall','wide','tall','big','tall','wide','tall','tall','big','tall','tall','wide','tall'];
      var n=0;
      IMG.forEach(function(u,i){
        if(used.indexOf(i)>-1)return;
        var f=document.createElement('div');f.className='frame hoverable '+shapes[n%shapes.length];
        var im=document.createElement('img');im.src=px(IMG[i],1000,1000);im.loading='eager';im.decoding='async';im.alt=(window.PAGE_NAME||'')+' photo';
        f.appendChild(im);grid.appendChild(f);n++;
      });
    }
    injectSEO();linkifyContacts();setupLang();setupNav();setupMotion();
  }

  /* ---- SEO: per-page <head> meta + JSON-LD structured data (from window.SEO) ---- */
  function injectSEO(){
    var s=window.SEO; if(!s)return;
    var head=document.head, IMG=window.IMG||[];
    var img=s.image||(IMG[0]?px(IMG[0],1200,630):'');
    var url=s.url||location.href;
    function m(a,k,v){if(!v)return;var e=document.createElement('meta');e.setAttribute(a,k);e.setAttribute('content',v);head.appendChild(e);}
    var link=document.createElement('link');link.rel='canonical';link.href=url;head.appendChild(link);
    m('name','theme-color',s.theme||'#23251F');
    m('property','og:type',s.og||'website');m('property','og:site_name',s.name);m('property','og:title',document.title);
    m('property','og:description',s.desc||'');m('property','og:url',url);if(img)m('property','og:image',img);
    m('name','twitter:card','summary_large_image');m('name','twitter:title',document.title);m('name','twitter:description',s.desc||'');if(img)m('name','twitter:image',img);
    var ld={"@context":"https://schema.org","@type":s.type||"LocalBusiness","name":s.name,"url":url};
    if(s.desc)ld.description=s.desc; if(img)ld.image=img;
    if(s.phone)ld.telephone=s.phone; if(s.priceRange)ld.priceRange=s.priceRange;
    if(s.address)ld.address={"@type":"PostalAddress","streetAddress":s.address,"addressLocality":s.locality||"Pak Chong","addressRegion":s.region||"Nakhon Ratchasima","postalCode":s.postal||"","addressCountry":"TH"};
    if(s.geo)ld.geo={"@type":"GeoCoordinates","latitude":s.geo[0],"longitude":s.geo[1]};
    if(s.rating)ld.aggregateRating={"@type":"AggregateRating","ratingValue":s.rating,"reviewCount":s.reviews,"bestRating":"5"};
    if(s.cuisine)ld.servesCuisine=s.cuisine;
    if(s.area)ld.areaServed=s.area;
    var sc=document.createElement('script');sc.type='application/ld+json';sc.textContent=JSON.stringify(ld);head.appendChild(sc);
  }

  /* ---- make booking contacts actually work: tel: / LINE / mailto deep-links ---- */
  function linkifyContacts(){
    document.querySelectorAll('.contact-row .v, .foot-col p').forEach(function(el){
      if(el.querySelector('a'))return;
      var t=el.textContent.trim();
      if(/^\+?\d[\d ()\-]{6,}$/.test(t)) el.innerHTML='<a href="tel:'+t.replace(/[^\d+]/g,'')+'">'+t+'</a>';
      else if(t.charAt(0)==='@') el.innerHTML='<a href="https://line.me/R/ti/p/'+t+'" target="_blank" rel="noopener">'+t+'</a>';
      else if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(t)) el.innerHTML='<a href="mailto:'+t+'">'+t+'</a>';
    });
  }

  /* ---- language ---- */
  function setupLang(){
    var key='fd-lang';
    function set(l){
      document.documentElement.lang=l;
      document.querySelectorAll('.t').forEach(function(el){var v=el.getAttribute('data-'+l);if(v!=null)el.textContent=v;});
      document.querySelectorAll('#lang button').forEach(function(b){b.classList.toggle('active',b.dataset.l===l);});
      try{localStorage.setItem(key,l);}catch(e){}
    }
    document.querySelectorAll('#lang button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.l);document.body.classList.remove('menu-open');});});
    var s='en';try{s=localStorage.getItem(key)||'en';}catch(e){}
    if(s!=='en')set(s);
    window.luxeSetLang=set;
  }

  /* ---- nav + bookbar ---- */
  function setupNav(){
    var nav=document.getElementById('nav'),bar=document.getElementById('bookbar'),hero=document.querySelector('.hero'),burger=document.getElementById('burger');
    if(burger)burger.addEventListener('click',function(){document.body.classList.toggle('menu-open');});
    document.querySelectorAll('#navlinks a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('menu-open');});});
    function onScroll(){
      var y=window.scrollY;
      if(nav)nav.classList.toggle('scrolled',y>60);
      if(bar&&hero){var past=y>(hero.offsetHeight-120);bar.classList.toggle('show',past&&y<document.body.scrollHeight-window.innerHeight-560);}
    }
    window.addEventListener('scroll',onScroll,{passive:true});onScroll();window._luxeScroll=onScroll;
  }

  /* ---- motion: Lenis + GSAP ---- */
  function loadScript(src){return new Promise(function(res,rej){var s=document.createElement('script');s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s);});}
  function setupMotion(){
    if(location.search.indexOf('flat')>-1)return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    loadScript('https://unpkg.com/lenis@1.1.13/dist/lenis.min.js')
      .then(function(){return loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js');})
      .then(function(){return loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js');})
      .then(function(){
        if(!window.gsap||!window.Lenis)return;
        var lenis=new Lenis({lerp:0.09,wheelMultiplier:1});
        lenis.on('scroll',function(){if(window._luxeScroll)window._luxeScroll();if(window.ScrollTrigger)ScrollTrigger.update();});
        gsap.ticker.add(function(t){lenis.raf(t*1000);});gsap.ticker.lagSmoothing(0);
        gsap.registerPlugin(ScrollTrigger);
        var mm=gsap.matchMedia();
        mm.add('(prefers-reduced-motion: no-preference)',function(){
          gsap.utils.toArray('.reveal').forEach(function(el){
            gsap.from(el,{opacity:0,y:42,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%',once:true}});
          });
          gsap.utils.toArray('.split-media,.row-media').forEach(function(f){
            var img=f.querySelector('img');
            gsap.fromTo(f,{clipPath:'inset(0 0 14% 0)'},{clipPath:'inset(0 0 0% 0)',duration:1.3,ease:'power3.out',scrollTrigger:{trigger:f,start:'top 90%',once:true}});
            if(img)gsap.fromTo(img,{yPercent:-7},{yPercent:7,ease:'none',scrollTrigger:{trigger:f,start:'top bottom',end:'bottom top',scrub:1.2}});
          });
          if(ScrollTrigger.batch)ScrollTrigger.batch('#gallery-grid .frame, .tile',{onEnter:function(els){gsap.from(els,{opacity:0,y:40,scale:.985,duration:.9,ease:'power2.out',stagger:.08,overwrite:true});},start:'top 92%',once:true});
        });
      })
      .catch(function(){/* offline: content already visible */});
  }
})();
