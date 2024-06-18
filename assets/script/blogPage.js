//this is the script for the blog page
//the local memory item is newPost

const postEl = document.querySelector('.blogPosts'); //returns all div's with blogPosts right?
const backButton = document.querySelector('#backButton');

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

    postBlogs();
}


const myItem = document.createElement("li"); //making an item doesn't show it
myItem.textContent = "Hello world"
postEl.appendChild(myItem);

//need to make a section to display the posts
//add a div to the body, make it an unordered list
function createListItem(listItem){
    //each item has an username, a title and content
    //header- title, content, footer-username
    //i can set the div class to card to keep it contained
    const newItem = document.createElement("div");
    newItem.setAttribute("class", "card");

    //each element needs to be added as a child

    const newHeader = document.createElement("header");
    newHeader.textContent = listItem.title;
    newItem.appendChild(newHeader);
    
    const newContent = document.createElement("p");
    newContent.textContent = listItem.content;
    newItem.appendChild(newContent);

    const newFooter = document.createElement("footer");
    newFooter.textContent = listItem.username;
    newItem.appendChild(newFooter);
    
    
    return newItem; //outputs an item to be added to the page
}
//populate the list

function postBlogs(){
    for (item of postList){ //go through the list
        const newBlog = createListItem(item); //add each item to the blog
        // console.log(typeof(item)); //item is an object
        postEl.appendChild(newBlog);
    }
}


//the backbutton
backButton.addEventListener('click', function (){
    //fix the address
    window.location.href ="file:///C:/Users/Eric/Documents/boot%20camp/bulk/homework/blog/index.html";
})


// const checker = createListItem(JSON.parse(localStorage.getItem("newPost")));
// // console.log(checker);

// postEl.appendChild(checker);
init();