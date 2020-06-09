/*----GRAFICI BUBBLE E LINECHART TWITTER INSIEME---------------------------------------------------------------------------*/
$(document).ready(function () { // wait for document ready
    //funzione per calcolare dash lunga come il tracciato
    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }
    /*---------------------------------------------------------------------------------------*/
    var images = [
        "images/png_bubble_twitter/bolle-01.png",
        "images/png_bubble_twitter/bolle-02.png",
        "images/png_bubble_twitter/bolle-03.png",
        "images/png_bubble_twitter/bolle-04.png",
        "images/png_bubble_twitter/bolle-05.png",
        "images/png_bubble_twitter/bolle-06.png",
        "images/png_bubble_twitter/bolle-07.png",
        "images/png_bubble_twitter/bolle-08.png",
        "images/png_bubble_twitter/bolle-09.png",
        "images/png_bubble_twitter/bolle-10.png",
        "images/png_bubble_twitter/bolle-11.png",
        "images/png_bubble_twitter/bolle-12.png",
        "images/png_bubble_twitter/bolle-13.png",
        "images/png_bubble_twitter/bolle-14.png",
        "images/png_bubble_twitter/bolle-15.png",
        "images/png_bubble_twitter/bolle-16.png",
        "images/png_bubble_twitter/bolle-17.png",
        "images/png_bubble_twitter/bolle-18.png",
        "images/png_bubble_twitter/bolle-19.png",
        "images/png_bubble_twitter/bolle-20.png",
        "images/png_bubble_twitter/bolle-21.png",
        "images/png_bubble_twitter/bolle-22.png",
        "images/png_bubble_twitter/bolle-23.png",
        "images/png_bubble_twitter/bolle-24.png",
        "images/png_bubble_twitter/bolle-25.png",
        "images/png_bubble_twitter/bolle-26.png",
        "images/png_bubble_twitter/bolle-27.png",
        "images/png_bubble_twitter/bolle-28.png",
        "images/png_bubble_twitter/bolle-29.png",
        "images/png_bubble_twitter/bolle-30.png",
        "images/png_bubble_twitter/bolle-31.png",
        "images/png_bubble_twitter/bolle-32.png",
        "images/png_bubble_twitter/bolle-33.png",
        "images/png_bubble_twitter/bolle-34.png",
        "images/png_bubble_twitter/bolle-35.png",
        "images/png_bubble_twitter/bolle-36.png",
        "images/png_bubble_twitter/bolle-37.png",
        "images/png_bubble_twitter/bolle-38.png",
        "images/png_bubble_twitter/bolle-39.png",
        "images/png_bubble_twitter/bolle-40.png",
        "images/png_bubble_twitter/bolle-41.png",
        "images/png_bubble_twitter/bolle-42.png",
        "images/png_bubble_twitter/bolle-43.png",
        "images/png_bubble_twitter/bolle-44.png",
        "images/png_bubble_twitter/bolle-45.png",
        "images/png_bubble_twitter/bolle-46.png",
        "images/png_bubble_twitter/bolle-47.png",
        "images/png_bubble_twitter/bolle-48.png",
        "images/png_bubble_twitter/bolle-49.png",
        "images/png_bubble_twitter/bolle-50.png",
        "images/png_bubble_twitter/bolle-51.png",
        "images/png_bubble_twitter/bolle-52.png",
        "images/png_bubble_twitter/bolle-53.png",
        "images/png_bubble_twitter/bolle-54.png",
        "images/png_bubble_twitter/bolle-55.png",
        "images/png_bubble_twitter/bolle-56.png",
        "images/png_bubble_twitter/bolle-57.png",
        "images/png_bubble_twitter/bolle-58.png",
        "images/png_bubble_twitter/bolle-59.png",
        "images/png_bubble_twitter/bolle-60.png",
        "images/png_bubble_twitter/bolle-61.png",
        "images/png_bubble_twitter/bolle-62.png",
        "images/png_bubble_twitter/bolle-63.png",
        "images/png_bubble_twitter/bolle-64.png",
        "images/png_bubble_twitter/bolle-65.png",
        "images/png_bubble_twitter/bolle-66.png",
        "images/png_bubble_twitter/bolle-67.png",
        "images/png_bubble_twitter/bolle-68.png",
        "images/png_bubble_twitter/bolle-69.png",
        "images/png_bubble_twitter/bolle-70.png",
        "images/png_bubble_twitter/bolle-71.png",
        "images/png_bubble_twitter/bolle-72.png",
        "images/png_bubble_twitter/bolle-73.png",
        "images/png_bubble_twitter/bolle-74.png",
        "images/png_bubble_twitter/bolle-75.png",
        "images/png_bubble_twitter/bolle-76.png",
        "images/png_bubble_twitter/bolle-77.png"
    ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {
        curImg: 0
    };

    // create tween
    var tween2 = TweenMax.to(obj, 0.5, {
        curImg: images.length - 1, // animate propery curImg to number of images
        roundProps: "curImg", // only integers so it can be used as an array index
        repeat: 0, // repeat 3 times
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: function () {
            $("#bolle").attr("src", images[obj.curImg]); // set the image source
        }
    });




    /*----------SCROLLMAGIC GRAFICO LINECHART TWITTER---------------------------------------*/
    // init
    var controller = new ScrollMagic.Controller();

    //prima line drawing
    //per far partire i grafici in contemporanea bisogna prima richimarli tutti in pathPrepare e poi si può richiamare direttamente il path in new TimelineMax
    pathPrepare($("#grafico-twitter-desktop svg #andamento_allarme_desktop_chartline"));
    pathPrepare($("#grafico-twitter-desktop svg #andamento_paura_desktop_chartline"));
    pathPrepare($("#grafico-twitter-desktop svg #andamento_morti_desktop_chartline"));

    /*-----timeline per l'animazione delle proprietà della linea
      var tween = new TimelineMax()
          .add(TweenMax.to($("#linea_grafico_twitter_desktop svg path"), 1, {
              strokeDashoffset:0,
              ease: Linear.easeNone
          }))--------*/

    var tween = new TimelineMax();
    tween.to("#grafico-twitter-desktop svg #andamento_allarme_desktop_chartline", 0.99, {
            strokeDashoffset: 0,
            ease: Linear.easeNone
        }, "0")
        .to("#grafico-twitter-desktop svg #andamento_paura_desktop_chartline", 1, {
            strokeDashoffset: 0,
            ease: Linear.easeNone
        }, "0")
        .to("#grafico-twitter-desktop svg #andamento_morti_desktop_chartline", 1, {
            strokeDashoffset: 0,
            ease: Linear.easeNone
        }, "0")
    /*------------------------------------------------*/
    // build scene grafico bolle twitter
    var scene = new ScrollMagic.Scene({
            triggerElement: "#box_10",
            triggerHook: 'onLeave',
            duration: "800%"
        })
        .setTween(tween2)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    /*------------------------------------------------*/
    // build scene grafico linechart twitter
    var scene = new ScrollMagic.Scene({
            triggerElement: "#box_10",
            triggerHook: 'onLeave',
            duration: "800%"
        })
        .setPin("#box_10", {
            pushFollowers: true
        })
        .setTween(tween)
        .on("enter", function (e) {

        })
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

});