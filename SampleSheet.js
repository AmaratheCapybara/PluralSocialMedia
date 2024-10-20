import Headmate, Profile from  'index.js';
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