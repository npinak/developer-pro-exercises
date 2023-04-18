const facebookPost = {
    user:{
        profilePicture: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        firstName: 'Pinak',
        lastName: 'Nayak'
    },
    datePosted: '10.04.2021',
    text: 'Started on Developer Pro. Gotta level up!',
    likes: 1,
    views: 6,
    comments: [
        {
            user:{
                profilePicture:'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
                firstName: 'David',
                lastName: 'Goren',
            },
            text: "Cool",
            datePosted: '10.04.2021',
            likes: 7,
            replies: [
                {
                    user: {
                        profilePicture: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
                        firstName: 'Aaron',
                        lastName: 'Iyer',
                    },
                    text: 'nice one',
                    datePosted:'10.04.2021',
                    likes: 2
                },
            ]
        },
        {
            user: {
                profilePicture: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?cs=srgb&dl=pexels-jack-winbow-1559486.jpg&fm=jpg',
                firstName: 'Ian',
                lastName: 'Remy',   
            },
            text: 'Good Move',
            datePosted: '10.05.2021',
            likes: '3',
            replies:[]
        },
    ]
}

const app = document.getElementById('app')

console.log(app)

let mainPost = document.createElement('div')
mainPost.setAttribute('id','mainPost')
app.appendChild(mainPost)

//profileDiv elements
let profileDiv = document.createElement('div')
profileDiv.setAttribute('id', 'profileDiv')
mainPost.appendChild(profileDiv)

let profilePicDiv = document.createElement('div')
profilePicDiv.setAttribute('id', 'profilePicDiv')
profileDiv.appendChild(profilePicDiv)

let mainProfilePic = document.createElement('img')
mainProfilePic.src = facebookPost.user.profilePicture
profilePicDiv.appendChild(mainProfilePic)

let mainPosterName = document.createElement('h4')
mainPosterName.textContent = `${facebookPost.user.firstName} ${facebookPost.user.lastName}`
profileDiv.appendChild(mainPosterName)

// Main text elements
let mainTextDiv = document.createElement('div')
mainTextDiv.setAttribute('id', 'mainTextDiv')
mainPost.appendChild(mainTextDiv)

let textDiv = document.createElement('div')
textDiv.setAttribute('id', 'textDiv')
mainTextDiv.appendChild(textDiv)
let mainPostText = document.createElement('h5')
mainPostText.textContent = `${facebookPost.text}`
textDiv.appendChild(mainPostText)

let viewsDiv = document.createElement('div')
viewsDiv.setAttribute('id', 'viewsDiv')
mainTextDiv.appendChild(viewsDiv)
let viewsText = document.createElement('h5')
viewsText.textContent = `${facebookPost.views} Views`
viewsDiv.appendChild(viewsText)

let viewsBorderDiv = document.createElement('div')
viewsBorderDiv.setAttribute('id', 'viewsBorderDiv')
viewsDiv.appendChild(viewsBorderDiv)

// Share, like, comment elements
let likeDiv = document.createElement('div')
likeDiv.setAttribute('id', 'likeDiv')
mainPost.appendChild(likeDiv)

let likeButton = document.createElement('button')
likeButton.setAttribute('class', 'mediaButton')
likeButton.innerHTML = "Like"
likeDiv.appendChild(likeButton)

let commentButton = document.createElement('button')
commentButton.setAttribute('class', 'mediaButton')
commentButton.innerHTML = "Comment"
likeDiv.appendChild(commentButton)

let shareButton = document.createElement('button')
shareButton.setAttribute('class', 'mediaButton')
shareButton.innerHTML = 'Share'
likeDiv.appendChild(shareButton)


// comments section
let commentDiv = document.createElement('div')
commentDiv.setAttribute('id', 'commentDiv')
mainPost.appendChild(commentDiv)

for (let i =0; i < facebookPost.comments.length; i++){
    
    //create 3 sections for profile, main text, and like/delete button
    const div = document.createElement('div')
    div.setAttribute('id', `comment${i}`)
    commentDiv.appendChild(div)
    const profileSection = document.createElement('div')
    const textSection = document.createElement('div')
    const likeSection = document.createElement('div')

    div.appendChild(profileSection)
    div.appendChild(textSection)
    div.appendChild(likeSection)

    // add elements for the profile section
    const profilePicDiv = document.createElement('div')
    profileSection.appendChild(profilePicDiv)
    profileSection.setAttribute('class', 'profileDiv')
    const profilePic = document.createElement('img')
    profilePic.src = facebookPost.comments[i].user.profilePicture
    profilePicDiv.appendChild(profilePic)
    profilePicDiv.setAttribute('class','profilePicDiv')
    const profileName = document.createElement('h6')
    profileName.textContent = `${facebookPost.comments[i].user.firstName} ${facebookPost.comments[i].user.lastName}`
    profileSection.appendChild(profileName)

    // add elements for the text section
    const commentText = document.createElement('h6')
    commentText.textContent = `${facebookPost.comments[i].text}`
    textSection.appendChild(commentText)
    textSection.setAttribute('class', 'comment')

    //add elements for like and delete button
    let likeDeleteText = document.createElement('h6')
    likeDeleteText.textContent = `Like Delete`
    likeSection.appendChild(likeDeleteText)
    likeSection.setAttribute('class', 'media')

    // add replies
    if (facebookPost.comments[i].replies.length > 0){
        console.log('replies here!')

        for (let i = 0; i < facebookPost.comments[i].replies.length; i++){
            const replyDiv = document.createElement('div')
            div.appendChild(replyDiv)
            // replyDiv.setAttribute('class', 'reply')
            replyDiv.setAttribute('id', `reply${i}`)
            replyDiv.setAttribute('class', `reply`)

            //create profile, main text, and like/delete divs for replies
            const replyProfile = document.createElement('div')
            const replyText = document.createElement('div')
            const replyLikeDelete = document.createElement('div')
            replyDiv.appendChild(replyProfile)
            replyDiv.appendChild(replyText)
            replyDiv.appendChild(replyLikeDelete)

            // add elements for the reply profile section
            const replyProfilePicDiv = document.createElement('div')
            replyProfile.appendChild(replyProfilePicDiv)
            replyProfile.setAttribute('class', 'profileDiv')
            const replyProfilePic = document.createElement('img')
            replyProfilePic.src = facebookPost.comments[i].replies[i].user.profilePicture
            replyProfilePicDiv.appendChild(replyProfilePic)
            replyProfilePicDiv.setAttribute('class', 'profilePicDiv')
            const replyProfileName = document.createElement('h6')
            replyProfileName.textContent = `${facebookPost.comments[i].replies[i].user.firstName} ${facebookPost.comments[i].replies[i].user.lastName}`
            replyProfile.appendChild(replyProfileName)

            // add elements to the reply text section
            const replyString = document.createElement('h6')
            replyString.textContent = `${facebookPost.comments[i].replies[i].text}`
            replyText.appendChild(replyString)
            replyText.setAttribute('class', `replyText`)

            // add elements to the reply like/delete section
            let replyLikeDeleteText = document.createElement('h6')
            replyLikeDeleteText.textContent = `Like Delete`
            replyLikeDelete.appendChild(replyLikeDeleteText)
            replyLikeDelete.setAttribute('class', 'replyMedia')

            // let likeDeleteText = document.createElement('h6')
            // likeDeleteText.textContent = `Like Delete`
            // likeSection.appendChild(likeDeleteText)
            // likeSection.setAttribute('class', 'media')
        }
    }

}




// Comment button hide and show 

function commentDisplay () {
    const commentStatus = document.getElementById('commentDiv');
    const display = window.getComputedStyle(commentStatus).display;
    const mainPost = document.getElementById('mainPost')

    if(display == 'grid'){
        commentStatus.style.display = "none"
        mainPost.style.height = "35vh"
    } else if (display =='none'){
        commentStatus.style.display = "grid"
        mainPost.style.height = "80vh"
    }
}

commentButton.addEventListener('click', commentDisplay)

