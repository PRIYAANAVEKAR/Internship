const remindersList = document.querySelector('.reminders-list');
const sound = new Audio('chime.mp3'); // Replace with your preferred sound file

function addReminder() {
  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;
  const activity = document.getElementById('activity').value;

  // Create reminder element
  const reminderElement = document.createElement('li');
  reminderElement.innerHTML = `
    <span><strong>${day.toUpperCase()}</strong> - ${getTimeString(time)}: ${getActivityText(activity)}</span>
    <button onclick="removeReminder(this)">Remove</button>
  `;

  // Schedule reminder timer
  const reminderTime = new Date(new Date().getTime() + getTimeDiff(time) * 1000);
  setTimeout(() => {
    sound.play();
    reminderElement.classList.add('active');
  }, reminderTime - Date.now());

  // Add reminder to list
  remindersList.appendChild(reminderElement);

  // Clear form fields
  document.getElementById('day').value = '';
  document.getElementById('time').value = '';
  document.getElementById('activity').value = '';
}


