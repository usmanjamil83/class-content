var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

function search(list, val) {
	for (i = 0; i <= stuff.length; i++) { 
		if (stuff[i] === random_value){
			alert(i);
		}else{
			alert("No match");
		}
	}	
}
search(stuff, random_value);