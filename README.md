iterable-queue
===============

[![Build Status](https://travis-ci.org/HyeonuPark/iterable-queue.svg?branch=master)](https://travis-ci.org/HyeonuPark/iterable-queue)

Simple task queue with ES6 iterable interface

# Usage

```js
import {Queue} from 'iterable-queue'

const queue = Queue(['task1', 'task2'])

for (let task of queue) {
  const result = processTask(task)
  if (result.fail) {
    queue.add(task)
  }
}
```
