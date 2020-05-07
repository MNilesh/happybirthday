window.onload = function(e){
  playing=1;
  let song = document.getElementById('song');
  pp.addEventListener('click', function() {
    if(playing)
    {
      song.play();
      playIcon.src='./img/pause.svg';
      playing=0;
      pp.classList.toggle('notplayed');
    }
    else{
      song.pause();
      playIcon.src='./img/play.svg';
      playing=1;
      pp.classList.toggle('notplayed');
    }
});

console.log(1);
setTimeout(()=>{
  console.log('1');
  loader.style.display='none';
  document.body.classList.remove('noscroll');
},8000);
}
