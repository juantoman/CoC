Template.studentsPage.helpers({
  students: function() {
    console.log(Session.get('classId'));
    return students.find({classId: Session.get('classId')}, {sort: {submitted: -1}});
  }
});
