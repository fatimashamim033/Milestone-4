
var generateResumeBtn = document.getElementById('generate-resume');
var toggleSkillsBtn = document.getElementById('toggle-skills');
var resumeContainer = document.getElementById('resume');
generateResumeBtn.addEventListener('click', function () {
    // Get the input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the resume content
    var resumeContent = "\n       <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the resume content
    resumeContainer.innerHTML = resumeContent;
});
// Toggle skills visibility
toggleSkillsBtn.addEventListener('click', function () {
    var skillsField = document.getElementById('skills');
    if (skillsField.style.display === 'none') {
        skillsField.style.display = 'block';
    }
    else {
        skillsField.style.display = 'none';
    }
});
