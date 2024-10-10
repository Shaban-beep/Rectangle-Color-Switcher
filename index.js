var rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function(details){
    let rectangleLocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectangleLocation.left;
  if (insiderectval < rectangleLocation.width/2) {
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insiderectval);
                       // gsap range ko map krny ka tarika he(minInput,maxInput, minOutput, maxOutput, valueToMap)
        gsap.to(rect, {
            backgroundColor:`rgb(${redColor},0, 0)`,
            ease: Power4,
        })
  } else {
    var blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insiderectval);
        gsap.to(rect, {
            backgroundColor:`rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })

  }

})
// details---> variable he --->naam kuch bi ho skta he, give the details of mousemove 

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, { // ye range ko map krny ka tarika he
        backgroundColor: "white"
    })
})