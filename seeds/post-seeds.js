const { Post } = require('../models');

const postData = [
    {
        title: 'Coding',
        body: 'Asperiores saepe tempora ea veniam atque placeat consequuntur quidem tempore autem sit repellendus eos quisquam facilis alias velit iste, perferendis quaerat porro.',
        userId: 1
    },
    {
        title: 'MERN',
        body: 'Deserunt cupiditate quas, sed vitae dicta molestias, adipisci velit odit dolor deleniti obcaecati necessitatibus incidunt! Nemo, eaque eos reiciendis nobis illo repudiandae.',
        userId: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);


module.exports = seedPosts;
