$(document).ready(function() {
         /*var words=["mascherine","psicosi","sanificare","multa","peste","quarantena","decreto","coronavirus","bloccare","allerta","chiusura","emergenza","morti","pandemia","panico","untori","paura"];
         for(n=0; n<10; n++){
         for (i = 0; i < words.length; i++) {
            tmpBubble=$(".bubbles").append("<p class='bubble'>"+ words[i] + "</p>");
            tmpBubble.css("opacity", "1");
            $( '.bubble' ).each(function( index ) {
            $(this).css({
            left : Math.random() * ($('.bubbles').width() - $(this).width()),
            top : Math.random() * ($('.bubbles').height() - $(this).height())
            });
           });
         }
         }*/
         
         var controller = new ScrollMagic.Controller();
         new ScrollMagic.Scene({
                    triggerElement: "#box_bubble",
					duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
                    triggerHook: 0,
                })
                .setPin("#box_bubble", {
                    pushFollowers: false
                })
                //.addIndicators() // add indicators (requires plugin)
                .on("enter", function(e) {
                        i=0;
                $(".bubbles .bubble").each(function() {
                rndScale = Math.random() * 3;
                rndX = Math.random() * $(".bubbles").width();
                rndY = Math.random() * $(".bubbles").height();
                rndOrbit = Math.random() * 5;
                speed = Math.random() * 2;
                $(this).delay(40 * i*0.3).animate({
						    opacity: 1,
					            }, 50).fadeIn(10);
                $(this).css("transform", "scale(" + rndScale + ")");
                $(this).css("top", rndY + "px");
                $(this).css("left", rndX + "px");
                //$(this).css("opacity", "1");
                i++;
            })
                })
                //.setClassToggle(".bubbles", "bg")
                .addTo(controller);
                
                new ScrollMagic.Scene({ triggerElement: "#box_12",	duration: "100%", offset: "50",triggerHook: 0.5, })
				.setPin("#box_12", {	pushFollowers: true})
				//.addIndicators() // add indicators (requires plugin)
				.on("enter", function(e) {
                $(".bubble p").animate({opacity: 0.1 }, 100).fadeIn(1500);	 	                  
				})
                .setClassToggle("#frase-finale", "scale")
				.addTo(controller);
        });