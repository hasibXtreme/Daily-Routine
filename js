let routines = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
};

function addRoutine(day) {
    const input = document.getElementById(`${day}-input`);
    const routineText = input.value.trim();

    if (routineText === '') {
        return;
    }

    
    routines[day].push(routineText);

    
    const listItem = document.createElement('li');
    listItem.innerHTML = `${routineText} <button onclick="removeRoutine(this, '${day}')">Delete</button>`;
    document.getElementById(`${day}-list`).appendChild(listItem);

    
    input.value = '';
}

function removeRoutine(button, day) {
    
    button.parentElement.remove();
    const routineText = button.parentElement.textContent.replace(" Delete", "");
    const index = routines[day].indexOf(routineText);
    if (index !== -1) {
        routines[day].splice(index, 1);
    }
}

function showRoutineChart() {
   
    document.getElementById('routine-input-section').style.display = 'none';
    document.getElementById('routine-chart-section').style.display = 'block';

    const tbody = document.getElementById('routine-chart').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; 

    for (let day in routines) {
        if (routines[day].length > 0) {
            routines[day].forEach(routine => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${day}</td><td>${routine}</td>`;
                tbody.appendChild(row);
            });
        }
    }
}

function goBackToInput() {
    
    document.getElementById('routine-input-section').style.display = 'block';
    document.getElementById('routine-chart-section').style.display = 'none';
}


