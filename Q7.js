// Imagine you are workin9 for a di9ital banking platform, and your team is tasked with improving the security
// of customer accounts. Your challenge is to create a function that 9enerates a random 4-digit OTP (One-
// Time Password) for authentication purposes.

function generateOtp() {
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp.toString();
}
console.log(`Here is your otp: ${generateOtp()}`);