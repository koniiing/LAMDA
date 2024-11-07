const clientId = "YOUR_CLIENT_ID";
const redirectUri = "YOUR_REDIRECT_URI";
const scope = "boards:read,pins:read";
const authUrl = `https://www.pinterest.com/oauth/?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
