Template.studentsPage.helpers({
  students: function() {
    var teacherId = Meteor.user();
    return students.find({classId: Session.get('classId')}, {sort: {submitted: -1}});
  }
});
