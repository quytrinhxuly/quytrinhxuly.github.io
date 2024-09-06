export function generateUUID() {
  // Generate a UUID (version 4)
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0; // Generate a random number between 0 and 15
    const v = c === "x" ? r : (r & 0x3) | 0x8; // Set specific bits for UUID version 4
    return v.toString(16); // Convert to hexadecimal
  });
}
