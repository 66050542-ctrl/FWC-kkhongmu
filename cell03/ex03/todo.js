const newButton = document.getElementById("newButton");
const ftList = document.getElementById("ft_list");

// บันทึก To-Do ลง Cookie
function saveTodos() {
    const todos = [];

    ftList.querySelectorAll("div").forEach(function (todo) {
        todos.push(todo.textContent);
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; max-age=31536000; path=/";
}

// สร้าง To-Do
function createTodo(text) {
    const todo = document.createElement("div");

    todo.textContent = text;

    // คลิก To-Do เพื่อลบ
    todo.addEventListener("click", function () {
        const answer = confirm("Do you want to remove this TO DO?");

        if (answer) {
            todo.remove();
            saveTodos();
        }
    });

    ftList.prepend(todo);
}

// กด New
newButton.addEventListener("click", function () {
    const todoText = prompt("Enter a new TO DO:");

    if (todoText !== null && todoText.trim() !== "") {
        createTodo(todoText);
        saveTodos();
    }
});

// โหลด To-Do จาก Cookie ตอนเปิดหน้าเว็บ
function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        const parts = cookies[i].split("=");

        if (parts[0] === "todos") {
            const todos = JSON.parse(decodeURIComponent(parts.slice(1).join("=")));

            for (let i = todos.length - 1; i >= 0; i--) {
                createTodo(todos[i]);
            }

            break;
        }
    }
}

loadTodos();