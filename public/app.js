const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to the server');
});

socket.on('disconnect', () => {
  console.log('Disconnected');
});

socket.on('msg', (data) => {
  console.log(`Server emitted msg: ${data}`);
});

const idToNote = {
  46: 'a',
  38: 'b',
  40: 'c',
  47: 'd',
  45: 'e',
  43: 'f',
  36: 'g',
  49: 'h',
  51: 'i',
};

socket.on('note', (data) => {
  // console.log(data);
  const $thing = $(`.thing--${idToNote[data.id]}`);
  const activeClass = 'active';
  
  if (data.velocity > 0) {
    const animationDuration = 100 + ((data.velocity / 127) * 100);
    console.log(`Server emitted note: ${data.id} at ${data.velocity} for ${animationDuration}`);
    $thing
      .stop()
      .addClass(activeClass)
      .css('top', 100 + (data.velocity / 127) * (window.innerHeight - 142))
      .animate({
        top: 100,
      }, animationDuration, () => {
        $thing.removeClass(activeClass);
      });
  }
  
  // instant
  // $thing[(data.velocity === 0) ? 'removeClass' : 'addClass'](activeClass);
});

$(window).on('keydown', (ev) => {
  // console.log(`keycode: ${ev.keyCode}`);

  switch (ev.keyCode) {
    case 82: // r
      console.log(`emitting 'toggle-recording'`);
      socket.emit('toggle-recording');
      break;
    
    case 49: // 1
      console.log('emitting note', 46);
      socket.emit('note', 46, 99);
      break;
      
    case 50: // 2
      console.log('emitting note', 38);
      socket.emit('note', 38, 99);
      break;
      
    case 51: // 3
      console.log('emitting note', 40);
      socket.emit('note', 40, 99);
      break;
      
    case 52: // 4
      console.log('emitting note', 47);
      socket.emit('note', 47, 99);
      break;
      
    case 53: // 5
      console.log('emitting note', 45);
      socket.emit('note', 45, 99);
      break;
      
    case 54: // 6
      console.log('emitting note', 43);
      socket.emit('note', 43, 99);
      break;
      
    case 55: // 7
      console.log('emitting note', 36);
      socket.emit('note', 36, 99);
      break;
      
    case 56: // 8
      console.log('emitting note', 49);
      socket.emit('note', 49, 99);
      break;
      
    case 57: // 9
      console.log('emitting note', 51);
      socket.emit('note', 51, 99);
      break;    
  }
});
