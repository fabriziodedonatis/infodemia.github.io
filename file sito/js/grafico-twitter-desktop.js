$(document).ready(function() { // wait for document ready
            //funzione per calcolare dash lunga come il tracciato
            function pathPrepare($el) {
                var lineLength = $el[0].getTotalLength();
                $el.css("stroke-dasharray", lineLength);
                $el.css("stroke-dashoffset", lineLength);
            }

            // init
            var controller = new ScrollMagic.Controller();

            //prima line drawing
            //per far partire i grafici in contemporanea bisogna prima richimarli tutti in pathPrepare e poi si può richiamare direttamente il path in new TimelineMax

            pathPrepare($("#linea_grafico_twitter_desktop svg #andamento_paura_desktop_chartline"));
            pathPrepare($("#linea_grafico_twitter_desktop svg #andamento_allarme_desktop_chartline"));
            pathPrepare($("#linea_grafico_twitter_desktop svg #andamento_morti_desktop_chartline"));
            
            //timeline per l'animazione delle proprietà della linea
            var tween = new TimelineMax()
                .add(TweenMax.to($("#linea_grafico_twitter_desktop svg path"), 1, {
                    strokeDashoffset: 0,
                    ease: Linear.easeNone
                }))

            new ScrollMagic.Scene({
                    triggerElement: "#box_10",
                    triggerHook: 'onLeave',
                    duration: "750%"
                })
                .setPin("#box_10", {
                    pushFollowers: true
                })
                .setTween(tween)
                .on("enter", function(e) {

                })
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

        });