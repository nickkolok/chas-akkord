var currentTargetElement=document.getElementsByTagName('pre')[0];
var currentAutoFunction=scaleTargetElement;
var columnCount=2;

function scaleTargetElement(){
	currentTargetElement.style.zIndex=9999998;
	currentTargetElement.style.WebkitColumnCount=columnCount;
	var zoom=Math.min(
		document.body.clientHeight/currentTargetElement.offsetHeight,
		document.body.offsetWidth/currentTargetElement.offsetWidth,
		1.46
	);
	currentTargetElement.style.zoom=zoom;
	document.getElementById('mashtab').value=Math.round(zoom*100 ) /100;
}

function agressiveNormalize(){
	scaleTargetElement();
	currentTargetElement.style.backgroundColor="white";
	currentTargetElement.style.color="black";
	currentTargetElement.style.position="fixed";
	currentTargetElement.style.left=0;
	currentTargetElement.style.top=0;
	currentTargetElement.style.zIndex=9999998;	
	currentTargetElement.style.padding="1em";
}

function createPanel(){
	var panel=document.createElement('div');
	panel.id="panel";
	panel.style.position='fixed';
	panel.style.right=0;
	panel.style.bottom=0;
	panel.style.backgroundColor='pink';
	panel.style.zIndex=9999999;
	panel.style.fontSize="12px";

	var but=document.createElement('button');
	but.innerHTML='Подогнать!';
	$(but).click(currentAutoFunction);
	panel.appendChild(but);

	var lab=document.createElement('label');
	lab.innerHTML='Масштаб';
	panel.appendChild(lab);

	var but3=document.createElement('button');
	but3.innerHTML='+';
	$(but3).click(mashtabPlus);
	but3.style.width="2em";
	panel.appendChild(but3);

	var but4=document.createElement('button');
	but4.innerHTML='-';
	$(but4).click(mashtabMinus);
	but4.style.width="2em";
	panel.appendChild(but4);

	var inp=document.createElement('input');
	inp.id='mashtab';
	inp.width="50";
	inp.value="1";
	panel.appendChild(inp);

	var but2=document.createElement('button');
	but2.innerHTML='Вперёд!';
	$(but2).click(updateMashtab);
	panel.appendChild(but2);
	
	document.body.appendChild(panel);
}

function mashtabPlus(){
	document.getElementById('mashtab').value=0.03+1*document.getElementById('mashtab').value;
	updateMashtab();
}

function mashtabMinus(){
	document.getElementById('mashtab').value=-0.03+1*document.getElementById('mashtab').value;
	updateMashtab();
}

function updateMashtab(){
	currentTargetElement.style.zoom=document.getElementById('mashtab').value;
}

function muzland(){
	try{
		document.getElementsByTagName('center')[5].innerHTML='';
	}catch(e){};
	document.getElementsByClassName('index_width')[0].style.width="auto";
	document.getElementsByClassName('accords_left')[0].style.width=(document.body.offsetWidth-270)+'px';
	scaleTargetElement();
}

function hm6(){
	$('.b-main_aside')[0].style.float="none";
	$('.b-main_aside')[0].style.width="auto";
	scaleTargetElement();
}

function polnolunie(){
	$('#panel').remove();
	var text=document.body.innerHTML;
	textArray=text.split("<hr>");
	document.body.innerHTML='<style>.twocolumn{-webkit-column-count:2;}</style>'+
		'<div id="chas-akkord-wrap"><div class="twocolumn">'+
		textArray.join('</div><hr/><hr/><div class="twocolumn">')+'</div></div>';
	currentTargetElement=$('#chas-akkord-wrap')[0];
	createPanel();
}

function guitarmusic(){
	$('pre > img').remove();
	scaleTargetElement();
}

if(document.location.href.match(/muzland/)){
	currentAutoFunction=muzland;
}else if(document.location.href.match(/hm6/)){
	currentAutoFunction=hm6;
}else if(document.location.href.match(/bards/)){
	currentAutoFunction=scaleTargetElement;
}else if(document.location.href.match(/falshivim-vmeste/)){
	currentAutoFunction=scaleTargetElement;
}else if(document.location.href.match(/polnolunie/)){
	currentAutoFunction=polnolunie;
	currentTargetElement=document.body;
}else if(document.location.href.match(/guitarmusic/)){
	currentAutoFunction=guitarmusic;
}else if(document.location.href.match(/pesni/)){
	currentTargetElement=$('ul#text-song > li')[1];
	currentAutoFunction=agressiveNormalize;
}else if(document.location.href.match(/akkordy[.]su/)){
	currentTargetElement=$('.cnl_page')[0];
	currentAutoFunction=agressiveNormalize;
	columnCount=3;
}else if(document.location.href.match(/mirpesen[.]com/)){
	currentTargetElement=$('p.lyrics')[0];
}else{
}
createPanel();

console.log("chas-akkord отработал");
