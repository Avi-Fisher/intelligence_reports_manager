import { update_db } from "../db_function/save_to_db.js"


function chack_id(input_id){

  if (typeof input_id !== "string" && typeof input_id !== "number" || input_id === ""){

    throw "only_number"
  }


}




export function create_report(id, weapons, text, terroristName = "Muhammad") {

    chack_id(id)   
    
    const report = {
        id: id,
        terroristName: terroristName,
        weapons: weapons,
        text: text
    }

    update_db(report)
}




