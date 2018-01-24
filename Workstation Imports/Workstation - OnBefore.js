(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {

	var info = "Row ignored due to If/Then Condition";
	var workstation_usage = source.u_workstation_usage.toString();
	var disposition = source.u_disposition.toString();
	var assigned_to = source.u_assigned_to.toString();
	
	//Condition 1
	if (workstation_usage.equals("Stock") &&  
		( assigned_to.length > 0 || 
		!(	disposition.equals("In Stock (Available)") || disposition.equals("In Stock (Evaluation/Repair)") || 
			disposition.equals("In Stock (New)") || disposition.equals("In Stock (Spare Parts)") || 
			disposition.equals("Pending Retirement")) ) ) {
		if (action == 'insert') {
			ignore = true;
		}
		log.info(info + " 1");
	}

	//Condition 2
	if (workstation_usage.equals("Ordered/Shipping") && 
		( assigned_to.length != 0 || !(disposition.equals("In Transit")) ) ) {
		if (action == 'insert') {
			ignore = true;
		}
		log.info(info + " 2");
	}

	//Condition 3
	if (workstation_usage.equals("Other") && 
		( assigned_to.length != 0 || 
		!( disposition.equals("Divested") || disposition.equals("Retired")) ) ) {
		if (action == 'insert') {
			ignore = true;
		}
		log.info(info + " 3");
	}

	//Condition 4
	if (   (workstation_usage.equals("Automation") || workstation_usage.equals("Benchtop") || 
			workstation_usage.equals("Conference Room") || workstation_usage.equals("Forklift") || 
			workstation_usage.equals("Lab") || workstation_usage.equals("Loaner") || workstation_usage.equals("Office") || 
			workstation_usage.equals("Shared") || workstation_usage.equals("Training Room") ) && 
			( assigned_to.length == 0 || 
			!( disposition.equals("Assigned") || disposition.equals("Legal Hold") || disposition.equals("Lost/Stolen")) ) ) {
		if (action == 'insert') {
			ignore = true;
		}
		log.info(info + " 4");
	}

})(source, map, log, target);