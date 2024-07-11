// Add your code here
const formData = { dogName: "Byrone", dogBreed: "Poodle" };

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then((response) => response.json())
  .then((object) => console.log(object))
  .catch((error) => {
    alert("Bad things!");
    console.log(error.message);
  });

//Lab
function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name: userName, email: userEmail }),
  })
    .then((res) => res.json())
    .then((user) => {
      console.log(user.id);
      const p = document.createElement("p");
      p.textContent = user.id;
      document.querySelector("body").append(p);
    })
    .catch((error) => {
      const errorMessage = error.message;
      const p = document.createElement("p");
      p.textContent = errorMessage;
      document.querySelector("body").append(p);
    });
}

submitData("Harmony", "harmonymukolwe@gmail.com");
