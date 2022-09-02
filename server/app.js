require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bcrypt = require('bcrypt');
const {
  User, Category, Question,
} = require('./db/models');

const app = express();
const PORT = 3005;

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(cors({
  origin: true,
  credentials: true,
}));

const sessionConfig = {
  name: 'mega-cookie',
  secret: process.env.SECRET || 'thisisnotsecure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

app.get('/category', async (req, res) => {
  try {
    const result = await Category.findAll();
    if (result) {
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const result = await User.findAll();
    if (result) {
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.get('/game/questions', async (req, res) => {
  try {
    const { category } = req.body;

    const result = await Question.findAll({ categ_id: category });
    if (result) {
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});
app.post('/signUp', async (req, res) => {
  const { name, password, email } = req.body;
  if (name && email && password) {
    try {
      const [user] = await User.findOrCreate({
        where: {
          name, email, password: await bcrypt.hash(password, 10),
        },
      });
      req.session.userSession = { id: user.id, name: user.name, email: user.email };
      res.json(req.session.userSession);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'ошибка при регистрации' });
    }
  }
});

app.get('/logOut', async (req, res) => {
  req.session.destroy();
  res.clearCookie('mega-cookie');
  res.sendStatus(200);
});

app.listen(PORT, () => { console.log('app working on port ', PORT); });
