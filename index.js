// JavaScript Document


function loadHtml(html){
  $('.content').load(html);
}


function loadCSS(href, id) {
  var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"' id='"+id+"'>");
  $("head").append(cssLink); 
 };

/**
 * function to load a given js file 
 */ 
function loadJS(src, id) {
  var jsLink = $("<script type='text/javascript' src='"+src+"' id='"+id+"'>");
  $("head").append(jsLink); 
 }; 

function removeCSS(id){
  $( "."+id+"" ).remove();
};

function removeJS(id){
  $( "."+id+"" ).remove();
};

function removeAll(){
  removeCSS("artistsCSS");
};

function about(){
  removeAll();
  loadHtml("app/about/about.html");
  loadCSS("app/about/about.css","aboutCSS");
  loadJS("app/about/about.js","aboutJS");
  $(".burger-check").prop( "checked", false);
};

function typo(){
  removeAll();
  loadHtml("app/typo/typo.html");
  loadCSS("app/typo/typo.css","typoCSS");
  loadJS("app/typo/typo.js","typoJS");
};

function photo(){
  removeAll();
  loadHtml("app/photo/photo.html");
  loadCSS("app/photo/photo.css","photoCSS");
  loadJS("app/photo/photo.js","photoJS");
}

function ilus(){
  removeAll();
  loadHtml("app/ilus/ilus.html");
  loadCSS("app/ilus/ilus.css","ilusCSS");
  loadJS("app/ilus/ilus.js","ilusJS");
}

function album(){
  removeAll();
  loadHtml("app/albums/albums.html");
  loadCSS("app/albums/albums.css","albumsCSS");
  loadJS("app/albums/albums.js","albumsJS");
}

function interview(){
  removeAll();
  loadHtml("app/interview/interview.html");
  loadCSS("app/interview/interview.css","interviewCSS");
  loadJS("app/interview/interview.js","interviewJS");
}

function video(){
  removeAll();
  loadHtml("app/videos/videos.html");
  loadCSS("app/videos/videos.css","videosCSS");
  loadJS("app/videos/videos.js","videosJS");
}

function artist(){
  removeAll();
  loadHtml("app/artists/artists.html");
  loadCSS("app/artists/artists.css","artistsCSS");
  loadJS("app/artists/artists.js","artistsJS");
}

function event(){
  removeAll();
  loadHtml("app/events/events.html");
  loadCSS("app/events/events.css","eventsCSS");
  loadJS("app/events/events.js","eventsJS");
}

function faq(){
  removeAll();
  loadHtml("app/faq/faq.html");
  loadCSS("app/faq/faq.css","faqCSS");
  loadJS("app/faq/faq.js","faqJS");
}

$(document).ready(function(){
  $("#typo").click(function(){
    
  });
  loadHtml("app/datos/datos.html");
  loadCSS("app/datos/datos.css","datosCSS");
  loadJS("app/datos/datos.js","datosJS");
});