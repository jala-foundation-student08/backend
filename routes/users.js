var express = require("express");
var router = express.Router();
const Contact = require("../models/contacts");
const Relation = require("../models/relations");

/* GET users listing. */
router.get("/v1/contacts", function (req, res, next) {
  Contact.find(req.query)
    .then((contact) => res.send(contact))
    .catch((error) => console.log(error));
});
router.get("/v1/contacts", function (req, res, next) {
  Contact.find(req.query)
    .then((contact) => res.send(contact))
    .catch((error) => console.log(error));
});
router.post("/v1/contacts", function (req, res, next) {
  Contact.create(req.body)
    .then((contact) => res.send(req.body))
    .catch((error) => res.send(error));
});
router.get("/v1/contacts/relation", function (req, res, next) {
  Relation.find(req.query)
    .then((contact) => res.send(contact))
    .catch((error) => console.log(error));
});
router.post("/v1/contacts/relation", function (req, res, next) {
  Relation.create(req.body)
    .then((contact) => res.send(contact))
    .catch((error) => console.log(error));
});

module.exports = router;
