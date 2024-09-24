<script setup>
import { onMounted } from "vue";
import { useRouter } from "nuxt/app";
import { useAuthStore } from '~/stores/auth';

definePageMeta({
    layout: "signin", // Specify the custom layout
    middleware: 'auth' // Specify the middleware to protect this page
});

const clientId = "beaa54f779184fc4806bd1d01953d4be"; // Your clientId
const clientSecret = "18ef0a0901ac43fca466de0103438a24"; // Your client secret
const redirectUrl = "http://localhost:3000/signin"; // Your redirect URL

const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

const router = useRouter();
const authStore = useAuthStore();

// Function to extract code from the URL
function getCode() {
    const args = new URLSearchParams(window.location.search);
    const code = args.get("code");
    // console.log("Extracted Code:", code);
    return code;
}

// Fetch the token using native fetch
const getToken = async (code) => {
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST", // This must be a POST request
            body: new URLSearchParams({
                code: code, // Code you received from the URL query string
                redirect_uri: redirectUrl, // The redirect URI
                grant_type: "authorization_code", // This is the authorization code grant type
            }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded", // Required by Spotify API
                Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`), // Base64 encode clientId:clientSecret
            },
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to fetch token: ${response.statusText}. Details: ${errorDetails}`);
        }

        const tokenResponse = await response.json();

        return tokenResponse; // Return the token response with access and refresh tokens
    } catch (error) {
        console.error("Error fetching token:", error.message);
        return null;
    }
};


onMounted(async () => {
    const code = getCode();
    if (code) {
        const retrievedToken = await getToken(code);
        if (retrievedToken) {
            authStore.setAuthData({
                access_token: retrievedToken.access_token,
                token_type: retrievedToken.token_type,
                expires_in: retrievedToken.expires_in,
                refresh_token: retrievedToken.refresh_token
            });

            try {
                await router.push('/');
                console.log("Navigation successful");
            } catch (error) {
                console.error("Navigation failed:", error);
            }
        } else {
            console.error("Failed to retrieve token");
        }
    } else {
        console.error("No authorization code found in URL");
    }
});


function redirectToSpotifyAuthorize() {
    const authUrl = new URL(authorizationEndpoint);
    const params = {
        response_type: "code",
        client_id: clientId,
        scope: scope.join(" "), // Spotify requires the scopes to be space-separated
        redirect_uri: redirectUrl,
    };

    authUrl.search = new URLSearchParams(params).toString();
    console.log("Redirecting to:", authUrl.toString());
    window.location.href = authUrl.toString(); // Redirect the user to the authorization server for login
}
</script>

<template>
    <section class="flex flex-col gap-10 justify-center">
        <div class="text-stone-100 font-bold text-4xl flex flex-col gap-1">
            <p>Sign In</p>
            <p>To Your Account</p>
        </div>
        <form>
            <button @click.prevent="redirectToSpotifyAuthorize"
                class="bg-stone-800 rounded-lg px-10 py-3 text-2xl text-white border-2">
                Sign In
            </button>
        </form>
    </section>
</template>