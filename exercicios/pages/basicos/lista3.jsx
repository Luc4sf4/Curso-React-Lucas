
function gerarlista (final = 10){
  
    const listaa = [] 
    for (let i = 1; i <= 10; i++){

        listaa.push (<span>{i}</span>)

    } 
            return listaa

}

export default function lista() {

return (
   
       <div>

     {gerarlista(10)}

     </div>
    
)

}