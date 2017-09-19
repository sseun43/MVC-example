var controller = {
  model: {},
  view: {},
  getModel: function(model) {
    this.model[model.name] = model;
  },
  getView: function(view) {
    this.view[view.name] = view;
  },
  displayStudents: function() {
    var arr = this.model.elium.getAll();
    // arr.forEach(function(element) {
    //   console.log(element.name);
    //   console.log(element.age);
    //   console.log(element.sex);
    //   console.log(element.country);
    // }, this);
    this.view.studentViewer.displayStudents(arr);
    // handlers.setupEvents();
  },
  addStudent: function(name, age, sex, country) {
    var student = {
      name: name,
      age: age,
      sex: sex,
      country: country
    };

    var message = this.model.elium.addNewStudent(student);
    alert(message);
    this.displayStudents();
  }
};
