var postsMap = {
    "card_1": {
        "author": "Srishti Gupta",
        "subject": "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
        "description": ""
    },
    "card_2": {
        "author": "Colby Fayock",
        "subject": "What is linting and how can it save you time?",
        "description": ""
    },
    "card_3": {
        "author": "Yazeed Bzadough",
        "subject": "How to Get More Views on Your Tech Blog",
        "description": ""
    },
    "card_4": {
        "author": "Cedd Burge",
        "subject": "How to write easily describable code",
        "description": ""
    },
    "card_5": {
        "author": "Srishti Gupta",
        "subject": "Everything you should know about ‘module’ & ‘require’ in Node.js",
        "description": "Node.js treats each JavaScript file as a separate module. For instance, if you have a" +
            "file containing some code and this file is named xyz.js, then this file is treated as a module in" +
            "Node, and you can say that you’ve created a module named xyz.Let’s take an example to understand this" +
            "better.You have a file named circle.js which consists of the logic for calculating the area" +
            "& the circumference of a circle of a given radius, as given below: circle.jsYou can call circle.js file a module named circle.You might" +
            "be wondering why is there a need to have multiple modules? You could have just written all the code in a" +
            "single module.Well, it is very important to write modular code.By modular, I mean to say that your code should be" +
            "independent and should be loosely coupled.Imagine that there’s a large application and you have all your code written" +
            "in just one place, just one file.Too messy, right?This is the most significant advantage of having modules in Node.js." +
            "Even if you define a global variable in a module using var, let or const keywords, the variables are scoped locally to the" +
            "module rather than being scoped globally.This happens because each module has a function wrapper of its own and the code" +
            "written inside one function is local to that function and cannot be accessed outside this function."
    }
};

function initUI() {
    var postId = window.sessionStorage.getItem('postId');
    console.log(postId);
    var postEntry = postsMap[postId];
    var subject = document.getElementById("subject");
    subject.innerHTML = '<h5>' + postEntry["subject"] + '</h5>';
    var author = document.getElementById("author");
    var authorHtml = author.innerHTML;
    author.innerHTML = '<p>' + postEntry["author"] + '</p>' + authorHtml;
    var description = document.getElementById('description');
    description.innerHTML += '<p>' + postEntry["description"] + '</p>';
}

initUI();

function enableEditMode(e, editBtn) {
    console.log(editBtn);

    var subject = document.getElementById("subject");
    var desciption = document.getElementById("description");
    console.log(subject.contentEditable);
    console.log(desciption.contentEditable);

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
    //saveBtn.classList.toggle("btn");
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
    saveBtn.style.display = "none";
    saveBtn.classList.toggle("btn");
}

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

function updateLikes(event, likeBtn) {
    var likeCounter = Number(likeBtn.getAttribute('data-likes'));
    if (likeCounter == 0) {
        likeBtn.innerHTML = 'Liked ' + '<i class="fas fa-thumbs-up"></i>';
    }
    likeCounter = likeCounter + 1;
    var likeInfo = document.getElementById('like-info');
    likeBtn.setAttribute("data-likes", String(likeCounter));
    var likeMsg = likeCounter == 1 ? ' person likes this!' : ' people like this!';
    likeInfo.innerText = likeCounter + likeMsg;
}