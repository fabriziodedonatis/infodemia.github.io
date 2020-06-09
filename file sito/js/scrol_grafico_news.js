$(document).ready(function() { // wait for document ready
			// init  
			
			var dim = $("#contenitore_grafico");
				dim = {x:dim.width(), y:dim.height()};
			
			var controller = new ScrollMagic.Controller();
			var datedb = ["#24_gennaio","#26_gennaio","#27_gennaio","#29_gennaio","#31_gennaio","#03_febbraio","#24_febbraio",
				      "#02_marzo","#07_marzo","#09_marzo","#10_marzo","#16_marzo","#28_marzo","#30_marzo","#06_aprile","#13_aprile"];
			var opacit = 0.75; //opacità linee settimanali
			var opacit2 = 0.3; //opacità linee extrasettimana
			var cerchi;
			var opacit_trendx= 0.25; // opacità trend dx 
		
			var scenauno = new ScrollMagic.Scene({
					triggerElement: "#contenitore_grafico",
					offset: "-30",
					triggerHook: 'onLeave',
					duration: "3150%"
				})
				.setPin("#contenitore_grafico", {
					pushFollowers: false
				}) //.addIndicators() // add indicators (requires plugin)
				 .on("progress", function (e) {
                                           //console.log("camina_"+e.progress);
					//$("#linee").attr("viewBox", "0 0 "+dim.x +" "+ "inherit");
					//$("#24_gennaio").attr("x2", dim.x);
                    		})
				.addTo(controller);



			new ScrollMagic.Scene({ triggerElement: "#caption-1", offset: "50vh", duration: "50%"  })
				.setPin("#caption-1", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio" ).attr( "cx", 0.493 ).attr( "cy", 0.493);
					
					$("#24_gennaio").attr("opacity", opacit2);
					//$("#chart h1").css("color", "red");
				})
				.addTo(controller);

			new ScrollMagic.Scene({	triggerElement: "#caption-2", offset: "50vh", duration: "50%"	})
				.setPin("#caption-2", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio" ).attr( "cx", 4.491 ).attr( "cy", 15.536);
					$("#26_gennaio").attr("opacity", opacit2);
				})
				.addTo(controller);

			new ScrollMagic.Scene({	triggerElement: "#caption-3", offset: "50vh", duration: "50%" })
				.setPin("#caption-3", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio" ).attr( "cx", 3.159 ).attr( "cy", 23.261);
					$("#27_gennaio").attr("opacity", opacit);
				})
				.addTo(controller);

            new ScrollMagic.Scene({	triggerElement: "#caption-4", offset: "50vh", duration: "50%" })
				.setPin("#caption-4", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio" ).attr( "cx", 6.491 ).attr( "cy", 38.712);
					$("#29_gennaio").attr("opacity", opacit2);
				})
				.on("leave", function(e) {
					$( "#cerchio" ).attr("opacity", 0);
					})
				.addTo(controller);
				
            
           /*  new ScrollMagic.Scene({ triggerElement: "#caption-5", offset: "0",	duration: "150%"	})
				.setPin("#caption-5", {	pushFollowers: false})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					                    
				})
				.addTo(controller);
		*/		
		new ScrollMagic.Scene({
					triggerElement: "#caption-5",
					offset: "50vh",
					triggerHook: 0.5,
					duration: "280%"
				})
				.setPin("#caption-5", {
					pushFollowers: false
				}) //.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio2" ).attr( "cx", 31 ).attr( "cy", 54.563).attr("opacity", 1);
					$("#31_gennaio").attr("opacity", opacit2);
					$("#trenddx_2").attr("opacity", 1 );
				})
				
				.addTo(controller);
				
			//trafiletto------------------------
				new ScrollMagic.Scene({ triggerElement: "#caption-5-1",triggerHook: 0.5, offset: "100",	duration: "50%"	})
				.setPin("#caption-5-1", {	pushFollowers: true})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					                    
				})
				.setClassToggle("#trf_mascherine", "visible")
				.addTo(controller);
				
			//immagini-----------------------
			
				new ScrollMagic.Scene({ triggerElement: "#caption-5-2",triggerHook: 0.1, offset: "0",	duration: "50%"	})
				.setPin("#caption-5-2", {	pushFollowers: true})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					maxX=$(".anim_mascherine").width();
					minX=$(".anim_mascherine").width()/10;
					maxY=$(".anim_mascherine").height();
					minY=$(".anim_mascherine").height()/12;
					
					i = 0;
					$(".anim_mascherine img").each(function() {
					    rndX = Math.random() * (maxX/3 - minX)+ minX;
					    rndY = Math.random() * (maxY/2 - minY)+ minY;
					    $(this).css("left", rndX + "px");
					    $(this).css("top", rndY + "px");
					    $(this).css("z-index", 10);
					    $(this).delay(650 * i).animate({
						opacity: 1,
					    }, 800).fadeIn(1500);
					    i++;
					});                    
				})
				.on("leave", function(e) {
					$(".anim_mascherine img").animate({
						opacity: 0
					    }, 500);
					$( "#cerchio2" ).attr("opacity", 0);
					$("#trenddx_2").attr("opacity", opacit_trendx );
					})
				//.setClassToggle("#trf_mascherine", "visible")
				.addTo(controller);
			
			
			
			/*	var rivelamascherine = document.getElementsByClassName("mascherine_img");
					for (var i=0; i<rivelamascherine.length; i++) {
                                            
				new ScrollMagic.Scene({ triggerElement: rivelamascherine[i],
						      triggerHook: 0.8,
						      offset: "100",
						      duration: "60%"
						      })
				//.setPin(rivelamascherine[i], {	pushFollowers: true})
				
				.addIndicators({name: "mascherine_img" + (i+1) }) // add indicators (requires plugin)
				.setClassToggle(rivelamascherine[i], "visible")
				.on("enter", function(e) {
					                    
				})		
				.addTo(controller);
				}
			*/	
				
			//immagini END-----------------------
			
            new ScrollMagic.Scene({ triggerElement: "#caption-6", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-6", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio" ).attr( "cx", 5.824 ).attr( "cy", 77.339).attr("opacity", 1);
					$("#03_febbraio").attr("opacity", opacit);
				})
				.addTo(controller);
            
            new ScrollMagic.Scene({ triggerElement: "#caption-7", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-7", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					// $( "#cerchio" ).attr( "cx", 7.824 ).attr( "cy", 131.417);
					$( "#cerchio" ).attr( "cx", 65.14 ).attr( "cy", 239.573);
					$("#10_febbraio").attr("opacity", opacit);
					$("#17_febbraio").attr("opacity", opacit);
					$("#24_febbraio").attr("opacity", opacit);
				})
				.addTo(controller);
            
            new ScrollMagic.Scene({ triggerElement: "#caption-8", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-8", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio" ).attr( "cx", 43.146 ).attr( "cy", 293.651);
					$("#02_marzo").attr("opacity", opacit);
				})
				.addTo(controller);
            
            new ScrollMagic.Scene({ triggerElement: "#caption-9", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-9", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio" ).attr( "cx", 54.476 ).attr( "cy", 332.278);
					$("#07_marzo").attr("opacity", opacit2);
					
				})
				.on("leave", function(e) {
					$( "#cerchio" ).attr("opacity", 0);
					})
				.addTo(controller);
            
         /*   new ScrollMagic.Scene({ triggerElement: "#caption-10", offset: "0",	duration: "50%"	})
				.setPin("#caption-10", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					                    
				})
				.addTo(controller);
		*/
	 
	    new ScrollMagic.Scene({
					triggerElement: "#caption-10",
					offset: "50vh",
					triggerHook: 0.5,
					duration: "280%"
				})
				.setPin("#caption-10", {
					pushFollowers: false
				}) //.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio3" ).attr( "cx", 10 ).attr( "cy", 343).attr("opacity", 1);
					$("#trenddx_1").attr("opacity", 1 );
				})
				.addTo(controller);
				
				//trafiletto------------------------
				new ScrollMagic.Scene({ triggerElement: "#caption-10-1",triggerHook: 0.5, offset: "100",	duration: "50%"	})
				.setPin("#caption-10-1", {	pushFollowers: true})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					                    
				})
				.setClassToggle("#trf_treni", "visible")
				
				.addTo(controller);
				
			//immagini-----------------------
			
				new ScrollMagic.Scene({ triggerElement: "#caption-10-2",triggerHook: 0.1, offset: "0",	duration: "50%"	})
				.setPin("#caption-10-2", {	pushFollowers: true})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					maxX=$(".anim_treni").width();
					minX=$(".anim_treni").width()/10;
					maxY=$(".anim_treni").height();
					minY=$(".anim_treni").height()/12;
					i = 0;
					$(".anim_treni img").each(function() {
					    rndX = Math.random() * (maxX/3 - minX)+ minX;
					    rndY = Math.random() * (maxY/2 - minY)+ minY;
					    $(this).css("left", rndX + "px");
					    $(this).css("top", rndY + "px");
					    $(this).css("z-index", 10);
					    $(this).delay(650 * i).animate({
						opacity: 1,
					    }, 800).fadeIn(1000);
					    i++;
					});                    
				})
				.on("leave", function(e) {
					$(".anim_treni img").animate({
						opacity: 0
					    }, 500);
					$( "#cerchio3" ).attr("opacity", 0);
					$("#trenddx_1").attr("opacity", opacit_trendx );
					})
				//.setClassToggle("#trf_mascherine", "visible")
				.addTo(controller);
				
				
            
            new ScrollMagic.Scene({ triggerElement: "#caption-11", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-11", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					 $( "#cerchio" ).attr( "cx", 59.141 ).attr( "cy", 347.729).attr("opacity",1);
					 $("#09_marzo").attr("opacity", opacit);
				})
				.on("leave", function(e) {
					$( "#cerchio" ).attr("opacity", 0);
					})
				.addTo(controller);
            
       /*     new ScrollMagic.Scene({ triggerElement: "#caption-12", offset: "0",	duration: "50%"	})
				.setPin("#caption-12", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					                    
				})
				.addTo(controller);  */
       
	     new ScrollMagic.Scene({
					triggerElement: "#caption-12",
					offset: "50vh",
					triggerHook: 0.5,
					duration: "280%"
				})
				.setPin("#caption-12", {
					pushFollowers: false
				}) //.addIndicators() // add indicators (requires plugin) 
				
				.on("enter", function(e) {
					 $( "#cerchio4" ).attr( "cx", 6 ).attr( "cy", 355.529).attr("opacity", 1);
					 $("#10_marzo").attr("opacity", opacit2);
					 $("#trenddx_3").attr("opacity",1);
				})
				
				.addTo(controller);
				
				
			//trafiletto------------------------
				new ScrollMagic.Scene({ triggerElement: "#caption-12-1",triggerHook: 0.5, offset: "100",	duration: "50%"	})
				.setPin("#caption-12-1", {	pushFollowers: true})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					                    
				})
				.setClassToggle("#trf_supermercati", "visible")
				.addTo(controller);
				
			//immagini-----------------------
			
				new ScrollMagic.Scene({ triggerElement: "#caption-12-2",triggerHook: 0.1, offset: "0", duration: "50%"	})
				.setPin("#caption-12-2", {pushFollowers: true})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					maxX=$(".anim_supermercati").width();
					minX=$(".anim_supermercati").width()/10;
					maxY=$(".anim_supermercati").height();
					minY=$(".anim_supermercati").height()/12;
					i = 0;
					$(".anim_supermercati img").each(function() {
					    rndX = Math.random() * (maxX/3 - minX)+ minX;
					    rndY = Math.random() * (maxY/2 - minY)+ minY;
					    $(this).css("left", rndX + "px");
					    $(this).css("top", rndY + "px");
					    $(this).css("z-index", 10);
					    $(this).delay(600 * i).animate({
						opacity: 1,
					    }, 800).fadeIn(1000);
					    i++;
					});                    
				})
				.on("leave", function(e) {
					$(".anim_supermercati img").animate({
						opacity: 0
					    }, 500);
					 $( "#cerchio4" ).attr("opacity", 0);
					 $("#trenddx_3").attr("opacity", opacit_trendx );
					})
				//.setClassToggle("#trf_mascherine", "visible")
				.addTo(controller);
            
            new ScrollMagic.Scene({ triggerElement: "#caption-13", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-13", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio" ).attr( "cx", 39.814 ).attr( "cy", 401.807).attr("opacity",1);
					$("#16_marzo").attr("opacity", opacit);
				})
				.addTo(controller);
                
            new ScrollMagic.Scene({ triggerElement: "#caption-14", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-14", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					$( "#cerchio" ).attr( "cx", 31.15  ).attr( "cy", 455.885);
					$("#28_marzo").attr("opacity", opacit2);
				})
				.addTo(controller);
                
            new ScrollMagic.Scene({ triggerElement: "#caption-15", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-15", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					 $( "#cerchio" ).attr( "cx", 26.485 ).attr( "cy", 509.963);
					 $("#30_marzo").attr("opacity", opacit);
				})
				.addTo(controller);
                
            new ScrollMagic.Scene({ triggerElement: "#caption-16", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-16", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					  $( "#cerchio" ).attr( "cx", 23.152 ).attr( "cy", 564.041);
					  $("#06_aprile").attr("opacity", opacit);
				})
				.addTo(controller);
                
            new ScrollMagic.Scene({ triggerElement: "#caption-17", offset: "50vh",	duration: "50%"	})
				.setPin("#caption-17", {	pushFollowers: true	})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
					  $( "#cerchio" ).attr( "cx", 19.82 ).attr( "cy", 618.119);
					  $("#13_aprile").attr("opacity", opacit);
				})
				.addTo(controller);
    
    
    
    
    
    //---- nuovo SM per trafiletti ------
               
	       
	       
	       
               
             
       /*      new ScrollMagic.Scene({
							triggerElement: "#caption-5",
							//triggerHook: 0.9, // show, when scrolled 10% into view
							duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50// move trigger to center of element
						})
                        .setPin(".trf_mascherine", {	pushFollowers: false	})
						.setClassToggle(".trf_mascherine", "visible") // add class to reveal
						//.addIndicators() // add indicators (requires plugin)
                       	.on("enter", function(e) {
					                    
				})
                        .addTo(controller);
                     
     */
				
				
							
					
    //---- nuovo SM per immagini ------
      
      
      
      
      //---- nuovo SM per trafiletti ------
               
               
               
               
           //fine scrollmagic     
		});  // chiusura function

