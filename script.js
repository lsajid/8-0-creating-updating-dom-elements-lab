let section = document.querySelector("section")
section.classList.add("featured");

// [ ] Create the following article element with JavaScript and add at the end of the section.posts element.
//what to we need we need new (article, img, h3, p, aside)
let sandwhich = document.querySelector("section.posts")
let article = document.createElement("article");


let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.")

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning"

let p1 = document.createElement("p");
p1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`


let aside = document.createElement("aside");

let p2 = document.createElement("p");
let span = document.createElement("span"); //not sure how to put strong tags 
let a = document.createElement("a");
let bold = document.createElement("strong")
span.textContent = " 4 Minutes"
bold.textContent = "Read Time:"
a.setAttribute("href", "#"); // how do you ass the 
a.textContent = "Read more..."

sandwhich.append(article)
article.prepend(img);
article.append(h3);
article.append(p1);
article.append(aside);

aside.prepend(p2)
span.prepend(bold)
p2.prepend(span);
p2.append(a);


// [ ] Switch the first and Second Articles 
let gamesArticle = document.querySelector(".posts article")
// how do you grab the second architectureArticle = document.querySelector()
gamesArticle.remove();

let takeArticle = document.querySelector(".posts article")

//set games article after 
takeArticle.after(gamesArticle)


