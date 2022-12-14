
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

const postLabs = (req, res) => {
    const { labName, labLength } = req.body;
    myLabs.push({ labId, labName: labName, labLength: labLength });
    res.status(200).send(myLabs);
    labId++
}

const deleteLecture = (req, res) => {
    console.log(req.params);
    const deleteLecId = myLectures.findIndex((lec) => {
        if (lec.lecId === +req.params.lecId) {
            return true;
        }
    })
    myLectures.splice(deleteLecId, 1)
    res.status(200).send(myLectures)
}

const deleteLab = (req, res) => {
    const deleteLabId = myLabs.findIndex((lab) => {
        if (lab.labId === +req.params.labId) {
            return true;
        }
    })
    myLabs.splice(deleteLabId, 1)
    res.status(200).send(myLabs)
}





module.exports = { getLectures, getLabs, postLectures, postLabs, deleteLecture, deleteLab }