import express from 'express';
import cors from 'cors';

import checkFIOParam from './functions';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        hello: 'JS World',
    });
});

app.get('/task2a', (req, res) => {
    const sum = (+req.query.a || 0) + (+req.query.b || 0);
    res.send(sum.toString());
});

app.get('/task2b', (req, res) => {
    var result = 'Invalid fullname';
    if (req.query.fullname) {
        var fullname = req.query.fullname.trim().replace(/\s+/g, ' ').split(' ');
        console.log(req.query.fullname);
        const count = fullname.length;
        if (count > 0 && count < 4) {
            var family, name, surname;
            family = fullname.pop();
            var noError = checkFIOParam(family);
            if (count >= 2) {
                name = fullname.shift();
                noError = noError && checkFIOParam(name);
            }
            if (count == 3) {
                surname = fullname.shift();
                noError = noError && checkFIOParam(surname);
            }
            if (noError) {
                result = family + (name ? ' ' + name.charAt(0).toUpperCase() + '.' || '' : '') +
                    (surname ? ' ' + surname.charAt(0).toUpperCase() + '.' || '' : '');
            }
        }
    }
    res.send(result);
});

app.listen(3000, () => {
    console.log('Your app listening on port 3000!');
});