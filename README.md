### Explanation of the MVC architecture used in this application


First of all it must be noted that this app does only two simple things


1. It adds new student


2. It diplays the list of current students


*****



#### There are 5 Javascript files powering this application



*  **app.js**: This file contains only one very simple function whose purpose is to  start/initiates the codes in all of javascript files. It does this by calling two methods in the controller method (from the "controller" file),this methods copies the elium object("model" file) and the studentViewer object("view" file) into internal properties of controller object. A call is also made to the handler objects,which adds events to all necessary HTML elements.
The reason why these actions are necessary is explained below under the description
for controller.js.



* **Handler.js**: Handler file has an object with only one method whose purpose is to place events listener on the buttons for displaying current students and adding new students. It schedule the methods in the controller js, by calling them when the user click the appropriate buttons



* **controller.js**: This purpose of this file is to execute the main action of the app. It keeps a copy of the elium object and the studentViewer object within itself.These is done so that all of work done by the app(adding and displaying) is carried out only from the controller object.



* **model.js**: Model file contain the object that stores the students data. It has two methods the first one compile the list of the current students into an array and the second one contains the logic for adding new students and returns a message to indicate if was added successfully.
It should be noted that all of the methods contained in model file are called/used only in the controller file. So model file just st
ores data and logic functions which are then called/used in the controller file.



* **view.js**: The view file has an object with a method that describe how the students list should be displayed. Its' represent the visual output generated by the app. The method in view file is then called/used in the controller file to control the display 



