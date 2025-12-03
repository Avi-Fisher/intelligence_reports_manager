import db from "../../database/db.js";


export function update_db(item){

    if (chack_uniqe(item.id)){

        db.push(item)
    }
    else{
        console.log("This id exsit in db");
    }
      
      
    
}



function chack_uniqe(check_id){

    let uniqe = true 

    db.filter(function(x){

        if (x.id == check_id){
            uniqe = false
        }
    })

    return uniqe
}