// Import contact model
Contact = require('../models/contactModel');
var httpStatus = require('http-status-codes');

// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR);
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            datetime: new Date(),
            data: contacts
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    // save the contact and check for errors
    contact.save(function (err) {
        if (err) {
            res.status(httpStatus.METHOD_NOT_ALLOWED);
            res.Data = res.json(err);
        } else res.json({
            message: 'New contact created!',
            datetime: new Date(),
            data: contact
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err){
            res.status(httpStatus.BAD_REQUEST);
            res.Data = res.json(err);
        } else {
            if(contact == null) {
                res.status(httpStatus.NOT_FOUND);
                res.Data = res.json(err);
            } else {
                res.json({
                message: 'Contact details loading..',
                datetime: new Date(),
                data: contact
            });
        }}});
};

// Handle update contact info
exports.update = function (req, res) {

    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err){
            res.status(httpStatus.BAD_REQUEST);
            res.Data = res.json(err);
        } else {

            if(contact == null) {
                res.status(httpStatus.NOT_FOUND);
                res.Data = res.json(err);
            } else {

                contact.name = req.body.name ? req.body.name : contact.name;
                contact.gender = req.body.gender;
                contact.email = req.body.email;
                contact.phone = req.body.phone;

                // save the contact and check for errors
                contact.save(function (err) {
                    if (err)
                        res.json(err);
                    res.json({
                        message: 'Contact Info updated',
                        datetime: new Date(),
                        data: contact
                    });
                });
            }
        }
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({ _id: req.params.contact_id }, function (err, contact) {
        if (err){
            res.status(httpStatus.BAD_REQUEST);
            res.Data = res.json(err);
        } else {
            console.log(contact);
            res.json({
                status: "success",
                message: 'Contact deleted',
                datetime: new Date(),
            });
        }
    });
};