# Raindrops

### The Challenge:

Write a function that takes as its input a number (n) and converts it to a string, the contents of which depend on the numbers factors

>- if the number has a factor of 3, output >'Pling'
>- if the number has a factor of 5, output >'Plang'
>- if the number has a factor of 7, output >'Plong'
>- if the number does not have any of the above as a factor simply return the numbers digits
>
>Examples:
>- 28's factors are 1, 2, 4, 7, 14 and 28: >this would be a simple 'Plong'
>- 30's factors are 1, 2, 3, 5, 6, 10, 15, >30: this would be a 'PlingPlang'
>- 34 has four factors: 1, 2, 17, and 34: >this would be '34'

### My Solution:

This problem is a reiteration of fizzbuzz. I am writing a general solution that could be used for raindrops, fizzbuzz or something else. Of course, there are trade-offs for any such decision in code.

>##### Pros:
>
>- Generality makes the solution flexible
>- The code will be quickly scalable
>
>##### Cons:
>
>- Less readability

### Examples:

To instantiate the raindrops function:

```javascript

RAINDROPS = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
}

let raindrops = ModulusMap(RAINDROPS)

```

To instantiate the fizzbuzz function (if you prefer the classics):


```javascript

FIZZBUZZ = {
  3: 'fizz',
  5: 'buzz'
}

let fizzbuzz = ModulusMap(FIZZBUZZ)

```

### Test Suite:

Some very simple testing done using Mocha.

![Test suite](https://raw.githubusercontent.com/rewitt94/Raindrops/master/screenshots/testsuite.png)

### Conclusions:

It's a shame that 3 doesn't divide 7 and hence PlingPlangPlong is impossible, except for 0. Speak of the devil, I'm uncertain whether 0 and negative numbers are edge cases need special treatment. I think I'll let Javascript decide what is or isn't a factor in this situation.

> Afterall, Javascript rocks at Maths.
>
> '3' + 3 / 2 = '31.5'
