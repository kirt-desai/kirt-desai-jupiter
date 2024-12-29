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
