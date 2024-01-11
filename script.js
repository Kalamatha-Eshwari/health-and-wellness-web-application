// Function to update the user's name
function updateUserName() {
    var userName = document.getElementById("userName").value.trim();
    if (userName !== "") {
        document.getElementById("userNameDisplay").textContent = "Hello, " + userName + "!";
    }
}

// Function to add a health tip
function addHealthTip() {
    var newHealthTip = document.getElementById("newHealthTip").value.trim();
    if (newHealthTip !== "") {
        var healthTipsList = document.getElementById("healthTipsList");
        var tipListItem = document.createElement("li");
        tipListItem.appendChild(document.createTextNode(newHealthTip));

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function() {
            healthTipsList.removeChild(tipListItem);
        };

        tipListItem.appendChild(deleteButton);
        healthTipsList.appendChild(tipListItem);

        document.getElementById("newHealthTip").value = "";
    }
}

// Function to add a blog post
function addBlogPost() {
    var newPost = document.getElementById("newBlogPost").value.trim();
    if (newPost !== "") {
        var blogPosts = document.getElementById("blogPosts");
        var postDiv = document.createElement("div");
        postDiv.appendChild(document.createTextNode(newPost));

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function() {
            blogPosts.removeChild(postDiv);
        };

        postDiv.appendChild(deleteButton);
        blogPosts.appendChild(postDiv);

        document.getElementById("newBlogPost").value = "";
    }
}

// Similar functions for other sections (exercise tips, food tips, and medication tips)
function addExerciseTip() {
    var newTip = document.getElementById("newExerciseTip").value.trim();
    if (newTip !== "") {
        var exerciseTipsList = document.getElementById("exerciseTipsList");
        var tipListItem = document.createElement("li");
        tipListItem.appendChild(document.createTextNode(newTip));

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function() {
            exerciseTipsList.removeChild(tipListItem);
        };

        tipListItem.appendChild(deleteButton);
        exerciseTipsList.appendChild(tipListItem);

        document.getElementById("newExerciseTip").value = "";
    }
}

function addFoodTip() {
    var newTip = document.getElementById("newFoodTip").value.trim();
    if (newTip !== "") {
        var foodTipsList = document.getElementById("foodTipsList");
        var tipListItem = document.createElement("li");
        tipListItem.appendChild(document.createTextNode(newTip));

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function() {
            foodTipsList.removeChild(tipListItem);
        };

        tipListItem.appendChild(deleteButton);
        foodTipsList.appendChild(tipListItem);

        document.getElementById("newFoodTip").value = "";
    }
}

function addMedicationTip() {
    var newTip = document.getElementById("newMedicationTip").value.trim();
    if (newTip !== "") {
        var medicationTipsList = document.getElementById("medicationTipsList");
        var tipListItem = document.createElement("li");
        tipListItem.appendChild(document.createTextNode(newTip));

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function() {
            medicationTipsList.removeChild(tipListItem);
        };

        tipListItem.appendChild(deleteButton);
        medicationTipsList.appendChild(tipListItem);

        document.getElementById("newMedicationTip").value = "";
    }
}


// Function to add a blog post
function addBlogPost() {
    var newPost = document.getElementById("newBlogPost").value.trim();
    if (newPost !== "") {
        var blogPosts = document.getElementById("blogPosts");
        var postDiv = document.createElement("div");
        postDiv.appendChild(document.createTextNode(newPost));

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function() {
            blogPosts.removeChild(postDiv);
        };

        postDiv.appendChild(deleteButton);
        blogPosts.appendChild(postDiv);

        document.getElementById("newBlogPost").value = "";
    }
}

function displayDoctorInfo() {
    var specialistsDropdown = document.getElementById("specialists");
    var selectedSpecialist = specialistsDropdown.value;
    var doctorInfoContainer = document.getElementById("doctorInfo");
    doctorInfoContainer.innerHTML = "";

    
    switch (selectedSpecialist) {
        case "cardiologist":
            doctorInfoContainer.innerHTML = "<p>Dr. John Doe</p><p>Cardiologist</p><p>Contact: xxx-xxx-xxxx</p>";
            break;
        case "dermatologist":
            doctorInfoContainer.innerHTML = "<p>Dr. Jane Smith</p><p>Dermatologist</p><p>Contact: xxx-xxx-xxxx</p>";
            break;
        case "endocrinologist":
            doctorInfoContainer.innerHTML = "<p>Dr. Michael Johnson</p><p>Endocrinologist</p><p>Contact: xxx-xxx-xxxx</p>";
            break;
        case "orthopedic":
            doctorInfoContainer.innerHTML = "<p>Dr. Sarah Davis</p><p>Orthopedic Surgeon</p><p>Contact: xxx-xxx-xxxx</p>";
            break;
        case "psychiatrist":
            doctorInfoContainer.innerHTML = "<p>Dr. Robert Williams</p><p>Psychiatrist</p><p>Contact: xxx-xxx-xxxx</p>";
            break;
        default:
            break;
    }
}
