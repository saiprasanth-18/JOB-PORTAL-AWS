const apiUrl =
"https://YOUR_API_ID.execute-api.ap-south-1.amazonaws.com/prod/apply";

document
.getElementById("applicationForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const data = {
fullName: document.getElementById("fullName").value,
email: document.getElementById("email").value,
phoneNumber: document.getElementById("phoneNumber").value,
qualification: document.getElementById("qualification").value,
experience: document.getElementById("experience").value,
skills: document.getElementById("skills").value,
coverLetter: document.getElementById("coverLetter").value
};

try{

const response = await fetch(apiUrl,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

const result = await response.json();

if(response.ok){

document.getElementById("message").innerHTML =
"Application submitted successfully";

document.getElementById("applicationForm").reset();

}else{

document.getElementById("message").innerHTML =
result.message;
}

}catch(error){

document.getElementById("message").innerHTML =
"Submission failed";
}
});