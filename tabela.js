//Fazer uma tabela com linhas e colunas com valor n.
//Criar arrays com loops
//somar em um unico array



function array(n){                      
    let array = []
    

    
    for(let j = 1; j<=n; j++){
        marray = []

        for(let i = 1; i<=n; i++){
             marray.push(j*i)
            
        }
        array.push(marray)
        
    }
    return console.table(array)
    
}
console.table(array(10))

