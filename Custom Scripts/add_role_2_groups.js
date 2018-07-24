var groupsArray=[
  '<group 1 name >',
  '<group 2 name >',
  '<group 2 name >',
  '<group 4 name >'
];

//gets p1 role
var p1_role = new GlideRecord('sys_user_role');
p1_role.addQuery('name', 'p1_incident_opener');
p1_role.query();

//only runs if p1 role is present
if (p1_role.next()) {
  //lops over list of groups
  for (var i=0; i<groupsArray.length; i++) {
    //gets the current group
    var group = new GlideRecord('sys_user_group');
    group.addQuery('name', groupsArray[i]);
    group.query();

    //only runs if current group exists
    while (group.next()){
      var role = new GlideRecord('sys_group_has_role');

      //applies the role to the current group
      role.initialize();
      role.group = group.sys_id;
      role.role = '46dd7c51db1313005e9778eebf961931';
      role.inherits = true;
      role.insert();

      gs.print('added role to ' + group.name);
    }
  }
} else {
  gs.print('role not found');
}
