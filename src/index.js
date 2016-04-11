function* queueBuilder (origin, queue) {
  yield* origin
  while (queue.length > 0) {
    yield queue.shift()
  }
}

export function Queue (iterable) {
  const queue = []
  const result = queueBuilder(iterable || [], queue)
  result.add = result.push = function add (data) {
    queue.push(data)
    return result
  }
  return result
}
