
const lectureNameInput = document.querySelector('.lecture-name');
const lectureLengthInput = document.querySelector('.lecture-length');
const labNameInput = document.querySelector('#lab-name');
const labLengthInput = document.querySelector('#lab-length')

const lecBtn = document.querySelector('#lec-btn');
const labBtn = document.querySelector('#lab-btn');

const lecturesContainer = document.querySelector('.lectures-todo-container');
const labContainer = document.querySelector('.lab-todo-container');


const handleDeleteBtn = (lecId) => {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerText = 'X'
    deleteButton.addEventListener('click', () => {
        axios.delete(`http://localhost4004/api/hw/${lecId}`)
            .then(displayLec,)
            .catch((err) => console.log(err))
    })
    return deleteButton;
}



const displayLec = ({ data }) => {
    data.forEach(({ lecId, lectureName, lectureLength }) => {
        const lecListItem = document.createElement('li');
        const lecText = document.createElement('span');
        const deleteButton = handleDeleteBtn(lecId);
        lecText.innerText = `${lectureName} - ${lectureLength}hr.`;
        lecListItem.append(lecText, deleteButton);
        lecturesContainer.appendChild(lecListItem);
    })
};

const displayLab = ({ data }) => {
    data.forEach(({ labId, labName, labLength }) => {
        const labListItem = document.createElement('li');
        const labText = document.createElement('span');
        const deleteButton = handleDeleteBtn(labId);
        labText.innerHTML = `${labName} - ${labLength}hr.`;
        labListItem.append(labText, deleteButton);
        labContainer.appendChild(labListItem);
    })
}

// const clearInputs = () => {
//     lecturesContainer.innerHTML = 
// }

const lecReqBody = {
    lectureName: lectureNameInput.value,
    lectureLength: lectureLengthInput.value
}



axios.get(`http://localhost:4004/api/lec`)
    .then(displayLec)
    .catch((err) => console.log(err))

axios.get(`http://localhost:4004/api/lab`)
    .then(displayLab)
    .catch((err) => console.log(err))






lecBtn.addEventListener('click', (event) => {
    event.preventDefault();
    axios.post(`http://localhost:4004/api/lec`, lecReqBody)
        .then(res => {
            displayLec
        })
        .catch((err) => console.log(err))
})

