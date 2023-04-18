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
            likes: '3'
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

// -- First Comment and replies -- // 
let commentDiv = document.createElement('div')
commentDiv.setAttribute('id', 'commentDiv')
mainPost.appendChild(commentDiv)

let firstComment = document.createElement('div')
firstComment.setAttribute('id', 'firstComment')
firstComment.setAttribute('class', 'commentDiv')
commentDiv.appendChild(firstComment)
let firstMainCommentSection = document.createElement('div')
firstMainCommentSection.setAttribute('id', 'firstMainCommentSection')
firstComment.appendChild(firstMainCommentSection)

// First comment profile section
let firstMainCommentProfile = document.createElement('div')
firstMainCommentProfile.setAttribute('id', 'firstMainCommentProfile')
firstMainCommentProfile.setAttribute('class', 'profileDiv')
firstMainCommentSection.appendChild(firstMainCommentProfile)
let firstMainCommentProfilePicDiv = document.createElement('div')
firstMainCommentProfilePicDiv.setAttribute('class', 'profilePicDiv')
firstMainCommentProfile.appendChild(firstMainCommentProfilePicDiv)
let firstCommentProfilePic = document.createElement('img')
firstCommentProfilePic.src = facebookPost.comments[0].user.profilePicture
firstMainCommentProfilePicDiv.appendChild(firstCommentProfilePic)
let firstMainCommentName = document.createElement('h5')
firstMainCommentName.textContent = `${facebookPost.comments[0].user.firstName} ${facebookPost.comments[0].user.lastName}`
firstMainCommentProfile.appendChild(firstMainCommentName)

// first comment text section
let firstMainCommentText = document.createElement('div')
firstMainCommentText.setAttribute('id', 'firstMainCommentText')
firstMainCommentSection.appendChild(firstMainCommentText)
let firstCommentText = document.createElement('h6')
firstCommentText.textContent = `${facebookPost.comments[0].text}`
firstMainCommentText.appendChild(firstCommentText)
firstMainCommentText.setAttribute('class', 'comment')

// first comment like and delete button
let firstMainCommentMedia = document.createElement('div')
firstMainCommentMedia.setAttribute('id', 'firstMainCommentMedia')
firstMainCommentSection.appendChild(firstMainCommentMedia)
let firstCommentLike = document.createElement('h6')
firstCommentLike.textContent = `Like Delete`
firstMainCommentMedia.appendChild(firstCommentLike)
firstMainCommentMedia.setAttribute('class', 'media')

// reply-to-first-comment div
let firstMainCommentReply = document.createElement('div')
firstComment.appendChild(firstMainCommentReply)
firstMainCommentReply.setAttribute('class', 'reply')

// reply-to-first-comment profile section
let firstMainCommentReplyProfile = document.createElement('div')
firstMainCommentReplyProfile.setAttribute('id', 'firstMainCommentReplyProfile')
firstMainCommentReplyProfile.setAttribute('class', 'profileDiv')
firstMainCommentReply.appendChild(firstMainCommentReplyProfile)
let firstMainCommentReplyProfilePicDiv = document.createElement('div')
firstMainCommentReplyProfilePicDiv.setAttribute('class', 'profilePicDiv')
firstMainCommentReplyProfilePicDiv.setAttribute('id', 'firstMainCommentReplyProfilePicDiv')
firstMainCommentReplyProfile.appendChild(firstMainCommentReplyProfilePicDiv)
let firstMainCommentReplyProfilePic = document.createElement('img')
firstMainCommentReplyProfilePic.src = facebookPost.comments[0].replies[0].user.profilePicture
firstMainCommentReplyProfilePicDiv.appendChild(firstMainCommentReplyProfilePic)
let firstMainCommentReplyName = document.createElement('h5')
firstMainCommentReplyName.textContent = `${facebookPost.comments[0].replies[0].user.firstName} ${facebookPost.comments[0].replies[0].user.lastName}`
firstMainCommentReplyProfile.appendChild(firstMainCommentReplyName)

// reply-to-first-comment text section
let firstMainCommentReplyTextDiv = document.createElement('div')
firstMainCommentReplyTextDiv.setAttribute('id', 'firstMainCommentReplyTextDiv')
firstMainCommentReply.appendChild(firstMainCommentReplyTextDiv)
let firstCommentFirstReplyText = document.createElement('h6')
firstCommentFirstReplyText.textContent = `${facebookPost.comments[0].replies[0].text}`
firstMainCommentReplyTextDiv.appendChild(firstCommentFirstReplyText)

// reply-to-first-comment like and delete button
let firstMainCommentReplyMedia = document.createElement('div')
firstMainCommentReplyMedia.setAttribute('id', 'firstMainCommentReplyMedia')
firstMainCommentReply.appendChild(firstMainCommentReplyMedia)
let firstMainCommentReplyLike = document.createElement('h6')
firstMainCommentReplyLike.textContent = `Like Delete`
firstMainCommentReplyMedia.appendChild(firstMainCommentReplyLike)
firstMainCommentReplyMedia.setAttribute('class', 'media')

// -- Second Comment and replies -- // 

let secondComment = document.createElement('div')
secondComment.setAttribute('id', 'secondComment')
commentDiv.appendChild(secondComment)

// Second comment profile section
let secondMainCommentProfile = document.createElement('div')
secondMainCommentProfile.setAttribute('id', 'secondMainCommentProfile')
secondMainCommentProfile.setAttribute('class', 'profileDiv')
secondComment.appendChild(secondMainCommentProfile)
let secondCommentProfilePicDiv = document.createElement('div')
secondCommentProfilePicDiv.setAttribute('class', 'profilePicDiv')
secondMainCommentProfile.appendChild(secondCommentProfilePicDiv)
let secondCommentProfilePic = document.createElement('img')
secondCommentProfilePic.src = facebookPost.comments[1].user.profilePicture
secondCommentProfilePicDiv.appendChild(secondCommentProfilePic)
let secondCommentName = document.createElement('h5')
secondCommentName.textContent = `${facebookPost.comments[1].user.firstName} ${facebookPost.comments[1].user.lastName}`
secondMainCommentProfile.appendChild(secondCommentName)

// Second comment text section

let secondCommentTextDiv = document.createElement('div')
secondCommentTextDiv.setAttribute('id', 'secondCommentTextDiv')
secondComment.appendChild(secondCommentTextDiv)
let secondCommentText = document.createElement('h6')
secondCommentText.textContent = `${facebookPost.comments[1].text}`
secondCommentTextDiv.appendChild(secondCommentText)

// Second comment like and delete button
let secondCommentMedia = document.createElement('div')
secondCommentMedia.setAttribute('id', 'secondCommentMedia')
secondComment.appendChild(secondCommentMedia)
let secondCommentLike = document.createElement('h6')
secondCommentLike.textContent = `Like Delete`
secondCommentMedia.appendChild(secondCommentLike)
secondCommentMedia.setAttribute('id', 'secondCommentMedia')


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

