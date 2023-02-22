const loadingDiv = document.querySelector(".loading");
loadingDiv.classList.remove("hidden");
const loadingContent = document.querySelector(".loading-container");
setTimeout(() => {
    if (loadingContent) {
        loadingContent.classList.remove("hidden");
        loadingContent.classList.add("fade-in");
    }
}, 2000);

document.addEventListener("DOMContentLoaded", function() {

    // Hide page loader icon on page load
    window.addEventListener("load", () => {
        loadingContent.style.display = "none";
        loadingDiv.classList.add("fade-out"); 
        setTimeout(() => {
            loadingDiv.style.zIndex = "-1";
            loadingDiv.style.display = "none";
        }, "2000");
    });

    // Hide animated elements
    document.querySelector("#welcome-heading").classList.add("hidden");
    document.querySelector("#welcome-sub-heading").classList.add("hidden");
    document.querySelector("#welcome-btns").classList.add("hidden");
    document.querySelector("#food-drink-heading").classList.add("hidden");
    document.querySelector("#food-drink-sub-heading").classList.add("hidden");
    if (document.querySelector("#menus-lg")) {
        document.querySelector("#menus-lg").classList.add("hidden");
    }
    if (document.querySelector("#menus-sm")) {
        document.querySelector("#menus-sm").classList.add("hidden");
    }
    document.querySelector("#promos").classList.add("hidden");
    document.querySelector(".promos-sm").classList.add("hidden");
    document.querySelector("#location-heading").classList.add("hidden");
    document.querySelector("#location-sub-heading").classList.add("hidden");
    document.querySelector("#location-info").classList.add("hidden");

    // On mouse move left/right slide background image left/right (allowing user to explore image using mouse)
    document.addEventListener("mousemove", explore);
    const targetImage = document.querySelector("#main-image");
    function explore(event) {
        let center = window.innerWidth/2;    
        let mousePosition = event.clientX;          
        let depth = `${50 + (mousePosition - center) * 0.05}%`;  
        let x = `${depth}`;                             
        targetImage.style.backgroundPosition = x;
    }

    // Disable parallax in mobile safari
    let userAgentString = navigator.userAgent;
    let chromeAgent = userAgentString.indexOf("Chrome") > -1;
    let safariAgent = userAgentString.indexOf("Safari") > -1;
    if ((chromeAgent) && (safariAgent)) safariAgent = false;
    if (safariAgent) {
        if (window.innerWidth <= 1366) {
            const sectionImages = document.querySelectorAll(".section-image"); 
            sectionImages.forEach((image) => {
                image.style.backgroundAttachment = "scroll";
            });
            const imageText = document.querySelectorAll(".section-image-text");
            imageText.forEach((item) => {
                item.style.opacity = 1;
            });
            document.querySelector("#food-drink-image-text").style.textShadow = "1px 1px #DFCE9D";
        }
    }

    // Adjust location section padding to correct Firefox formatting bug
    let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
    if (firefoxAgent) {
        document.querySelector("#location-section").style.padding = "0 0 50px 0";
        document.querySelector(".main-heading-sm").style.lineHeight = "1";
    }

    // Prevent scroll functions on viewports > 1400vh and reveal all content
    if (window.innerHeight > 1400) {
        document.querySelector("#location-heading").className = "revealed";
        setTimeout(() => {
            document.querySelector("#location-sub-heading").className = "revealed";
        }, 500);
        setTimeout(() => {
            document.querySelector("#location-info").classList.remove("hidden");
            document.querySelector("#location-info").classList.add("fade-in");
        }, 1500);
        document.querySelector("#food-drink-heading").className = "revealed";
        setTimeout(() => {
            document.querySelector("#food-drink-sub-heading").className = "revealed";
        }, 500);
        setTimeout(() => {
            if (document.querySelector("#menus-lg")) {
                document.querySelector("#menus-lg").classList.remove("hidden");
                document.querySelector("#menus-lg").classList.add("fade-in");
            }
            if (document.querySelector("#menus-sm")) {
                document.querySelector("#menus-sm").classList.remove("hidden");
                document.querySelector("#menus-sm").classList.add("fade-in");
            }
        }, 1500);
        setTimeout(() => {
            document.querySelector("#promos").classList.remove("hidden");
            document.querySelector("#promos").classList.add("fade-in");
            document.querySelector(".promos-sm").classList.remove("hidden");
            document.querySelector(".promos-sm").classList.add("fade-in");
        }, 2000);
        document.querySelector("#welcome-heading").className = "revealed";
        setTimeout(() => {
            document.querySelector("#welcome-sub-heading").className = "revealed";
        }, 500);
        setTimeout(() => {
            document.querySelector("#welcome-btns").classList.remove("hidden");
            document.querySelector("#welcome-btns").classList.add("fade-in");
        }, 2000);
    }
    
    // Scroll functions
    const nav = document.querySelector("nav");
    const links = document.querySelector(".links-container");
    const viewport = window.innerHeight;
    window.onscroll = () => {scrollFunctions()};
    var lastScrollTop = 0; 

    // Set content based on initial scroll position
    if (window.scrollY > (viewport * 3.75)) {

        // Reveal location section text
        document.querySelector("#location-heading").className = "revealed";
        setTimeout(() => {
            document.querySelector("#location-sub-heading").className = "revealed";
        }, 500);
        setTimeout(() => {
            document.querySelector("#location-info").classList.remove("hidden");
            document.querySelector("#location-info").classList.add("fade-in");
        }, 1500);

        // Reveal food and drink section text
        document.querySelector("#food-drink-heading").className = "revealed";
        setTimeout(() => {
            document.querySelector("#food-drink-sub-heading").className = "revealed";
        }, 500);
        setTimeout(() => {
            if (document.querySelector("#menus-lg")) {
                document.querySelector("#menus-lg").classList.remove("hidden");
                document.querySelector("#menus-lg").classList.add("fade-in");
            }
            if (document.querySelector("#menus-sm")) {
                document.querySelector("#menus-sm").classList.remove("hidden");
                document.querySelector("#menus-sm").classList.add("fade-in");
            }
        }, 1500);
        setTimeout(() => {
            document.querySelector("#promos").classList.remove("hidden");
            document.querySelector("#promos").classList.add("fade-in");
            document.querySelector(".promos-sm").classList.remove("hidden");
            document.querySelector(".promos-sm").classList.add("fade-in");
        }, 2000);

        // Reveal welcome section text
        document.querySelector("#welcome-heading").className = "revealed";
        setTimeout(() => {
            document.querySelector("#welcome-sub-heading").className = "revealed";
        }, 500);
        setTimeout(() => {
            document.querySelector("#welcome-btns").classList.remove("hidden");
            document.querySelector("#welcome-btns").classList.add("fade-in");
        }, 2000);

    } else if (window.scrollY > (viewport * 2)) {

        // Reveal food and drink section text
        document.querySelector("#food-drink-heading").className = "revealed";
        setTimeout(() => {
            document.querySelector("#food-drink-sub-heading").className = "revealed";
        }, 500);
        setTimeout(() => {
            if (document.querySelector("#menus-lg")) {
                document.querySelector("#menus-lg").classList.remove("hidden");
                document.querySelector("#menus-lg").classList.add("fade-in");
            }
            if (document.querySelector("#menus-sm")) {
                document.querySelector("#menus-sm").classList.remove("hidden");
                document.querySelector("#menus-sm").classList.add("fade-in");
            }
        }, 1500);
        setTimeout(() => {
            document.querySelector("#promos").classList.remove("hidden");
            document.querySelector("#promos").classList.add("fade-in");
            document.querySelector(".promos-sm").classList.remove("hidden");
            document.querySelector(".promos-sm").classList.add("fade-in");
        }, 2000);

        // Reveal welcome section text
        document.querySelector("#welcome-heading").className = "revealed";
        setTimeout(() => {
            document.querySelector("#welcome-sub-heading").className = "revealed";
        }, 500);
        setTimeout(() => {
            document.querySelector("#welcome-btns").classList.remove("hidden");
            document.querySelector("#welcome-btns").classList.add("fade-in");
        }, 2000);

    } else if (window.scrollY > (viewport / 4)) {

        // Reveal welcome section text
        document.querySelector("#welcome-heading").className = "revealed";
        setTimeout(() => {
            document.querySelector("#welcome-sub-heading").className = "revealed";
        }, 500);
        setTimeout(() => {
            document.querySelector("#welcome-btns").classList.remove("hidden");
            document.querySelector("#welcome-btns").classList.add("fade-in");
        }, 2000);
    
    }
    
    function scrollFunctions() {

        // On scroll down
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
        
            if (scrollTop > (viewport * 3.75)) {

                document.querySelector("#location-heading").className = "revealed";
                setTimeout(() => {
                    document.querySelector("#location-sub-heading").className = "revealed";
                }, 500);
                setTimeout(() => {
                    document.querySelector("#location-info").classList.remove("hidden");
                    document.querySelector("#location-info").classList.add("fade-in");
                }, 1500);

                document.querySelector("#food-drink-heading").className = "revealed";
                setTimeout(() => {
                    document.querySelector("#food-drink-sub-heading").className = "revealed";
                }, 500);
                setTimeout(() => {
                    if (document.querySelector("#menus-lg")) {
                        document.querySelector("#menus-lg").classList.remove("hidden");
                        document.querySelector("#menus-lg").classList.add("fade-in");
                    }
                    if (document.querySelector("#menus-sm")) {
                        document.querySelector("#menus-sm").classList.remove("hidden");
                        document.querySelector("#menus-sm").classList.add("fade-in");
                    }
                }, 1500);
                setTimeout(() => {
                    document.querySelector("#promos").classList.remove("hidden");
                    document.querySelector("#promos").classList.add("fade-in");
                    document.querySelector(".promos-sm").classList.remove("hidden");
                    document.querySelector(".promos-sm").classList.add("fade-in");
                }, 2000);

                document.querySelector("#welcome-heading").className = "revealed";
                setTimeout(() => {
                    document.querySelector("#welcome-sub-heading").className = "revealed";
                }, 500);
                setTimeout(() => {
                    document.querySelector("#welcome-btns").classList.remove("hidden");
                    document.querySelector("#welcome-btns").classList.add("fade-in");
                }, 2000);

                // Hide nav
                nav.classList.remove("nav-visible");
                nav.classList.add("nav-hidden");

            } else if (scrollTop > (viewport * 2)) {

                document.querySelector("#food-drink-heading").className = "revealed";
                setTimeout(() => {
                    document.querySelector("#food-drink-sub-heading").className = "revealed";
                }, 500);
                setTimeout(() => {
                    if (document.querySelector("#menus-lg")) {
                        document.querySelector("#menus-lg").classList.remove("hidden");
                        document.querySelector("#menus-lg").classList.add("fade-in");
                    }
                    if (document.querySelector("#menus-sm")) {
                        document.querySelector("#menus-sm").classList.remove("hidden");
                        document.querySelector("#menus-sm").classList.add("fade-in");
                    }
                }, 1500);
                setTimeout(() => {
                    document.querySelector("#promos").classList.remove("hidden");
                    document.querySelector("#promos").classList.add("fade-in");
                    document.querySelector(".promos-sm").classList.remove("hidden");
                    document.querySelector(".promos-sm").classList.add("fade-in");
                }, 2000);

                document.querySelector("#welcome-heading").className = "revealed";
                setTimeout(() => {
                    document.querySelector("#welcome-sub-heading").className = "revealed";
                }, 500);
                setTimeout(() => {
                    document.querySelector("#welcome-btns").classList.remove("hidden");
                    document.querySelector("#welcome-btns").classList.add("fade-in");
                }, 2000);

                // Hide nav
                nav.classList.remove("nav-visible");
                nav.classList.add("nav-hidden");
    
            } else if (scrollTop > (viewport / 4)) {

                document.querySelector("#welcome-heading").className = "revealed";
                setTimeout(() => {
                    document.querySelector("#welcome-sub-heading").className = "revealed";
                }, 500);
                setTimeout(() => {
                    document.querySelector("#welcome-btns").classList.remove("hidden");
                    document.querySelector("#welcome-btns").classList.add("fade-in");
                }, 2000);

                // Hide nav
                nav.classList.remove("nav-visible");
                nav.classList.add("nav-hidden");

            } else if (scrollTop < viewport) {

                // Hide nav
                nav.classList.remove("nav-visible");
                nav.classList.add("nav-hidden");
                
            }

        // On scroll up
        } else if (scrollTop < lastScrollTop) {

            if (scrollTop > viewport) {
    
                // Display nav with white background
                nav.classList.remove("nav-hidden");
                nav.classList.add("nav-visible");
                nav.classList.add("white-bg");
                links.classList.remove("white");
                links.classList.add("slate-gray");
                
            } else {

                // Display nav with transparent background
                nav.classList.remove("nav-hidden");
                nav.classList.add("nav-visible");
                nav.classList.remove("white-bg");
                links.classList.remove("slate-gray");
                links.classList.add("white");
            
            }
        }
    lastScrollTop = scrollTop;
    }

});

const copySiteURL = () => {
    const el = document.createElement("textarea");
    el.value = "https://the-sandbar.web.app/";
    el.setAttribute("readonly", "");
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    const alertBox = document.createElement("div");
    alertBox.innerHTML = `<p>Copied to clipboard<p>`;
    document.body.appendChild(alertBox);
    alertBox.className = "alert";
    setTimeout (() => {
        document.body.removeChild(alertBox);
    }, 2000);
}