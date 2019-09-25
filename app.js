  var config = {
    apiKey: "AIzaSyBBRdxMh1gGh89gN6b2CYvN5j10zDsws4w",
    authDomain: "traintrain-70217.firebaseapp.com",
    databaseURL: "https://traintrain-70217.firebaseio.com",
    projectId: "traintrain-70217",
    storageBucket: "",
    messagingSenderId: "729956879324",
    appId: "1:729956879324:web:e0dbac2ecb56ec6e171d19",
    measurementId: "G-KNGM9XG00J"
  };
  // Initialize Firebase
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

  })
