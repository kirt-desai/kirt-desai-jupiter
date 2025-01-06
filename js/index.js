// Date object
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');

// Copyright element
const copyright = document.createElement('p');
copyright.innerHTML = `© Your Name ${thisYear}`;
footer.appendChild(copyright);

// Skills list
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

// Skills array
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);
    event.target.reset();

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});
