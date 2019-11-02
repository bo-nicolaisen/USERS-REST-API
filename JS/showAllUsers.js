// json data retrival with fetch api
// define app root
const container = document.getElementById('root')

// define url
const url = 'http://localhost/To-do/PHP/API/readAllUsers.php';
//const url = 'http://localhost/To-do/PHP/API/readSingleUser.php?id=1';
console.log(url);
fetch(url) //fetch url

.then((resp) => resp.json()) // use the response as json

.then(function(data) {
  // build view here...
console.log(data);
  data.forEach(user => {
    // build movie card

    const userCard = document.createElement('article');
    userCard.setAttribute('class', 'card');

    const h2 = document.createElement('h2');
    h2.textContent = user.username;


    const p = document.createElement('p');
 // movie.description = movie.description.substring(0, 300); // Limit to 300 chars
 p.textContent = user.email+' '+user.password; // End with an ellipses



 // Append article to DOM
 container.appendChild(userCard);
 // append H2 and paragraph

 userCard.appendChild(h2);
 userCard.appendChild(p);




    console.log(user);

  })

})
// catch errors
.catch(function() {

  console.log("uuuups");
});
