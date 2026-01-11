export function sendOTP(email,otp){
    return new Promise((resolve,) => {
        console.log(`otp sent to ${email}: ${otp}`);
        setTimeout(()=> resolve(true), 1500);
    });
};

export function generateOTP(){
    return Math.floor(100000 + Math.random() * 900000).toString();
};