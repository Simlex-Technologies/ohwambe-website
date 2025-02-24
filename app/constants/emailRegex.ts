export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate email field
export function validateEmail(email: string) {
  // Regex for email validation
  const re = /\S+@\S+\.\S+/;
  // Return true if email is valid and false if email is invalid
  return re.test(email);
}