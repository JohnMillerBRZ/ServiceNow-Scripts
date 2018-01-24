//assigned notes
var ass_note = source.u_assigned_notes.toString();
if (ass_note.length > 0) {
	ass_note = "Assigned Notes:\n" + ass_note;
}

//Notes
var notes = source.u_notes__cz_.toString();
if (notes.length > 0) {
	notes = "\n\nNotes:\n" + notes;
}

//disabled notes
var dis_note = source.u_disabled_notes.toString();
if (dis_note.length > 0) {
	dis_note = "\n\nDisabled Notes:\n" + dis_note;
}

//change and config notes
var cc_note = source.u_change_config_notes.toString();
if (cc_note.length > 0) {
	cc_note = "\n\nChange & Configuration Notes:\n" + cc_note;
}

//change config and approver notes
var ccna_note = source.u_change_confi_approver_notes.toString();
if (ccna_note.length > 0) {
	ccna_note = "\n\nChange, Config & Approver Notes:\n" + ccna_note;
}

//swap notes
var swap_note = source.u_swap_notes.toString();
if (swap_note.length > 0) {
	swap_note = "\n\nSwap Notes:\n" + swap_note;
}

//adds all notes together
answer = ass_note + notes + dis_note + cc_note + ccna_note + swap_note;