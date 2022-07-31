
const lectureNameInput = document.querySelector('.lecture-name')
const lectureLengthInput = document.querySelector('.lecture-length');


const labNameInput = document.querySelector('#lab-name');
const labLengthInput = document.querySelector('#lab-length')

const lecBtn = document.querySelector('#lec-btn');
const labBtn = document.querySelector('#lab-btn');

const lecturesContainer = document.querySelector('.lectures-todo-container');
const labContainer = document.querySelector('.lab-todo-container');


const handleLecDeleteBtn = (lecId) => {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerText = 'X'
    deleteButton.addEventListener('click', () => {
        axios.delete(`http://localhost:4004/api/lec/${lecId}`)
            .then(displayLec)
            .catch((err) => console.log(err))
    })
    return deleteButton;
}

const handleLabDeleteBtn = (id) => {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerText = 'X'
    deleteButton.addEventListener('click', () => {
        axios.delete(`http://localhost:4004/api/lab/${id}`)
            .then(displayLab)
            .catch((err) => console.log(err))
    })
    return deleteButton;
}



const displayLec = ({ data }) => {
    data.forEach(({ lecId, lectureName, lectureLength }) => {

        const lecListItem = document.createElement('li');
        const lecText = document.createElement('span');
        const deleteButton = handleLecDeleteBtn(lecId);
        lecText.innerText = `${lectureName} - ${lectureLength}hr.`;
        lecListItem.append(lecText, deleteButton);
        lecturesContainer.appendChild(lecListItem);
    })
};

const displayLab = ({ data }) => {
    data.forEach(({ labId, labName, labLength }) => {
        const labListItem = document.createElement('li');
        const labText = document.createElement('span');
        const deleteButton = handleLabDeleteBtn(labId);
        labText.innerHTML = `${labName} - ${labLength}hr.`;
        labListItem.append(labText, deleteButton);
        labContainer.appendChild(labListItem);
    })
}

// const clearInputs = () => {
//     lecturesContainer.innerHTML = 
// }


// why doesn't this work?
// const lecReqBody = {
//     lectureName: lectureNameInput.value,
//     lectureLength: lectureLengthInput.value
// }



axios.get(`http://localhost:4004/api/lec`)
    .then(displayLec)
    .catch((err) => console.log(err))

axios.get(`http://localhost:4004/api/lab`)
    .then(displayLab)
    .catch((err) => console.log(err))






lecBtn.addEventListener('click', () => {
    event.preventDefault();
    axios.post(`http://localhost:4004/api/lec`, { lectureName: lectureNameInput.value, lectureLength: lectureLengthInput.value })
        .then(res => {
            lecturesContainer.innerHTML = '';
            displayLec(res)
            lectureNameInput.value = '';
            lectureLengthInput.value = '';
        })
        .catch((err) => console.log(err))
})

labBtn.addEventListener('click', () => {
    event.preventDefault();
    axios.post('http://localhost:4004/api/lab', { labName: labNameInput.value, labLength: labLengthInput.value })
        .then(res => {
            labContainer.innerHTML = '';
            displayLab(res);
            labNameInput.value = '';
            labLengthInput.value = '';
        })
        .catch((err) => console.log(err));
})

