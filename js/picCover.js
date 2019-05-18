

		//第1个
		function myFunction() {
			document.getElementById("bac").style.background= "none";
		}
		function mySecondFunction() {
			document.getElementById("bac").style.background= "#000";
		}
		//第2个
		function myFunction1() {
			document.getElementById("bac1").style.background= "none";
		}
		function mySecondFunction1() {
			document.getElementById("bac1").style.background= "#000";
		}
		//第3个
		function myFunction2() {
			document.getElementById("bac2").style.background= "none";
		}
		function mySecondFunction2() {
			document.getElementById("bac2").style.background= "#000";
		}
		//第3个
		function myFunction3() {
			document.getElementById("bac3").style.background= "none";
		}
		function mySecondFunction3() {
			document.getElementById("bac3").style.background= "#000";
		}
		//1
		function showBack(){
			document.getElementById("bo1").style.width="100%";
			document.getElementById("bo2").style.display="none";
			document.getElementById("bo3").style.display="none";
			document.getElementById("bo4").style.display="none";
			setTimeout(function(){
				document.getElementById("btn").style.visibility="visible";
				document.getElementById("a1").style.visibility="visible";
				document.getElementById("bo1").style.overflowY="visible";
				// document.getElementById("bodybac").style.backgroundColor="#fff";
			},900);
			document.getElementById("bac").removeEventListener("mouseover", myFunction);
			document.getElementById("bac").removeEventListener("mouseout", mySecondFunction);
		}
		function closeBack(){
			document.getElementById("bo1").style.width="25%";
			document.getElementById("btn").style.visibility="hidden";
			document.getElementById("a1").style.visibility="hidden";
			document.getElementById("bac").style.background="#000";
			document.getElementById("bo1").style.overflowY="hidden";
			document.getElementById("bac").addEventListener("mouseover", myFunction);
			document.getElementById("bac").addEventListener("mouseout", mySecondFunction);
			setTimeout(function(){
				document.getElementById("bo2").style.display="inline-block";
				document.getElementById("bo3").style.display="inline-block";
				document.getElementById("bo4").style.display="inline-block";
			},800);
		}

		//2
		function showBack1(){
			document.getElementById("bo2").style.left="0";
			document.getElementById("bo2").style.width="100%";
			document.getElementById("bo1").style.display="none";
			document.getElementById("bo3").style.display="none";
			document.getElementById("bo4").style.display="none";
			setTimeout(function(){
				document.getElementById("btn1").style.visibility="visible"
				document.getElementById("a2").style.visibility="visible";
				document.getElementById("bo2").style.overflowY="visible";
			},900);
			document.getElementById("bac1").removeEventListener("mouseover", myFunction1);
			document.getElementById("bac1").removeEventListener("mouseout", mySecondFunction1);
		}
		function closeBack1(){
			document.getElementById("bo2").style.left="25%";
			document.getElementById("bo2").style.width="25%";
			document.getElementById("btn1").style.visibility="hidden";
			document.getElementById("a2").style.visibility="hidden";
			document.getElementById("bac1").style.background="#000";
			document.getElementById("bo2").style.overflowY="hidden";
			document.getElementById("bac1").addEventListener("mouseover", myFunction1);
			document.getElementById("bac1").addEventListener("mouseout", mySecondFunction1);
			setTimeout(function(){
				document.getElementById("bo1").style.display="inline-block";
				document.getElementById("bo3").style.display="inline-block";
				document.getElementById("bo4").style.display="inline-block";
			},700);

		}
		//3
		function showBack2(){
			document.getElementById("bo3").style.left="0";
			document.getElementById("bo3").style.width="100%";
			document.getElementById("bo2").style.display="none";
			document.getElementById("bo1").style.display="none";
			document.getElementById("bo4").style.display="none";
			setTimeout(function(){
				document.getElementById("btn2").style.visibility="visible";
				document.getElementById("a3").style.visibility="visible";
				document.getElementById("bo3").style.overflowY="visible";
			},900);
			document.getElementById("bac2").removeEventListener("mouseover", myFunction2);
			document.getElementById("bac2").removeEventListener("mouseout", mySecondFunction2);
		}
		function closeBack2(){
			document.getElementById("bo3").style.left="50%";
			document.getElementById("bo3").style.width="25%";
			document.getElementById("btn2").style.visibility="hidden";
			document.getElementById("a3").style.visibility="hidden";
			document.getElementById("bo3").style.overflowY="hidden";
			document.getElementById("bac2").style.background="#000";
			document.getElementById("bac2").addEventListener("mouseover", myFunction2);
			document.getElementById("bac2").addEventListener("mouseout", mySecondFunction2);
			setTimeout(function(){
				document.getElementById("bo1").style.display="inline-block";
				document.getElementById("bo2").style.display="inline-block";
				document.getElementById("bo4").style.display="inline-block";
			},600);
		}
		//4
		function showBack3(){
			document.getElementById("bo4").style.left="0";
			document.getElementById("bo4").style.width="100%";
			document.getElementById("bo2").style.display="none";
			document.getElementById("bo1").style.display="none";
			document.getElementById("bo3").style.display="none";
			setTimeout(function(){
				document.getElementById("btn3").style.visibility="visible";
				document.getElementById("a4").style.visibility="visible";
				document.getElementById("bo4").style.overflowY="visible";
			},900);
			document.getElementById("bac3").removeEventListener("mouseover", myFunction3);
			document.getElementById("bac3").removeEventListener("mouseout", mySecondFunction3);
		}
		function closeBack3(){
			document.getElementById("bo4").style.left="75%";
			document.getElementById("bo4").style.width="25%";
			document.getElementById("btn3").style.visibility="hidden";
			document.getElementById("bac3").style.background="#000";
			document.getElementById("a4").style.visibility="hidden";
			document.getElementById("bo4").style.overflowY="hidden";
			document.getElementById("bac3").addEventListener("mouseover", myFunction3);
			document.getElementById("bac3").addEventListener("mouseout", mySecondFunction3);
			setTimeout(function(){
				document.getElementById("bo1").style.display="inline-block";
				document.getElementById("bo2").style.display="inline-block";
				document.getElementById("bo3").style.display="inline-block";
			},600);
		}