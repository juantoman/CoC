Meteor.publish('alumnes', function() {
  return alumnes.find();
});
Meteor.publish('classes', function() {
  return classes.find();
});
Meteor.publish('students', function() {
  return students.find();
});
