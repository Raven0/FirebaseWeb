
// Some Basic Stuff
// var username = document.getElementById("tbUsername");
// var pass = document.getElementById("tbPassword");
// var submitBtn = document.getElementById("submitBtn");
// var userRef = firebase.database().ref().child("User");

// Basic Retreive Data
// var postTitle = document.getElementById("postTitle");
// var titleRef = firebase.database().ref("title").child("heading");
//
// titleRef.on('value', function(datasnapshot){
//   postTitle.innerText = datasnapshot.val();
// });

// function submitClick() {
//   var user = mainText.value;
//   userRef.push().set(user);
// }

var userRef = firebase.database().ref().child("User");
userRef.on("child_added", snap => {
  var name = snap.child("name").val();
  var email = snap.child("email").val();

  $("#tBody").append(
    "<tr><td>"+name+"</td><td>"+email+"</td><td><button>Remove</button></td></tr>"
  );
});
