							 var cursor = document.getElementById("cursor");
							 document.addEventListener('mousemove', function(e){
							 	var x = e.clientX;
							 	var y = e.clientY;
							 	cursor.style.left = x + "px";
							 	cursor.style.top = y + "px";
							 })
							 (function() {
								var mouseTimer = null, cursorVisible = true;
							
								function disappearCursor() {
									mouseTimer = null;
									document.body.style.cursor = "none";
									cursorVisible = false;
								}
							
								document.onmousemove = function() {
									if (mouseTimer) {
										window.clearTimeout(mouseTimer);
									}
									if (!cursorVisible) {
										document.body.style.cursor = "default";
										cursorVisible = true;
									}
									mouseTimer = window.setTimeout(disappearCursor, 5000);
								};
							})();
								var song = document.getElementById("song");
							 	var icon = document.getElementById("icon");

							 icon.onclick = function(){
								 if(song.paused){
									 song.play();
									 icon.src = "images/pause.png"
								 }else{
									 song.pause();
									 icon.src = "images/play-button.png";
								 }

							 }