class Game{
    constructor(){
    
    }
    
    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    
    update(state){
        database.ref('/').update({
            gameState:state 
        })
    }
    
     async start(){
        if(gameState===0){
    
    
    
    player=new Player();
    var playerCountRef = await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
      playerCount = playerCountRef.val();
      player.getCount();
    }
    
    
    form=new Form();
    form.display();
    
    }
    airplane1 = createSprite(200,400);
    airplane1.addImage(airplaneimg);
    airplane1.scale = 0.17;
    airplane2 = createSprite(1200,400);
    airplane2.addImage(airplaneimg);
    airplane2.scale = 0.17;
    airplane = [airplane1,airplane2];
    }
    
    play(){
        form.hide();
       // textSize(30);
       // text("Game Start",200,100);
        Player.getPlayerInfo();
        player.getRaceEnd();
    
        if(allPlayers!==undefined){
            background("brown");
            // adding track image
            image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
            //index of the array
                var index=0;
    
                //storing x and y position of the airplane
                var x=175;
                var y;
            for(var plr in allPlayers){ 
                //add 1 to the index for every loop
                index=index+1;
                //position the airplane a little away from each other in x direction
                x=x+200;
    
                //use the distance data  from the database to display the airplane in y direction 
              y=displayHeight-allPlayers[plr].distance;
    
              console.log("airplane array"+ airplane);
                airplane[index-1].x=x;
                airplane[index-1].y=y;
    
                if(index===player.index){
                    
                    airplane[index-1].shapeColor="blue";
                    if(keyIsDown(UP_ARROW) || keyIsDown(W) ){
                        airplane1.y= airplane1.y-5
                        airplane2.y= airplane2.y-5
                        airplane2.addImage(airplaneimg);
                        airplane1.addImage(airplaneimg);
                        }
                        if(keyIsDown(DOWN_ARROW) || keyIsDown(S)){
                          airplane1.y= airplane1.y+5
                          airplane2.y= airplane2.y+5
                          airplane2.addImage(airplaneimg);
                          airplane1.addImage(airplaneimg);
                          }
                          if(keyIsDown(LEFT_ARROW) || keyIsDown(A) ){
                            airplane1.x= airplane1.x-5
                            airplane1.addImage(left);
                            airplane2.x= airplane2.x-5
                            airplane2.addImage(left);
                            }
                            if(keyIsDown(RIGHT_ARROW || keyIsDown(D)) ){
                              airplane1.x= airplane1.x+5
                              airplane2.x= airplane2.x+5
                              airplane2.addImage(right);
                              airplane1.addImage(right);
                              }
                              if (keyIsDown(SPACE)) {
                                  laser = createSprite(airplane1.x,airplane1.y-10);
                                  laser.velocityY = -6; 
                              }
                    textSize(15);
                    fill("red");
                    text(player.name, airplane[index-1].x, airplane[index-1].y+20)
                }
                else {
                    airplane[index-1].shapeColor="red";
                }
            }
        }
    
        if(player.distance>3780){
            gameState=2;
            player.rank+=1;
            player.update();
            Player.updateRaceEnd(player.rank);
        }
    
        drawSprites();
    }
    
    end(){
    console.log("Game Ended");
    console.log(player.rank);
    }
    
    
    }