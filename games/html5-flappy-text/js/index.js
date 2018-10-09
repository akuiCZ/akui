/*
 *
 * @author Sakri Rosenstrom
 * http://www.sakri.net
 * https://twitter.com/sakri
 * http://www.devstate.net
 * Sources for this can be found at:
 * https://github.com/sakri/sakriNetCommonJS
 */


(function (window){

  var Sakri = window.Sakri || {};
  window.Sakri = window.Sakri || Sakri;
    
	Sakri.MathUtil = {};
	
	//used for radiansToDegrees and degreesToRadians
	Sakri.MathUtil.PI_180 = Math.PI/180;
	Sakri.MathUtil.ONE80_PI = 180/Math.PI;
	
	//precalculations for values of 90, 270 and 360 in radians
	Sakri.MathUtil.PI2 = Math.PI*2;
	Sakri.MathUtil.HALF_PI = Math.PI/2;


	//return number between 1 and 0
	Sakri.MathUtil.normalize = function(value, minimum, maximum){
		return (value - minimum) / (maximum - minimum);
	};

	//map normalized number to values
	Sakri.MathUtil.interpolate = function(normValue, minimum, maximum){
		return minimum + (maximum - minimum) * normValue;
	};

	//map a value from one set to another
	Sakri.MathUtil.map = function(value, min1, max1, min2, max2){
		return Sakri.MathUtil.interpolate( Sakri.MathUtil.normalize(value, min1, max1), min2, max2);
	};

	Sakri.MathUtil.getRandomNumberInRange = function(min, max){
		return min + Math.random() * (max - min);
	};
	
	Sakri.MathUtil.getRandomIntegerInRange = function(min, max){
		return Math.round(Sakri.MathUtil.getRandomNumberInRange(min, max));
	};

	
}(window));

(function (window){

    var Sakri = window.Sakri || {};
    window.Sakri = window.Sakri || Sakri;

  	Sakri.Geom = {};

    //==================================================
    //=====================::POINT::====================
    //==================================================

    Sakri.Geom.Point = function (x,y){
        this.x = isNaN(x) ? 0 : x;
        this.y = isNaN(y) ? 0 : y;
    };

    Sakri.Geom.Point.prototype.clone = function(){
        return new Sakri.Geom.Point(this.x,this.y);
    };

    Sakri.Geom.Point.prototype.update = function(x, y){
        this.x = isNaN(x) ? this.x : x;
        this.y = isNaN(y) ? this.y : y;
    };

    Sakri.Geom.Point.prototype.equals = function(point){
        return this.x==point.x && this.y==point.y;
    };

    Sakri.Geom.Point.prototype.toString = function(){
        return "{x:"+this.x+" , y:"+this.y+"}";
    };


    
	//==================================================
	//===================::RECTANGLE::==================
	//==================================================

	Sakri.Geom.Rectangle = function (x, y, width, height){
		this.update(x, y, width, height);
	};
	
	Sakri.Geom.Rectangle.prototype.update = function(x, y, width, height){
		this.x = isNaN(x) ? 0 : x;
		this.y = isNaN(y) ? 0 : y;
		this.width = isNaN(width) ? 0 : width;
		this.height = isNaN(height) ? 0 : height;
	};

  
	Sakri.Geom.Rectangle.prototype.getRight = function(){
		return this.x + this.width;
	};
	
	Sakri.Geom.Rectangle.prototype.getBottom = function(){
		return this.y + this.height;
	};

    Sakri.Geom.Rectangle.prototype.getCenterX = function(){
        return this.x + this.width/2;
    };

    Sakri.Geom.Rectangle.prototype.getCenterY = function(){
        return this.y + this.height/2;
    };

    Sakri.Geom.Rectangle.prototype.containsPoint = function(x, y){
        return x >= this.x && y >= this.y && x <= 1="" this.getright()="" &&="" y="" <="this.getBottom();" };="" sakri.geom.rectangle.prototype.clone="function(){" return="" new="" sakri.geom.rectangle(this.x,="" this.y,="" this.width,="" this.height);="" sakri.geom.rectangle.prototype.tostring="function(){" "rectangle{x:"+this.x+"="" ,="" y:"+this.y+"="" width:"+this.width+"="" height:"+this.height+"}";="" }(window));="" **="" *="" created="" by="" sakri="" on="" 27-1-14.="" has="" a="" dependecy="" sakri.geom="" sakri.bitmaputil="" (function="" (window){="" var="" ||="" {};="" window.sakri="window.Sakri" sakri;="" sakri.canvastextutil="{};" returns="" the="" biggest="" font="" size="" that="" best="" fits="" into="" rect="" sakri.canvastextutil.getfontsizeforrect="function(string," fontprops,="" rect,="" canvas,="" fillstyle){="" if(!canvas){="" canvas="document.createElement("canvas");" }="" if(!fillstyle){="" fillstyle="#000000" ;="" context="canvas.getContext('2d');" context.font="fontProps.getFontString();" context.textbaseline="top" copy="fontProps.clone();" console.log("getfontsizeforrect()="" :="" ",="" copy.fontsize);="" width="context.measureText(string).width;" console.log(width,="" rect.width);="" some="" disagreement="" whether="" this="" shoould="" be="" with="" or="" if(width="" rect.width){="" while(context.measuretext(string).width="" rect.width="" copy.fontsize*1.5="" rect.height){="" copy.fontsize++;="" }else=""> rect.width){
            while(context.measureText(string).width > rect.width || copy.fontSize*1.5 > rect.height){
                copy.fontSize--;
                context.font = copy.getFontString();
            }
        }
        //console.log("getFontSizeForRect() 2  : ", copy.fontSize);
        return copy.fontSize;
    }

    //=========================================================================================
    //==============::CANVAS TEXT PROPERTIES::====================================
    //========================================================

    Sakri.CanvasTextProperties = function(fontWeight, fontStyle, fontSize, fontFace){
        this.setFontWeight(fontWeight);
        this.setFontStyle(fontStyle);
        this.setFontSize(fontSize);
        this.fontFace = fontFace ? fontFace : "sans-serif";
    };

    Sakri.CanvasTextProperties.NORMAL = "normal";
    Sakri.CanvasTextProperties.BOLD = "bold";
    Sakri.CanvasTextProperties.BOLDER = "bolder";
    Sakri.CanvasTextProperties.LIGHTER = "lighter";

    Sakri.CanvasTextProperties.ITALIC = "italic";
    Sakri.CanvasTextProperties.OBLIQUE = "oblique";


    Sakri.CanvasTextProperties.prototype.setFontWeight = function(fontWeight){
        switch (fontWeight){
            case Sakri.CanvasTextProperties.NORMAL:
            case Sakri.CanvasTextProperties.BOLD:
            case Sakri.CanvasTextProperties.BOLDER:
            case Sakri.CanvasTextProperties.LIGHTER:
                this.fontWeight = fontWeight;
                break;
            default:
                this.fontWeight = Sakri.CanvasTextProperties.NORMAL;
        }
    };

    Sakri.CanvasTextProperties.prototype.setFontStyle = function(fontStyle){
        switch (fontStyle){
            case Sakri.CanvasTextProperties.NORMAL:
            case Sakri.CanvasTextProperties.ITALIC:
            case Sakri.CanvasTextProperties.OBLIQUE:
                this.fontStyle = fontStyle;
                break;
            default:
                this.fontStyle = Sakri.CanvasTextProperties.NORMAL;
        }
    };

    Sakri.CanvasTextProperties.prototype.setFontSize = function(fontSize){
        if(fontSize && fontSize.indexOf && fontSize.indexOf("px")>-1){
            var size = fontSize.split("px")[0];
            fontProperites.fontSize = isNaN(size) ? 24 : size;//24 is just an arbitrary number
            return;
        }
        this.fontSize = isNaN(fontSize) ? 24 : fontSize;//24 is just an arbitrary number
    };

    Sakri.CanvasTextProperties.prototype.clone = function(){
        return new Sakri.CanvasTextProperties(this.fontWeight, this.fontStyle, this.fontSize, this.fontFace);
    };

    Sakri.CanvasTextProperties.prototype.getFontString = function(){
        return this.fontWeight + " " + this.fontStyle + " " + this.fontSize + "px " + this.fontFace;
    };

}(window));


window.requestAnimationFrame =
        window.__requestAnimationFrame ||
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                (function () {
                    return function (callback, element) {
                        var lastTime = element.__lastTime;
                        if (lastTime === undefined) {
                            lastTime = 0;
                        }
                        var currTime = Date.now();
                        var timeToCall = Math.max(1, 33 - (currTime - lastTime));
                        window.setTimeout(callback, timeToCall);
                        element.__lastTime = currTime + timeToCall;
                    };
                })();

var readyStateCheckInterval = setInterval( function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        init();
    }
}, 10);

//========================
//general properties for demo set up
//========================

var canvas;
var context;
var canvasContainer;
var htmlBounds;
var bounds;
var minimumStageWidth = 300;
var minimumStageHeight = 300;
var maxStageWidth = 800;
var maxStageHeight = 1100;
var resizeTimeoutId = -1;
//var stats;

function init(){
    canvasContainer = document.getElementById("canvasContainer");
    window.onresize = resizeHandler;
    //stats = new Stats();
    //canvasContainer.appendChild( stats.getDisplayElement() );
    window.addEventListener( "keydown", keyUpEventHandler, false )
    commitResize();
}

function getWidth( element ){return Math.max(element.scrollWidth,element.offsetWidth,element.clientWidth );}
function getHeight( element ){return Math.max(element.scrollHeight,element.offsetHeight,element.clientHeight );}

//avoid running resize scripts repeatedly if a browser window is being resized by dragging
function resizeHandler(){
    context.clearRect(0,0,canvas.width, canvas.height);
    clearTimeout(resizeTimeoutId);
    clearTimeoutsAndIntervals();
    resizeTimeoutId = setTimeout(commitResize, 300 );
}

function commitResize(){
    if(canvas){
        canvasContainer.removeChild(canvas);
    }
    canvas = document.createElement('canvas');
    canvas.style.position = "absolute";
    context = canvas.getContext("2d");
    canvasContainer.appendChild(canvas);

    htmlBounds = new Sakri.Geom.Rectangle(0,0, getWidth(canvasContainer) , getHeight(canvasContainer));
    if(htmlBounds.width >= maxStageWidth){
        canvas.width = maxStageWidth;
        canvas.style.left = htmlBounds.getCenterX() - (maxStageWidth/2)+"px";
    }else{
        canvas.width = htmlBounds.width;
        canvas.style.left ="0px";
    }
    if(htmlBounds.height > maxStageHeight){
        canvas.height = maxStageHeight;
        canvas.style.top = htmlBounds.getCenterY() - (maxStageHeight/2)+"px";
    }else{
        canvas.height = htmlBounds.height;
        canvas.style.top ="0px";
    }
    bounds = new Sakri.Geom.Rectangle(0,0, canvas.width, canvas.height);
    context.clearRect(0,0,canvas.width, canvas.height);

    if(bounds.width<minimumstagewidth 2="" 15="" 32="" ||="" bounds.height<minimumstageheight){="" stagetoosmallhandler();="" return;="" }="" var="" textinputspan="document.getElementById("textInputSpan");" textinputspany="(canvas.height" -="" canvas.height*.85)="" +="" 15;="" is="" an="" estimate="" for="" half="" of="" textinputheight="" textinputspan.style.top="htmlBounds.getCenterY()" (bounds.height="" 2)="" +"px";="" textinputspan.style.left="(htmlBounds.getCenterX()" getwidth(textinputspan)="" 2)+"px";="" startdemo();="" function="" stagetoosmallhandler(){="" warning="Sorry, bigger screen required :(" ;="" context.font="bold normal 24px sans-serif" context.filltext(warning,="" bounds.getcenterx()="" context.measuretext(warning).width="" 2,="" bounds.getcentery()-12);="" =="======================" demo="" specific="" properties="" home="0;" game="1;" game_over="2;" gamestate;="" scrollspeed="3;" score;="" fontproperties="new" sakri.canvastextproperties(sakri.canvastextproperties.bold,="" null,="" 100);="" word="SAKRI" startdemo(){="" canvas.addeventlistener('touchstart',="" handleusertap,="" false);="" canvas.addeventlistener('mousedown',="" logotext="FLAPPY TEXT" if(!logocanvas){="" logocanvas="document.createElement("canvas");" logocanvasbg="document.createElement("canvas");" createlogo("flappy="" text",="" logocanvas,="" logocanvasbg);="" if(!gameovercanvas){="" gameovercanvas="document.createElement("canvas");" gameovercanvasbg="document.createElement("canvas");" createlogo("game="" over",="" gameovercanvas,="" gameovercanvasbg);="" creategroundpattern();="" createbird();="" createtubes();="" createcitygraphic();="" score="0;" gamestate="HOME;" loop();="" loop(){="" switch(gamestate){="" case="" home:="" renderhome();="" break;="" :="" rendergame();="" game_over:="" rendergameover();="" stats.tick();="" handleusertap(event){="" birdyspeed="-tapBoost;" commitresize();="" if(event){="" event.preventdefault();="" keyupeventhandler(event){="" event.keycode="="> Space
        if(event.keyCode == 38){
            handleUserTap(event);
        }
    }

    function renderHome(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        renderGroundPattern();
        renderLogo();
        renderInstructions();
        window.requestAnimationFrame(loop, canvas);
    }

    function renderGame(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        updateTubes();
        renderTubes();
        updateBird();
        if(!characters.length){
            gameOverHandler();
            return;
        }
        renderBird();
        renderGroundPattern();
        updateScore();
        renderScore();
        window.requestAnimationFrame(loop, canvas);
    }

    function gameOverHandler(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        gameState = GAME_OVER;
        renderGameOver();
    }

    function renderGameOver(){

        //game over logo
        context.drawImage(gameOverCanvas, bounds.getCenterX() - logoCanvas.width/2, canvas.height *.2);

        var instruction = "Click or tap to flap again.";
        context.font = "bold normal 24px sans-serif";
        context.fillStyle = "#FFFFFF";
        context.fillText(instruction, bounds.getCenterX() - context.measureText(instruction).width/2, canvas.height *.25 + gameOverCanvas.height);
        renderScore();

        //window.requestAnimationFrame(loop, canvas);
    }

    function renderLogo(){
        logoCurrentY += logoDirection;
        context.drawImage(logoCanvas, bounds.getCenterX() - logoCanvas.width/2, logoCurrentY);
        if(logoCurrentY <= logoy="" ||="" logocurrenty="">= logoMaxY){
            logoDirection *= -1;
        }
    }

    function renderInstructions(){
        var instruction = "Click or tap to flap :)";
        context.font = "bold normal 24px sans-serif";
        context.fillStyle = "#FFFFFF";
        context.fillText(instruction, bounds.getCenterX() - context.measureText(instruction).width/2, canvas.height *.2);
    }

    function renderScore(){
        context.font = fontProperties.getFontString();
        context.fillStyle = "#FFFFFF";
        context.strokeStyle = "#000000";
        context.lineWidth = 3;
        var x = bounds.getCenterX() - context.measureText(score).width/2;
        var y = bounds.height*.1;
        context.fillText(score, x, y);
        context.strokeText(score, x, y);
    }

    //========================================================================
    //========================:: LOGO ::======================================
    //========================================================================

    var logoCanvas;
    var logoCanvasBG;

    var gameOverCanvas;
    var gameOverCanvasBG;

    var logoY;
    var logoCurrentY;
    var logoMaxY;
    var logoDirection;

    function createLogo(logoText, logoCanvas, logoCanvassBG){
        logoCanvas.width = logoCanvasBG.width = canvas.width;
        logoCanvas.height = logoCanvasBG.height = canvas.height / 4;
        logoCurrentY = logoY = canvas.height * .25;
        logoMaxY = canvas.height * .35;
        logoDirection = 1;
        var logoContext = logoCanvas.getContext("2d");
        logoContext.textBaseline = "top";
        var textRect = new Sakri.Geom.Rectangle(0, 0, logoCanvas.width * .8, logoCanvas.height);
        var logoFontProps = fontProperties.clone();
        logoFontProps.fontSize = Sakri.CanvasTextUtil.getFontSizeForRect(logoText, fontProperties, textRect);


        var logoBGContext = logoCanvasBG.getContext("2d");
        logoBGContext.fillStyle = "#f5eea5";
        logoBGContext.fillRect(0, 0, logoCanvasBG.width, logoCanvasBG.height);
        logoBGContext.fillStyle = "#9ce358";
        logoBGContext.fillRect(0, logoFontProps.fontSize/2, logoCanvasBG.width, logoCanvasBG.height);

        logoContext.font = logoFontProps.getFontString();
        logoContext.fillStyle = logoContext.createPattern(logoCanvasBG, "repeat-x");
        logoContext.strokeStyle = "#000000";
        logoContext.lineWidth = 3;
        var x = logoCanvas.width/2 - logoContext.measureText(logoText).width/2;
        var y = logoFontProps.fontSize/2;
        logoContext.fillText(logoText, x, 0);
        logoContext.strokeText(logoText, x, 0);
    }

    //========================================================================
    //========================:: BIRD ::==================================
    //========================================================================

    var birdCanvas;
    var birdYSpeed = 0;
    var gravity = 1;
    var tapBoost = 12;
    var birdSize = 60;

    function updateBird(){
        characters[0].y += birdYSpeed;
        birdYSpeed += gravity;

        //floor
        if(characters[0].y >= groundGraphicRect.y - birdCanvas.height){
            characters[0].y = groundGraphicRect.y - birdCanvas.height;
            birdYSpeed = 0;
        }
        //celing
        if(characters[0].y<=0){ characters[0].y="1;" birdyspeed="0;" }="" tube="" collision="" if(!ishit="" &&="" checktubescollision()){="" context.fillstyle="#FFFFFF" ;="" context.fillrect(0,0,canvas.width,="" canvas.height);="" removecharacter();="" ishit="true;" var="" currenttube;="" ffscorebugfix="0;//" for="" some="" reason="" the="" score="" would="" fire="" multiple times="" on="" firefox="" function="" updatescore(){="" if(ffscorebugfix="">10 && currentTube.topRect.getRight() < characters[0].x){
            if(!isHit){
                score++;
            }
            isHit = false;
            var index = tubes.indexOf(currentTube) + 1;
            index %= tubes.length;
            currentTube = tubes[index];
            ffScoreBugFix = 0;
        }
        ffScoreBugFix++;
    }

    function renderBird(){
        context.drawImage(characters[0].image, characters[0].x, characters[0].y );
        for(var i = 1; i < characters.length; i++){
             characters[i].y = characters[i-1].y - (characters[i-1].y - characters[i].y) * .9;
             context.drawImage(characters[i].image, characters[i].x, characters[i].y );
        }
    }

    function removeCharacter(){
        if(characters.length==1){
            //game over
            gameState = GAME_OVER;
        }
        for(var i=0; i<characters.length-1;i++){ 2="" characters[i].image="characters[i+1].image;" }="" characters.pop();="" function="" checktubescollision(){="" for(var="" i="0;" i<tubes.length;i++){="" if(checktubecollision(tubes[i])){="" return="" true;="" false;="" var="" collisionpoint="new" sakri.geom.point();="" birdpoints="[];" checktubecollision(tube){="" birdpoints[0]="characters[0].x;" birdpoints[1]="characters[0].y;" birdpoints[2]="characters[0].x" +="" birdsize;="" birdpoints[3]="characters[0].y;" birdpoints[4]="characters[0].x" birdpoints[5]="characters[0].y" birdpoints[6]="characters[0].x;" birdpoints[7]="characters[0].y" i<8;="" i+="2){" collisionpoint.x="birdPoints[i];" collisionpoint.y="birdPoints[i+1];" if(tube.toprect.containspoint(collisionpoint.x,="" collisionpoint.y)="" ||="" tube.bottomrect.containspoint(collisionpoint.x,="" collisionpoint.y)){="" characters;="" birdfontproperties="new" sakri.canvastextproperties(sakri.canvastextproperties.bold,="" null,="" 50);="" createbird(){="" if(!birdcanvas){="" birdcanvas="document.createElement("canvas");" birdcanvas.width="birdSize;" birdcanvas.height="birdSize;" characters="[];" characters[0]="{}" characters[0].x="canvas.width" 3;="" characters[0].y="groundGraphicRect.y" 2;="" characters[0].image="createCharacterImage(word.charAt(word.length" -="" 1));="" x="characters[0].x" -(birdcanvas.width="" birdcanvas.width*.2);="" i<word.length="" ;="" i++){="" characters[i]="{};" characters[i].x="x;" characters[i].y="characters[0].y;" createcharacterimage(character){="" birdcontext="birdCanvas.getContext("2d");" birdcontext.textbaseline="top" birdcontext.font="birdFontProperties.getFontString();" birdcontext.fillstyle="#d5bb22" birdcontext.fillrect(0,="" 0,="" birdsize,="" birdsize="" 2);="" 2,="" hilite="" 6);="" "mouth"="" 10,="" birdsize);="" birdcontext.linewidth="3;" birdcontext.strokestyle="#4d2f3b" birdcontext.strokerect(2,="" birdsize-4,="" birdsize-4);="" birdcontext.filltext(character,="" birdcontext.measuretext(character).width="" 0);="" birdcontext.stroketext(character,="" image="new" image();="" image.width="birdSize;" image.height="birdSize;" image.src="birdCanvas.toDataURL();" image;="" =="======================================================================" tubes="" ::="=================================" tubegapheight="230;//needs" some="" logic="" tubesgapwidth;="" tubes;="" tubewidth="100;//needs" mintubeheight="50;//needs" updatetubes(){="" updatetube(tubes[i]);="" updatetube(tube){="" tube.toprect.x="" tube.bottomrect.x="tube.topRect.x;" if(tube.toprect.x="" <="-tubeWidth" ){="" canvas.width;="" rendertube(tube);="" rendertubes(){="" context.drawimage(tubes[i].canvas,="" tubes[i].bottomrect.x,="" createtubes(){="" totaltubes="2;" tubesgapwidth="Math.floor(canvas.width/totalTubes);" totaltubes;="" tubes[i]="{};" tubes[i].canvas="document.createElement("canvas");" tubes[i].toprect="new" sakri.geom.rectangle(canvas.width+(i="" *="" tubesgapwidth));="" tubes[i].bottomrect="new" rendertube(tubes[i]);="" currenttube="tubes[0];" tubeoutlinecolor="#534130" tubemaincolor="#75be2f" tubecapheight="40;" rendertube(tube){="" tube.canvas.width="tubeWidth;" tube.canvas.height="groundGraphicRect.y;" tube.bottomrect.width="tube.topRect.width" tubewidth;="" tube.toprect.y="0;" tube.toprect.height="minTubeHeight" math.round(math.random()*(groundgraphicrect.y-tubegapheight-mintubeheight*2));="" tube.bottomrect.y="tube.topRect.getBottom()" tubegapheight;="" tube.bottomrect.height="groundGraphicRect.y" 1;="" minus="" one="" for="" stroke="" tubecontext="tube.canvas.getContext("2d");" tubecontext.linewidth="2;" top="" tube="" rendertubeelement(tubecontext="" ,="" 3,="" tubewidth-6,="" tube.toprect.height);="" 1,="" tube.toprect.getbottom()="" tubecapheight,="" tubewidth-2,="" tubecapheight);="" bottom="" tube.bottomrect.y,="" tube.bottomrect.height);="" rendertubeelement(ctx,="" x,="" y,="" width,="" height){="" ctx.fillstyle="tubeMainColor;" ctx.fillrect(x,="" height);="" width*.25,="" ctx.fillrect(x+width="" *.05,="" width="" ctx.fillrect(x+width-="" .1,="" *.1,="" .2,="" ctx.strokerect(x,="" city="" bg="" citygraphiccanvas;="" createcitygraphic(){="" if(citygraphiccanvas){="" canvascontainer.removechild(citygraphiccanvas);="" citygraphiccanvas="document.createElement("canvas");" citygraphiccanvas.style.position="absolute" citygraphiccanvas.style.left="canvas.style.left;" citygraphiccanvas.style.top="canvas.style.top;" citygraphiccanvas.width="canvas.width;" citygraphiccanvas.height="canvas.height;" cgcontext="cityGraphicCanvas.getContext("2d");" citygraphicheight="canvas.height" .25;="" fill="" with="" blue="" sky="" cgcontext.fillstyle="#71c5cf" cgcontext.fillrect(0,="" canvas.width,="" canvas.height);="" cgcontext.save();="" cgcontext.translate(0,="" groundgraphicrect.y="" citygraphicheight);="" clouds="" maxcloudradius="cityGraphicHeight" .4;="" mincloudradius="maxCloudRadius" .5;="" for(iterator="0;" iterator<canvas.width;="" iterator+="minCloudRadius){" cgcontext.beginpath();="" cgcontext.arc(="" iterator="" maxcloudradius,="" sakri.mathutil.getrandomnumberinrange(mincloudradius,="" maxcloudradius),="" sakri.mathutil.pi2);="" cgcontext.closepath();="" cgcontext.fill();="" cgcontext.fillrect(0,maxcloudradius,="" );="" houses="" housewidth;="" househeight;="" housewidth="20" math.floor(math.random()*30);="" househeight="Sakri.MathUtil.getRandomNumberInRange(cityGraphicHeight" *.5="" *.8);="" cgcontext.fillrect(iterator,="" househeight,="" housewidth,="" househeight);="" cgcontext.strokestyle="#9fd5d5" cgcontext.linewidth="3;" cgcontext.strokerect(iterator,="" trees="" maxtreeradius="cityGraphicHeight" .3;="" mintreeradius="maxTreeRadius" radius;="" strokestartradian="Math.PI" math.pi="" 4;="" strokeendradian="Math.PI" radius="Sakri.MathUtil.getRandomNumberInRange(minCloudRadius," maxcloudradius)="" citygraphicheight,="" radius,="" strokestartradian,="" strokeendradian);="" cgcontext.stroke();="" cgcontext.restore();="" sand="" cgcontext.fillrect(0,groundgraphicrect.y,="" canvascontainer.insertbefore(citygraphiccanvas,="" canvascontainer.firstchild);="" ground="" groundx="0;" rendergroundpattern(){="" context.drawimage(groundpatterncanvas,="" groundx,="" groundgraphicrect.y);="" %="16;" colors="" groundlightgreen="#97e556" grounddarkgreen="#73be29" grounddarkergreen="#4b7e19" groundshadow="#d1a649" groundborder="#4c3f48" groundgraphicrect="new" sakri.geom.rectangle();="" groundpatterncanvas;="" creategroundpattern(){="" if(!groundpatterncanvas){="" groundpatterncanvas="document.createElement("canvas");" groundpatterncanvas.width="16;" groundpatterncanvas.height="16;" groundcontext="groundPatternCanvas.getContext("2d");" groundcontext.fillstyle="groundLightGreen;" groundcontext.fillrect(0,0,16,16);="" diagonal="" graphic="" groundcontext.beginpath();="" groundcontext.moveto(8,3);="" groundcontext.lineto(16,3);="" groundcontext.lineto(8,13);="" groundcontext.lineto(0,13);="" groundcontext.closepath();="" groundcontext.fill();="" border="" groundcontext.globalalpha=".2;" groundcontext.fillrect(0,0,16,1);="" groundcontext.fillrect(0,1,16,1);="" groundcontext.fillrect(0,2,16,1);="" groundcontext.fillrect(0,3,16,2);="" groundcontext.fillrect(0,10,16,3);="" groundcontext.fillrect(0,11,16,1);="" shadow="" groundcontext.fillrect(0,13,16,3);="" groundpattern="context.createPattern(groundPatternCanvas," "repeat-x");="" 16;="" groundcontext.fillrect(0,="" groundpatterncanvas.width,="" 16);="" cleartimeoutsandintervals(){="" gamestate="-1;" maxcharacters="8;" changetext(){="" textinput="document.getElementById("textInput");" if(textinput.value="" &&="" textinput.text!="" if(textinput.value.length=""> maxCharacters){
                alert("Sorry, there is only room for "+maxCharacters+" characters. Try a shorter name.");
                return;
            }
            if(textInput.value.indexOf(" ")>-1){
                alert("Sorry, no support for spaces right now :(");
                return;
            }
            word = textInput.value;
            clearTimeoutsAndIntervals();
            animating = false;
            setTimeout(commitResize, 100);
        }
    }</characters.length-1;i++){></=0){></=></minimumstagewidth></=>