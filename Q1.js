const roomCleaner = (arr) => {
    const sorted = arr.sort((a,b)=>a-b); //sort the array, using a custom sorter function
    const set = new Set(sorted) //create a set of unique elements in the array for comparison to filter
    let collect = []; //create an empty array to receive filtered elements

    //create a nested function that:
    // - takes an arg(element) (from the forEach() method)
    // - passes it into another function(arrElement) that takes an arg(element2) from the filter() method
    //and compares if both elements are same
    // - uses the arrElement function to filter the sorted list using the filter() method...
    //... pushed the resurt of each sorted.filter() call into the global 'collect' array  
    function filter2(element){  
        //create arrElement Function    
        function arrElement(element2){
            return element2 === element
        }
        //push the sorted.filter() calls to the collect list
        //expand lists of length === 1 using ternary expression
        const filt = sorted.filter(arrElement, element)
        collect.push(filt.length>1? filt:filt[0]);//ternary expression
        // console.log(collect)       
        return collect
    }

    //make the forEach call on filter2 function
    set.forEach(filter2);
    return collect
}

let n = [2, 3, 5, 2, 2, 4, 1, 1, 'nn', 9, 'nn', 'br', '5', 6, '5'];

roomCleaner(n)