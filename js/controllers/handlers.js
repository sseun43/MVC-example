var handlers = {
  setupEvents: function() {
    var showButton = document.getElementById("showButton");
    var addButton = document.getElementById("addButton");

    showButton.addEventListener("click", function() {
      //   alert("I clicked!");
      controller.displayStudents();
    });

    addButton.onclick = function() {
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var sex = document.getElementById("sex").value;
      var country = document.getElementById("country").value;

      controller.addStudent(name, age, sex, country);

      document.getElementById("myForm").reset();
    };
  }
};
