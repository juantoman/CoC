Template.classesPage.helpers({
  classe: function() {
    var teacherId = Meteor.user();
    return classes.find({teacherId: teacherId._id}, {sort: {submitted: -1}});
  }
});
Template.classesPage.events({
  'click .btn-class': function(event) {
    event.preventDefault();
    Session.set('classId', event.target.id);
    Session.set('className', event.target.name);
    Session.set('navItem', "Students");
    Router.go('studentsPage');
  },
  'click .btn-delete': function(event) {
    event.preventDefault();
    Meteor.call('classDelete', event.target.name);
  }
});
