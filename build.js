const AWS = require('aws-sdk');
const admin = require('firebase-admin');
const serviceAccount = require('./firebase.json');

const config = new AWS.Config({
    credentials: new AWS.Credentials({
        accessKeyId: process.env['API_AWS_ACCESS_KEY'],
        secretAccessKey: process.env['API_AWS_SECRET_KEY'],
    })
});

const ecs = new AWS.ECS(config);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const buildId = process.env['BUILD_ID'];

(async () => {
    const db = admin.firestore();
    const doc = await db.collection('builds').doc(buildId).get();
    const build = doc.data();

    const [, task] = build.taskId.split('/');

    // create page source by build data

    // build app

    // upload app to s3

    // flag build as done on firebase

    // stop container
    await ecs.stopTask({ task }).promise();
})();


