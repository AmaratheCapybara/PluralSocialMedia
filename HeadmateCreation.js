import {
    Headmate,
        } from 'index.js'
//retrieve Variable from Form input
const Name = document.querySelector ('Name');
const ProfilePic = document.querySelector ("ProfilePic")
const FavoriteColor = document.querySelector ('FavoriteColor')
const Age = document.querySelector ('Age')
const AgeRange = document.querySelector ("AgeRange")
const Fictive = document.querySelector ('Fictive')
const Introject = document.querySelector ("Introject")
const Bio = document.querySelector ("Bio")
// create options for variables
    ProfileType = ['Planet', 'Moon', 'Star', 'Satellite']
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
}
    // generate headmate ID
function generateProfileID (){
    crypto.randomUUID () = this.ProfileID
}
    //GiveSystemGroupID
function GiveSystemGroupID(){
    localStorage.getItem('subsystems')

}
    // Set Profile Type
function SetProfileType (){
if (AgeRange = "Little" || Age < 13)
    ProfileType = 'Satellite'
if (AgeRange = 'Teen' || Age < 18 && Age > 12) {
    ProfileType = 'Moon'
} else {ProfileType = 'Planet' 
}   
}
//Storing HeadmateProfile
class Profile {
    constructor
    'Name':localStorage.setItem('name');
    'ProfileID': localStorage.setItem('ProfileID'),
    'SocialID': localStorage.setItem('SocialID'),
    'ProfilePic': localStorage.setItem('ProfilePic'),
    'FavoriteColor':localStorage.SetItem('FavoriteColor'),
    'Age': localStorage.setItem('Age'),
    'AgeRange': localStorage.setItem('AgeRange'),
    'Fictive': localStorage.setItem ('Fictive'),
    'Introject': localStorage.setItem('Introject'),
    'Bio': localStorage.setItem('Bio'),
    'Subsystem': localStorage.setItem('Subsystem'),
    'System': localStorage.setItem('System',0)

}
'Profile',localStorage.setItem('Profile')