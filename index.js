// JavaScript Document


loadHtml = function(html){
  $('#content').load(html);
}


loadCSS = function(href, id) {
  var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"' id='"+id+"'>");
  $("head").append(cssLink); 
 };

/**
 * function to load a given js file 
 */ 
 loadJS = function(src, id) {
  var jsLink = $("<script type='text/javascript' src='"+src+"' id='"+id+"'>");
  $("head").append(jsLink); 
 }; 


$(document).ready(function(){


});