// var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  // The function should return their position in line.
  katzDeliLine.push(newPerson);
  var newPersonNumber = katzDeliLine.length;
  return 'Welcome, ' + newPerson + '. You are number ' + newPersonNumber + ' in line.'
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
      var nextPerson = katzDeliLine[0];
      katzDeliLine.shift();
      return "Currently serving " + nextPerson + ".";
  }
};

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
      var currentQueue = "The line is currently: "
      for (var i = 0; i < katzDeliLine.length; i++) {
        currentQueue += (i+1) + ". " + katzDeliLine[i] + ", "
      }
  }
  return currentQueue.slice(0, -2)
}
