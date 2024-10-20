// imports

// defining classes
class Account { // I think account should be an array instead because a user is only going to have one account technically speaking per password
    constructor(AccountType, AccountName, SystemType, BodyAge, Bio, HeadmateList, Subystems) {
        this.HeadmateList = []
    }
}
class Headmate {
    constructor(Name, Age, ProfileID, FavoriteColor, AgeRange, Introject, Fictive, Subsystem, System, Profile) {
        this.Name = Name
        this.ProfileID = ProfileID
        this.FavoriteColor= FavoriteColor
        this.Age= Age
        this.AgeRange= AgeRange
        this.Fictive = Fictive
        this.Introject = Introject
        this.Subsystem= Subsystem
        this.Account= System
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
    constructor(Name, PrivacySetting) {
        
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

//setting up examples
    // Sample Account input
const AccountType = 'System'
const AccountName = 'Duck'
const SystemType = 'Polyfrag'
const BodyAge = 90
const Bio = 'Ducktales Whooo'
const HeadmateList = [ProfileID ++];
const HeadmateCount = HeadmateList.length;
    //Sample Accounts
const account1 = new Account (System, Duck, Polyfrag, 90, 'Ducktales whooo',Headmate1, Triplets)
const Account = {
    AccountType : localStorage.setItem('AccountType'), 
        Duck, SystemType }
    //Sample Subsystems
const Subsystems1 = new Subsystem (Triplets)
    //Sample Profiles
const Profile1
    // Sample headmates
const Headmate1 = new Headmate (Huey, 10, '1', '#FF0000', 'Little',false, false, Triplets, Duck, )
const Headmate2 = new Headmate (Dewey, 10, '2', '#0000FF', 'Little',true, false, Triplets, Duck, )
const Headmate3 = new Headmate (Louie, 10, '3', '#0000FF', 'Little',false, true, Triplets, Duck, )
//functions
// create new Profile
function CreateProfile () {
    generateSocialID;
    if (AccountType= 'Singlet')
        ProfileID=0;
        SetProfileType;
        Fictive = false;
        Introject = false;
        Age = BodyAge
    if ((AccountType= 'System') && (HeadmateCount = 0))
        ProfileID = 0;
        Fictive = false;
        Introject = false;
        Age = BodyAge

    else {
        generateProfileID
        GiveSystemGroupID
        HeadmateCount = counter + 1
    }
    
}
    // generate account friend code
function generateSocialID(){
    crypto.randomUUID () = this.SocialID
    return this.SocialID
}
    // generate headmate ID
function generateProfileID (){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const chars = isSystem ? letters : numbers;
    let profileID = '';

    for (let i = 0; i < 10; i++) {
        this.profileID += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return this.profileID
}
    //GiveSystemGroupID
function GiveSystemGroupID(){
    localStorage.getItem('subsystems') // is this even needed anymore?

}
if (AccountName = Duck)
    HeadmateList.push(this.Headmate)
function SetProfileType (){
    if (AgeRange = "Little" || Age < 13)
        ProfileType = 'Satellite'
    if (AgeRange = 'Teen' || Age < 18 && Age > 12) {
        ProfileType = 'Moon'
    } else {ProfileType = 'Planet' 
    }   
    }

    console.log (Name)