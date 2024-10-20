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

    // generate account friend code
function generateSocialID(){
    crypto.randomUUID () = SocialID
}
    // generate headmate ID
function generateHeadmateID (){
    crypto.randomUUID () = HeadmateID
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
let HeadmateProfile = {
    'Name':localStorage.setItem('name'),
    'HeadmateID': localStorage.setItem('HeadmateID'),
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