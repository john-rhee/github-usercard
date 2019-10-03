/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const entryPoint = document.querySelector(".card");

axios
  .get('https://api.github.com/users/john-rhee')
  .then(response=>{
    console.log(response); 
    response.data.forEach(item => {
      const newEntry = gitHub(item);
      entryPoint.appendChild(newEntry);
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitHub(data) {

  const newCard = document.createElement('div');
  const newImg = document.createElement('img');
  const newCardInfo = document.createElement('div');
  const newName = document.createElement('h3');
  const newUser = document.createElement('p');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const a1 = document.createElement('a');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');

  newImg.src = 'avatar_url.data';
  newName.textContent = 'name.data';
  newUser.textContent = 'login.data';
  p1.textContent = 'location.data';
  a1.textContent = 'html_url.data';
  p3.textContent = 'Followers: {followers.data}';
  p4.textContent = 'Following: {following.data}';
  p5.textContent = 'Bio: {bio.data}';
  
  newCard.classList.add("card");
  newCardInfo.classList.add("card-info");
  newName.classList.add("name");
  newUser.classList.add("username");

  newCard.appendChild(newImg);
  newCard.appendChild(newCardInfo);
  newCardInfo.appendChild(newName);
  newCardInfo.appendChild(newUser);
  newCardInfo.appendChild(p1);
  newCardInfo.appendChild(p2);
  p2.appendChild(a1);
  newCardInfo.appendChild(p3);
  newCardInfo.appendChild(p4);
  newCardInfo.appendChild(p5);

  return newCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
