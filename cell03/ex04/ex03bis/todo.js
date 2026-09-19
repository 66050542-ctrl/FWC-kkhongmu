$(document).ready(function() {

    function addTodo(text) {
        let todo = $("<div></div>")
            .text(text)
            .css("cursor", "pointer");

        todo.click(function() {
            if (confirm("Delete this task?")) {
                $(this).remove();
            }
        });

        $("#ft_list").prepend(todo);
    }

    $("#new").click(function() {
        let todo = prompt("Enter a new task:");

        if (todo !== null && todo.trim() !== "") {
            addTodo(todo);
        }
    });

});