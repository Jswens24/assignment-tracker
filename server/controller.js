
let lecId = 1;
const myLectures = [
    {
        lecId: 0,
        lectureName: 'Getting Started With Git',
        lectureLength: 2.02
    },
];

let labId = 1;
const myLabs = [
    {
        labId: 0,
        labName: 'Solar Calculator',
        labLength: 2.06
    },
]

const getLectures = (req, res) => {
    res.status(200).send(myLectures);
}

const getLabs = (req, res) => {
    res.status(200).send(myLabs);
}

const postLectures = (req, res) => {
    const { lectureName, lectureLength } = req.body;
    myLectures.push({ lecId, lectureName: lectureName, lectureLength: lectureLength });
    res.status(200).send(myLectures)
    lecId++
}


module.exports = { getLectures, getLabs, postLectures }