
	// ************* DO NOT DELETE THIS ****************
	/*dbf.all(query, [], (err, rows) => {
		if (err){
			console.log(err)
		}
		rows.forEach((row) =>{
			console.log(row.id)
			count = count + 1
		})
		console.log("count is", count)
	}) */
	// if count == 0{}
function fill_Admin(admins, db){
    let query = `SELECT count(id) FROM users`;
    db.all(query, [], (err, results) => {
        if(err){
            console.log(err);
        }
        else if(results == ''){
            for(let row of admins){
                db.run(`INSERT INTO users(id, firstName, lastName, username, password, email, dob, administration)
                    VALUES(?,?,?,?,?,?,?)`, row, (err) => {
                if(err){
                    console.log(err);
                }
                });
            }
        }
    });
}

function fill_Food(foods, dbf){
	let query = `SELECT count(id) FROM food`
	dbf.all(query, [], (err, results) => {
		if(err){
			console.log(err)
		}
		else if(results == null){
			for(let row of foods){
				dbf.run(`INSERT INTO food(id, name, description, type) 
					VALUES(?,?,?,?)`, row, (err) => {
				  if(err){
					console.log(err);
					}
				});
			}
		}
	})
}


function fill_Clothing(clothes, dbc){
	let query = `SELECT count(id) FROM clothing`
	dbc.all(query, [], (err, results) => {
		if(err){
			console.log(err)
		}
		else if(results == null){
			for(let row of clothes){
				dbc.run(`INSERT INTO clothing(id, name, description, material, style, size) 
					VALUES(?,?,?,?,?,?)`, row, (err) => {
				  	if(err){
					console.log(err);
					}
				});
			}
		}
	})
}

function fill_Electronics(electronics, dbe){
	let query = `SELECT count(id) FROM electronic`
	dbe.all(query, [], (err, results) => {
		if(err){
			console.log(err)
		}
		else if(results == null){
			for(let row of electronics){
				dbe.run(`INSERT INTO electronic(id, name, price, description, brand, type) 
					VALUES(?,?,?,?,?,?)`, row, (err) => {
				  	if(err){
					console.log(err);
					}
				});
			}
		}
	})
}

module.exports = {
    fill_Clothing,
    fill_Electronics,
    fill_Food,
    fill_Admin
}
