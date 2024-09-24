// Get DOM elements
var generateResumeBtn = document.getElementById('generate-resume');
var resumeContainer = document.getElementById('resume');
generateResumeBtn.addEventListener('click', function () {
    // Get input values from the form
    var name = document.getElementById('name').value;
    var fName = document.getElementById('fName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var linkedin = document.getElementById('link').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Validate the form fields (basic validation)
    if (!name || !fName || !email || !phone || !linkedin || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    // Create the resume content dynamically using template literals
    var resumeContent = "\n        <h3>Personal Information</h3>\n        <p contenteditable=\"true\" ><strong>Name:</strong> ".concat(name, "</p>\n        <p contenteditable=\"true\"><strong>Father's Name:</strong> ").concat(fName, "</p>\n        <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n        <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(phone, "</p>\n        <p contenteditable=\"true\"><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the dynamically generated resume in the resume container
    resumeContainer.innerHTML = resumeContent;
});
// Toggle skills visibility/Hide
var toggleButton = document.getElementById('toggle-skills');
var skill = document.getElementById("skills");
toggleButton.addEventListener('click', function () {
    if (skill.style.display === 'none' || skill.style.display === '') {
        skill.style.display = 'block'; //show the textarea if it is hidden
    }
    else {
        skill.style.display = 'none'; //hide the textarea if it is visible 
    }
});
