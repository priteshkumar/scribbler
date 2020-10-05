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
    var inputComment = document.getElementById("InputComment");
    var comment = inputComment.value;
    var comments = document.getElementById("comments");
    if (comments.style.display == '') {
        comments.style.display = 'block';
    }
    comments.innerHTML += '<p>' + comment + '</p>';
    inputComment.value = inputComment.defaultValue;
}

function enableEditMode(e, editBtn) {
    console.log(editBtn);

    var subject = document.getElementById("subject");
    var desciption = document.getElementById("description");
    console.log(subject.contentEditable);
    console.log(desciption.contentEditable);
    //once content is updated
    //it cannot be editable further, return
    if (subject.contentEditable == "true" || desciption.contentEditable == "true") {
        return;
    }

    var subject = document.getElementById("subject");
    var desciption = document.getElementById("description");
    subject.style.border = '2px solid pink';
    subject.contentEditable = "true";
    desciption.style.border = '2px solid pink';
    desciption.contentEditable = "true";
    editBtn.style.display = 'none';

    //remove .btn class
    //needed for hiding editBtn
    //works in IE9
    if (editBtn.classList) {
        editBtn.classList.remove("btn");
    } else {
        var classes = editBtn.className.split(" ");
        var i = classes.indexOf("btn");

        if (i >= 0)
            classes.splice(i, 1);

        editBtn.className = classes.join(" ");
    }

    var saveBtn = document.getElementById("save-btn");
    saveBtn.style.display = 'inline-block';
}

function updateContent(e, saveBtn) {
    var subject = document.getElementById("subject");
    var desciption = document.getElementById("description");
    subject.style.border = "";
    desciption.style.border = "";
    subject.contentEditable = "false";
    desciption.contentEditable = "false";
    var editBtn = document.getElementById("edit-btn");
    editBtn.style.display = "inline-block";

    //toggle 'btn' class
    //add fix for IE9 
    if (editBtn.classList) {
        editBtn.classList.toggle("btn");
    } else {
        var classes = editBtn.className.split(" ");
        classes.push("btn");
        editBtn.className = classes.join(" ");
    }
    editBtn.onclick = "";
    saveBtn.remove();
}