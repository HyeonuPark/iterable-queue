import {expect} from 'chai'

import {Queue as IQ} from '../src/index'

function isIterable (obj) {
  if (
    typeof Symbol !== 'function' ||
    !Symbol.iterator ||
    typeof obj[Symbol.iterator] !== 'function' ||
    typeof obj[Symbol.iterator]().next !== 'function'
  ) return false
  return true
}

describe('IterableQueue', () => {
  it('should return iterable object', () => {
    expect(isIterable(IQ())).to.be.true
  })

  it('should be iterable like given iterable object', () => {
    expect([...IQ([4, 5, 6])]).to.deep.equal([4, 5, 6])
  })

  it('should be possible to append internal queue', () => {
    const queue = IQ([4, 5])
    queue.add(6)
    queue.push(7)
    expect([...queue]).to.deep.equal([4, 5, 6, 7])
  })

  it('should be possible to append queue dynamically', () => {
    const queue = IQ([4, 5, 6])
    const output = []
    for (let elem of queue) {
      output.push(elem)
      if (elem > 3) {
        queue.add(3)
      }
    }
    expect(output).to.deep.equal([4, 5, 6, 3, 3, 3])
  })

  describe('#add and #push', () => {
    it('should be chainable',  () => {
      const array = [...IQ().add(4).add(5).push(6).push(7)]
      expect(array).to.deep.equal([4, 5, 6, 7])
    })
  })
})
