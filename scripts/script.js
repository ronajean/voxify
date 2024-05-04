const voiceDropdown = document.querySelector("#voices");
const rateInput = document.querySelector("#rate");
const pitchInput = document.querySelector("#pitch");
const textarea = document.querySelector("#textarea");
const speakButton = document.querySelector("#speak-button");
const stopButton = document.querySelector("#stop-button");

const message = new SpeechSynthesisUtterance(textarea.value);
let voices = [];

function populateVoices() {
    voices = speechSynthesis.getVoices();

    for (let index = 0; index < voices.length; index++) { // Loop through all voices and add them to the dropdown
        const option = document.createElement("option");
        option.setAttribute("value", voices[index].name);
        option.textContent = voices[index].name;

        voiceDropdown.appendChild(option); // Append the option to the dropdown
    }

}

function setVoice() {
    for (let index = 0; index < voices.length; index++) { // Loop through all voices and set the selected voice
        if (voices[index].name === voiceDropdown.value) {
            message.voice = voices[index];
        }
    }
}

function setRate() {
    message.rate = rateInput.value;
}

function setPitch() {
    message.pitch = pitchInput.value;
}

function setText() {
    message.text = textarea.value;
}

function stopVoice() {
    speechSynthesis.cancel();
}

function speakVoice() {
    speechSynthesis.speak(message);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voiceDropdown.addEventListener("change", setVoice); // Listen for changes in the voice dropdown
rateInput.addEventListener("change", setRate); // Listen for changes in the rate input
pitchInput.addEventListener("change", setPitch); // Listen for changes in the pitch input
textarea.addEventListener("change", setText); // Listen for changes in the textarea
stopButton.addEventListener("click", stopVoice); // Listen for clicks on the stop button
speakButton.addEventListener("click", speakVoice); // Listen for clicks on the speak button
