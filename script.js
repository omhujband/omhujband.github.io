
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function sendMail() {
    let parms = {
        FullName : document.getElementById('FullName').value.trim(),
        Email : document.getElementById('Email').value.trim(),
        PhoneNo : document.getElementById('PhoneNo').value.trim(),
        Subject : document.getElementById('Subject').value.trim(),
        Message : document.getElementById('Message').value.trim()
    }

     if (
    !parms.FullName ||
    !parms.Email ||
    !parms.PhoneNo ||
    !parms.Subject ||
    !parms.Message
  ) {
    alert("Please fill in all fields before sending.");
    return;
  }
  
    emailjs.send("service_vqzne0m", "template_q3126v7",parms).then((res) => {
        alert("Email Sent Successfully!");
        document.getElementById("contactForm").reset();
    }) .catch((err) => {
      console.error("Error sending email: ", err);
      alert("Failed to send email. Please try again.");
    });
}

// function sendMail() {
//     var FullName = document.getElementById('FullName').value.trim();
//     var Email = document.getElementById('Email').value.trim();
//     var PhoneNo = document.getElementById('PhoneNo').value.trim();
//     var Subject = document.getElementById('Subject').value.trim();
//     var Message = document.getElementById('Message').value.trim();

//     window.open('mailto:thisaccfortemp@gmail.com?subject=' + Subject + '&body=' + Message);
//     if (
//         checkName(FullName), validateEmail(Email), validatePhone(PhoneNo),
//         !Subject, !Message
//     ) {
//         alert("Fill all the details properly");
//     }
//     else {
//     }

// }

function checkName(name) {
    var arr = name.split(' ');
    if (arr.length != 3)
        alert("Enter valid full name");
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
        alert("Enter valid email id ");
}

function validatePhone(phone) {
    if (phone.length != 10)
        alert("Enter valid phone no");
}