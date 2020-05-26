function generate() {
	var firstname = ["Opemipo", "Jean", "Ghost", "Doe", "Kelvin", "Marvin", "Frank", "Tanmay", "Lindsay", "Libby"];
	var lastname = ["Disu", "Georges-Perrin", "Mills", "Miles", "Kent", "Ogah", "Edward", "Bakshi", "Taub", "Sancho"];
	var rand_first = Math.floor(Math.random()*firstname.length);
	var rand_last = Math.floor(Math.random()*lastname.length);
	document.getElementById('result').innerHTML = "<h2>The random name is:</h2><div class='alert alert-success'><h2>"+firstname[rand_first]+" "+lastname[rand_last]+"</h2></div>";
//Was working fine...
}