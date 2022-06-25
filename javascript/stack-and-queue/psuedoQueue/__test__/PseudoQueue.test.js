'use strict';
const PseudoQueue = require('../psuedoQueue');


describe('Pseudo Queue TEST',()=>{
    it('Can successfully instantiate an empty queue',()=>{
        const newPseudoQueue = new PseudoQueue();
        expect(newPseudoQueue).toBeDefined();
        expect(newPseudoQueue.stack1.top).toBeNull();
        expect(newPseudoQueue.stack2.top).toBeNull();
    })

    it('Can successfully enqueue into a queue',()=>{
        const newPseudoQueue = new PseudoQueue();
        newPseudoQueue.enqueue('a');
        expect(newPseudoQueue.stack1.top.value).toEqual('a');
    })
    it('Can successfully enqueue multiple values into a queue',()=>{
        const newPseudoQueue = new PseudoQueue();
        newPseudoQueue.enqueue('a');
        newPseudoQueue.enqueue('b');
        newPseudoQueue.enqueue('c');
        expect(newPseudoQueue.stack1.top.value).toEqual('c');
        expect(newPseudoQueue.stack1.top.next.value).toBe('b');
        expect(newPseudoQueue.stack1.top.next.next.value).toBe('a');
    })
    it('Can successfully dequeue out of a queue the expected value',()=>{
        const newPseudoQueue = new PseudoQueue();
        newPseudoQueue.enqueue('a');
        newPseudoQueue.enqueue('b');
        newPseudoQueue.enqueue('c');
        newPseudoQueue.dequeue();
        newPseudoQueue.dequeue();
        newPseudoQueue.dequeue();
        expect(newPseudoQueue.stack2.top.value).toEqual('a');
        expect(newPseudoQueue.stack1.top).toBeNull();
    })
     
    it('Calling dequeue on empty queue raises exception',()=>{
        const newPseudoQueue = new PseudoQueue();
        expect(newPseudoQueue.dequeue()).toBe("Exception");
    })
})