

document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "8d014bc28424490bb22d105a34490895";
    const category = "health"; 
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pageSize=10`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles) {
                displayNews(data.articles);
            }
        })
});

function displayNews(articles) {
    const newsContainer = document.getElementById("newsContainer");
    const template = document.getElementById("newsTemplate");

    articles.forEach(article => {
        const newsCard = template.cloneNode(true);
        newsCard.classList.remove("d-none");
        newsCard.querySelector("#newsTitle").textContent = article.title;
        newsCard.querySelector("#newsSource").textContent = article.source.name;
        newsCard.querySelector("#newsDescription").textContent = article.description
        newsCard.querySelector("#newsLink").href = article.url;
        

        newsContainer.appendChild(newsCard);
    });
}

