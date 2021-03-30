async function newFormHandler(e) {
    e.preventDefault();

    const subject = document.querySelector('input[name="subject"]').value;
    const body = document.querySelector('textarea[name="body"]').value;
    const is_nightmare = document.querySelector('.form-check-input').checked;

    const response = await fetch('/api/dreams', {
        method: 'POST',
        body: JSON.stringify({
            subject,
            body,
            is_nightmare
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-dream-form').addEventListener('submit', newFormHandler);