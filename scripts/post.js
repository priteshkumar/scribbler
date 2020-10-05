var postsMap = {
    "card_1": {
        "author": "Srishti Gupta",
        "subject": "'let' me be a 'const'(ant), not a 'var'(iable)!",
        "description": "Since JavaScript does not have any type-checking, either of these keywords can be used to declare" +
            "variable of any type (datatype) in JavaScript.Though all the three keywords are used for the same" +
            "purpose, they are different.Variables declared using the let keyword can change their values in the future." +
            "Variables declared using the const keyword cannot change their values in future. This is why you must always" +
            "initialize the variables declared with the const keyword.remember that variables declared using the const keyword" +
            "are read-only & cannot be reassigned any value."
    },
    "card_2": {
        "author": "Colby Fayock",
        "subject": "What is linting and how can it save you time?",
        "description": "One of the biggest challenges in software development is time. It’s something we can’t easily get more of," +
            "but linting can help us make the most out of the time we have.Simply put, a linter is a tool that programmatically scans" +
            "your code with the goal of finding issues that can lead to bugs or inconsistencies with code health and style. Some can" +
            "even help fix them for you! To get started, we first need a linter. Probably the most popular in the Javascript world is ESLint." +
            "Your linter will actually be the engine for defining rules and parsing your files to test against. ESLint is available as an npm" +
            "package by itself and once installed, out of the box it allows you to set up a basic configuration file and hit the ground running" +
            "with some command line tools."
    },
    "card_3": {
        "author": "Yazeed Bzadough",
        "subject": "How to Get More Views on Your Tech Blog",
        "description": "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel," +
            "or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.This is priority #1 before optimizing" +
            "your blog's layout, SEO, or marketing strategy. Make sure you understand your technology well! If you don't understand it, how can you" +
            "help others understand it?"
    },
    "card_4": {
        "author": "Cedd Burge",
        "subject": "How to write easily describable code",
        "description": "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes" +
            "mental energy,and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion" +
            "when discussing the code.This is usually a fertile breeding ground for bugs born out of miscommunication / misunderstanding, and fixing" +
            "these bugs often introduces new ones, for the same reasons. In the end it becomes code that no one really understands or wants to touch."
    },
    "card_5": {
        "author": "Srishti Gupta",
        "subject": "Everything you should know about 'module' & 'require' in Node.js",
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