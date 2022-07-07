'use strict';
const Queue=require("../stack-and-queue/queue/lib/queue");
class BinaryTree{

    constructor(root=null){
        this.root=root;
    }

    //root,left,right
    preOrder(){
        let result=[];
        let traverse=(node)=>{
            result.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    //left,root,right
    inOrder(){
        let result=[];
        let traverse=(node)=>{
            if(node.left) traverse(node.left);
            result.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    //left,right,root
    postOrder(){
        let result=[];
        let traverse=(node)=>{
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    findMax(root){
        if (root==null) return "Empty tree";
        else {
            let max= root.value;
            let right=this.findMax(root.right);
            let left=this.findMax(root.left);
            if(right>max) max=right;
            if(left>max) max=left;
            return max;
        }
    
    }
        breadthFirst(tree){
            let queue=new Queue();
            let result=[];
            queue.enqueue(tree.root);
            while(queue.front!==null && queue.rear!==null){
                let dequeued=queue.dequeue();
                result.push(dequeued.value);
                if(dequeued.left!==null) queue.enqueue(dequeued.left);
                if(dequeued.right!==null) queue.enqueue(dequeued.right);
            }
            return result;
        }
    }
    
    module.exports=BinaryTree;