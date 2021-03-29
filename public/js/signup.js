const signupFormHandler = async (event) => {
    event.preventDefault();

    const user_name = document.querySelector('#username-signup').value.trim();
    const firstName = document.querySelector('#firstname-signup').value.trim();
    const lastName = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const userDate = document.querySelector('#userdate').value.trim();
    const userMonth = document.querySelector('#usermonth').value.trim();

  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_name, firstName, lastName, email, password, userDate, userMonth }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);