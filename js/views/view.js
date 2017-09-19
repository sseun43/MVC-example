var studentViewer = {
  name: "studentViewer",
  displayStudents: function(arr) {
    var studentsList = document.getElementById("studentsList");
    if (studentsList.innerHTML) {
      studentsList.innerHTML = "";
    }
    arr.forEach(function(element) {
      var header = document.createElement("h4");
      var list = document.createElement("ul");

      for (var prop in element) {
        if (prop === "name") {
          header.innerText = element.name;
        } else if (prop !== "id") {
          var item = document.createElement("li");
          item.innerText = element[prop];
          list.appendChild(item);
        }
      }

      studentsList.appendChild(header);
      studentsList.appendChild(list);
    });
  }
};
