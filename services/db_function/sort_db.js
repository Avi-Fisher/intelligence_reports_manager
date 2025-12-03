import db from "../../database/db";


export function sort_by_field(field){

   let sort_list = db.sort(function(a, b){return a.field - b.field});

   return sort_list
}