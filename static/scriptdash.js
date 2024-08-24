document.querySelector('.todo-input').onkeyup = (e) => {
    let value = e.target.value.trim();
    if (value && e.keyCode === 13) {
        fetch('/add_todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: value })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'success'){
                window.location.reload(); 
            }
        });
        e.target.value = ''; 
    }
};

function markAsCompleted(id) {
    fetch(`/mark_completed/${id}`, { method: 'POST' })
    .then(() => window.location.reload());
}

function markAsUncompleted(id) {
    fetch(`/mark_uncompleted/${id}`, { method: 'POST' })
    .then(() => window.location.reload());
}

function removeTodo(id) {
    fetch(`/remove_todo/${id}`, { method: 'POST' })
    .then(() => window.location.reload());
}
