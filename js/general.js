var img_ef='';
function shou_Loading()
{
 document.getElementById('img_container').innerHTML='<img src="../ibox/images/indicator.gif" id="crop"  /><br><span style="font-size:17px;">Loading...Please,wait.</span>';
}

function Upload_true(url,w,h)
{

//$('niz_meniu').style.marginTop=h+100+'px';
 $('img_container').innerHTML='<div id="come_crop"><span> '+rezize_drag+' </span></div><img src="../'+url+'" id="crop" width="'+w+'" height="'+h+'"  /><style type="text/css">#unsichtbarkeit {display:inline;}</style><style type="text/css">#sichtbarkeit {display:none;}</style>';

objImage = new Image();
 objImage.src='../'+url;
objImage.onLoad=imagesLoaded(w,h);

}

function Upload_false(message)

{

 $('img_container').innerHTML='<div id="come_crop"><span>'+message+'</span></div>';

}

function face_detect_done(image)

{
	
	//$('niz_meniu').style.marginTop='450px';
 $('img_container').innerHTML='<div id="come_crop"><p>'+grag_resize_face+'</p></div> <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="500" height="450"codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="'+image+'" /><embed type="application/x-shockwave-flash" width="500" height="450" src="'+image+'"></embed></object>';

}
function tools(image,w,h)
{
var id=$('id').value;
//$('niz_meniu').style.marginTop=h+'px';;
//$('page').innerHTML='<div id="content"></div>';
//$('footer_bloc2').style.marginTop=0+"px";
//$('footer_bloc2').style.height=200+"px";
el_id='page';
//ReadFile('../tools_div.php');
$('page').innerHTML='<table width="1000" border="0" cellspacing="0" cellpadding="0"><tr><td width="180" valign="top"><div id="bottom_navigation" align="left" style="padding-left:10px; width:180px;"></div></td><td ><div id="img" align="center" style="vertical-align:top;padding-top:10px;"><img src="../ibox/images/indicator.gif" id="crop"  /><br><span style="font-size:17px;">Loading...Please,wait.</span></div></td> </tr></table>';

	if(id=="text")
	{
		setTimeout ('createText("'+image+'");',1500);
	}
	if(id=="glitter_text")
	{
		setTimeout ('createGlitter("'+image+'");',1500);
	}
	if(id=="frames")
	{
		setTimeout ('createFrame("'+image+'");',1500);
	}
		if(id=="glitter_backgound")
	{
		setTimeout ('createBackground("'+image+'");',1500);
	}
		if(id=="glitter_stamps")
	{
		setTimeout ('createFun_Gliter("'+image+'");',1500);
	}
	
		if(id=="photo_effects")
	{
		img_ef=image;
		setTimeout ('createPhotoEffects("'+image+'");',1500);
	}
	

}


function ShowFB(num)
{
	
 $('img_container').innerHTML='<img src="../ibox/images/indicator.gif" id="crop"  /><br><span style="font-size:17px;">Loading...Please,wait.</span>';


	var req = new Request(
		{
	 		method: 'post',
			 url: '../face_make.php',
 			data: {'effect': $('effect').value ,'img':num,'id':$('id').value },


			 onRequest:function() 
 			{
			// alert('sent');
			 },

 			onComplete: function(result) 
 			{
					eval(result);
		 	}

 }).send();

}


function imagesLoaded(w,h)

{

  var foo=new cropper($('crop'),{ratio:$('ratio').value,        

		  width: w,

        height: h,

		expandToMax:true,

		maskTop: 100, 

		maskLeft: 100,

       maskWidth: 100,

	   maskHeight: 100,

       maskColor: 'black',

	   maskOpacity:0.6

       });

			foo.start();

	

}
function saveDisk(img)
{
	document.location.href='../disk_save.php?file=temp/'+basename($('crop').src);
	//alert($('crop').src);
}

function saveImageShack()
{
	$('code_ImageChack').innerHTML='<img src="../img/ajax-loader.gif" border="0" /><br><span style="font-size:14px;font-weight:bold;">Loading...Please,wait.</span> ';
	$('code_ImageChack').style.display="block";
	
	

//	ReadFile('../xmlapi.php?img_ts='+basename($('crop').src)+'');
	
	if(tool)
	{

		new Ajax.Request('../xmlapi.php?id='+Math.floor(Math.random()*11)+'', {
  		method: 'post',
  		parameters: {img_ts: basename($('crop').src)},
  		onSuccess:function(response)
 		 {
			//var h=toIntr($('niz_meniu').style.marginTop);
			//h=h+150;
			//$('niz_meniu').style.marginTop=h+'px';
  			//document.getElementById('code_ImageChack').innerHTML=response.responseText;
			eval(response.responseText);
  		},
  		onFailure:function()
  		{
  		alert('error');
  		}

});

		
	}
	else
	{	
	var req = new Request(
		{
	 		method: 'post',
			 url: '../xmlapi.php?id='+Math.floor(Math.random()*11)+'',
 			data: {'img_ts': basename($('crop').src) },


			 onRequest:function() 
 			{
			// alert('sent');
			 },

 			onComplete: function(result) 
 			{
					
					//	var h=toIntr($('niz_meniu').style.marginTop);
					//	h=h+150;
						//$('niz_meniu').style.marginTop=h+'px';
						//document.getElementById('code_ImageChack').innerHTML=result;
						eval(result);

		 	}

 }).send();
	}

 }
 
 function savefavorite()
 {
	var myVar = getCookie("usercookie");
	 if(!myVar)
	 {
		document.location.href='../login.php';
	 }
	 else
	 {
		$('code_ImageChack').innerHTML='<img src="../img/ajax-loader.gif" border="0" /><br><span style="font-size:14px;font-weight:bold;">Loading...Please,wait.</span> ';
		$('code_ImageChack').style.display="block";

		if(tool)
	{

		new Ajax.Request('../xmlapi.php?id='+Math.floor(Math.random()*11)+'&save=1', {
  		method: 'post',
  		parameters: {img_ts: basename($('crop').src)},
  		onSuccess:function(response)
 		 {
			eval(response.responseText)
  		},
  		onFailure:function()
  		{
  		alert('error');
  		}

});
	}
	else
	{	
	var req = new Request(
		{
	 		method: 'post',
			 url: '../xmlapi.php?id='+Math.floor(Math.random()*11)+'&save=1',
 			data: {'img_ts': basename($('crop').src) },


			 onRequest:function() 
 			{
			// alert('sent');
			 },

 			onComplete: function(result) 
 			{
					
						eval(result);

		 	}

 }).send();
	}
 
	 }

	 
 }
 function copy1(inElement , iddvd) {
	 inElement.focus();
	 inElement.select();
	document.getElementById(iddvd).style.display = 'block';
  if (inElement.createTextRange) {
    var range = inElement.createTextRange();
    if (range)
      range.execCommand('Copy');
  } else {
    var flashcopier = 'flashcopier';
    if(!document.getElementById(flashcopier)) {
      var divholder = document.createElement('div');
      divholder.id = flashcopier;
      document.body.appendChild(divholder);
    }
    document.getElementById(flashcopier).innerHTML = '';
    var divinfo = '<embed src="../clipboard.swf" FlashVars="clipboard='+encodeURIComponent(inElement.value)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
    document.getElementById(flashcopier).innerHTML = divinfo;
  }
	document.getElementById(iddvd).innerHTML = "<center><span style='color:#FF0000'>Copied to clipboard!</span></center>";
	setTimeout("document.getElementById("+iddvd+").style.display = 'none'",3000);
}


function basename(path) {
    return path.replace(/\\/g,'/').replace( /.*\//, '' );
}


function createText(image)
	{
		
			
			var showtekst='Enter here your text';
			var showfont='Action Man';
			var showlocatie='top';
			var showcolor='E60000';
			var showgroottetext=22;
			
			//if(curCrop!=null){curCrop.remove();}
		//	document.getElementById('cropWrap').innerHTML ='<img src="'+ document.getElementById('save_img').value+'" id="cropImage" />';
			

			var control=' <form name="crop" action="" method="post" class="frmCrop">';
			
			control+='<div id="come_top">'+Add_text+'</div>';
			control+='<input type="hidden" class="hidden" name="imageFileName" id="imageFileName" value="'+ image+'" />';
			control+='<table  border="0" cellpadding="0" cellspacing="0" width="260">';
			control+='<tr><td align="left" style="padding-top:10px;" colspan=2><textarea name="input_text" rows="3" cols="30" id="text_input" class="sol_input_textarea" onChange="keeptekst=document.getElementById(\'text_input\').value;"/>'+showtekst+'</textarea></td>';
			control+='</tr><tr>';
			//glitter font//
			control+='<td align="left" style="padding-top:5px;"><div id="tools_text">'+Font+':</div></td>';
			control+='<td align="left" style="padding-top:5px;">';
			control+='<select name="loadFonth"  id="loadFonth" style="width:130px" onChange="keepfont=document.getElementById(\'loadFonth\').value;image(\'\'+this.value+\'\')">';
			control+="<option "; if (showfont=='Action Man'){ control+="selected "} control+="value='Action Man' > Action Man</option>";
			control+="<option "; if (showfont=='Aether Fox'){ control+="selected "} control+="value='Aether Fox' > Aether Fox</option>";
			control+="<option "; if (showfont=='Alexit'){ control+="selected "} control+="value='Alexis' > Alexis</option>";
			control+="<option "; if (showfont=='Antsy Pants'){ control+="selected "} control+="value='Antsy Pants' > Antsy Pants</option>";
			control+="<option "; if (showfont=='Architecture'){ control+="selected "} control+="value='Architecture' > Architecture</option>";
			control+="<option "; if (showfont=='Arial'){ control+="selected "} control+="value='Arial' > Arial</option>";
			control+="<option "; if (showfont=='Army'){ control+="selected "} control+="value='Army' > Army</option>";
			control+="<option "; if (showfont=='Astrolyte'){ control+="selected "} control+="value='Astrolyte' > Astrolyte</option>";
			control+="<option "; if (showfont=='Avquest'){ control+="selected "} control+="value='Avquest' > Avquest</option>";
			control+="<option "; if (showfont=='Bad Cargo'){ control+="selected "} control+="value='Bad Cargo' > Bad Cargo</option>";
			control+="<option "; if (showfont=='Balloon Bold BT'){ control+="selected "} control+="value='Balloon Bold BT' > Balloon Bold BT</option>";
			control+="<option "; if (showfont=='Bandwidth Bandmess BRK'){ control+="selected "} control+="value='Bandwidth Bandmess BRK' > Bandwidth Bandmess BRK</option>";
			control+="<option "; if (showfont=='Bardatrick'){ control+="selected "} control+="value='Bardatrick' > Bardatrick</option>";
			control+="<option "; if (showfont=='Base'){ control+="selected "} control+="value='Base' > Base</option>";
			control+="<option "; if (showfont=='Batman'){ control+="selected "} control+="value='Batman' > Batman</option>";
			control+="<option "; if (showfont=='BatmanForeverAlternate'){ control+="selected "} control+="value='BatmanForeverAlternate' > BatmanForeverAlternate</option>";
			control+="<option "; if (showfont=='Battlefield'){ control+="selected "} control+="value='Battlefield' > Battlefield</option>";
			control+="<option "; if (showfont=='Bauer'){ control+="selected "} control+="value='Bauer' > Bauer</option>";
			control+="<option "; if (showfont=='Beast Machines'){ control+="selected "} control+="value='Beast Machines' > Beast Machines</option>";
			control+="<option "; if (showfont=='Bergell LET'){ control+="selected "} control+="value='Bergell LET' > Bergell LET</option>";
			control+="<option "; if (showfont=='Beware'){ control+="selected "} control+="value='Beware' > Beware</option>";
			control+="<option "; if (showfont=='Billo'){ control+="selected "} control+="value='Billo' > Billo</option>";
			control+="<option "; if (showfont=='Borg'){ control+="selected "} control+="value='Borg' > Borg</option>";
			control+="<option "; if (showfont=='Bottix'){ control+="selected "} control+="value='Bottix' > Bottix</option>";
			control+="<option "; if (showfont=='Bremen Cameo 3D'){ control+="selected "} control+="value='Bremen Cameo 3D' > Bremen Cameo 3D</option>";
			control+="<option "; if (showfont=='Bring Tha Noize'){ control+="selected "} control+="value='Bring Tha Noize' > Bring Tha Noize</option>";
			control+="<option "; if (showfont=='Brush Script MT'){ control+="selected "} control+="value='Brush Script MT' > Brush Script MT</option>";
			control+="<option "; if (showfont=='Bubble'){ control+="selected "} control+="value='Bubble' > Bubble</option>";
			control+="<option "; if (showfont=='Captain Podd'){ control+="selected "} control+="value='Captain Podd' > Captain Podd</option>";
			control+="<option "; if (showfont=='Carbon Block'){ control+="selected "} control+="value='Carbon Block' > Carbon Block</option>";
			control+="<option "; if (showfont=='Celtic Garamond'){ control+="selected "} control+="value='Celtic Garamond' > Celtic Garamond</option>";
			control+="<option "; if (showfont=='Chemical Reaction'){ control+="selected "} control+="value='Chemical Reaction' > Chemical Reaction</option>";
			control+="<option "; if (showfont=='Chrome Yellow'){ control+="selected "} control+="value='Chrome Yellow' > Chrome Yellow</option>";
			control+="<option "; if (showfont=='Chromosome'){ control+="selected "} control+="value='Chromosome' > Chromosome</option>";
			control+="<option "; if (showfont=='Chronicles of a hero'){ control+="selected "} control+="value='Chronicles of a hero' > Chronicles of a hero</option>";
			control+="<option "; if (showfont=='College'){ control+="selected "} control+="value='College' > College</option>";
			control+="<option "; if (showfont=='Comic Sans'){ control+="selected "} control+="value='Comic Sans' > Comic Sans</option>";
			control+="<option "; if (showfont=='Corrida'){ control+="selected "} control+="value='Corrida' > Corrida</option>";
			control+="<option "; if (showfont=='Courier New'){ control+="selected "} control+="value='Courier New' > Courier New</option>";
			control+="<option "; if (showfont=='Cramps'){ control+="selected "} control+="value='Cramps' > Cramps</option>";
			control+="<option "; if (showfont=='Cream Puff'){ control+="selected "} control+="value='Cream Puff' > Cream Puff</option>";
			control+="<option "; if (showfont=='Creepy'){ control+="selected "} control+="value='Creepy' > Creepy</option>";
			control+="<option "; if (showfont=='Curlz'){ control+="selected "} control+="value='Curlz' > Curlz</option>";
			control+="<option "; if (showfont=='Dance Club'){ control+="selected "} control+="value='Dance Club' > Dance Club</option>";
			control+="<option "; if (showfont=='Deftone Stylus'){ control+="selected "} control+="value='Deftone Stylus' > Deftone Stylus</option>";
			control+="<option "; if (showfont=='Degrassi'){ control+="selected "} control+="value='Degrassi' > Degrassi</option>";
			control+="<option "; if (showfont=='Digital'){ control+="selected "} control+="value='Digital' > Digital</option>";
			control+="<option "; if (showfont=='Diploma'){ control+="selected "} control+="value='Diploma' > Diploma</option>";
			control+="<option "; if (showfont=='Dirty Ego'){ control+="selected "} control+="value='Dirty Ego' > Dirty Ego</option>";
			control+="<option "; if (showfont=='Disintigration'){ control+="selected "} control+="value='Disintigration' > Disintigration</option>";
			control+="<option "; if (showfont=='Distant Galaxy'){ control+="selected "} control+="value='Distant Galaxy' > Distant Galaxy</option>";
			control+="<option "; if (showfont=='Dodger'){ control+="selected "} control+="value='Dodger' > Dodger</option>";
			control+="<option "; if (showfont=='Dollar'){ control+="selected "} control+="value='Dollar' > Dollar</option>";
			control+="<option "; if (showfont=='Dope Jam'){ control+="selected "} control+="value='Dope Jam' > Dope Jam</option>";
			control+="<option "; if (showfont=='Dream Orphans'){ control+="selected "} control+="value='Dream Orphans' > Dream Orphans</option>";
			control+="<option "; if (showfont=='Earthquake'){ control+="selected "} control+="value='Earthquake' > Earthquake</option>";
			control+="<option "; if (showfont=='Edwardian Script'){ control+="selected "} control+="value='Edwardian Script' > Edwardian Script</option>";
			control+="<option "; if (showfont=='Embassy BT'){ control+="selected "} control+="value='Embassy BT' > Embassy BT</option>";
			control+="<option "; if (showfont=='Eraser Dust'){ control+="selected "} control+="value='Eraser Dust' > Eraser Dust</option>";
			control+="<option "; if (showfont=='Fat Boy Slim'){ control+="selected "} control+="value='Fat Boy Slim' > Fat Boy Slim</option>";
			control+="<option "; if (showfont=='Fiolex Girls'){ control+="selected "} control+="value='Fiolex Girls' > Fiolex Girls</option>";
			control+="<option "; if (showfont=='Fluoride'){ control+="selected "} control+="value='Fluoride' > Fluoride</option>";
			control+="<option "; if (showfont=='Gothic'){ control+="selected "} control+="value='Gothic' > Gothic</option>";
			control+="<option "; if (showfont=='Graffiti Treat'){ control+="selected "} control+="value='Graffiti Treat' > Graffiti Treat</option>";
			control+="<option "; if (showfont=='Grand Stylus'){ control+="selected "} control+="value='Grand Stylus' > Grand Stylus</option>";
			control+="<option "; if (showfont=='Gyparody'){ control+="selected "} control+="value='Gyparody' > Gyparody</option>";
			control+="<option "; if (showfont=='Hard Core'){ control+="selected "} control+="value='Hard Core' > Hard Core</option>";
			control+="<option "; if (showfont=='Heaven'){ control+="selected "} control+="value='Heaven' > Heaven</option>";
			control+="<option "; if (showfont=='Hursheys'){ control+="selected "} control+="value='Hursheys' > Hursheys</option>";
			control+="<option "; if (showfont=='Isuzu'){ control+="selected "} control+="value='Isuzu' > Isuzu</option>";
			control+="<option "; if (showfont=='Lucida Sans Unicode'){ control+="selected "} control+="value='Lucida Sans Unicode' > Lucida Sans Unicode</option>";
			control+="<option "; if (showfont=='Micro N55'){ control+="selected "} control+="value='Micro N55' > Micro N55</option>";
			control+="<option "; if (showfont=='Micro N56'){ control+="selected "} control+="value='Micro N56' > Micro N56</option>";
			control+="<option "; if (showfont=='Microgramma'){ control+="selected "} control+="value='Microgramma' > Microgramma</option>";
			control+="<option "; if (showfont=='Mini'){ control+="selected "} control+="value='Mini' > Mini</option>";
			control+="<option "; if (showfont=='Neuropol'){ control+="selected "} control+="value='Neuropol' > Neuropol</option>";
			control+="<option "; if (showfont=='Neuropol Medium'){ control+="selected "} control+="value='Neuropol Medium' > Neuropol Medium</option>";
			control+="<option "; if (showfont=='Never Say Die'){ control+="selected "} control+="value='Never Say Die' > Never Say Die</option>";
			control+="<option "; if (showfont=='Ogilvie'){ control+="selected "} control+="value='Ogilvie' > Ogilvie</option>";
			control+="<option "; if (showfont=='Plain O Matic'){ control+="selected "} control+="value='Plain O Matic' > Plain O Matic</option>";
			control+="<option "; if (showfont=='Plastique'){ control+="selected "} control+="value='Plastique' > Plastique</option>";
			control+="<option "; if (showfont=='Plump'){ control+="selected "} control+="value='Plump' > Plump</option>";
			control+="<option "; if (showfont=='Puma'){ control+="selected "} control+="value='Puma' > Puma</option>";
			control+="<option "; if (showfont=='Quill'){ control+="selected "} control+="value='Quill' > Quill</option>";
			control+="<option "; if (showfont=='Reska Graf'){ control+="selected "} control+="value='Reska Graf' > Reska Graf</option>";
			control+="<option "; if (showfont=='Serpentine Bold'){ control+="selected "} control+="value='Serpentine Bold' > Serpentine Bold</option>";
			control+="<option "; if (showfont=='Shopping List'){ control+="selected "} control+="value='Shopping List' > Shopping List</option>";
			control+="<option "; if (showfont=='Slammer Tag'){ control+="selected "} control+="value='Slammer Tag' > Slammer Tag</option>";
			control+="<option "; if (showfont=='Sofachrome Italic'){ control+="selected "} control+="value='Sofachrome Italic' > Sofachrome Italic</option>";
			control+="<option "; if (showfont=='Solo'){ control+="selected "} control+="value='Solo' > Solo</option>";
			control+="<option "; if (showfont=='Space Toaster'){ control+="selected "} control+="value='Space Toaster' > Space Toaster</option>";
			control+="<option "; if (showfont=='Stencil'){ control+="selected "} control+="value='Stencil' > Stencil</option>";
			control+="<option "; if (showfont=='Styrofoam Feelings'){ control+="selected "} control+="value='Styrofoam Feelings' > Styrofoam Feelings</option>";
			control+="<option "; if (showfont=='Super 911'){ control+="selected "} control+="value='Super 911' > Super 911</option>";
			control+="<option "; if (showfont=='Tags Extreme'){ control+="selected "} control+="value='Tags Extreme' > Tags Extreme</option>";
			control+="<option "; if (showfont=='Tech'){ control+="selected "} control+="value='Tech' > Tech</option>";
			control+="<option "; if (showfont=='The Battle'){ control+="selected "} control+="value='The Battle' > The Battle</option>";
			control+="<option "; if (showfont=='The Guru'){ control+="selected "} control+="value='The Guru' > The Guru</option>";
			control+="<option "; if (showfont=='Thug'){ control+="selected "} control+="value='Thug' > Thug</option>";
			control+="<option "; if (showfont=='Verdana'){ control+="selected "} control+="value='Verdana' > Verdana</option>";
			control+="<option "; if (showfont=='Weltron Urban'){ control+="selected "} control+="value='Weltron Urban' > Weltron Urban</option>";
			control+='</select></tr><tr>';
			//glitter font Preview/
			control+='<td></td><td><img  name="image_font" id="image_font" src="../font_image/'+urlencode(showfont)+'.gif" ></td></tr><tr>';
			//lokatie
			control+='<td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Orientation+':</div></td>';
			control+='<td align="left" style="padding-top:5px;"><select name="location_" id="location_text" onChange="keeplocatie=document.getElementById(\'location_text\').value;">';
			control+="<option selected value='horizontal'>Horizontal text</option>";
			control+="<option value='vertical'>Vertical text</option>";
			control+='</select></td>';
			control+='</tr><tr>';
			control+='<td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Text_color+':</div></td>';
			control+='<td align="left" style="padding-top:5px;"><input type="hidden" id="colorfield" value="'+showcolor+'" ><button style="width: 1.5em; height: 1.5em; border: 1px outset #666;" id="colorbox" class="colorbox"></button> <div style="display:inline;" class="sol_font_smal">&larr; click color</a></td>';
			control+='</tr><tr>';
			control+='<td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Font_size+':</div></td>';
			control+='<td align="left" style="padding-top:5px;"><select name="font_size" id="font_size" onChange="keepgroottetext=document.getElementById(\'font_size\').value;">';
			control+="<option "; if (showgroottetext=='12'){ control+="selected "} control+="value='12'>12</option>";
			control+="<option "; if (showgroottetext=='16'){ control+="selected "} control+="value='16'>16</option>";
			control+="<option "; if (showgroottetext=='20'){ control+="selected "} control+="value='20'>20</option>";
			control+="<option "; if (showgroottetext=='22'){ control+="selected "} control+="value='22'>22</option>";
			control+="<option "; if (showgroottetext=='24'){ control+="selected "} control+="value='24'>24</option>";
			control+="<option "; if (showgroottetext=='32'){ control+="selected "} control+="value='32'>32</option>";
			control+="<option "; if (showgroottetext=='40'){ control+="selected "} control+="value='40'>40</option>";
			control+="<option "; if (showgroottetext=='48'){ control+="selected "} control+="value='48'>48</option>";
			control+='</select></td>';
			control+='</tr><tr>';
			control+='<td colspan="2" align="left" style="padding-top:5px;"><input type="button" name="butUploadurl" value="'+preview+'"  id="butUploadurl" class="butGreen"  onclick="';
			control+="previewtext('../process.php?act=addtext','addtext')";
			control+=';" /></td>';
			control+='</tr></table></form>';
			control+='<div id="mov_glit"></div>';
		
		//alert(image);
			$('img').innerHTML ='<img src="../'+ image+'" id="cropImage" />';
			$('bottom_navigation').innerHTML=control;
			new Control.ColorPicker("colorfield", { IMAGE_BASE : "../imag/", "swatch" : "colorbox" });
			

			//document.getElementById('control').innerHTML = control;
			
	}

	function createFrame(image)
	{
		
			$('img').innerHTML ='<img src="../'+ image+'" id="cropImage" />';
			el_id='bottom_navigation';
		ReadFile("../frame.php?act=first&table=fram")
	}
	
	function createPhotoEffects(image)
	{
			$('img').innerHTML ='<img src="../'+ image+'" id="cropImage" />';
			el_id='bottom_navigation';
	ReadFile("../photo_effects.php");
	}

	
	function createBackground(image)
	{
			$('img').innerHTML ='<img src="../'+ image+'" id="cropImage" />';
			el_id='bottom_navigation';
			ReadFile("../frame.php?act=first&table=backgrounds")
	}

	function createFun_Gliter(image)
	{
		
		if(document.getElementById('lines'))
		{
		var image='fotogag/uploads//'+basename(chekbr().getElementById('image_line').src);
		}

		$('img').innerHTML ='<img src="../'+ image+'" id="cropImage" />';
		el_id='bottom_navigation';
		tItemCounter=1000;
		elmid=null;

		//el_id='control';
		ReadFile("../fun_glitter.php");
		
	window.setTimeout('el_id=1;ReadFile("../set_glitter.php?imageFileName='+image+'")',1500);
		//el_id=1;
		

	}
	
	function setGlittereImage(im,w,h)
{
	document.getElementById("s_cur_gl").src=im;
	document.getElementById("cur_glitter").value =im;
	document.getElementById("image_width").value =w;
	document.getElementById("image_height").value =h;

}
function createGlitter(image)
	{

			  var showtekst='Enter here your text';
			var showfont='Action Man';
			var showlocatie='top';
			var showgrootteglitter=40;
			var showhoek=0;
			var showglitter='imag/DCglit32.gif';
			var showschaduw=1;
			var showrand=3;
			var showranddikte=1;

			//document.getElementById('cropWrap').innerHTML ='<img src="'+ document.getElementById('save_img').value+'" id="cropImage" />';
			
			var control=' <form name="crop" action="" method="post" class="frmCrop">';
			control+='<div id="come_top">'+Add_glitter_text+'</div>';
			control+='<input type="hidden" class="hidden" name="imageFileName" id="imageFileName" value="'+ image+'" />';
				
			control+='<br><table  border="0" cellpadding="0" cellspacing="0" width="220">';
			//glitter tekst/.
			control+='<tr><td align="left" style="padding-top:10px;" colspan=2><textarea name="t" rows="3" cols="30" id="t" class="sol_input_glittertext" />'+showtekst+'</textarea>';
			control+='</tr><tr>';
			//glitter font//
			control+='<td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Font+':</div</td>';
			control+='<td align="right" style="padding-top:5px;width:100px">';
			control+='<select name="loadFonth"  id="loadFonth" style="width:130px;border:solid 1px #DEEEFf;" onChange="keepfont=document.getElementById(\'loadFonth\').value;image(\'\'+this.value+\'\')">';
			control+="<option "; if (showfont=='Action Man'){ control+="selected "} control+="value='Action Man' > Action Man</option>";
			control+="<option "; if (showfont=='Aether Fox'){ control+="selected "} control+="value='Aether Fox' > Aether Fox</option>";
			control+="<option "; if (showfont=='Alexit'){ control+="selected "} control+="value='Alexis' > Alexis</option>";
			control+="<option "; if (showfont=='Antsy Pants'){ control+="selected "} control+="value='Antsy Pants' > Antsy Pants</option>";
			control+="<option "; if (showfont=='Architecture'){ control+="selected "} control+="value='Architecture' > Architecture</option>";
			control+="<option "; if (showfont=='Arial'){ control+="selected "} control+="value='Arial' > Arial</option>";
			control+="<option "; if (showfont=='Army'){ control+="selected "} control+="value='Army' > Army</option>";
			control+="<option "; if (showfont=='Astrolyte'){ control+="selected "} control+="value='Astrolyte' > Astrolyte</option>";
			control+="<option "; if (showfont=='Avquest'){ control+="selected "} control+="value='Avquest' > Avquest</option>";
			control+="<option "; if (showfont=='Bad Cargo'){ control+="selected "} control+="value='Bad Cargo' > Bad Cargo</option>";
			control+="<option "; if (showfont=='Balloon Bold BT'){ control+="selected "} control+="value='Balloon Bold BT' > Balloon Bold BT</option>";
			control+="<option "; if (showfont=='Bandwidth Bandmess BRK'){ control+="selected "} control+="value='Bandwidth Bandmess BRK' > Bandwidth Bandmess BRK</option>";
			control+="<option "; if (showfont=='Bardatrick'){ control+="selected "} control+="value='Bardatrick' > Bardatrick</option>";
			control+="<option "; if (showfont=='Base'){ control+="selected "} control+="value='Base' > Base</option>";
			control+="<option "; if (showfont=='Batman'){ control+="selected "} control+="value='Batman' > Batman</option>";
			control+="<option "; if (showfont=='BatmanForeverAlternate'){ control+="selected "} control+="value='BatmanForeverAlternate' > BatmanForeverAlternate</option>";
			control+="<option "; if (showfont=='Battlefield'){ control+="selected "} control+="value='Battlefield' > Battlefield</option>";
			control+="<option "; if (showfont=='Bauer'){ control+="selected "} control+="value='Bauer' > Bauer</option>";
			control+="<option "; if (showfont=='Beast Machines'){ control+="selected "} control+="value='Beast Machines' > Beast Machines</option>";
			control+="<option "; if (showfont=='Bergell LET'){ control+="selected "} control+="value='Bergell LET' > Bergell LET</option>";
			control+="<option "; if (showfont=='Beware'){ control+="selected "} control+="value='Beware' > Beware</option>";
			control+="<option "; if (showfont=='Billo'){ control+="selected "} control+="value='Billo' > Billo</option>";
			control+="<option "; if (showfont=='Borg'){ control+="selected "} control+="value='Borg' > Borg</option>";
			control+="<option "; if (showfont=='Bottix'){ control+="selected "} control+="value='Bottix' > Bottix</option>";
			control+="<option "; if (showfont=='Bremen Cameo 3D'){ control+="selected "} control+="value='Bremen Cameo 3D' > Bremen Cameo 3D</option>";
			control+="<option "; if (showfont=='Bring Tha Noize'){ control+="selected "} control+="value='Bring Tha Noize' > Bring Tha Noize</option>";
			control+="<option "; if (showfont=='Brush Script MT'){ control+="selected "} control+="value='Brush Script MT' > Brush Script MT</option>";
			control+="<option "; if (showfont=='Bubble'){ control+="selected "} control+="value='Bubble' > Bubble</option>";
			control+="<option "; if (showfont=='Captain Podd'){ control+="selected "} control+="value='Captain Podd' > Captain Podd</option>";
			control+="<option "; if (showfont=='Carbon Block'){ control+="selected "} control+="value='Carbon Block' > Carbon Block</option>";
			control+="<option "; if (showfont=='Celtic Garamond'){ control+="selected "} control+="value='Celtic Garamond' > Celtic Garamond</option>";
			control+="<option "; if (showfont=='Chemical Reaction'){ control+="selected "} control+="value='Chemical Reaction' > Chemical Reaction</option>";
			control+="<option "; if (showfont=='Chrome Yellow'){ control+="selected "} control+="value='Chrome Yellow' > Chrome Yellow</option>";
			control+="<option "; if (showfont=='Chromosome'){ control+="selected "} control+="value='Chromosome' > Chromosome</option>";
			control+="<option "; if (showfont=='Chronicles of a hero'){ control+="selected "} control+="value='Chronicles of a hero' > Chronicles of a hero</option>";
			control+="<option "; if (showfont=='College'){ control+="selected "} control+="value='College' > College</option>";
			control+="<option "; if (showfont=='Comic Sans'){ control+="selected "} control+="value='Comic Sans' > Comic Sans</option>";
			control+="<option "; if (showfont=='Corrida'){ control+="selected "} control+="value='Corrida' > Corrida</option>";
			control+="<option "; if (showfont=='Courier New'){ control+="selected "} control+="value='Courier New' > Courier New</option>";
			control+="<option "; if (showfont=='Cramps'){ control+="selected "} control+="value='Cramps' > Cramps</option>";
			control+="<option "; if (showfont=='Cream Puff'){ control+="selected "} control+="value='Cream Puff' > Cream Puff</option>";
			control+="<option "; if (showfont=='Creepy'){ control+="selected "} control+="value='Creepy' > Creepy</option>";
			control+="<option "; if (showfont=='Curlz'){ control+="selected "} control+="value='Curlz' > Curlz</option>";
			control+="<option "; if (showfont=='Dance Club'){ control+="selected "} control+="value='Dance Club' > Dance Club</option>";
			control+="<option "; if (showfont=='Deftone Stylus'){ control+="selected "} control+="value='Deftone Stylus' > Deftone Stylus</option>";
			control+="<option "; if (showfont=='Degrassi'){ control+="selected "} control+="value='Degrassi' > Degrassi</option>";
			control+="<option "; if (showfont=='Digital'){ control+="selected "} control+="value='Digital' > Digital</option>";
			control+="<option "; if (showfont=='Diploma'){ control+="selected "} control+="value='Diploma' > Diploma</option>";
			control+="<option "; if (showfont=='Dirty Ego'){ control+="selected "} control+="value='Dirty Ego' > Dirty Ego</option>";
			control+="<option "; if (showfont=='Disintigration'){ control+="selected "} control+="value='Disintigration' > Disintigration</option>";
			control+="<option "; if (showfont=='Distant Galaxy'){ control+="selected "} control+="value='Distant Galaxy' > Distant Galaxy</option>";
			control+="<option "; if (showfont=='Dodger'){ control+="selected "} control+="value='Dodger' > Dodger</option>";
			control+="<option "; if (showfont=='Dollar'){ control+="selected "} control+="value='Dollar' > Dollar</option>";
			control+="<option "; if (showfont=='Dope Jam'){ control+="selected "} control+="value='Dope Jam' > Dope Jam</option>";
			control+="<option "; if (showfont=='Dream Orphans'){ control+="selected "} control+="value='Dream Orphans' > Dream Orphans</option>";
			control+="<option "; if (showfont=='Earthquake'){ control+="selected "} control+="value='Earthquake' > Earthquake</option>";
			control+="<option "; if (showfont=='Edwardian Script'){ control+="selected "} control+="value='Edwardian Script' > Edwardian Script</option>";
			control+="<option "; if (showfont=='Embassy BT'){ control+="selected "} control+="value='Embassy BT' > Embassy BT</option>";
			control+="<option "; if (showfont=='Eraser Dust'){ control+="selected "} control+="value='Eraser Dust' > Eraser Dust</option>";
			control+="<option "; if (showfont=='Fat Boy Slim'){ control+="selected "} control+="value='Fat Boy Slim' > Fat Boy Slim</option>";
			control+="<option "; if (showfont=='Fiolex Girls'){ control+="selected "} control+="value='Fiolex Girls' > Fiolex Girls</option>";
			control+="<option "; if (showfont=='Fluoride'){ control+="selected "} control+="value='Fluoride' > Fluoride</option>";
			control+="<option "; if (showfont=='Gothic'){ control+="selected "} control+="value='Gothic' > Gothic</option>";
			control+="<option "; if (showfont=='Graffiti Treat'){ control+="selected "} control+="value='Graffiti Treat' > Graffiti Treat</option>";
			control+="<option "; if (showfont=='Grand Stylus'){ control+="selected "} control+="value='Grand Stylus' > Grand Stylus</option>";
			control+="<option "; if (showfont=='Gyparody'){ control+="selected "} control+="value='Gyparody' > Gyparody</option>";
			control+="<option "; if (showfont=='Hard Core'){ control+="selected "} control+="value='Hard Core' > Hard Core</option>";
			control+="<option "; if (showfont=='Heaven'){ control+="selected "} control+="value='Heaven' > Heaven</option>";
			control+="<option "; if (showfont=='Hursheys'){ control+="selected "} control+="value='Hursheys' > Hursheys</option>";
			control+="<option "; if (showfont=='Isuzu'){ control+="selected "} control+="value='Isuzu' > Isuzu</option>";
			control+="<option "; if (showfont=='Lucida Sans Unicode'){ control+="selected "} control+="value='Lucida Sans Unicode' > Lucida Sans Unicode</option>";
			control+="<option "; if (showfont=='Micro N55'){ control+="selected "} control+="value='Micro N55' > Micro N55</option>";
			control+="<option "; if (showfont=='Micro N56'){ control+="selected "} control+="value='Micro N56' > Micro N56</option>";
			control+="<option "; if (showfont=='Microgramma'){ control+="selected "} control+="value='Microgramma' > Microgramma</option>";
			control+="<option "; if (showfont=='Mini'){ control+="selected "} control+="value='Mini' > Mini</option>";
			control+="<option "; if (showfont=='Neuropol'){ control+="selected "} control+="value='Neuropol' > Neuropol</option>";
			control+="<option "; if (showfont=='Neuropol Medium'){ control+="selected "} control+="value='Neuropol Medium' > Neuropol Medium</option>";
			control+="<option "; if (showfont=='Never Say Die'){ control+="selected "} control+="value='Never Say Die' > Never Say Die</option>";
			control+="<option "; if (showfont=='Ogilvie'){ control+="selected "} control+="value='Ogilvie' > Ogilvie</option>";
			control+="<option "; if (showfont=='Plain O Matic'){ control+="selected "} control+="value='Plain O Matic' > Plain O Matic</option>";
			control+="<option "; if (showfont=='Plastique'){ control+="selected "} control+="value='Plastique' > Plastique</option>";
			control+="<option "; if (showfont=='Plump'){ control+="selected "} control+="value='Plump' > Plump</option>";
			control+="<option "; if (showfont=='Puma'){ control+="selected "} control+="value='Puma' > Puma</option>";
			control+="<option "; if (showfont=='Quill'){ control+="selected "} control+="value='Quill' > Quill</option>";
			control+="<option "; if (showfont=='Reska Graf'){ control+="selected "} control+="value='Reska Graf' > Reska Graf</option>";
			control+="<option "; if (showfont=='Serpentine Bold'){ control+="selected "} control+="value='Serpentine Bold' > Serpentine Bold</option>";
			control+="<option "; if (showfont=='Shopping List'){ control+="selected "} control+="value='Shopping List' > Shopping List</option>";
			control+="<option "; if (showfont=='Slammer Tag'){ control+="selected "} control+="value='Slammer Tag' > Slammer Tag</option>";
			control+="<option "; if (showfont=='Sofachrome Italic'){ control+="selected "} control+="value='Sofachrome Italic' > Sofachrome Italic</option>";
			control+="<option "; if (showfont=='Solo'){ control+="selected "} control+="value='Solo' > Solo</option>";
			control+="<option "; if (showfont=='Space Toaster'){ control+="selected "} control+="value='Space Toaster' > Space Toaster</option>";
			control+="<option "; if (showfont=='Stencil'){ control+="selected "} control+="value='Stencil' > Stencil</option>";
			control+="<option "; if (showfont=='Styrofoam Feelings'){ control+="selected "} control+="value='Styrofoam Feelings' > Styrofoam Feelings</option>";
			control+="<option "; if (showfont=='Super 911'){ control+="selected "} control+="value='Super 911' > Super 911</option>";
			control+="<option "; if (showfont=='Tags Extreme'){ control+="selected "} control+="value='Tags Extreme' > Tags Extreme</option>";
			control+="<option "; if (showfont=='Tech'){ control+="selected "} control+="value='Tech' > Tech</option>";
			control+="<option "; if (showfont=='The Battle'){ control+="selected "} control+="value='The Battle' > The Battle</option>";
			control+="<option "; if (showfont=='The Guru'){ control+="selected "} control+="value='The Guru' > The Guru</option>";
			control+="<option "; if (showfont=='Thug'){ control+="selected "} control+="value='Thug' > Thug</option>";
			control+="<option "; if (showfont=='Verdana'){ control+="selected "} control+="value='Verdana' > Verdana</option>";
			control+="<option "; if (showfont=='Weltron Urban'){ control+="selected "} control+="value='Weltron Urban' > Weltron Urban</option>";
			control+='</select></tr><tr>';
			//glitter font Preview/
		   control+='<td></td><td><img  name="image_font" id="image_font" src="../font_image/'+urlencode(showfont)+'.gif"></td></tr>';
			

			//tekst grootte//
			control+='<tr><td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Font_size+':</div></td>';
			control+='<td align="left" style="padding-top:5px;">';
			control+='<select name="size" id="size" style="border:solid 1px #DEEEFf;" onChange="keepgrootteglitter=document.getElementById(\'size\').value;"><option '; if (showgrootteglitter==16){ control+="selected "} control+='value="16" > XX-Small </option>  <option '; if (showgrootteglitter==24){ control+="selected "} control+='value="24" > X-Small </option> <option '; if (showgrootteglitter==32){ control+="selected "} control+='value="32" > Small </option>  <option '; if (showgrootteglitter==40){ control+="selected "} control+='value="40" > Medium </option>  <option '; if (showgrootteglitter==55){ control+="selected "} control+='value="55" > Large </option>  <option '; if (showgrootteglitter==72){ control+="selected "} control+='value="72" > X-Large </option>  <option '; if (showgrootteglitter==90){ control+="selected "} control+='value="90" > XX-Large </option>  </select>';
			control+='</td></tr><tr>';
			control+='</tr><tr>';
			//tekst hoek//
			control+='<td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Text_angle+':</div></td>';
			control+='<td align="left" style="padding-top:5px;">';
			control+='<select name="angle" id="angle" style="border:solid 1px #DEEEFf;" onChange="keephoek=document.getElementById(\'angle\').value;">';
			for (var n = 0; n <= 360; n++) {
				control+='<option '; 
				if (showhoek==n){ control+='selected ';} 
				control+='value="'+n+'"> '+n+'</option>';
			}
			control+='</select>';			
			control+='</td></tr><tr>';
			//glitter//
			control+='<td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Glitter_clic+':</div></td>';
			control+='<td align="left" style="padding-top:5px;">';
			var onclick="iBox.showURL('../glitters.php','Select your glitter','width=680;height=450;');";
			control+='<a href="javascript:void(0);" rel="ibox"><img name="color" id="color" src="../'+showglitter+'" width="60" height="30" onClick="'+onclick+'"></a>';
			control+='<input type=hidden name="glitte"r id="glitter" value="'+showglitter+'"></td>';
			control+='</tr><tr>';
			//schaduw//
			control+='<td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Shade+':</div></td>';
			control+='<td align="left" style="padding-top:5px;">';
			control+='<input type=radio name=RadioGroup1 value=1 '; if (showschaduw==1){ control+="checked "} control+=' onChange="keepschaduw=1;">Yes';
			control+='<input type=radio name=RadioGroup1 value=2 '; if (showschaduw==2){ control+="checked "} control+=' onChange="keepschaduw=2;">No</td>';
			control+='</tr><tr>';
			//rand//
			control+='<td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Border+':</div></td>';
			control+='<td align="left" style="padding-top:5px;">';
			control+='<input type=radio name=RadioGroup2 value=3 '; if (showrand==3){ control+="checked "} control+=' onChange="keeprand=3;">Yes';
			control+='<input type=radio name=RadioGroup2 value=4 '; if (showrand==4){ control+="checked "} control+=' onChange="keeprand=4;">No</td>';
			control+='</tr><tr>';
			//rand dikte//
			control+='<td align="left" class="sol_font_smal" style="padding-top:5px;"><div id="tools_text">'+Border_size+':</div></td>';
			control+='<td align="left" style="padding-top:5px;">';
			control+='<select name="border" id="border" style="border:solid 1px #DEEEFf;" onChange="keepranddikte=document.getElementById(\'border\').value;">';
			for (var n = 0; n <= 20; n++) {
				control+='<option '; 
				if (showranddikte==n){ control+='selected ';} 
				control+='value="'+n+'"> '+n+'</option>';
			}
			control+='</select></td>';			control+='</tr><tr>';
			//toepassen / uitvoeren//
			control+='<td colspan="2" align="left" style="padding-top:5px;"><input type="button" name="butUploadurl" value="'+preview+'"  id="butUploadurl" class="butGreen" onclick="';
			control+="previewglitter('../process.php?act=addglitter','addglitter')";
			control+=';" /></td>';
			control+='</tr></table></form>';
			control+='<div id="mov_glit"></div>';
			$('img').innerHTML ='<img src="../'+ image+'" id="cropImage" />';

			$('bottom_navigation').innerHTML=control;
		
	}
function image(img)
{
	document.forms['crop'].image_font.src = '../font_image/'+img+'.gif'
}
		
function previewtext(url,fun)
{
// $('img_container').innerHTML='<img src="../cropper/waiter1.gif" id="crop"  />';
	document.getElementById("mov_glit").innerHTML='<br><img src="../img/ajax-loader.gif" border="0" /><br><span style="font-size:14px;font-weight:bold;">Loading...Please,wait.</span> ';

new Ajax.Request(url, {
  method: 'post',
  parameters: {imageFileName: $('imageFileName').value , loadFonth: urlencode($('loadFonth').value), font_size:$('font_size').value, location_text:$('location_text').value, color_text:$('colorfield').value,text_input:urlencode($('text_input').value)},
  onSuccess:function(response)
  {
  eval(response.responseText);
  	document.getElementById("mov_glit").innerHTML='';

  },
  onFailure:function()
  {
  alert('error');
  }

});
}






function save_text(url)
{
var elstyle1=chekbr().getElementById('image_line').style;
var elstyle2=chekbr().getElementById('first').style;
var qstr=''+chekbr().getElementById('image_line').src+'#'+parseInt(elstyle1.left)+'#'+parseInt(elstyle1.top)+'#'+parseInt(elstyle1.width)+'#'+parseInt(elstyle1.height)+'**'+chekbr().getElementById('first').src+'#'+parseInt(elstyle2.left)+'#'+parseInt(elstyle2.top)+'#'+parseInt(elstyle2.width)+'#'+parseInt(elstyle2.height);

	document.getElementById("mov_glit").innerHTML='<br><img src="../img/ajax-loader.gif" border="0" /><br><span style="font-size:14px;font-weight:bold;">Loading...Please,wait.</span> ';

new Ajax.Request(url, {
  method: 'post',
  parameters: {mass: qstr },
  onSuccess:function(response)
  {
  	document.getElementById("mov_glit").innerHTML='';
	document.getElementById("bottom_navigation").innerHTML='<iframe id="lines" name="lines" style="width:120px;height:600px;border:0px solid black;padding:0px;" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="../adssense.php?id=4"></iframe>';
  eval(response.responseText);

  },
    onFailure:function()
  {
  alert('error');
  }

});
}

function previewglitter(url,fun)
{
	
	document.getElementById("mov_glit").innerHTML='<br><img src="../img/ajax-loader.gif" border="0" /><br><span style="font-size:14px;font-weight:bold;">Loading...Please,wait.</span> ';

	
new Ajax.Request(url, {
  method: 'post',
  parameters: {imageFileName: $('imageFileName').value , t: urlencode($('t').value), loadFonth:urlencode($('loadFonth').value), size:$('size').value, angle:$('angle').value,glitter:$('glitter').value,RadioGroup1:getCheckedValue(document.forms['crop'].RadioGroup1),RadioGroup2:getCheckedValue(document.forms['crop'].RadioGroup2),border:$('border').value},
  onSuccess:function(response)
  {
  eval(response.responseText);
  	document.getElementById("mov_glit").innerHTML=' ';

  },
  onFailure:function()
  {
  alert('error');
  }

});
}


		function urlencode(string){
	string = string.replace(/\r\n/g,"\n");
	var utftext = "";

	for (var n = 0; n < string.length; n++) {

		var c = string.charCodeAt(n);

		if (c < 128) {
			utftext += String.fromCharCode(c);
		}
		else if((c > 127) && (c < 2048)) {
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		}
		else {
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		}

	}
    return escape(utftext);
}

	function update_lines_pr(src1,w1,h1,src2,w2,h2)
	{
	//	var h=toIntr($('niz_meniu').style.marginTop);
	//	h=h+60;
	//	$('niz_meniu').style.marginTop=h+'px';

	chekbr().getElementById('image').innerHTML='<img  src="'+src1+'" id="image_line" style="LEFT: 0px;POSITION: absolute; TOP: 0px; width:'+w1+'px; height:'+h1+'px; visibility:; "><img  src="'+src2+'" id="first" style="LEFT: 0px;POSITION: absolute; TOP: 0px; width:'+w2+'px; height:'+h2+'px; visibility:; cursor:move; ">';

	var control='<br><div id="come_crop"><span>'+Click_and_drag_the_text+'</span></div>';
	control+='<input type="button" name="butUploadurl" value="'+add_text_but+'"  id="butUploadurl" class="butGreen" onclick="';
	control+="save_text('../process.php?act=txttran')";
	control+=';" /></div>';
	document.getElementById("mov_glit").innerHTML =control;
	//hide_Loading();
	
	}

function chekbr()
{
// get reference to form named 'ifrmTest' 

//document.getElementById("lines").contentDocument.getElementById('image_line').style;
var iframeEl = document.getElementById("lines");
	if ( iframeEl.contentDocument ) 
	{ // DOM
    	//var form = iframeEl.contentDocument.getElementById('ifrmTest');
		return (iframeEl.contentDocument);
	} 
	else if ( iframeEl.contentWindow ) 
	{ // IE win
    	//var form = iframeEl.contentWindow.document.getElementById('ifrmTest');
		return(self.lines.document)
	}
}

	function getCheckedValue(radioObj) {
		if(!radioObj)
			return "";
		var radioLength = radioObj.length;
		if(radioLength == undefined)
			if(radioObj.checked)
				return radioObj.value;
			else
				return "";
		for(var i = 0; i < radioLength; i++) {
			if(radioObj[i].checked) {
				return radioObj[i].value;
			}
		}
		return "";
	}

function setImage(p)
{
	document.forms['crop'].color.src = '../imag/'+p;
	document.forms['crop'].glitter.value = 'imag/'+p;
	keepglitter='imag/'+p;
	iBox.hide();
}


	function Setbackground(id)
	{
	
		if(!document.getElementById('lines'))
		{
		var image=basename($('cropImage').src);
		document.getElementById('cropImage').src='../ibox/images/indicator.gif';
		}
		else
		{
		var image=basename(chekbr().getElementById('image_line').src);
		}

		new Ajax.Request('../set_background.php?id='+id+'', {
  		method: 'post',
  		parameters: {imageFileName: image},
  		onSuccess:function(response)
 		{
			eval(response.responseText);
  		//document.getElementById('code_ImageChack').innerHTML=response.responseText;
  		},
  		onFailure:function()
  		{
  		alert('error');
  		}

});
	}

	
	function update_backgtound(src1,w1,h1,src2,w2,h2)
	{
	chekbr().getElementById('loadedImage').style.width=w1;
	chekbr().getElementById('loadedImage').style.height=h1;
	chekbr().getElementById('loadedImage').innerHTML='<img  src="'+src1+'" id="image_line" style="LEFT: 0px;POSITION: absolute; TOP: 0px; width:'+w1+'px; height:'+h1+'px; visibility:;"><div id="first" style="LEFT: 0px;POSITION: absolute; TOP: 0px; width:'+w2+'px; height:'+h2+'px; visibility:;background-image:url('+src2+');" >';
	}
	
function AddthisBackground()
{
	


		var elstyle1=chekbr().getElementById('image_line').style;
		var elstyle2=chekbr().getElementById('first').style;
		qstr=''+chekbr().getElementById('image_line').src+'#'+parseInt(elstyle1.left)+'#'+parseInt(elstyle1.top)+'#'+parseInt(elstyle1.width)+'#'+parseInt(elstyle1.height)+'**'+elstyle2.backgroundImage+'#'+parseInt(elstyle2.left)+'#'+parseInt(elstyle2.top)+'#'+parseInt(elstyle2.width)+'#'+parseInt(elstyle2.height);

document.getElementById("img").innerHTML='<br><img src="../ibox/images/indicator.gif" border="0" /><br><div id="tools_text">Please wait, it can take several minutes ...</div>  ';	
new Ajax.Request('../process.php?act=background', {
  method: 'post',
  parameters: {mass: qstr },
  onSuccess:function(response)
  {
	document.getElementById("bottom_navigation").innerHTML='<iframe id="lines" name="lines" style="width:120px;height:600px;border:0px solid black;padding:0px;" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="../adssense.php?id=4"></iframe>';
  eval(response.responseText);

  },
    onFailure:function()
  {
  alert('error');
  }

});
}
	

function makeEffect(url,metdot)
{

		var image=img_ef;
document.getElementById("img").innerHTML='<br><img src="../ibox/images/indicator.gif" border="0" /><br><div id="tools_text">Please wait, it can take several minutes ...</div>  ';	
		new Ajax.Request('../'+url, {
  		method: 'post',
  		parameters: {imageFileName: image,speed:document.getElementById('effect_sped').value},
  		onSuccess:function(response)
 		{
			eval(response.responseText);
  		//document.getElementById('code_ImageChack').innerHTML=response.responseText;
  		},
  		onFailure:function()
  		{
  		alert('error');
  		}
});
	
	
}
	function Setframe(id)
	{
		if(!document.getElementById('lines'))
		{
		var image=basename($('cropImage').src);
		document.getElementById('cropImage').src='../ibox/images/indicator.gif';
		}
		else
		{
		var image=basename(chekbr().getElementById('image_line').src);
		}
	//ReadFile("set_frame.php?id="+id+"&imageFileName="+document.getElementById('save_img').value);
	//xmlhttpPost('set_frame.php?id='+id+'','set');
		new Ajax.Request('../set_frame.php?id='+id+'', {
  		method: 'post',
  		parameters: {imageFileName: image},
  		onSuccess:function(response)
 		{
			eval(response.responseText);
  		//document.getElementById('code_ImageChack').innerHTML=response.responseText;
  		},
  		onFailure:function()
  		{
  		alert('error');
  		}

});


	}
	function update_frames(src1,w1,h1,src2,w2,h2)
	{
	initSliderframe();
	chekbr().getElementById('image').innerHTML='<img  src="'+src1+'" id="image_line" style="LEFT: 0px;POSITION: absolute; TOP: 0px; width:'+w1+'px; height:'+h1+'px; visibility:;cursor:move;"><img  src="'+src2+'" id="first" style="LEFT: 0px;POSITION: absolute; TOP: 0px; width:'+w2+'px; height:'+h2+'px; visibility:; cursor:move;">';
	//hide_Loading();
	}

function AddthisFrame()
{
	
		var elstyle1=chekbr().getElementById('image_line').style;
		var elstyle2=chekbr().getElementById('first').style;
		qstr=''+chekbr().getElementById('image_line').src+'#'+parseInt(elstyle1.left)+'#'+parseInt(elstyle1.top)+'#'+parseInt(elstyle1.width)+'#'+parseInt(elstyle1.height)+'**'+chekbr().getElementById('first').src+'#'+parseInt(elstyle2.left)+'#'+parseInt(elstyle2.top)+'#'+parseInt(elstyle2.width)+'#'+parseInt(elstyle2.height);

		
document.getElementById("img").innerHTML='<br><img src="../ibox/images/indicator.gif" border="0" /><br><span style="font-size:14px;font-weight:bold;">Loading...Please,wait.</span> ';	
new Ajax.Request('../process.php?act=fram', {
  method: 'post',
  parameters: {mass: qstr },
  onSuccess:function(response)
  {
	document.getElementById("bottom_navigation").innerHTML='<iframe id="lines" name="lines" style="width:120px;height:600px;border:0px solid black;padding:0px;" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="../adssense.php?id=4"></iframe>';
  eval(response.responseText);

  },
    onFailure:function()
  {
  alert('error');
  }

});

	
}
function grapics()
{
el_id=1;
}
 function toIntr (obj) {
        return parseInt(obj, 10)
    }
	
function chek_session()
{
	document.forms['formUpl'].action = '../session_image.php';
	document.forms['formUpl'].target="wspace";
	document.forms['formUpl'].submit();
	document.forms['formUpl'].action='../upl_img.php';
}
function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

