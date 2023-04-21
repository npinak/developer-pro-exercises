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

function createElement({type, className, id, src, textContent, innerHTML, appendTo}) {
    const element = document.createElement(type)

    if (className){
        element.setAttribute('class', className)
    }

    if(id){
        element.setAttribute('id',id)
    }

    if(src){
        element.src = src
    }

    if(textContent){
        element.textContent = textContent
    }

    if(innerHTML){
        element.innerHTML = innerHTML
    }

    if(appendTo){
        appendTo.appendChild(element)
    }

    return element
}

//profileDiv elements
const profileDiv = createElement({type:'div', id:'profileDiv', appendTo: mainPost})

const profilePicDiv = createElement({ type: 'div', id: 'profilePicDiv', appendTo: profileDiv })

const mainProfilePic = createElement({ type: 'img', src: facebookPost.user.profilePicture, appendTo: profilePicDiv})

const mainPosterName = createElement({ type: 'h4', textContent: `${facebookPost.user.firstName} ${facebookPost.user.lastName}`, appendTo: profileDiv})

// Main text elements
const mainTextDiv = createElement({ type: 'div', id: 'mainTextDiv', appendTo: mainPost})

const textDiv = createElement({ type: 'div', id: 'textDiv', appendTo: mainTextDiv })
const mainPostText = createElement({ type: 'h5', textContent: `${facebookPost.text}`, appendTo: textDiv})

const viewsDiv = createElement({ type: 'div', id: 'viewsDiv', appendTo: mainTextDiv })
const viewsText = createElement({ type: 'h5', textContent: `${facebookPost.views} Views`, appendTo: viewsDiv})

const viewsBorderDiv = createElement({ type: 'div', id: 'viewsBorderDiv', appendTo: viewsDiv })

// Share, like, comment elements
const likeDiv = createElement({ type: 'div', id: 'likeDiv', appendTo: mainPost})

const likebutton = createElement({ type: 'button', className: 'mediaButton', innerHTML: 'Like', appendTo: likeDiv })

const commentButton = createElement({ type: 'button', className: 'mediaButton', innerHTML: 'Comment', appendTo: likeDiv })

const shareButton = createElement({ type: 'button', className: 'mediaButton', innerHTML: 'Share', appendTo: likeDiv })

// comments section
const commentDiv = createElement({ type: 'div', id: 'commentDiv', appendTo: mainPost})

for (let i =0; i < facebookPost.comments.length; i++){
    
    //create 3 sections for profile, main text, and like/delete button
    const div = createElement({type: 'div', id:`comments${i}`, appendTo: commentDiv})

    const profileSection = createElement({ type: 'div', className: 'profileDiv', appendTo: div })

    const textSection = createElement({ type: 'div', className: 'comment', appendTo: div })

    const likeSection = createElement({ type: 'div', className: 'media', appendTo: div })


    // add elements for the profile section
    const profilePicDiv = createElement({ type: 'div', className: 'profilePicDiv', appendTo: profileSection })

    const profilePic = createElement({ type: 'img', src: facebookPost.comments[i].user.profilePicture, appendTo: profilePicDiv })

    const profileName = createElement({ type: 'h6', 
    textContent: `${facebookPost.comments[i].user.firstName} ${facebookPost.comments[i].user.lastName}`, 
    appendTo: profileSection })

    // add elements for the text section
    const commentText = createElement({
        type: 'h6', textContent: `${facebookPost.comments[i].text}`, 
        appendTo: textSection })


    //add elements for like and delete button
    const likeDeleteText = createElement({ type: 'h6', textContent: 'Like Delete', appendTo: likeSection })

    // add replies
    if (facebookPost.comments[i].replies.length > 0){

        for (let i = 0; i < facebookPost.comments[i].replies.length; i++){

            const replyDiv = createElement({ type: 'div', id: `reply${i}`, className: 'reply', appendTo: div })

            //create profile, main text, and like/delete divs for replies
            const replyProfile = createElement({ type: 'div', className: 'profileDiv', appendTo: replyDiv })

            const replyText = createElement({ type: 'div', className: 'replyText', appendTo: replyDiv })

            const replyLikeDelete = createElement({ type: 'div', className: 'replyMedia', appendTo: replyDiv })

            // add elements for the reply profile section
            const replyProfilePicDiv = createElement({ type: 'div', className: 'profilePicDiv', appendTo: replyProfile })

            const replyProfilePic = createElement({ type: 'img', src: facebookPost.comments[i].replies[i].user.profilePicture, 
            appendTo: replyProfilePicDiv })

            const replyProfileName = createElement({ type: 'h6', 
                textContent: `${facebookPost.comments[i].replies[i].user.firstName} ${facebookPost.comments[i].replies[i].user.lastName}`, 
                appendTo: replyProfile })

            // add elements to the reply text section
            const replyString = createElement({ type: 'h6', textContent: `${facebookPost.comments[i].replies[i].text}`, 
            appendTo: replyText })

            // add elements to the reply like/delete section
            const replyLikeDeleteText = createElement({ type: 'h6', textContent: 'Like Delete', appendTo: replyLikeDelete})

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

