var requestread = new XMLHttpRequest();
function ReadFile(url) 
{
 requestread.open("GET",url);
 requestread.url=url;
 evalResponse:true// первый запрос
 requestread.onreadystatechange=override;
 requestread.send(null);
}

function override()
{
 if (requestread.readyState == 4) 
   {
    requestread.open("GET",requestread.url);     // второй запрос
    requestread.onreadystatechange=readResponse;
   requestread.send(null);
   }
}

function readResponse()
{ 
	if (requestread.readyState == 4)
	{
 			if(el_id==1)
			{
			eval(requestread.responseText);	
			}
			else
			{
			document.getElementById(el_id).innerHTML=requestread.responseText;
			}
			if(el_id=='footer_bloc2')
			{
			$('bottom_navigation').style.width=260+"px";
			}
			
	}
}

