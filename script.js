function add()
{
	event.preventDefault();
	let num1=document.getElementById("num1");
	let num2=document.getElementById("num2");
	let msg=document.getElementById("msg");

	if(num1.value==="")
	{
		alert("plz enter first number");
		msg.innerHTML="";
		num1.focus();
		return;
	}
	if(num2.value==="")
	{
		alert("plz enter second number");
		msg.innerHTML="";
		num2.focus();
		return;
	}

	let n1=parseFloat(num1.value);
	let n2=parseFloat(num2.value);
	let r= n1+n2;
	msg.innerHTML=`Addition is ${r.toFixed(2)}`;
}

