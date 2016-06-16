Template.studentsMainPage.helpers({
  className: function() {
    return Session.get('className');
  },
  btnSelected: function(option) {
    if ( option == "students" && Session.get('socBtn') == "students" ) {return "btn-primary"; }
    if ( option == "groups" && Session.get('socBtn') == "groups" ) {return "btn-primary"; }
  },
  studentsSelected: function() {
    if ( Session.get('socBtn') == "students" ) {
      return true;
    } else {
      return false;
    }
  }
});

Template.studentsMainPage.events({
  'click .btn': function(event) {
    event.preventDefault();
    Session.setPersistent('socBtn', event.target.id);
  }
});