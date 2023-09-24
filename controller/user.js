const route = require("express").Router();

route.get("/", (req, res, next) => {
  const allUsers = [
    {
      firstName: "Akash",
      lastName: "khan",
      email: "akash910971@gmail.com",
      phone: "01704801533",
      friends: ["Ashraful", "Ruhul", "Sayer", "Roufiquil"],
    },
    {
      firstName: "Atik",
      lastName: "khan",
      email: "atik@gmail.com",
      phone: "01704801533",
      friends: ["Abir", "Nayem", "Tuhin"],
    },
    {
      firstName: "Abir",
      lastName: "khan",
      email: "abir@gmail.com",
      phone: "01704805533",
      friends: ["Atik", "Nayem", "Rajin"],
    },
    {
      firstName: "Najmul",
      lastName: "khan",
      email: "najmul@gmail.com",
      phone: "01704806833",
      friends: ["Sobuj", "Robiul", "Mithu"],
    },
  ];
  return res.json(allUsers);
});

module.exports = route;
