$(document).ready(function() {
            
            var detector = new MobileDetect(window.navigator.userAgent);
          
            var controller = new ScrollMagic.Controller();

            if (detector.mobile() != null) {
                var tween = TweenMax.to("#igienizzanti-mobile #chart", 2.0, {
                    css: {
                        left: -1230
                    }
                });
                 new ScrollMagic.Scene({
                        triggerElement: "#box_7",
                        triggerHook: "onLeave",
                        offset: "0",
                        duration: "100%"
                    })
                    .setPin("#box_7", {
                        pushFollowers: true
                    })
                    .setTween(tween)
                  //  .addIndicators()
                    .addTo(controller); 
            }
            else if (detector.mobile() == null){
              //funzione per calcolare dash lunga come il tracciato
            function pathPrepare($el) {
                var lineLength = $el[0].getTotalLength();
                $el.css("stroke-dasharray", lineLength);
                $el.css("stroke-dashoffset", lineLength);
            }


            // init
            var controller= new ScrollMagic.Controller();

            //prima line drawing

            pathPrepare($("#linea-igienizzanti"));
            pathPrepare($("#linea-mascherine"));
            //timeline per l'animazione delle proprietà della linea
            var tween = new TimelineMax()
                .add(TweenMax.to($("#igienizzanti-desktop svg path"), 1, {
                    strokeDashoffset: 0,
                    ease: Linear.easeNone
                }))


            new ScrollMagic.Scene({
                    triggerElement: "#box_7",
                    triggerHook: 'onLeave',
                    duration: "100%"
                })
                .setPin("#box_7", {
                    pushFollowers: true
                })
                .setTween(tween)
                .on("enter", function(e) {

                })
               // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);  
            }
        });