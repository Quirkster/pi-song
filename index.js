var pianoKeys = [
  ['G#', 3, '#e74c3c'], // 0
  ['A', 3, '#e67e22'], // 1
  ['B', 3, '#f1c40f'],
  ['C', 4, '#2ecc71'],
  ['D', 4, '#3498db'],
  ['E', 4, '#9b59b6'],
  ['F', 4, '#bdc3c7'],
  ['G#', 4, '#1abc9c'],
  ['A', 4, '#2980b9'],
  ['B', 4, '#34495e'] // 9
];
var $currentNote = document.getElementById('currentNote');
var $currentDigit = document.getElementById('currentDigit');
var $container = document.getElementById('container');
var piano = Synth.createInstrument('piano');
var playDigit = function(digit) {
  var key = pianoKeys[digit]; // ["note", octave]
  var duration = Math.random() * 4;
  piano.play(key[0], key[1], duration);
  document.body.style.backgroundColor = key[2];
  $currentNote.textContent = key[0];
  $currentDigit.textContent = digit;
};

var x = 0;
var playNextDigit = function() {
  var currentDigit = piDigits[x];
  playDigit(currentDigit);

  $container.classList.add('bigger');
  setTimeout(function() {
    $container.classList.remove('bigger');
  }, 200);

  console.log(currentDigit, pianoKeys[currentDigit]);
  x++;
  if (x < piDigits.length) {
    setTimeout(playNextDigit, 1000);
  }
};
playNextDigit();
