const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    newSkill,
    saveSkill,
    removeSkill,
    edit,
    update
};


function saveSkill(req, res) {
    Skill.addNew(req.body)
    res.redirect('/skills')
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function removeSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    })
}

function update(req, res) {
    Skill.updateOne(req.params.id, req.body)
    res.redirect('/skills/' + req.params.id)
}