var onclick = document.getElementById("player");
var playButton = document.getElementById("playbutton");
var status = 1;
if(status==1)
{
	onclick.play();
}
playButton.addEventListener("click",function(){
	if(status==1){
		console.log("paused"); 
		status=2; 
		onclick.pause();
	} 
	else{
		console.log("play");
		status=1;
		onclick.play();
	}
});
// onclick="document.getElementById('player').pause()"
// onclick="document.getElementById('player').muted=!document.getElementById('player').muted">Mute/Unmute