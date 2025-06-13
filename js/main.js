// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        offset: 100
    });
});

// Login/Signup Form Toggle
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const signupLink = document.getElementById("signupLink");
    const loginLink = document.getElementById("loginLink");
    const logoH2 = document.querySelector(".login-popup .logo h2");

    // Toggle to signup form
    signupLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        logoH2.textContent = "Create Account";
    });

    // Toggle to login form
    loginLink.addEventListener("click", function(e) {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        logoH2.textContent = "MyLearning";
    });
});

// Smooth scrolling for internal links
document.addEventListener("DOMContentLoaded", function() {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Optional: Add scroll indicator functionality
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
        scrollIndicator.addEventListener("click", function() {
            const firstSection = document.querySelector(".class-section");
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});

// Toast notification function
function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Video error handling
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("bg-video");
    const videoFallback = document.querySelector(".video-fallback");
    
    video.addEventListener("error", function() {
        console.log("Video failed to load, showing fallback background");
        video.style.display = "none";
        videoFallback.style.display = "block";
    });
    
    // Ensure video plays on mobile devices
    video.addEventListener("loadeddata", function() {
        video.play().catch(function(error) {
            console.log("Video autoplay failed:", error);
        });
    });
});

// Parallax effect for hero section
window.addEventListener("scroll", function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector(".hero-content");
    
    if (heroContent && scrolled < window.innerHeight) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Popup functionality
document.addEventListener("DOMContentLoaded", function() {
    const openLoginPopupBtn = document.getElementById("openLoginPopup");
    const loginPopupContainer = document.getElementById("loginPopupContainer");
    const closeLoginPopupBtn = document.getElementById("closeLoginPopup");

    openLoginPopupBtn.addEventListener("click", function() {
        loginPopupContainer.classList.add("show");
    });

    closeLoginPopupBtn.addEventListener("click", function() {
        loginPopupContainer.classList.remove("show");
    });

    // Close popup when clicking outside
    loginPopupContainer.addEventListener("click", function(e) {
        if (e.target === loginPopupContainer) {
            loginPopupContainer.classList.remove("show");
        }
    });
});

