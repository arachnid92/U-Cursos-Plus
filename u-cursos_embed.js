/* 
Script encargado de buscar enlaces a imagenes y videos en YouTube en la pagina e insertarlas 
Parte de la extension U-Cursos +.

Autor: Arachnid92
*/

var all = document.getElementsByTagName("a");

for(var i = 0, max = all.length; i < max; i++)
{
	
	var href = all[i].getAttribute("href");
	
	if(href == null)
	{
		continue;
	}
	
	var len = href.length;
	var parent = all[i].parentNode;
	
	if //Imagenes
	(href.substr(len - 4) == ".jpg"
	|| href.substr(len - 5) == ".jpeg"
	|| href.substr(len - 4) == ".png"
	|| href.substr(len - 4) == ".gif")
	{
		
		var div = document.createElement("div");
		div.setAttribute("class", "imagen");
		

		var img = document.createElement("img");
		img.setAttribute("src", href);
		img.setAttribute("style", "max-width:400px; max-height:400px");
		
		var lastItem = all[i].nextSibling;
		while(lastItem.nextSibling != null)
		{
			lastItem = lastItem.nextSibling;
		}
		
		div.appendChild(img);
		parent.insertBefore(div, lastItem.previousSibling);
	}
    
	else if //Videos
	(href.substr(0, 28) == "http://www.youtube.com/watch"
	|| href.substr(0, 29) == "https://www.youtube.com/watch"
	|| href.substr(0, 15) == "http://youtu.be")
	{
	    
		var div = document.createElement("div");
		div.setAttribute("class", "video");
	    
		var iframe = document.createElement("iframe");
		iframe.setAttribute("width", "560");
		iframe.setAttribute("height", "315");
	    
		var vCode = 0;
	    
		if(href.substr(0, 28) == "http://www.youtube.com/watch")
		{
			vCode =  href.substr(31);
		} 
		else if (href.substr(0, 29) == "https://www.youtube.com/watch")
		{
			vCode = href.substr(32);
		} 
		else 
		{
			vCode = href.substr(16);
		}
	    
		iframe.setAttribute("src", "https://youtube.com/embed/".concat(vCode));
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("allowfullscreen", "1");
	    
		var lastItem = all[i].nextSibling;
		while(lastItem.nextSibling != null)
		{
			lastItem = lastItem.nextSibling;
		}
		
		div.appendChild(iframe);
		parent.insertBefore(div, lastItem.previousSibling);
		
	}	    
}
