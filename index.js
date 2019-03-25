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
  alert( "Handler for .click() called." );
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


$(document).ready(function(){
  $("#typo").click(function(){
    
  });
  loadHtml("app/datos/datos.html");
  loadCSS("app/datos/datos.css","datosCSS");
  loadJS("app/datos/datos.js","datosJS");
});