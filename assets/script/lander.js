// take username, title, and content on a trigger from a button
//turn them into a blogpost, and send it to a new page

//grab the elements
const username = document.querySelector('#username');
const title = document.querySelector('#titlePost');
const content = document.querySelector('#content');
const postButton = document.querySelector('#postBlog');
const lightSwitch = document.querySelector('#lightSwitch');
const bodyEl = document.querySelector('body');



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

//turn on/off dark mode
lightSwitch.addEventListener('click', function(){
    if(bodyEl.getAttribute('class') == 'light'){
        bodyEl.setAttribute('class', 'dark');
    }
    else{
        bodyEl.setAttribute('class', 'light');
    }
})


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
    // console.log("Check");
    
    //I can't figure out how to make 2 websites off 1 github repository
    //I could make a 2nd repository, but that feels too wrong of an answer
    //this has what I think should be the answer, but I can't get it to work
    //leave the script folder, leave the assets folder, look at blogPages.html
    window.location.href ="./assets/html/blogPages.html";
    // console.log("why");
    
});

