
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = function(doggos) {
  const liTags = [];
  const dogNames = Object.keys(doggos);

  dogNames.forEach((dog) => {
    const anchor = document.createElement("a");
    anchor.innerHTML = dog;
    anchor.href = doggos[dog];

    const li = document.createElement("li");
    li.classList = "dog-link";
    li.appendChild(anchor);
    liTags.push(li);
  });
  return liTags;
};

const attachDogLinks = function() {
  const dogLinks = dogLinkCreator(dogs);
  const dogList = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach((dog) => 
    {dogList.appendChild(dog);
  })
};

attachDogLinks();

const handleEnter = function() {
  const doggos = document.querySelectorAll(".dog-link");
  doggos.forEach( (dog) => {dog.classList.add("open");} );
}

const handleLeave = function() {
  const doggos = document.querySelectorAll(".dog-link");
  doggos.forEach((dog) => { dog.classList.remove("open"); });
}

const nav = document.querySelector(".drop-down-dog-nav");
nav.addEventListener("mouseenter", handleEnter);
nav.addEventListener("mouseleave", handleLeave);