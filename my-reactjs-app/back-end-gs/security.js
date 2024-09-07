// Define a secret key for signing the JWT. In a real application, use a more secure and private secret key.
const SECRET_KEY = 'GHN_WEB_API_APP';

// Function to create a Bearer token (JWT)
function createBearerToken(username, mins) {
  // Header for the JWT (specifies the algorithm and token type)
  const header = {
    alg: "HS256",
    typ: "JWT"
  };

  // Payload for the JWT (include user-specific or custom data)
  const payload = {
    sub: username, // Subject (username in this case)
    iat: Math.floor(Date.now() / 1000), // Issued at time (current time in seconds)
    exp: Math.floor(Date.now() / 1000) + (60 * mins) // Expiration time (1 hour later)
  };

  // Encode the header and payload to Base64URL
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));

  // Create the signature using HMAC SHA-256
  const signature = createHmacSha256Signature(encodedHeader + '.' + encodedPayload, SECRET_KEY);

  // Return the full JWT (header.payload.signature)
  const jwt = `${encodedHeader}.${encodedPayload}.${signature}`;
  Logger.log('Generated Bearer Token: %s', jwt);
  return jwt;
}

// Function to encode data in Base64URL format (without padding)
function base64UrlEncode(data) {
  return Utilities.base64EncodeWebSafe(data).replace(/=+$/, '');
}

// Function to create HMAC SHA-256 signature
function createHmacSha256Signature(data, key) {
  const signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_SHA_256, data, key);
  return base64UrlEncode(signature);
}

// Function to validate a Bearer token (JWT)
function validateBearerToken(token) {
  if (!Boolean(token)) {
    return {
      success: false,
      message: 'Invalid token'
    };
  }

  // Split the token into header, payload, and signature
  const [encodedHeader, encodedPayload, signature] = token.split('.');

  // Verify the signature using the same algorithm and secret key
  const expectedSignature = createHmacSha256Signature(`${encodedHeader}.${encodedPayload}`, SECRET_KEY);

  // Check if the provided signature matches the expected signature
  if (signature !== expectedSignature) {
    return {
      success: false,
      message: 'Invalid token signature'
    };
  }

  // Decode the payload
  const payload = JSON.parse(Utilities.newBlob(Utilities.base64Decode(encodedPayload)).getDataAsString());

  // Check expiration time
  if (payload.exp < Math.floor(Date.now() / 1000)) {
    return {
      success: false,
      message: 'Token has expired'
    };
  }

  // If valid, return the decoded payload
  Logger.log('Token is valid. Payload: %s', JSON.stringify(payload));

  return {
    success: true,
    message: 'Token is valid.',
    data: payload
  };
}

function generateUUID() {
  // Generate a UUID (version 4)
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0; // Generate a random number between 0 and 15
    const v = c === "x" ? r : (r & 0x3) | 0x8; // Set specific bits for UUID version 4
    return v.toString(16); // Convert to hexadecimal
  });
}

