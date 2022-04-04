var b=0;
menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
    }  else {
    	x.className = "topnav";
    }
}
function plus(obj)
{ var a=obj.t1.value;
a++;
b=b+230;
obj.t1.value=a;
a1.r1.value = a;
a1.s1.value = a*230;

}

function minus(obj)
{ var a=obj.t1.value;
a--;
b=b-230;
obj.t1.value=a;
a1.r1.value = a;
a1.s1.value = a*230;

}
function plus1(obj)
{ var a=obj.t2.value;
a++;
obj.t2.value=a;
a2.r2.value = a;
a2.s2.value = a*200;
b=b+200;
}
function minus1(obj)
{ var a=obj.t2.value;
a--;
obj.t2.value=a;
a2.r2.value = a;
a2.s2.value = a*200;
b=b-200;
}
function plus2(obj)
{ var a=obj.t3.value;
a++;
obj.t3.value=a;
a3.r3.value = a;
a3.s3.value = a*260;
b=b+260;
}
function minus2(obj)
{ var a=obj.t3.value;
a--;
obj.t3.value=a;
a3.r3.value = a;
a3.s3.value = a*260;
b=b-260;
}
function summ(obj)
{
alert(b);

}
