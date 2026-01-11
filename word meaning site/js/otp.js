
import { sendOTP, generateOTP } from "./api.js";

const user = JSON.parse(localStorage.getItem("pendingUser"));
if(!user) location.href = "signup.html";


const otpInputs = document.querySelectorAll(".otp-input");
const verifyBtn = document.getElementById("verifyBtn");
const resendBtn = document.getElementById("resendBtn");
const timerText = document.getElementById("timerText");
const spanTimer = document.getElementById("timer");
const spanBtn = document.getElementById("btnText");
const spinner = document.getElementById("spinner");
const wrongOtpMsg = document.getElementById("invalidOtp");

function setLoading(isLoading){
    spinner.classList.toggle("hidden", !isLoading);
    spanBtn.textContent = isLoading ? "verifying...." : "Verify"

    otpInputs.forEach(input => input.disabled = isLoading);
    verifyBtn.disabled = isLoading
}
function showError(msg){
    wrongOtpMsg.textContent = msg;
    wrongOtpMsg.classList.remove("hidden");
}
function hideError(){
    wrongOtpMsg.classList.add("hidden");
}

async function generateAndSendOTP() {
    const otpCode = generateOTP();

    console.log("🔐 DEV OTP:", otpCode);

    const otpData = {
    code: otpCode,
    expiresAt: Date.now() + 30_000
};

    localStorage.setItem("generatedOTP", JSON.stringify(otpData));

    await sendOTP(user.email, otpCode);
    startTimer();
}

generateAndSendOTP();


let timeLeft = 30;
let timerIntervel;

function startTimer(){
    timeLeft = 30;
    spanTimer.textContent = `${timeLeft}s`
    timerText.classList.remove("hidden");
    resendBtn.classList.add("hidden");

    clearInterval(timerIntervel);

    timerIntervel = setInterval(()=>{
        timeLeft--;
        spanTimer.textContent = `${timeLeft}s`

        if(timeLeft <= 0){
            clearInterval(timerIntervel);
            timerText.classList.add("hidden")
            resendBtn.classList.remove("hidden");

        }
    },1000);
};
otpInputs.forEach((input, index)=>{
    input.addEventListener("input", (e)=>{
        e.target.value = e.target.value.replace(/\D/g,"");
        if (e.target.value.length > 0 && index < otpInputs.length - 1){

            otpInputs[index + 1].focus();
        }
        const allFilled = Array.from(otpInputs).every(inp => inp.value !== "")
       verifyBtn.disabled = !allFilled;
        
       verifyBtn.classList.toggle("bg-gray-400",!allFilled)


       verifyBtn.classList.toggle("bg-blue-600",allFilled)
       verifyBtn.classList.toggle("cursor-not-allowed", !allFilled)
       verifyBtn.classList.toggle("cursor-pointer", allFilled);

    });
    input.addEventListener("keydown",(e)=>{
        if(e.key === "Backspace" && e.target.value ==="" && index > 0){
            e.preventDefault();
            otpInputs[index - 1].focus();

        }
    });
});

verifyBtn.addEventListener("click", async () => {
    setLoading(true);
    hideError();

    const enteredOtp = Array.from(otpInputs).map(input => input.value).join("");
    const otpData = JSON.parse(localStorage.getItem("generatedOTP"));

    await new Promise(res => setTimeout(res, 1000)); // simulate network delay

    if (!otpData || Date.now() > otpData.expiresAt) {
        showError("OTP expired. Please resend.");
        setLoading(false);
        return;
    }

    if (enteredOtp === otpData.code) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user); // user = pendingUser

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("verifiedUser", JSON.stringify(user));

    localStorage.removeItem("pendingUser");
    localStorage.removeItem("generatedOTP");

    window.location.href = "dashboard.html";
}

    else {
        showError("Invalid OTP");
        otpInputs.forEach(input => input.value = "");
        otpInputs[0].focus();

        verifyBtn.disabled = true;
        verifyBtn.classList.remove("bg-blue-600", "cursor-pointer");
        verifyBtn.classList.add("bg-gray-400", "cursor-not-allowed");
    }

    setLoading(false);
});

// ---------- 8. Resend OTP ----------
resendBtn.addEventListener("click", async () => {
    otpInputs.forEach(input => input.value = "");
    otpInputs[0].focus();

    verifyBtn.disabled = true;
    verifyBtn.classList.remove("bg-blue-600", "cursor-pointer");
    verifyBtn.classList.add("bg-gray-400", "cursor-not-allowed");

    hideError();
    await generateAndSendOTP();
});

