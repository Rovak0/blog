//this is the script for the blog page
//the local memory item is newPost

//check for old posts, update board with new posts
let postList = []; //scope issues if put in init
function init(){
    if(!(localStorage.getItem("postList") === null)){ // if not post dne, so if the postList exists
        postList = JSON.parse(localStorage.getItem("postList"));
    }
    if(!(localStorage.getItem("newPost") === null)){ //if there is a new post
        postList.push(JSON.parse(localStorage.getItem("newPost"))); //add post to list
        localStorage.removeItem("newPost"); //clear post so if there is a reload, it does double add
        localStorage.setItem("postList", JSON.stringify(postList)); //add the new item to the list
    }
}

//need to make a section to display the posts
//add a div to the body, make it an unordered list
//populate the list

init();