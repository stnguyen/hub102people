Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: '404',
	waitOn: function() { return Meteor.subscribe('people'); }
});

Router.route('/', {name: 'peopleList'})
Router.route('/people/:_id', {
	name: 'person',
	data: function() { return People.findOne(this.params._id) }
})

Router.onBeforeAction('dataNotFound', {only: 'person'})