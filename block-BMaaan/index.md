writeCode

Q1. Design database model using mongoose to replicate data structure of `STACK OVERFLOW` and add appropriate indexes to support the queries.

Stack Overflow consists of

- Users
- Questions
- Answers
- REPLY'S on Question/Answers
- Up/Down vote on Questions/Answers/Replies
- Tags on Questions
- Views on Questions
- Reputation for each user based on questions asked, answers given, upvotes

Design models for storing these data and associate them accordingly to fetch related data together.

Use indexes to support queries related to questions, tags etc..

Q2. Use aggregation framework to

- Get array of all the tags used in the questions
```js
    db.questions.distinct(tags);
```

- Get total questions count
```js
db.questions.aggregate([
    $group: {
        _id: null,
        $count: { $sum: 1 }
    }
])
```
- Total answers count overall and question specific as well
```js
db.answers.aggregate([
    $group: {
        _id: null,
        $count: { $sum: 1 }
    }
]);
db.answers.aggregate([
    $group: {
        _id: '$questionId',
        $count: { $sum: 1 }
    }
])

```

- Count total reputation of a user
```js
db.users.aggregate([
    $group: {
        _id: '$email',
        total_reputation: { $sum: '$reputaion' }
    }
])
```
- total views on a particular day
```js
  db.questions.aggregate([
    $group: {
        _id: '$email',
        total_views: { $sum: '$viewsByDays' }
    }
])  
```

- Count total answer by a particular user
```js
db.users.aggregate([
    $group: {
        _id: '$email',
    { $count: {'$answers': {$sum: 1 } } }
    }
])
```