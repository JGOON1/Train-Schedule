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
  $("#add-train-btn").on("click", function(event){
    event.preventDefault();

    //grab trian inputs
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainStart = moment($("#start-input").val().trim(), "H HH").format("LT");
    var trainFrequency = $("#frequency-input").val().trim();

    var newTrain = {
      name: trainName,
      destination: trainDestination,
      start: trainStart,
      frequency: trainFrequency,

    };
    //uploads data to database
    database.ref().push(newTrain);

    console.log(newTrain.trainName);
    console.log(newTrain.trainDestination);
    console.log(newTrain.trainStart);
    console.log(newTrain.trainFrequency);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#frequency-input").val("");

    
  });
