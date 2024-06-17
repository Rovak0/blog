// take username, title, and content on a trigger from a button
//turn them into a blogpost, and send it to a new page

//grab the elements
const username = document.querySelector('#username');
const title = document.querySelector('#titlePost');
const content = document.querySelector('#content');
const postButton = document.querySelector('#postBlog');



//make the data packer
function packData(){
    const fullPost ={
        postUsername: username.value,
        postTitle: title.value,
        postContent: content.value
    }
    return fullPost;
}


//when the post blog button is pushed, pack the data
postButton.addEventListener('click', function(event){
    //stops the refresh, and packs the data
    event.preventDefault();
    const post = packData();
    // console.log(post.postUsername);

    //send the user to the next page
    //i need to launch the other page to send it to
    // window.location.href = 
});

