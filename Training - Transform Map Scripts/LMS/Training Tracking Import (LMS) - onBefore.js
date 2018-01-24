(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {
	
	if (action == 'insert') {
		ignore = true;
	}
	
	var input = source.u_ï___item_id_.toString();
	
	switch (input) {
		//ITSM
		case 'Zoetis-INTERNAL-BT-1555-001': target.zoetis_internal_bt_1555_001 = true; break;
		//Incident
		case 'ZBTSO-0010': target.zbtso_0010 = true; break;
		case 'Zoetis-INTERNAL-BT-1557-001': target.zoetis_internal_bt_1557_001 = true; break;
		case 'Zoetis-INTERNAL-BT-1558-001': target.zoetis_internal_bt_1558_001 = true; break;
		case 'Zoetis-INTERNAL-BT-1559-001': target.zoetis_internal_bt_1559_001 = true; break;
		//Config
		case 'ZBTSO-0016': target.zbtso_0016 = true; break;
		case 'Zoetis-INTERNAL-BT-1567-001': target.zoetis_internal_bt_1567_001 = true; break;
		case 'Zoetis-INTERNAL-BT-1568-001': target.zoetis_internal_bt_1568_001 = true; break;
		case 'Zoetis-INTERNAL-BT-1569-001': target.zoetis_internal_bt_1569_001 = true; break;
		case 'Zoetis-INTERNAL-BT-1570-001': target.zoetis_internal_bt_1570_001 = true; break;
		//Change
		case 'ZBTSO-0007': target.zbtso_0007 = true; break;
		case 'Zoetis-INTERNAL-BT-1561-001': target.zoetis_internal_bt_1561_001 = true; break;
		case 'Zoetis-INTERNAL-BT-1562-001': target.zoetis_internal_bt_1562_001 = true; break;
		case 'Zoetis-INTERNAL-BT-1563-001': target.zoetis_internal_bt_1563_001 = true; break;
		case 'Zoetis-INTERNAL-BT-1564-001': target.zoetis_internal_bt_1564_001 = true; break;
		//Knowledge
		case 'Zoetis-INTERNAL-BT-1573-001': target.zoetis_internal_bt_1573_001 = true; break;
		case 'Zoetis-INTERNAL-BT-1574-001': target.zoetis_internal_bt_1574_001 = true; break;
	}
})(source, map, log, target);