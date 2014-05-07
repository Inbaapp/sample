 
 

$(document).bind("mobileinit", function(){
      //$.mobile.defaultPageTransition = 'none';
     // $.mobile.defaultDialogTransition = 'none';
      $.mobile.useFastClick = true;
});

$(function(){ 
$("input#filterTable-input").click(function(event) {
					 $(this).attr("readonly",true);
					$("ul#listname li").removeClass('ui-screen-hidden');					
					
					$("ul#listname li").click(function(event){

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


$( window ).resize(function() {		
		GetWidth();
   	
});


function GetWidth()
{		
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
    $('.rpanel-inner h3 a.sh').click(function(){
		
		
		
		$(this).siblings('.ui-collapsible-content').addClass('none');
		
		
		
		var node=$(this).attr('href');
						
			//$('.rpanel-inner').addClass('none').removeClass('show');
			
			$('#wapper-container').addClass('none').removeClass('show');
			
			
			$(node).addClass('show').removeClass('none'); 
			//e.preventDefault();	
			event.preventDefault();
		
     });
	 
	 $('#close').click(function(){
		 
		 $(this).parent().addClass('none').removeClass('show');
		 
		// $('.rpanel-inner').addClass('show').removeClass('none');
		
		 $('#wapper-container').addClass('show').removeClass('none');
		
		 event.preventDefault();
		 
	 });
		
	
	//Rpanel Height
	
	
	




	 
	
	
});



$(function()
{
	
	var totalHeight=$('#rpanel').innerHeight();
	var headerHeight=$('.rpanel').innerHeight();
	var footerHeight=$('.rpanel-bottombox').innerHeight();
	 
	var overlayHeight=totalHeight-(headerHeight+ footerHeight);
	
	overlayHeight= overlayHeight/16;	 
	
	$('.overlay').height(overlayHeight+'em');
	
	 
	 
});


$(function(){

	$('.ui-group-theme-language li').click(function(){
		
		var text=$(this).text();		
		$('#filterBasic-input').val(text);	
		
		
	});
	
	
	
});
 