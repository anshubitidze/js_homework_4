// დავალება 1
document.write("დავალება 1" + "<br>")
let array =[1, 2, 3, 4, 5];
array.splice(3, "a", "b", "c");
document.write(array + "<br>");

// დავალება 2
document.write("დავალება 2" + "<br>")
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(num =>{
    sum += num;
   
})
document.write(sum + "<br>")

// დავალება 3
document.write("დავალება 3 / console" + "<br>")
for( i =100; i> 0; --i){
    console.log(i);
}

// დავალება 4
document.write("დავალება 4" + "<br>")
let array4 =[2,15,10,24];
array4.splice(2, 1);
document.write(array4 + "<br>");

// დავალება 5
document.write("დავალება 5" + "<br>")
let array5 = [12,25, 3, 6, 8, 14, 7, 23];
let new_array5 = array5.map((element) =>{
    return element /3;
})
document.write(new_array5.join("<br>"))
document.write("<br>");

// დავალება 6
document.write("დავალება 6" + "<br>")
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let result6 = languages.filter((language) =>{
    if(language.length >3) {
        return language;
    }
    return undefined
})
document.write(result6)
document.write( "<br>")
// დავალება 7
document.write("დავალება 7" + "<br>")
let words = ['madrid', 'rome', 'milan', 'berlin'];
let result7 = words.filter((word) =>{
    if(word.includes("m") || word.includes("n") ){
        return word;
    }
})
document.write(result7);
document.write( "<br>")

// დავალება 8
document.write("დავალება 8" + "<br>")
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let arr4 = arr1.concat(arr2, arr3)
document.write(arr4)
document.write("<br>")

// დავალება 9
document.write("დავალება 9" + "<br>")
let arr5 = [-1, -2, -3, 4];
let result9 = arr5.some((n) =>{
    if(n>0){
        return n;
    }
    
})
document.write(result9)

