var postList = [
    {
        "id": "card_1",
        "author": "Colby Fayock",
        "subject":"What is linting and how can it save your time"
    }
];

function initUI(){
    var postId = window.sessionStorage.getItem('postId');
    console.log(postId);
}

//initUI();

function addComments(e){
    var comment = document.getElementById('InputComment').value;
    var comments = document.getElementById('comments');
    comments.innerHTML += '<p>' + comment + '</p>';
}