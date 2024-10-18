import {SimplyPluralSDK} from './path-to-simply-sdk/lib/index.js';
import {  } from "module";

// Simply Plural configuration

const simplyPluralConfig = {

    apiKey: 'your-simply-plural-api-key'// api key needed

};

const simplyPlural = new SimplyPluralSDK(simplyPluralConfig); [
        {
            "name": "simply_sdk",
            "request": "launch",
            "type": "dart"
        }
    ]

let userId = '';
const [user] = useAuthState(auth);

// Login function

window.login = function() {

    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)

        .then((userCredential) => {

            userId = userCredential.user.uid;

            document.getElementById('login').classList.add('hidden');

            document.getElementById('chat').classList.remove('hidden');

            fetchMembers();

            subscribeToMessages();
            window.location.href = 'messaging.html';
        })

        .catch((error) => {

            console.error('Error logging in:', error);

        });
   //Google sign
        const signInWithGoogle= () =>{
        const provider = new firebase.auth.GoogleauthProvider();
        auth.signInWithPopup(provider);
    }
        return (
            <button onclick={signInWithGoogle}>Sign in with Google</button>
        )

}
// Fetch system members

function fetchMembers() {

    simplyPlural.getSystemMembers()

        .then(data => {

            const memberList = document.getElementById('memberList');

            memberList.innerHTML = '';

            data.members.forEach(member => {

                const li = document.createElement('li');

                li.textContent = member.name;

                li.onclick = () => switchMember(member.id);

                memberList.appendChild(li);

            });

        })

        .catch(error => console.error('Error fetching members:', error));

}

// Switch system member

function switchMember(memberId) {

    simplyPlural.switchMember(memberId)

        .then(data => {

            console.log('Switched to member:', data);

        })

        .catch(error => console.error('Error switching member:', error));

}

  // Initialize Auth0
        const auth0 = await createAuth0Client({
            domain: "dev-ezwl8qr6z6ivlufs.us.auth0.com", //  Auth0 domain
            client_id: "0yJGjvwGsilwZ9VcbeLzKlH0fFVEeJoT", //  Auth0 client ID
            redirect_uri: window.location.origin // URL to redirect after login
        });

        // Login button functionality
        document.getElementById('login').addEventListener('click', async () => {
            await auth0.loginWithRedirect();
        });

        // Handle redirect after login
        window.onload = async () => {
            const query = window.location.search;
            if (query.includes("code=") && query.includes("state=")) {
                await auth0.handleRedirectCallback();
                window.history.replaceState({}, document.title, "/");
            }

            const isAuthenticated = await auth0.isAuthenticated();
            if (isAuthenticated) {
                const user = await auth0.getUser();
                document.getElementById('user-info').innerText = `Welcome, ${user.name}`;
            }
        };
        const { auth } = require('express-openid-connect');

        const config = {
          authRequired: false,
          auth0Logout: true,
          secret: 'a long, randomly-generated string stored in env',
          baseURL: 'https://localhost:5500',
          clientID: '0yJGjvwGsilwZ9VcbeLzKlH0fFVEeJoT',
          issuerBaseURL: 'https://dev-ezwl8qr6z6ivlufs.us.auth0.com'
        };
        
        // auth router attaches /login, /logout, and /callback routes to the baseURL
        app.use(auth(config));
        
        // req.isAuthenticated is provided from the auth router
        app.get('/', (req, res) => {
          res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
        });
        