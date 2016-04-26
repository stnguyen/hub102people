Template.peopleListItem.helpers({
	initial: function() {
		// Stefan Nguyen -> SN
		// Nick DOng -> ND
		return this.name.split(' ').map(function (s) { return s.charAt(0); }).join('');
	}
})