var tItemCounter=1000;
var curent_el= null;
var dmsProps=new Array();
var dmsImages=new Array();
var arr = new Array();
var angle= new Array();
var n=0;
var browser_name = navigator.appName;
var  posl_id=null;
var action= null;
var elmid=null;
function Text(id)
{
	//alert(id);
}
function addGlitter(x,y)
{
	
	if(elmid && tItemCounter>1000)
	{
	parent.lines.dragresize_glitt.resizeHandleSet(chekbr().getElementById(elmid), false);
	chekbr().getElementById(elmid).style.border="hidden";
	}
	
	  	var im_line_W = chekbr().getElementById("image_line").offsetWidth;
  		var im_line_H = chekbr().getElementById("image_line").offsetHeight;

	
	document.getElementById('app_button').style.display='';
	im=document.getElementById('cur_glitter').value;
	im=str_replace ('../', '', im)

	var width=document.getElementById('image_width').value;
	var height=document.getElementById('image_height').value;
	var z_id = "img_" + ++tItemCounter;
	
	if(x!='' && y!='')
	{
	var poz_top=y-(height/2);
	var poz_left=x-(width/2);
	}
	else
	{
	var poz_top=(im_line_H/2)-(height/2);
	var poz_left=(im_line_W/2)-(width/2);
	}
	
	var innerHtml ='<div class="drsElement drsMoveHandle" id="'+z_id+'" style="left:'+poz_left+'px; top:'+poz_top+'px; width:'+width+'px; height: '+height+'px;z-index:' + tItemCounter + '"><img src="'+im+'" width="'+width+'" height="'+height+'" id="'+z_id+'_1"/></div>';
	

	chekbr().getElementById("image").innerHTML=chekbr().getElementById("image").innerHTML+innerHtml;
	
	firedobj=chekbr().getElementById(z_id);
	dmsProps[z_id]=tItemCounter;
	dmsImages[z_id]=im;
	angle[z_id]=0;
	
}
function deleteGlitter()
{

curent_el=elmid;
dmsProps[curent_el]=0;
dmsImages[curent_el]=0;
angle[curent_el]=0;
chekbr().getElementById(curent_el).style.top='-5000px';
chekbr().getElementById(curent_el).style.left='-5000px';
chekbr().getElementById(curent_el).style.display='none';
//dmsProps[curent_el]=0;
}

function rotateGlitter(posit)
{
	
	id=elmid;
var image=dmsImages[id];
var width=parseInt(chekbr().getElementById(id).style.width);
var height=parseInt(chekbr().getElementById(id).style.height);
el_id=1;


if(posit=="rotate_left")
{
angle[id]=angle[id]-10;
}
else if(posit=="rotate_right")
{
angle[id]=angle[id]+10;
}
ReadFile("../rotate_glitter.php?imageFileName="+image+"&act="+posit+"&id="+id+"&width="+width+"&height="+height+"&angle="+angle[id]);
}

function AppGlitter()
{

	for(var i=tItemCounter;i>1000;i--)
	{
		var z_id = "img_" + i;
		var curent_src_el=z_id+'_1';
		if(dmsProps[z_id]!=0 && dmsProps[z_id]!='')
		{
	    arr[n]=z_id;
		n++;
		}
	}
	
	var z_max=tItemCounter;
	for(var i=0;i<n;i++)
	{
		var temp=chekbr().getElementById(arr[i]).style.zIndex;
		
		for(var j=0;j<n;j++)
		{
			if(temp>chekbr().getElementById(arr[j]).style.zIndex)
			{
				
				var num=j;

			}
			else
			{
			var num=i;
			}
			
		}
		
	var tem_el=arr[i];
	arr[i]=arr[num];
	arr[num]=tem_el;
	}
	if(n>=1)
	{
		var url='../process.php?act=fun_glitter';
		
		var elstyle1=chekbr().getElementById('image_line').style;
		qstr=''+chekbr().getElementById('image_line').src+'#'+parseInt(elstyle1.left)+'#'+parseInt(elstyle1.top)+'#'+parseInt(elstyle1.width)+'#'+parseInt(elstyle1.height);
			for(var i=0;i<n;i++)
			{
				elstyle1=chekbr().getElementById(arr[i]);
				elstyle2=chekbr().getElementById(arr[i]+'_1');
				qstr+='**'+elstyle2.src+'#'+parseInt(elstyle1.style.left)+'#'+parseInt(elstyle1.style.top)+'#'+parseInt(elstyle2.width)+'#'+parseInt(elstyle2.height);
			}
		
	document.getElementById("img").innerHTML='<br><img src="../cropper/waiter1.gif" border="0" /><br><div id="tools_text">Please wait, it can take several minutes ...</div> ';	
		new Ajax.Request(url, {
  		method: 'post',
 		parameters: {mass: qstr,speed:document.getElementById('glitter_sped').value},
  		onSuccess:function(response)
  		{
		document.getElementById("bottom_navigation").innerHTML='<iframe id="lines" name="lines" style="width:120px;height:600px;border:0px solid black;padding:0px;" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="../adssense.php?id=4"></iframe>';
		eval(response.responseText);
		
  },
    onFailure:function()
  {
  alert('error');
  },

});
	}
	else
	{
	alert('Add Stamp and then hit Apply');
	}
}
function setcursor(id,name,el_act)
{
	action=el_act;
	if(posl_id)
	{
		document.getElementById(posl_id).style.border = '0px';
		document.getElementById(id).style.border= '1px solid red';
		posl_id=id
	}
	else
	{
	document.getElementById(id).style.border= '1px solid red';
	posl_id=id
	}
	
	if (browser_name == "Netscape")
	{
    chekbr().getElementById("image").setAttribute('style','cursor:url("cursors/'+name+'"),pointer;');
	}
	else if (browser_name == "Microsoft Internet Explorer")
	{
	chekbr().getElementById("image").style.cursor='url("cursors/'+name+'"),pointer';
	}
	
}

function Reset()
{
posl_id=null;
action= null;
tItemCounter=1000;
var dmsProps=new Array();
var dmsImages=new Array();
var arr = new Array();
var angle= new Array();
var elmid=null;
n=0;
createFun_Gliter();
}

function str_replace (search, replace, subject, count) {
    // Replaces all occurrences of search in haystack with replace  
    // 
    // version: 909.322
    // discuss at: http://phpjs.org/functions/str_replace    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)    // +   bugfixed by: Anton Ongson
    // +      input by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    tweaked by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Oleg Eremeev
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Oleg Eremeev
    // %          note 1: The count parameter must be passed as a string in order    // %          note 1:  to find a global variable in which the result will be given
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'    var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0,
            f = [].concat(search),
            r = [].concat(replace),
            s = subject,
            ra = r instanceof Array, sa = s instanceof Array;    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }
     for (i=0, sl=s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j=0, fl=f.length; j < fl; j++) {            temp = s[i]+'';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length-s[i].length)/f[j].length;}        }
    }
    return sa ? s : s[0];
}
