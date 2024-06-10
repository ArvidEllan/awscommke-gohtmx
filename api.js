import * as AWS from 'aws-sdk';
import * as express from 'express';

const app = express();

const dynamodb = {
  region: 'your-region',
  credentials: {
    accessKeyId: 'your-access-key-id',
    secretAccessKey: 'your-secret-access-key',
  },
};

const dynamodbDocClient = new AWS.DynamoDB.DocumentClient(dynamodb);

app.get('/past-meetups', (req, res) => {
  const params = {
    TableName: 'past-meetups',
  };
  dynamodbDocClient.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error fetching past meetups' });
    } else {
      res.send(data.Items);
    }
  });
});

app.get('/future-meetups', (req, res) => {
  const params = {
    TableName: 'future-meetups',
  };
  dynamodbDocClient.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error fetching future meetups' });
    } else {
      res.send(data.Items);
    }
  });
});

app.get('/blogs', (req, res) => {
  const params = {
    TableName: 'blogs',
  };
  dynamodbDocClient.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error fetching blogs' });
    } else {
      res.send(data.Items);
    }
  });
});

app.get('/certifications', (req, res) => {
  const params = {
    TableName: 'certifications',
  };
  dynamodbDocClient.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error fetching certifications' });
    } else {
      res.send(data.Items);
    }
  });
});

app.post('/buy-tickets', (req, res) => {
  const params = {
    TableName: 'tickets',
    Item: {
      // add ticket details here
    },
  };
  dynamodbDocClient.put(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error buying tickets' });
    } else {
      res.send({ message: 'Ticket purchased successfully' });
    }
  });
});

app.get('/committee-members', (req, res) => {
  const params = {
    TableName: 'committee-members',
  };
  dynamodbDocClient.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error fetching committee members' });
    } else {
      res.send(data.Items);
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});