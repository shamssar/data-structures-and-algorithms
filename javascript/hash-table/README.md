# Hashtables
 Hash table is one of the most important data structures in computing. A hash table (hash map) is a data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. In JavaScript we don’t have any built-in hash table.

## Challenge:

Implement a Hashtable Class with the following methods:

1.  set
* Arguments: key, value
* Returns: nothing 

  This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.
2. get

* Arguments: key

* Returns: Value associated with that key in the table

3.  contains
* Arguments: key

* Returns: Boolean, indicating if the key exists in the table already.
4. keys

* Returns: Collection of keys

5. hash

* Arguments: key

* Returns: Index in the collection for that key

## Approach & Efficiency     
* set: space O(1)/time O(1)
* hash: space O(1)/time O(1)
* contains: space O(1)/time O(1) - time O(n) if there is a collision

* get: space O(1)/time O(1) - time O(n) if there is a collision   