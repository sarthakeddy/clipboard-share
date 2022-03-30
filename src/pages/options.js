// console.log("Hello");
// const form = document.getElementById("form");
// form.addEventListener('submit', (e) => {
//     console.log("Boy");
//     var messages = [];
//     var letters = /^[A-Za-z]+$/;
//     if (number.value === null) {
//         alert('Number is required');
//     }

//     if(message.value === null) {
//         alert('Message body can not be null');
//     }

//     var twilio = require('twilio');
//     var client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
//     client.messages.create({
//         to: number.value,
//         from: 'YOUR_TWILIO_NUMBER',
//         body: message.value
//     });
//     // if(messages.length > 0) {
//     //     e.preventDefault();
//     //     errorElement.innerText = messages.join(', ')
//     // }
// });

// function valida() {
//     console.log("Boy");
//     const numb = document.getElementById("number");
    // const message = document.getElementById('message');
    // console.log(numb.value);
    // var letters = /^[A-Za-z]+$/;

    // if (number.value === null) {
    //     alert("Mobile number field can't be empty.")
    //     return false;
    // }
    // else if (!number.value.match(letters)) {
    //     alert("Mobile number can't have alphabets");
    //     return false;
    // }
    // else if (number.value[0] != '+') {
    //     alert("Please add country code in the beginning of number");
    //     return false;
    // }
    // else if (message.value === null) {
    //     alert("Message field can't be empty");
    //     return false;
    // }
    // else {
    //     var twilio = require('twilio');
    //     var client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
    //     client.messages.create({
    //         to: number.value,
    //         from: 'YOUR_TWILIO_NUMBER',
    //         body: message.value
    //       });
    //     return true;
    // }
   // form.addEventListener('submit', (e) => {
    //     var messages = [];
    //     var letters = /^[A-Za-z]+$/;
    //     if (number.value === null || !number.value.match(letters)) {
    //         messages.push('Number is required');
    //     }

    //     if(message.value === null) {
    //         messages.push('Message body can not be null');
    //     }

    //     if(messages.length > 0) {
    //         e.preventDefault();
    //         errorElement.innerText = messages.join(', ')
    //     }
    // });
// }

var mobile = document.forms['form']['number'];
var content = document.forms['form']['message'];
document.getElementById("send").addEventListener("click", validated);

async function validated() {
    console.log("helo");
    console.log(mobile.value);
    if(mobile.value.length < 9) {
        alert("Mobile INvalis");
        return false;
    }

    const axios = require('axios');
    const qs = require('qs');

    await(axios.post("https://api.twilio.com/2010-04-01/Accounts/" + "ACd4d191b267a01357b29daedaeb60ae73" + "/Messages.json", qs.stringify({
        to: mobile.value,
        from: '+18644005289',
        body: content.value
        }), {
        auth: {
            username: 'ACd4d191b267a01357b29daedaeb60ae73',
            password: 'f94f21e0b1fedece017a51661f5453a8'
        }
    }));

    // var client = require('twilio')('ACd4d191b267a01357b29daedaeb60ae73', 'f94f21e0b1fedece017a51661f5453a8');
    // // var client = new twilio;
    // client.messages.create({
    //     to: mobile.value,
    //     from: '+18644005289',
    //     body: content.value
    // }).then(message => console.log(message.sid));;
    alert("Message sent successfully");
    return true;
}