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
    constructor(AccountType, AccountName, SystemType, BodyAge, Bio) {
        
    }
}
class Headmate {
    constructor(Name, Age, HeadmateID, FavoriteColor, AgeRange, Introject, Fictive, Subsystem, System, Profile) {
        this.Name = Name
        this.HeadmateID = HeadmateID
        this.FavoriteColor= FavoriteColor
        this.Age= Age
        this.AgeRange= AgeRange
        this.Fictive = Fictive
        this.Introject = Introject
        this.Subsystem= Subsystem
        this.System= System

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