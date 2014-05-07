 $(document).bind("mobileinit", function() {
     //$.mobile.defaultPageTransition = 'none';
     // $.mobile.defaultDialogTransition = 'none';
     $.mobile.useFastClick = true;
 });

 $(function() {
     $("input#filterTable-input").click(function(event) {
         $(this).attr("readonly", true);
         $("ul#listname li").removeClass('ui-screen-hidden');

         $("ul#listname li").click(function(event) {

             $("input#filterTable-input").val($(this).text());
             $("ul#listname li").addClass('ui-screen-hidden');


         });

     });
     $('#art').click(function(event) {

         $("ul#listname li").addClass('ui-screen-hidden');
     });

 });






 $(document).ready(function(e) {
     GetWidth();
 });


 $(window).resize(function() {
     GetWidth();

 });


 function GetWidth() {
     var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
     var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

     /*alert(w);
		alert(h);*/

     $('#login-page').width(w);
     $('#login-page').height(h);

 }

 //768
 //928

 //360
 //567

 //320
 //420



 $(document).ready(function(e) {
     $('.rpanel-inner h3 a.sh').click(function() {



         $(this).siblings('.ui-collapsible-content').addClass('none');



         var node = $(this).attr('href');

         //$('.rpanel-inner').addClass('none').removeClass('show');

         $('#wapper-container').addClass('none').removeClass('show');


         $(node).addClass('show').removeClass('none');
         //e.preventDefault();	
         event.preventDefault();

     });

     $('#close').click(function() {

         $(this).parent().addClass('none').removeClass('show');

         // $('.rpanel-inner').addClass('show').removeClass('none');

         $('#wapper-container').addClass('show').removeClass('none');

         event.preventDefault();

     });


     //Rpanel Height









 });



 $(function() {

     var totalHeight = $('#rpanel').innerHeight();
     var headerHeight = $('.rpanel').innerHeight();
     var footerHeight = $('.rpanel-bottombox').innerHeight();

     var overlayHeight = totalHeight - (headerHeight + footerHeight);

     overlayHeight = overlayHeight / 16;

     $('.overlay').height(overlayHeight + 'em');



 });


 $(function() {

     $('.ui-group-theme-language li').click(function() {

         var text = $(this).text();
         $('#filterBasic-input').val(text);


     });



 });







 function getScrollTop() {
     if (typeof pageYOffset != 'undefined') {
         //most browsers except IE before #9
         return pageYOffset;
     } else {
         var B = document.body; //IE 'quirks'
         var D = document.documentElement; //IE with doctype
         D = (D.clientHeight) ? D : B;
         return D.scrollTop;
     }
 }

 var timeouts = [];
 var scrolling = false;
 var scroller;
 var scrollTop = getScrollTop();
 var timeMs;
 var alter = false;
 var speed = 5;
 window.onscroll = function() {
     if (alter) {
         var timeDif = new Date().getMilliseconds() - timeMs;
         speed = 5 - (timeDif / 50);
         console.log(speed);
     }
     timeMs = new Date().getMilliseconds();
     alter = !alter;
     var scrollDirection = getScrollTop() - scrollTop;
     scrollDirection = scrollDirection / Math.abs(scrollDirection);
     scrollTop = getScrollTop();
     clearTimeout(scroller);
     scroller = setTimeout(function() {
         console.log('smooth scrolling active');
         if (!scrolling) {
             timeouts.length = 0;
             scrolling = true;
             var steps = 50;
             var delay = 6;
             for (var i = 0; i < steps; i++) {
                 (function(i) {
                     var timeout = setTimeout(function() {
                         var perc = i / steps;
                         var val = (perc == 1) ? 1 : (-Math.pow(2, -10 * perc) + 1);
                         var scrollY = val * speed * scrollDirection;
                         window.scrollTo(0, getScrollTop() + scrollY);
                         setTimeout(function() {
                             if (i == (steps - 1)) scrolling = false;
                         }, steps * delay);
                     }, (i * delay));
                     timeouts.push(timeout);
                 })(i);
             }
         }
     }, 50);
 };




function changeurl(){
       
        window.location = "login.html"
    }