//Classification
var input = source.u_notes.toString();

if ( input.search("HD") > 0 || input.search("SD") > 0 ) {
	answer = "Service Desk";
}
if ( input.search("SS") > 0 ) {
	answer = "Site Services";
}


//ITSM
var yes = "Y";

if (source.u_it_service_m_al_bt_1555_001.toString() == yes) {
	answer = true;
}

//ITSM 2
var yes = "Y";

if (source.u_itsm_module__al_bt_1556_001.toString() == yes || source.u_itsm_module___1556_001__ca_.toString() == yes) {
	answer = true;
}

//Incident SOP
var yes = "Y";

if (source.u_incident_sop__zbtso_0010.toString() == yes) {
	answer = true;
}

//Incident Module 1
var yes = "Y";

if (source.u_incident_mod_al_bt_1557_001.toString() == yes) {
	answer = true;
}

//Incident Module 2
var yes = "Y";

if (source.u_incident_mod_al_bt_1558_001.toString() == yes) {
	answer = true;
}

//Incident Module 3
var yes = "Y";

if (source.u_incident_mod_al_bt_1559_001.toString() == yes) {
	answer = true;
}

//Incident 4
var yes = "Y";

if (source.u_incident_mod_al_bt_1560_001.toString() == yes) {
	answer = true;
}

//Change SOP
var yes = "Y";

if (source.u_change_sop__zbtso_0007.toString() == yes || source.u_change_sop__zbtso_0007__ap_.toString() == yes  || source.u_change_sop__zbtso_0007__bi_.toString() == yes) {
	answer = true;
}

//Change 1
var yes = "Y";

if (source.u_change_modul_1561_001___as_.toString() == yes || source.u_change_modul_1561_001___bl_.toString() == yes || source.u_change_modul_al_bt_1561_001.toString() == yes) {
	answer = true;
}

//Change 2
var yes = "Y";

if (source.u_change_modul_al_bt_1562_001.toString() == yes || source.u_change_modul__1562_001__at_.toString() == yes) {
	answer = true;
}

//Change 3
var yes = "Y";

if (source.u_change_modul_al_bt_1563_001.toString() == yes || source.u_change_modul__1563_001__au_.toString() == yes) {
	answer = true;
}

//Change 4
var yes = "Y";

if (source.u_change_modul__1564_001__bn_.toString() == yes || source.u_change_modul_al_bt_1564_001.toString() == yes || source.u_change_modul__1564_001__av_.toString() == yes) {
	answer = true;
}

//Change 5
var yes = "Y";

if (source.u_change_modul_al_bt_1565_001.toString() == yes || source.u_change_modul__1565_001__aw_.toString() == yes || source.u_change_modul__1565_001__bo_.toString() == yes) {
	answer = true;
}

//Change 6
var yes = "Y";

if (source.u_change_modul__1566_001__bp_.toString() == yes || source.u_change_modul__1566_001__ax_.toString() == yes || source.u_change_modul_al_bt_1566_001.toString() == yes) {
	answer = true;
}

//Config SOP
var yes = "Y";

if (source.u_config_sop__zbtso_0016.toString() == yes || source.u_config_sop__zbtso_0016__ar_.toString() == yes || source.u_config_sop__zbtso_0016__bk_.toString() == yes || source.u_config_sop__zbtso_0016__cf_.toString() == yes) {
	answer = true;
}

//Config 1
var yes = "Y";

if (source.u_config_modul__1567_001__cg_.toString() == yes || source.u_config_modul__1567_001__ay_.toString() == yes || source.u_config_modul__1567_001__bm_.toString() == yes || source.u_config_modul_al_bt_1567_001.toString() == yes) {
	answer = true;
}

//Config 2
var yes = "Y";

if (source.u_config_modul__1568_001__ch_.toString() == yes || source.u_config_modul__1568_001__az_.toString() == yes || source.u_config_modul_al_bt_1568_001.toString() == yes) {
	answer = true;
}

//Config 3
var yes = "Y";

if (source.u_config_modul__1569_001__ba_.toString() == yes || source.u_config_modul__1569_001__ci_.toString() == yes || source.u_config_modul_al_bt_1569_001.toString() == yes) {
	answer = true;
}

//Config 4
var yes = "Y";

if (source.u_config_modul__1570_001__bb_.toString() == yes || source.u_config_modul__1570_001__cj_.toString() == yes || source.u_config_modul_al_bt_1570_001.toString() == yes) {
	answer = true;
}

//Config 5
var yes = "Y";

if (source.u_config_modul_al_bt_1571_001.toString() == yes || source.u_config_modul__1571_001__bc_.toString() == yes || source.u_config_modul__1571_001__ck_.toString() == yes) {
	answer = true;
}

//Config 6
var yes = "Y";

if (source.u_config_modul_al_bt_1572_001.toString() == yes || source.u_config_modul_1572_001___bd_.toString() == yes || source.u_config_modul_1572_001___cl_.toString() == yes || source.u_config_modul_1572_001___bq_.toString() == yes) {
	answer = true;
}

//exception
var exception = source.u_license_exception.toString();

if (exception.length > 0) {
	answer = true;
}

//Disabled/revoked, uses disabled date to set the flag
var disabled = source.u_diabled_sn_account_date.toString();

if ( disabled.length > 0 ) {
	answer = true;
}


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

