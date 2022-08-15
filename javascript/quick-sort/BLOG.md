# Quick Sort Blog
## The Psuedo Code
```
## Quick Sort
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

```


The psudeo code above drafts a function called quickSort(), that takes in an array of integers, the left index of that array, and the right index of that array as agruments and sorts them in place (lowest value to highest value). Lets cover the basics here and then walk through each step as it sorts the example array [8,4,23,42,16,15]!

* if left < right, if the left index is less than the right index perform the following action
* DEFINE position <-- Partition(arr, left, right), initialize variable position as the result of the function partition(arr, left, right).
* QuickSort(arr, left, position - 1), recursively call  quicksort on (arr, left, position - 1) decrementing the position variable in the right
* QuickSort(arr, position + 1, right), recursively call quicksort on (arr, position + 1, right) incrementing the position variable in the left

## Partition
```
ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1
```     
The pseudo code above outlines a helper function called partition(). Lets breakdown the parts.

 * DEFINE pivot <-- arr[right], intialize a variable called pivot set equal to the value in the array at the right index value.
* DEFINE low <-- left - 1, intialize a variable called low set equal to the left index minus 1.
* for i <- left to right do, loop for i where i starts at the left index value and loops until it is equal to the right index value.
* if arr[i] <= pivot, evaluate if the value in the array at index i is less than or equal to the pivot value.
* low++, increment the value of low by 1.
* Swap(arr, i, low), call the swap() helper function with the arr, i, and low.
* Swap(arr, right, low + 1), call the swap() helper function with the arr, right, and low + 1.
* return low + 1, return the value of low + 1
## Swap
```
ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```
The pseudo code above outlines a helper function called swap().
Lets breakdown the parts.

* DEFINE temp;, intialize a variable called temp with no value assigned.
* temp <-- arr[i], set temp equal to the value in array at index i.
* arr[i] <-- arr[low], set the value in array at index i to the value in the array at index low
* arr[low] <-- temp, set the value in the array at index low to the temp value.

## Step 1:
quick sort is called on an input array, that arrays 0 index value (left), and that arrays max index value (array.length - 1)(right)
the left and right values are then compaired to insure the left index is lower than the right index
partition is then called to determine the value of the position variable, passing in the array, left, and right values
partition then intiates a pivot variable equal the array value at the right index value and intiates a low variable set to left - 1.
we then enter into a for loop where i is initalized equal to left, and this will lopp as long as i is less than the right value
in the for loop an evaluation is made to determine if the current array value arr[i] is less than the pivot value, if so execute the following code, if not, and pivot is less than the current value, do nothing, increment i and loop again
in this case the current value is less than pivot, so low is incremented by 1 and swap is called with the array, i, and low as arguments.
since i and low are the same value, no numbers are swapped and the array is unaffected
## Step 2:
i is incremented and is now equal to 1, and 1 is less than 5, so the for loop continues
the current array value arr[i] is less than the pivot value, so low is incremented by 1 (now value of 1) and swap is called with the array, i, and low as arguments.
since i and low are the same value, no numbers are swapped and the array is unaffected
## Step 3:
i is incremented and is now equal to 2, and 2 is less than 5, so the for loop continues
the current array value arr[i] is NOT less than the pivot value, so low remains at a value of 1.
swap is not called
## Step 4:
i is incremented and is now equal to 3, and 3 is less than 5, so the for loop continues
the current array value arr[i] is NOT less than the pivot value, so low remains at a value of 1.
swap is not called
## Step 5:
i is incremented and is now equal to 4, and 4 is less than 5, so the for loop continues
the current array value arr[i] is NOT less than the pivot value, so low remains at a value of 1.
swap is not called
## Step 6:
i is incremented and is now equal to 5, and 5 is NOT less than 5, so the for loop ends
swap is now called with the array, right, and low + 1 as arguements
temp variable is assigned to the value in array at index right
value in array at index right is assigned to the value in array at index low
value in array at index low is assigned to the value in the temp variable
basically the low and the right values are swapped in the array.
partition function returns low + 1 which is 2.
## Step 7+:
quickSort() is recursively called on the remaining indexes to the left of the position variable as well as the remaining indexes to the right of the position until the whole array is sorted.