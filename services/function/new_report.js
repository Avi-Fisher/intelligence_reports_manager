import 


function create_report(id, weapons, text, terroristName = "Muhammad") {

    const report = {
        id: id,
        terroristName: terroristName,
        weapons: weapons,
        text: text
    }

    return report
}




