# Hashtables
Hashtables are a data structure that utilize key value pairs, this means every Node or Bucket has both a key, and a value.

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash.
## Challenge:

Implement a Hashtable Class with the following methods: set, get, contains, keys, hash.

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
Time Complexity: O(1) 
Space Complexity: O(1)