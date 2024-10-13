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