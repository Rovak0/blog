// take username, title, and content on a trigger from a button
//turn them into a blogpost, and send it to a new page

//grab the elements
const username = document.querySelector('#username');
const title = document.querySelector('#titlePost');
const content = document.querySelector('#content');
const postButton = document.querySelector('#postBlog');



//make the data packer
function packData(){
    let fullPost ={ //don't worry about reusing variable names, it makes it clearer
        username: username.value,
        title: title.value,
        content: content.value
    }
    //likely needs to be turned into a cookie
    //turn it into a string to transmit
    //local memory persists between pages.  Just need to use the same variable name
    fullPost = JSON.stringify(fullPost);
    return fullPost;
}


//when the post blog button is pushed, pack the data
postButton.addEventListener('click', function(event){
    //stops the refresh, and packs the data
    event.preventDefault();

    // check if there are empty fields
    if(!(username.value && title.value && content.value)){
        alert("Please fill out the entire form.");
        return; //stops the post 
    }
    const post = packData();
    localStorage.setItem('newPost', post); //save item as newPost
    
    //send the user to the next page
    //i need to launch the other page to send it to

    //fix this before launch
    console.log("Check");
    window.location.href ="../../blogPages.html";
});

