
function randomMove(){
  var moves = ['left', 'right', 'up', 'down'];
  var move = moves[Math.floor(Math.random() *4)];
  return move;
}

$('.btn').on('click', function(){
  HttpFetcher.fetchCommand();
});

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

// $('body').on('keydown', (event) => {
//   var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
//   if (arrowPress) {
//     var direction = arrowPress[1];
//     SwimTeam.move(direction.toLowerCase());
//   }
// });

// $('body').on('click', function(){
//   HttpFetcher.fetchCommand();
// });

// $('.btn').on('click', function(){
//   var rando = randomMove();
//   SwimTeam.move(rando);
// });



console.log('Client is running in the browser!');
