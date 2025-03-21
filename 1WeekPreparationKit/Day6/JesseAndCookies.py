#!/bin/python3

import math
import os
import random
import re
import sys
import heapq

#
# Complete the 'cookies' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY A
#

def cookies(k, A):
    # Step 1: Create a min-heap from the input list.
    heapq.heapify(A)
    
    # Step 2: Initialize the number of operations.
    operations = 0
    
    # Step 3: While there are at least two cookies in the heap,
    # keep combining the least sweet cookies.
    while len(A) > 1:
        # Step 4: Get the two least sweet cookies
        least_sweet = heapq.heappop(A)
        second_least_sweet = heapq.heappop(A)
        
        # Step 5: If both cookies' sweetness are at least k, no more combining is needed.
        if least_sweet >= k:
            return operations
        
        # Step 6: Combine the two cookies to create a new cookie
        new_cookie = least_sweet + 2 * second_least_sweet
        heapq.heappush(A, new_cookie)
        
        # Step 7: Increment the operation count.
        operations += 1
    
    # If the loop exits, check if the sweetness of all cookies is at least k.
    if A[0] >= k:
        return operations
    else:
        return -1

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    k = int(first_multiple_input[1])

    A = list(map(int, input().rstrip().split()))

    result = cookies(k, A)

    fptr.write(str(result) + '\n')

    fptr.close()
