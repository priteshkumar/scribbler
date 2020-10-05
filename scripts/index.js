var postslink = './html/postslist.html';

function showBlogs(event) {
    window.location.href = postslink;
}

$('#ModalPost').on("hidden.bs.modal", function (e) {
    var createPostForm = document.forms["createpostform"];
    var titleInput = createPostForm.elements['InputTitle'];
    titleInput.value = titleInput.defaultValue;
    var contentInput = createPostForm.elements['InputContents'];
    contentInput.value = contentInput.defaultValue;
});
