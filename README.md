## Google Challenge: Peculiar Balance
The `answer` function solves a Google programming question in which
a hypothetical scale must be balanced using weights with masses that 
are only powers of 3. A starting weight (our input) will begin on the left
side of the scale.

The first element of the output list corresponds to the 1-unit weight, the
second element to the 3-unit weight, and so on. Each string is one of: 

"L" : put weight on left-hand side 
"R" : put weight on right-hand side 
"-" : do not use weight

## Usage example
* `answer(546); // ["-", "L", "R", "L", "R", "L", "R"]`
* `answer(8); // ["L", "-", "R"]`
* `answer(34534); // ["R", "-", "-", "R", "-", "R", "L", "R", "L", "L", "R"]`

A write-up of the solution is [here][1].

[1]: http://www.rezaparang.com/entries/6-foobar-with-google-peculiar-balance