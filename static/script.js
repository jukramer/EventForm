const form = document.getElementById('myForm')

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        eventName: document.getElementById('event-name').value,
        eventHead: document.getElementById('event-head').value
    }

    try {
        const response = await fetch('http://127.0.0.1:5000/api/submit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        const result = await response.json();
        document.getElementById('response').textContent = result.message;
        
    } catch (error) {
        document.getElementById('response').textContent = "Error: " + error;
    }
});