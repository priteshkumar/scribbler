function showPostDialogue(card){
    console.log(card.id);
    $('#ModalDeletePost').data("data-card",card);
    $('#ModalDeletePost').modal();
}

function deletePost(){
    var card = $('#ModalDeletePost').data('data-card');
    $('#ModalDeletePost').modal('toggle');
    card.remove();
}

function showPost(card){
    var storage = window.sessionStorage;
    sessionStorage.setItem('postId',card.id);
    window.location.href="../html/post.html";
}