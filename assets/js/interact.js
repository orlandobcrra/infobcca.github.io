$(document).ready(function(){$("#closenav").hide(),$(".viewpopup").hide();var e=$("#closenav"),n=$("#navbtn"),t=$(".fullnavigation"),i=$(".fullnavigation ul li a");imgdisplay=$(".imgdisplay"),contentbox=$(".contentbox"),n.click(function(){t.animate({right:"0px"},1e3,"easeOutBack"),n.fadeOut("500"),e.delay(1e3).fadeIn("100")}),e.click(function(){t.animate({right:"-200px"},1e3),n.delay(1e3).fadeIn("200"),e.fadeOut("800")}),i.click(function(){t.animate({right:"-200px"},1e3),n.delay(1e3).fadeIn("200"),e.fadeOut("800")}),contentbox.mouseenter(function(){$(this).children().first().next().find("p").removeClass("animated fadeOutDown"),$(this).children().first().next().find("p").addClass("animated fadeInDown")}),contentbox.mouseleave(function(){$(this).children().first().next().find("p").removeClass("animated fadeInDown"),$(this).children().first().next().find("p").addClass("animated fadeOutDown")})}),$(window).load(function(){function e(i){$("#update").hide().html(t[i]).fadeIn(800),i++,n=setTimeout(function(){e(i%t.length)},2e3)}var n,t=new Array("Reggae Music","Skimboarding","The Beach","Simple Design");$(document).ready(function(){e(0)})}),$(function(){function e(e){var n,t,i=[],a=$(window).scrollTop(),o=$(".section");for(o.each(function(){i.push(parseInt($(this).offset().top,10))}),t=0;t<i.length;t++){if("next"==e&&i[t]>a){n=o.get(t);break}if("prev"==e&&t>0&&i[t]>=a){n=o.get(t-1);break}}return n&&$.scrollTo(n,{duration:1e3}),!1}$("#next,#prev").click(function(){return e($(this).attr("id"))}),$(document).keypress(function(n){switch(n.keyCode){case 38:return e("prev");case 40:return e("next")}}),$(".scrolltoanchor").click(function(){return $.scrollTo($($(this).attr("href")),{duration:2e3}),!1})});