// input and output elements
let msgInput = document.getElementById("msg_input");
let encryptedMsgOutput = document.getElementById("encrypted_msg");

// encrypt and copy btns
let encryptBtn = document.getElementById("encrypt_msg");
let copyBtn = document.getElementById("copy");

// vars //
let encrypted = [];
let finalMsg = "";

// alphabets
let abc = "abcdefghijklmnopqrstuvwxyz";

// functions
let encrypt = (inp) => {
  letters = abc.split("");
  msg = inp.split("");
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < msg.length; j++) {
      if (msg[j] == letters[i]) {
        encrypted.push(letters[i + 2]);
      }
    }
  }
  finalMsg = encrypted.reverse().join("");
  encryptedMsgOutput.value = finalMsg;
  msgInput.value = "";
};

// event listeners
encryptBtn.addEventListener("click", (e) => {
  if (msgInput.value != "") {
    console.log("Encryting....");
    encrypt(msgInput.value);
  } else {
    console.log("Write some shit in it...");
  }
});

copyBtn.addEventListener("click", (e) => {
  if (encryptedMsgOutput.value != "") {
    navigator.clipboard.writeText(encryptedMsgOutput.value);
    copyBtn.innerText = "Encryption Copied to Clipboard...";
    setTimeout(() => {
      copyBtn.innerText = "Copy Encrypted Message";
    }, 2000);
  }
});
