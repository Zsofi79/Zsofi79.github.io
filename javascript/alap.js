/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navigaciosSavElemekMegjelenitese() {
	var x = document.getElementById("navSav");
	if (x.className == "felso-navigacios-sav") {
		x.className += " nyitott";
	} else {
		x.className = "felso-navigacios-sav";
	}
}