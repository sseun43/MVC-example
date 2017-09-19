var elium = {
  name: "elium",
  currentId: 0,
  students: {
    0: {
      id: 0,
      name: "Samuel",
      age: 25,
      sex: "male",
      country: "Finland"
    }
  },
  getAll: function() {
    var studentsArray = [];
    for (var id in this.students) {
      studentsArray.push(this.students[id]);
    }
    return studentsArray;
  },
  addNewStudent: function(studentObj) {
    var message = "Success!";
    if (
      typeof studentObj.name === "string" &&
      !isNaN(studentObj.age) &&
      typeof studentObj.sex === "string" &&
      typeof studentObj.country === "string"
    ) {
      if (studentObj.name && Number(studentObj.age)) {
        this.currentId++;
        this.students[this.currentId] = studentObj;
        this.students[this.currentId].id = this.currentId;
      } else {
        message = "Please enter name and age";
        return message;
      }
    } else {
      message = "Invalid entries";
      return message;
    }

    return message;
  }
};
