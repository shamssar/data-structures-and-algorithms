
'use strict';
const Queue = require('../queue/lib/queue');


describe('QUEUE TEST', () => {
    it('Can successfully enqueue into a queue', () => {
        const newQueue = new Queue();
        newQueue.enqueue('a');
        expect(newQueue.front.value).toEqual('a');
    })
    it('Can successfully enqueue multiple values into a queue', () => {
        const newQueue = new Queue();
        newQueue.enqueue("a");
        newQueue.enqueue("b");
        newQueue.enqueue("c");
        expect(newQueue.front.value).toEqual("a");
        expect(newQueue.front.next.value).toEqual("b");
        expect(newQueue.front.next.next.value).toEqual("c");
    })

    test('Can successfully dequeue out of a queue the expected value', () => {
        const newQueue = new Queue();
        newQueue.enqueue("a");
        newQueue.enqueue("b");
        newQueue.enqueue("c");
        let temp = newQueue.dequeue();
        expect(temp).toEqual("a");
    })

    test('Can successfully peek into a queue, seeing the expected value', () => {

        const newQueue = new Queue();
        newQueue.enqueue("a");
        newQueue.enqueue("b");
        newQueue.enqueue("c");
        expect(newQueue.peek()).toEqual("a");
    })
test ('Can successfully empty a queue after multiple dequeues',()=>{
    const newQueue = new Queue();
        newQueue.enqueue("a");
        newQueue.enqueue("b");
        newQueue.enqueue("c");
        newQueue.dequeue();
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.isEmpty()).toEqual(true);
})

        test ('Can successfully instantiate an empty queue',()=>{
            const newQueue = new Queue();
            expect(newQueue).toBeDefined();
            expect(newQueue.front).toBeNull();
        })


test('Calling dequeue or peek on empty queue raises exception',()=>{
    const newQueue = new Queue();
    expect(()=> newQueue.peek()).toBeNull
    expect(()=> newQueue.dequeue()).toBeNull

})
})









