Template.statisticsPage.helpers({
  statistics: function() {
    return behavioursLog.find({classId: Session.get('classId')});
  },
  studentName: function(){
    return students.findOne({_id: this.student}).studentName;
    //return students.find({_id: this.student});
  },
  behaviour: function(){
    return behaviours.findOne({_id: this.behavior});
    //return students.find({_id: this.student});
  },
  createdOnFormatted: function (date) {
    return moment(date).format('LLLL');
  }
});
