// zip two linked lists together into one 
const LinkedList = require('./linkedList');

function zipLists(list1,list2){
    let current1=list1.head;                                                  
    let current2=list2.head;                                                  
    while(current1){
        if(current2){
            list1.insertAfter(current1.value,current2.value);
            current2=current2.next;
        }
        if(current1.next){
            current1=current1.next.next;
        }else{
            current1=current1.next;
        }
    }
    while(current2){
        list1.append(current2.value);
        current2=current2.next;
    }
       return list1;
}

module.exports = zipLists;

