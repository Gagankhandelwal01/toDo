let input = prompt("What would you like to do?")
const toDo = ["Collect Chicken Eggs", "Feed Dog"];
while(input !== "quit" && toDo !== "q"){
	
	if (input == "list") {
		console.log("*************************")
		for(let i = 0; i < toDo.length; i++){
			console.log(`${i} : ${toDo[i]}`)
		}
		console.log("*************************")
	}else if(input === "new"){
		const newToDo= prompt("OK, What is the new to do?")
		toDo.push(newToDo);
		console.log(`${newToDo} added to the list`)
	}else if(input === "delete"){
		const index = prompt("Ok, Enter ann index to delete");
		const deleted = toDo.splice(index, 1);
		console.log(`Ok, deleted ${deleted}`)
	}
	input = prompt("What would you like to do?")
}
console.log("Ok, You Quit The App")