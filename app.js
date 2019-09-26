var config = {
  apiKey: "AIzaSyBZJv6c0e1xnl4UUjhcbzsSBfcaj-l0Ons",
  authDomain: "first-database-eaa8a.firebaseapp.com",
  databaseURL: "https://first-database-eaa8a.firebaseio.com",
  projectId: "first-database-eaa8a",
  storageBucket: "",
  messagingSenderId: "829727741676",
  appId: "1:829727741676:web:eb6cf5ba6f6a03ea5737c9"
};

firebase.initializeApp(config);

var database = firebase.database();

// function to add train time
$("#add-train-btn").on("click", function (event) {
  event.preventDefault();

  //grab trian inputs
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainStart = moment($("#start-input").val().trim(), "H:HH").format("LT");
  var trainFrequency = $("#frequency-input").val().trim();

  var newTrain = {
    name: trainName,
    destination: trainDestination,
    start: trainStart,
    frequency: trainFrequency,
  };

  //uploads data to database
  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.frequency);

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#frequency-input").val("");
});

// getting information from firebase and displaying it to table
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().start;
  var trainFrequency = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStart);
  console.log(trainFrequency);

  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainStart),
    $("<td>").text(trainFrequency),
  );

  $("#train-table > tbody").append(newRow);
  console.log(newRow);
});
