// json data retrival with fetch api
// define app root
showAllUsers();

function showAllUsers(){
let container = document.getElementById('root')

// define url
let url = 'http://localhost/CRUD-REST_API/PHP/API/readAllUsers.php';
http://localhost/To-do/PHP/API/readSingleUser.php?id=1
//const url = 'http://localhost/To-do/PHP/API/readSingleUser.php?id=1';
console.log(url);
fetch(url) //fetch url

.then((resp) => resp.json()) // use the response as json

.then(function(data) {
  // build view here...
  console.log(data);

  // build movie card Template litteral
  container.innerHTML=`
  <h2>Users</h2>
  ${data.map(function(myUser){
    // yep another template litteral
    return `<article class="userCard">
    <h3>${myUser.username}</h3>
    <p>Email: ${myUser.email} Password: ${myUser.password}</p>
    <button type="button" onclick="editUser(${myUser.id})">Edit</button>
    </article>
    `

  }).join('')}
  `

})


// catch errors
.catch(function() {

  console.log("uuuups");
});

}



function editUser(myId){

  let container = document.getElementById('root')

  // define url
  let url = 'http://localhost/CRUD-REST_API/PHP/API/readSingleUser.php?id='+myId;
  //const url = 'http://localhost/To-do/PHP/API/readSingleUser.php?id=1';
  console.log(url);
  fetch(url) //fetch url

  .then((resp) => resp.json()) // use the response as json

  .then(function(data) {
  // build movie card Template litteral
    container.innerHTML=`
    <h2>Edit user</h2>
      <h3>${data.username}</h3>
      <p>Email: ${data.email} Password: ${data.password}</p>
    <button type="button" onclick="showAllUsers()">Back</button>
      </article>
    `

  })


}

function updateUser(myId){


}
