// Question 2: Write a javascript function 
// that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, 
// when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

const findMyArgs = (a,b)=>{
    let c = [];//initiate an empty list

    //for every num in the array a, make a num pair of every other num...
    //....sort each num pair and add them to the empty array c
    a.forEach(e => {a.forEach(e2 => c.push([e, e2].sort()))})

    //filter the array c to remove any pair that does not add up to b
    s = c.filter((e)=>{return (e[0]+e[1]) === b})

    let n = {} //initiate an empty object

    //add each item into the object n as a key and value....
    //...this allows duplicates overwrite
    s.forEach(e=> n[(JSON.stringify(e))] = e)

    return Object.values(n)//return the values of the object n in an array
}

findMyArgs([1,2,2,3,5],4)
