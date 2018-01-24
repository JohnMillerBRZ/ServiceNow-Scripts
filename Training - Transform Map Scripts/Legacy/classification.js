//notes
var input = source.u_notes.toString();

if ( input.search("HD") > 0 || input.search("SD") > 0 ) {
	answer = "Service Desk";
}
if ( input.search("SS") > 0 ) {
	answer = "Site Services";
}