'use strict';
const BinaryTree = require("./BinaryTree");
const Node = require("./node ");
class BinarySearchTree extends BinaryTree{

    add(value,root=null){
        if (root == null){
            this.root = new Node(value);
            return;
        }

        if(root.value>value){
            if(root.left==null){
                root.left=new Node(value);
                return;
            }
            else{
                this.add(value,root.left);
            }
        }

        if(root.value<value){
            if(root.right==null){
                root.right=new Node(value);
                return;
            }
            else{
                this.add(value,root.right);
            }
        }
    }

    contains(value,root){
        if(root==null) return false;
        try{
            if(root.value==value) return true;
            if(value<root.value) return this.contains(value,root.left);
            if(value>root.value) return this.contains(value,root.right);
        } catch(e){
            return false;
        }
    }
}

module.exports=BinarySearchTree;