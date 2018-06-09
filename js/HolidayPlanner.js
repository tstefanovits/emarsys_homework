arr1 = ['u',['v','w'],['w','z'],['x','u'],['y','z'],'z'];
arr2 = ['x'];
arr3 = ['y',['x','z'],'z'];


function Calculator(arr){

    arr.map(el => {if (Array.isArray(el)){
        if (arr.indexOf(el[1]) === -1){
            arr.push(el[1]);
        }
        if (arr.indexOf(el[0]) === -1){
            arr.push(el[0])
        }
    }})
    let sol1 = arr.filter(el => !Array.isArray(el))
    let sol2 = sol1.join("")
    console.log(sol2)

}
Calculator(arr3)