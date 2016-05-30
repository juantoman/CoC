Template.classesPage.helpers({
  classe: function() {
    var teacherId = Meteor.user();
    return classes.find({teacherId: teacherId._id}, {sort: {submitted: -1}});
  }
});
Template.classesPage.events({
  'click button': function(event) {
    event.preventDefault();
    Session.set('classId', event.target.id);
    Router.go('studentsPage');
  }
});
