$(document).ready(function() { // wait for document ready
           var detector = new MobileDetect(window.navigator.userAgent);
            //funzione per calcolare dash lunga come il tracciato
            function pathPrepare($el) {
                var lineLength = $el[0].getTotalLength();
                $el.css("stroke-dasharray", lineLength);
                $el.css("stroke-dashoffset", lineLength);
            }


            // init
            var controller = new ScrollMagic.Controller();
            
            if (detector.mobile() == null) {
             //prima line drawing

            pathPrepare($("#ascolti-tv-desktop svg #trend_Gennaio"));
            pathPrepare($("#ascolti-tv-desktop svg #trend_Febbraio"));
            pathPrepare($("#ascolti-tv-desktop svg #trend_Marzo"));
            //timeline per l'animazione delle proprietà della linea
            var tween = new TimelineMax()
                .add(TweenMax.to($("#ascolti-tv-desktop svg path"), 1, {
                    strokeDashoffset: 0,
                    ease: Linear.easeNone
                }))
              


            new ScrollMagic.Scene({
                    triggerElement: "#box_3 ",
                    triggerHook: 'onLeave',
                    offset: "-30",
                    duration: "100%"
                })
                .setPin("#box_3 ", {
                    pushFollowers: true
                })
                .setTween(tween)
                .on("enter", function(e) {

                })
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);   
            }
        });
