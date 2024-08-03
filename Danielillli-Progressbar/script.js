document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progressBar");
    const loadingText = document.getElementById("loadingText");

    let progress = 0;
    const interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            progressBar.style.width = `${progress}%`;
            loadingText.textContent = `Loading... ${progress}%`;
        } else {
            clearInterval(interval);
            loadingText.textContent = "Loading Complete!";
            // Optionally, hide the loading screen or redirect
            // document.getElementById("loadingContainer").style.display = "none";
            // window.location.href = "home.html"; // Redirect to another page after loading
        }
    }, 50); // Adjust this value to change the speed of the loading animation
});
