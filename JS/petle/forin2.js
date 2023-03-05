const Kurzy = {
  firstName: "Piotr",
  lastName: "Kurzydym",
  age: 42,
  profession: "Technologist",
};

for (let key in Kurzy) {
  if (key === "age") {
    console.log("true");
  } else {
    continue;
  }
}
