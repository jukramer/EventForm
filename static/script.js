const form = document.getElementById('event-form')
const fundCheckbox = document.getElementById('fund-requested')
const fundBudget = document.getElementById('fund-budget-block')

// Hide/unhide fund amount
fundCheckbox.addEventListener('change', () => {
    if (fundCheckbox.checked) {
        fundBudget.style.display = 'inline-block';
    } else {
        fundBudget.style.display = 'none';
    }
});


// Communication with Flask
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        // General
        eventName: document.getElementById('event-name').value,
        eventDate: document.getElementById('event-date').value,
        eventTime: document.getElementById('event-time').value,
        eventLoc: document.getElementById('event-loc').value,
        eventHead: document.getElementById('event-head').value,
        eventDesc: document.getElementById('event-description').value,

        // Budget
        preBudget: document.getElementById('pre-budget').value,
        postBudget: document.getElementById('post-budget').value,
        fundRequested: document.getElementById('fund-requested').value,
        fundBudget: document.getElementById('fund-budget').value,

        // Comment
        comment: document.getElementById('comment-input').value
    };

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