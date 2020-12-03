$(document).ready(function () {
   //    let pass = "1want2teach!";
   let pass = "letmein123!";
   //console.log(pass);

   let users = ["mleary@2u.com", "fpalmer@2u.com"];
   let userEntry = $("#email").val();

   $("#submit").click(function () {
      if (users.includes(userEntry) && $("#pass").val() === pass) {
         alert("yup");
      } else {
         alert("somethings up");
      }
   });
});
