var section = document.querySelectorAll(".section");
var sections = {};
section.forEach(function (element) {
    //offesetTop shows how many pixels from the top the targetd id in the element is
    console.log(element.id, element.offsetTop);
    //creating an object that holds the offest
    sections[element.id] = element.offsetTop;
});
window.onscroll = function () {
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    console.log('scrollPos');
   
    //loops through each of the sections
    for (var x in sections) {
        console.log(sections[x]);
        if (sections[x] <= scrollPos) {
            //if true element that should have active class is found
            //Remove active class from the inactive element
            document.querySelector('.active')
                .setAttribute('class','');
                //add the class to the active element
                document.querySelector('a[href*='+x+']').setAttribute('class','active');
                console.log(x);
        }
    }
}
