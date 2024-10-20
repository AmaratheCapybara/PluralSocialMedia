//Import and export
export {Headmate, Profile, Friend, Group, Fronter, Account, Subsystem}
//navbar

// Get the link and switch dropdown elements
const switchLink = document.getElementById('switchLink');
const headmateDropdown = document.getElementById('headmateDropdown');

// Add a click event listener to the link
switchLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link action

    // Toggle the visibility of the headmate dropdown
    headmateDropdown.classList.toggle('show');
});

// Get the link and notification elements
const notificationLink = document.getElementById('notificationLink');
const notification = document.getElementById('notification');

// Add a click event listener to the link
notificationLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link action

    // Toggle the visibility of the notification dropdown
    notification.classList.toggle('show');
});

// Optional: Auto-hide the notification dropdown after 5 seconds
setTimeout(() => {
    notification.classList.remove('show');
}, 5000); // Auto-hide after 5 seconds (optional)

//Fronting
function Fronting () {
if (frontstatus ()=true)
    Headmate = fronting
else (frontstatus()=false)
}

// define classes
class Account {
    constructor(AccountType, AccountName, SystemType, BodyAge, Bio, HeadmateCount) {
        
    }
}
export class Headmate {
    constructor(Name, Age, ProfileID, FavoriteColor, AgeRange, Introject, Fictive, Subsystem, System, Profile) {
        this.Name = Name
        this.ProfileID = ProfileID
        this.FavoriteColor= FavoriteColor
        this.Age= Age
        this.AgeRange= AgeRange
        this.Fictive = Fictive
        this.Introject = Introject
        this.Subsystem= Subsystem
        this.System= System
        this.Profile = Profile

    }
}
class Friend {
    constructor(parameters) {
        
    }
}
class Group {
    constructor(parameters) {
        
    }
}
class Subsystem {
    constructor(parameters) {
        
    }
}
class ConversationParticipant {
    constructor(parameters) {
        
    }
}
class Fronter {
    constructor(parameters) {
        
    }
}
class Profile {
    constructor(SocialID, ProfilePic, Feed, Friends, Messages, Notifications, Fronting, Bio, Settings) {
        this.SocialID= SocialID
        this.ProfilePic= ProfilePic 
        this.Bio= Bio
    }
}
// declare variables
const BodyAge = document.getElementById('BodyAge')
const Age = document.getElementById('')
const Name = document.getElementById('')
const AccountName = document.getElementById(
const Singlet = document.getElementById('')
const Headmate = document.getElementById('')
// type of account
const System = Boolean
const Little = Boolean
const Adolescent = Boolean
const Fictive =Boolean
const Adult
const Eternal
const AgeSlider
const password
const email
const AgeRange = document.getElementById('')
const FavoriteColor = document.getElementById('')
const ProfileType = document.getElementById('')
const Fronting = Boolean