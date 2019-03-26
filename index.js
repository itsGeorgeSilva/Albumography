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

function removeElement(id){
  $( "#"+id+"" ).remove();
};
function removeAll(){
  removeElement("aboutCSS");
  removeElement("aboutJS");
  removeElement("typoCSS");
  removeElement("typoJS");
  removeElement("photoCSS");
  removeElement("photoJS");
  removeElement("ilusCSS");
  removeElement("ilusJS");
  removeElement("albumsCSS");
  removeElement("albumsJS");
  removeElement("interviewCSS");
  removeElement("interviewJS");
  removeElement("videosCSS");
  removeElement("videosJS");
  removeElement("artistsCSS");
  removeElement("artistsJS");
  removeElement("homeCSS");
  removeElement("homeJS");
  removeElement("faqCSS");
  removeElement("faqJS");
};

function hideNSeek(){
  $(".burger-check").prop( "checked", false);
}

function home(){
  removeAll();
  loadHtml("app/home/home.html");
  loadCSS("app/home/home.css","homeCSS");
  loadJS("app/home/home.js","homeJS");
  document.title = "home";
  hideNSeek();
  navigation();
}

function about(){
  removeAll();
  loadHtml("app/about/about.html");
  loadCSS("app/about/about.css","aboutCSS");
  loadJS("app/about/about.js","aboutJS");
  document.title = "about";
  hideNSeek();
  navigation();
};

function typo(){
  removeAll();
  loadHtml("app/typo/typo.html");
  loadCSS("app/typo/typo.css","typoCSS");
  loadJS("app/typo/typo.js","typoJS");
  document.title = "typo";
  hideNSeek();
  navigation();
};

function photo(){
  removeAll();
  loadHtml("app/photo/photo.html");
  loadCSS("app/photo/photo.css","photoCSS");
  loadJS("app/photo/photo.js","photoJS");
  document.title = "photo";
  hideNSeek();
  navigation();
}

function ilus(){
  removeAll();
  loadHtml("app/ilus/ilus.html");
  loadCSS("app/ilus/ilus.css","ilusCSS");
  loadJS("app/ilus/ilus.js","ilusJS");
  document.title = "ilus";
  hideNSeek();
  navigation();
}

function album(){
  removeAll();
  loadHtml("app/albums/albums.html");
  loadCSS("app/albums/albums.css","albumsCSS");
  loadJS("app/albums/albums.js","albumsJS");
  document.title = "albums";
  hideNSeek();
  navigation();
}

function interview(){
  removeAll();
  loadHtml("app/interview/interview.html");
  loadCSS("app/interview/interview.css","interviewCSS");
  loadJS("app/interview/interview.js","interviewJS");
  document.title = "interview";
  hideNSeek();
  navigation();
}

function video(){
  removeAll();
  loadHtml("app/videos/videos.html");
  loadCSS("app/videos/videos.css","videosCSS");
  loadJS("app/videos/videos.js","videosJS");
  document.title = "videos";
  hideNSeek();
  navigation();
}

function artist(){
  removeAll();
  loadHtml("app/artists/artists.html");
  loadCSS("app/artists/artists.css","artistsCSS");
  loadJS("app/artists/artists.js","artistsJS");
  document.title = "artists";
  hideNSeek();
  navigation();
}

function event(){
  removeAll();
  loadHtml("app/events/events.html");
  loadCSS("app/events/events.css","eventsCSS");
  loadJS("app/events/events.js","eventsJS");
  document.title = "events";
  hideNSeek();
  navigation();
}

function faq(){
  removeAll();
  loadHtml("app/faq/faq.html");
  loadCSS("app/faq/faq.css","faqCSS");
  loadJS("app/faq/faq.js","faqJS");
  document.title = "FAQ";
  hideNSeek();
  navigation();
}

function navigation(){
  if($(".burger-check").is(":checked")) {
    $(".content").hide();
    $(".footer").hide();
  }else{
    $(".content").show();
    $(".footer").show();
  }
}

$(document).ready(function(){
  $(".burger-check").change(navigation);
  home();
});