const Name = document.querySelector ('Name');
const ProfilePic = document.querySelector ("ProfilePic")
const FavoriteColor = document.querySelector ('FavoriteColor')
const Age = document.querySelector ('Age')
const AgeRange = document.querySelector ("AgeRange")
const Fictive = document.querySelector ('Fictive')
const Introject = document.querySelector ("Introject")
const Bio = document.querySelector ("Bio")

// create new Profile
ProfileType = ['Planet', 'Moon', 'Star', 'Satellite']
// Set Profile Type
function SetProfileType (){
if (AgeRange = "Little" || Age < 13)
    ProfileType = 'Satellite'
if (AgeRange = 'Teen' || Age < 18 && Age > 12) {
    ProfileType = 'Moon'
} else {ProfileType = 'Planet' 
}   
}
