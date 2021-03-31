async function editFormHandler(e) {
    e.preventDefault();

    const subject = document.querySelector('input[name="subject"]').value;
    const body = document.querySelector('textarea[name="body"]').value;
    const is_nightmare = document.querySelector('.form-check-input').checked;

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]
    

    const response = await fetch(`/api/dreams/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            subject,
            body,
            is_nightmare
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-dream-form').addEventListener('submit', editFormHandler);