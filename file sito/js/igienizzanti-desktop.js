$(document).ready(function() { // wait for document ready
        
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
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

        });