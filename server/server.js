const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const { getLectures, getLabs, postLectures, postLabs, deleteLecture, deleteLab } = require('./controller');



app.get('/api/lec', getLectures);
app.get('/api/lab', getLabs);

app.post('/api/lec', postLectures);
app.post('/api/lab', postLabs);

app.delete('/api/lec/:lecId', deleteLecture)
app.delete('/api/lab/:labId', deleteLab)





app.listen(4004, () => console.log('here on port 4004'));