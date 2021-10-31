document.addEventListener("DOMContentLoaded",()=>{

	const btnsearch=document.getElementById("search_button");
	var ajaxrequest = new XMLHttpRequest();

	var url = "http://localhost/info2180-lab4/superheroes.php";

	btnsearch.addEventListener("click",()=>{

	ajaxrequest.onreadystatechange = fetch_request;
	ajaxrequest.open('GET', url);
	ajaxrequest.send();
	//alert("The search button was clicked");	

		});



	function fetch_request() {
	if (ajaxrequest.readyState === XMLHttpRequest.DONE) {
	if (ajaxrequest.status === 200) {
	var response = ajaxrequest.responseText;
	alert(response);
	} else {
	alert('There was a problem with the request.');
	}
	}
	}
	 
	

})