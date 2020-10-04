var postList = [
    {
        "id": "card_1",
        "author": "Colby Fayock",
        "subject": "What is linting and how can it save your time"
    }
];

function initUI() {
    var postId = window.sessionStorage.getItem('postId');
    console.log(postId);
}

//initUI();

function addComments(e) {
    var inputComment = document.getElementById('InputComment');
    var comment = inputComment.value;
    var comments = document.getElementById('comments');
    if (comments.style.display == '') {
        comments.style.display = 'block';
    }
    comments.innerHTML += '<p>' + comment + '</p>';
    inputComment.value = inputComment.defaultValue;
}