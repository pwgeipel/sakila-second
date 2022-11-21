import mysql from "mysql2"
import inquirer from "inquirer"

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpwg1981',
    database: 'sakila'
})

const init = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['Search actors', 'Add an actor', 'Update an actor', 'Exit']
        }
    ])



    console.log(answers)
    if (answers.action === 'Search actors') {
        searchActors()
    } else if (answers.action === "Add an actor") {
        addActor() 
    } else if (answers.action == "Update an actor") {
        updateActor()
    } else { 
        process.exit(0)
    }
}
init()




// connection.query(`UPDATE actor SET last_name = "JJJJJJ" WHERE actor_id = 193`, function(error, results) {
//     if (error) {
//         throw new Error(error)
//     }


// })