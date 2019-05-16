module.exports = {
    getAll,
    getOne,
    addNew,
    deleteOne,
    updateOne
};



const skills = [
    {id: "1", desc: "JavaScript"},
    {id: "2", desc: "HTML5"},
    {id: "3", desc: "CSS3"}
];

function addNew(skill) {
    skill.id = `${skills.length + 1}`
    skills.push(skill)
}

function getAll() {
    return skills
}

function getOne(id) {
    return skills.filter(skill => skill.id === id)[0]
}

function deleteOne(id) {
    id = parseInt(id) - 1
    skills.splice(id, 1)
}
function updateOne(id, skill) {
    id = parseInt(id) - 1
    skills.splice(id, 1, skill)
}