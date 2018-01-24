//access type
var yes = "Yes";
var no = "No";

//change config & approver
if (source.u_change_confi_rover__yes_no_.toString() == yes) {
	answer = "Incident, Change, Config & APPR";
}
//change approver only
else if (source.u_change_appro__only__yes_no_.toString() == yes) {
	answer = "Change Approver Only";	
}
//change & config
else if (source.u_change_config__yes_no_.toString() == yes) {
	answer = "Incident, Change & Config";
}
//config only
else if (source.u_config_only.toString() == yes ) {
	answer = "Incident & Config";
}
//read only
else if (source.u_read_only__yes_no_.toString() == yes ) {
	answer = "Read Only";
}
//incident only
else {
	answer = "Incident Only";
}