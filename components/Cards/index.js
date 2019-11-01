// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response =>{
        console.log(response.data.articles);
        const cards = document.querySelector(".cards-container");
        const articles = response.data.articles
        const articlesArr= Object.values(articles)
        console.log(articlesArr);
        
        for(i=0;i<articlesArr.length;i++){
            for(g=0;g<articlesArr[i].length;g++){
            cards.appendChild(cardMaker(articlesArr[i][g].headline, articlesArr[i][g].authorPhoto, articlesArr[i][g].authorName))
            }
        }
    })
function cardMaker(headline, img, authorName){
    const cCard = document.createElement("div");
    const hHeadline = document.createElement("div");
    const aAuthor = document.createElement("div");
    const imgContainer = document.createElement("div");
    const iImg = document.createElement("img");
    const credit = document.createElement("span");

    cCard.classList.add("card");
    hHeadline.classList.add("headline");
    aAuthor.classList.add("author");
    imgContainer.classList.add("img-container");

    cCard.appendChild(hHeadline);
    cCard.appendChild(aAuthor);
    aAuthor.appendChild(imgContainer);
    aAuthor.appendChild(credit);
    imgContainer.appendChild(iImg);

    hHeadline.textContent = headline;
    iImg.src = img;
    credit.textContent = authorName;

    return cCard
}