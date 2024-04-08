let form = document.querySelector("form");
let name_input = document.getElementById("name");
let email_input = document.getElementById("email");
let message_input = document.getElementById("message");

function sendMail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "aliportfolio11@gmail.com",
    Password: "83A07259B85CF3B9DCE9747F24EBF85F07CC",
    To: "aliportfolio11@gmail.com",
    From: email_input.value,
    Subject: "This is the subject",
    Body: `
    <strong>Name</strong> : ${name_input.value} <br>
    <strong>Email</strong> : ${email_input.value} <br>
    <br>
    <br>
    <br>
    <strong>Message</strong> : ${message_input.value}
    `,
  }).then((message) => alert(message));
}
