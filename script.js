// Fetch news data
fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=5be8a3ff1718478aae138b4f67e7cba5")
  .then((res) => res.json())
  .then(loadNews)
  .catch((error) => console.error("Error fetching news:", error));

// Function to handle fetched news data
function loadNews(data) {
    console.log("Loading News", data);
    showNews(data.articles);
}

// Function to display news on the page
function showNews(articles) {
    const newsContainer = document.getElementById("cardcontainer");

    articles.forEach((news) => {
        const newCard = document.createElement("div");
        newCard.classList.add("card");

        const image = document.createElement("img");
        image.classList.add("image");
        image.src = news.urlToImage 

        const textCard = document.createElement("div");
        textCard.classList.add("textcard");

        const title = document.createElement("h2");
        title.classList.add("title");
        title.innerText = news.title;

        const author = document.createElement("span");
        author.classList.add("author");
        author.innerText = news.author ? `By ${news.author}` : "Unknown author";

        const description = document.createElement("p");
        description.classList.add("description");
        description.innerText = news.description || "No description available.";

        textCard.append(title, author);
        newCard.append(image, textCard, description);

        
        newsContainer.append(newCard);
    });
}