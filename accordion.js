function map(n, l, h, l2, h2) {
    const range1 = h - l;
    const range2 = h2 - l2;
    var r = h2 - l2;
    const p1 = n / range1;
    //const p2 = Math.pow( Math.sin(Math.abs(p1) * Math.PI / 1.8) / Math.sin(Math.PI / 1.8), 3);
    const p2 = Math.pow( -Math.cos(Math.abs(p1) * Math.PI) * 0.5 + 0.5, 10);
    const n2 = p2 * range2 + l2;
    return n2;
}

function setHeight(el, height, suffix) {
    el.style.height = height + (suffix || "px");
    if (el.parentNode !== document.body && el.parentNode !== document) {
        setHeight(el.parentNode, 0, "px");
        setHeight(el.parentNode, el.parentNode.scrollHeight, "px");
    }
}

var id;
function smoothOpenClose(el, isClosing) {

    // Set up for Animation
    var elem = el.parentNode.getElementsByTagName("ul")[0];
    if (elem === undefined) { return; }

    var height = 0;
    clearInterval(id);
    id = setInterval(frame, 10);

    var frameCount = 0;
    var maxFrameCount = 500;
    var date = new Date();
    var startMillis = date.getTime();
    var ellapsedTime;


    // Animation
    function frame() {
        // Keep track of how long it has taken
        date = new Date();
        ellapsedTime = date.getTime() - startMillis;
        frameCount++;

        // Keep track of the relative position of the accordion
        var posY = el.getBoundingClientRect().top;

        // End the animation
        if (ellapsedTime > maxFrameCount) {
            clearInterval(id);

            // Make sure that the accordion is fully open or closed
            elem.style.height = "0";
            if (isClosing && height !== 0) {
                setHeight(elem, 0);
            }
            else if (!isClosing && height !== elem.scrollHeight) {
                setHeight(elem,elem.scrollHeight);
            }
            else {
                setHeight(elem,height);
            }
        }
        else {
            // Update the height
            elem.style.height = "0"; // Set the height to zero so that scrollHeight is calculated correctly

            // Find height
            height = Math.round(map(ellapsedTime, 0, maxFrameCount, isClosing ? elem.scrollHeight : 0, isClosing ? 0 : elem.scrollHeight));

            // Take away or add the accordion-open class at the appropriate time
            if (isClosing && el.classList.contains("accordion-open") && height < elem.scrollHeight - 20) {
                el.classList.remove("accordion-open");
            }
            else if (!isClosing && !el.classList.contains("accordion-open") && height > 20) {
                el.classList.add("accordion-open");
            }

            // Set the height of the element
            setHeight(elem, height);

        }

        // Scroll so that the relative position of the accordion remains 
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var posY2 = scrollY + el.getBoundingClientRect().top;
        var scrollPos = posY2 - posY;
        window.scrollTo(0, scrollPos);
    }
}

var accordionLinkEls = document.querySelectorAll(".accordion a");
for (var i = 0; i < accordionLinkEls.length; i++) {
    accordionLinkEls[i].addEventListener("click", function (event) {
        smoothOpenClose(this, this.classList.contains("accordion-open"));
    });
}