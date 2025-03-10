document.addEventListener('DOMContentLoaded', function () {
    const portfolioSection = document.getElementById("portfolioSection");
    const portfolioSection2 = document.getElementById("portfolioSection2");
    const portfolioSection3 = document.getElementById("portfolioSection3");
    const teamProject = document.getElementById("teamProject");
    const singleProject = document.getElementById("singleProject");
    const serviceProject = document.getElementById("serviceProject");

    teamProject.addEventListener("click", function () {
        portfolioSection3.style.display = "none";
        portfolioSection2.style.display = "none";
        portfolioSection.style.display = "block";
    });
    singleProject.addEventListener("click", function () {
        portfolioSection3.style.display = "none";
        portfolioSection2.style.display = "block";
        portfolioSection.style.display = "none";
    });
    serviceProject.addEventListener("click", function () {
        portfolioSection3.style.display = "block";
        portfolioSection2.style.display = "none";
        portfolioSection.style.display = "none";
    });
});