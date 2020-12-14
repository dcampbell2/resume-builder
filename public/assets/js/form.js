// console.log("hello world");


$(document).ready(function() {
    let educationCounter = 0;
    let experienceCounter = 0;
    let projectCounter = 0;
    $("#addEducation").on("click", function() {
        educationCounter++;
        const $clone = $(".education").first().clone();
        let index = parseInt($(".education").attr("data-index")) + educationCounter;
        index = index.toString();

        $clone.attr("data-index", index);
        $(".formContainer").append($clone);
        $($clone).insertBefore("#addEducation");
        localStorage.setItem("educationCounter", JSON.stringify(educationCounter));
    });
    $("#addExperience").on("click", function() {
        experienceCounter++;
        const $clone = $(".experience").first().clone();
        let index = parseInt($(".experience").attr("data-index")) + experienceCounter;
        index = index.toString();

        $clone.attr("data-index", index);
        $(".formContainer").append($clone);
        $($clone).insertBefore("#addExperience");
        localStorage.setItem("experienceCounter", JSON.stringify(experienceCounter));
    });
    $("#addProject").on("click", function() {
        projectCounter++;
        const $clone = $(".project").first().clone();
        
        let index = parseInt($(".project").attr("data-index")) + projectCounter;
        index = index.toString();

        $clone.attr("data-index", index);
        $(".formContainer").append($clone);
        $($clone).insertBefore("#addProject");
        localStorage.setItem("projectCounter", JSON.stringify(projectCounter));
    });

    $("#saveButton").on("click", function() {
        const educationCounter = JSON.parse(localStorage.getItem("educationCounter"));
        const experienceCounter = JSON.parse(localStorage.getItem("experienceCounter"));
        const projectCounter = JSON.parse(localStorage.getItem("projectCounter"));
    
        const resumeName = $("#resumeName").val().trim();
        const objective = $("#objective").val();
        const skills= $("#skills").val();
        const awards = $("#awards").val();
        if (resumeName == "") {
            alert("Please enter a valid file name for your resume");
        };
        // console.log("Resume Name: " + resumeName);
        // console.log("Objective: " + objective);
        // console.log("Skills: " + skills);
        // console.log("Awards: " + awards);
        for (let i = 0; i <= educationCounter; i++) {
            if (i == 0 && $(".school").eq(i).val() == "") {
                break;
            }
            let education = {
                school: $(".school").eq(i).val(),
                degree: $(".degree").eq(i).val(),
                start: $(".schoolStartDate").eq(i).val(),
                end: $(".schoolEndDate").eq(i).val(),
                program: $(".program").eq(i).val()
            };
            console.log(education);
            //Call post route for EDUCATION OBJECT
        }
        
        for (let i = 0; i <= experienceCounter; i++) {
            if (i == 0 && $(".employer").eq(i).val() == "") {
                break;
            }
            let experience = {
                employer: $(".employer").eq(i).val(),
                title: $(".jobTitle").eq(i).val(),
                start: $(".jobStartDate").eq(i).val(),
                end: $(".jobEndDate").eq(i).val(),
                description: $(".description").eq(i).val(),
            };
            console.log(experience);
            //Call post route for EXPERIENCE OBJECT
        }
        
        for (let i = 0; i <= projectCounter; i++) {
            if (i == 0 && $(".projectTitle").eq(i).val() == "") {
                break;
            }
            let project = {
                title: $(".projectTitle").eq(i).val(),
                description: $(".projectDescription").eq(i).val(),
            };
            console.log(project);
            //Call post route for PROJECT OBJECT
        }
        
     //define Resume object for resume post route call
     
        // const resume = {
        //     resumeName: resumeName,
        //     objective: objective
        // }
        // $.ajax("/api/resumes", {
        //     type: "POST",
        //     data: resume
        // }).then(function() {
        //     console.log("posted resume to DB");
        // });
    });
});