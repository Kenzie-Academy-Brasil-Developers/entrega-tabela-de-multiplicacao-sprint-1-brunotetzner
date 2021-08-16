
function array(n){                      
    let array = []
    

    
    for(let j = 0; j<=n; j++){
        marray = []

        for(let i = 0; i<=n; i++){
             marray.push(j*i)
            
        }
        array.push(marray)
        
    }
    return console.table(array)
    
}
console.table(array(10))

