//Test function for jquery loading
      $(document).ready(function(){
        $('#driver').click(function(event){
        $('#deal').load('offer.html');
        console.log("ajax");
        });
      });


//WOULD LIKE TO HAVE HAD TIME TO REFACTOR THIS TO PASS ARGUMENTS ACROSS
//HOWEVER I HAD PROBLEMS IDENTIFYING HOW TO DEAL WITH THE DOM ELEMENTS AS ARGUMENTS

//SO CURRENTLY THERE ARE TWO OF EVERYTHING FOR THE TWO PRODUCTS ON SALE

	function buyFirstItemDipsy(){

		//Set the value of the first variable to 1 - we'll deal with subsequent clicks on
		//plus or minus buttons in a different method
		itemsDipsy=1;

		Cookies.set('dipsy',itemsDipsy);
		itemsDipsy=parseInt(Cookies.get('dipsy'));

		//display and make visible the total
		document.getElementById("totalInTrolleyDipsy").style.visibility="visible";
		document.getElementById("totalInTrolleyDipsy").style.display="inline-table";

		//and the plus and minus buttons
		document.getElementById("plusBtnDipsy").style.visibility="visible";
		document.getElementById("plusBtnDipsy").style.display="inline-table";

		document.getElementById("minusBtnDipsy").style.visibility="visible";
		document.getElementById("minusBtnDipsy").style.display="inline-table";

		//Input figure to the total
		document.getElementById("totalInTrolleyDipsy").innerHTML= itemsDipsy + " in ";

		//now hide the add btn
		document.getElementById("addBtnDipsy").style.display="none";

	}


	function buyFirstItemPeggy(){

		//Set the value of the first variable to 1 - we'll deal with subsequent clicks on
		//plus or minus buttons in a different method
		itemsPeggy=1;

		Cookies.set('peggy',itemsPeggy);
		itemsPeggy=parseInt(Cookies.get('peggy'));

		//display and make visible the total
		document.getElementById("totalInTrolleyPeggy").style.visibility="visible";
		document.getElementById("totalInTrolleyPeggy").style.display="inline-table";

		//and the plus and minus buttons
		document.getElementById("plusBtnPeggy").style.visibility="visible";
		document.getElementById("plusBtnPeggy").style.display="inline-table";

		document.getElementById("minusBtnPeggy").style.visibility="visible";
		document.getElementById("minusBtnPeggy").style.display="inline-table";

		//Input figure to the total

		document.getElementById("totalInTrolleyPeggy").innerHTML= itemsPeggy + " in ";

		//now hide the add btn
		document.getElementById("addBtnPeggy").style.display="none";




	}

	//ADDING EXTRA ITEMS - again I have two of these till I can work out how to refactor code

	function buyMoreItemsDipsy(){
		//Get the current value of Dipsy items
		//use parseInt to convert to integer instead of string
		itemsDipsy=parseInt(Cookies.get('dipsy'));

		//increment it by one
		itemsDipsy=itemsDipsy+1;
		console.log(itemsDipsy);
		Cookies.set('dipsy', itemsDipsy);

		//display the updated value
		document.getElementById("totalInTrolleyDipsy").innerHTML=itemsDipsy + " in ";


	}


	function buyMoreItemsPeggy(){

		console.log("buying more items");

		//get the existing value of cookie
		//use parseInt to convert to integer instead of string
		itemsPeggy=parseInt(Cookies.get('peggy'));
		console.log(itemsPeggy);

		//increment it by one
		itemsPeggy=itemsPeggy+1;
		console.log(itemsPeggy);
		Cookies.set('peggy', itemsPeggy);

		//display the updated value
		document.getElementById("totalInTrolleyPeggy").innerHTML=itemsPeggy + " in ";


	}



	//REMOVAL - two of everything again sorry

	function removeItemsDipsy(){

		//use parseInt to convert to integer instead of string
		itemsDipsy=parseInt(Cookies.get('dipsy'));

		//decrement it by one
		itemsDipsy=itemsDipsy-1;

		//check the value of cookie
		//if its zero then display the remove button
		if(itemsDipsy==0)
		{
			//display remove button
			document.getElementById("removeBtnDipsy").style.visibility="visible";

			//disable minus button
			document.getElementById("minusBtnDipsy").disabled=true;

			//as we have a button for removal we don't do anything to the cookies here


		}
		else{

			//set the new value of cookies
			Cookies.set('dipsy', itemsDipsy);
		}



		//whichever way we need to display the updated value
		document.getElementById("totalInTrolleyDipsy").innerHTML=itemsDipsy + " in ";

	}

	function removeItemsPeggy(){

		console.log("removing some items");
		//get the existing value of cookie
		//use parseInt to convert to integer instead of string
		itemsPeggy=parseInt(Cookies.get('peggy'));

		//decrement it by one
		itemsPeggy=itemsPeggy-1;

		//check the value of oranges
		//if its zero then display the remove button
		if(itemsPeggy==0)
		{
			//display remove button
			document.getElementById("removeBtnPeggy").style.visibility="visible";

			//disable minus button
			document.getElementById("minusBtnPeggy").disabled=true;

			//nb don't do anything with cookies we do that on the removeBtn click event


		}
		else{

			//set the new value of cookies
			Cookies.set('peggy', itemsPeggy);
		}



		//whichever way we need to display the updated value
		document.getElementById("totalInTrolleyPeggy").innerHTML=itemsPeggy + " in ";

	}


	//WHEN THERE ARE NO ITEMS - again two..

	function noItemsDipsy(){
		//we come here if items value is zero
		console.log("no value ")
		//remove cookies
		Cookies.remove('dipsy');

		//display the original add to cart button
		document.getElementById("addBtnDipsy").style.display="inline-table";

		//hide everything else

		//try hiding rather than not displaying??

		document.getElementById("plusBtnDipsy").style.display="none";
		document.getElementById("totalInTrolleyDipsy").style.display="none";
		document.getElementById("minusBtnDipsy").style.display="none";
		document.getElementById("removeBtnDipsy").style.display="none";



		//update the view - this will check the cookie to be passed to the basket..
		//and force the empty basket to be displayed if no items left
		location.reload();


	}


	function noItemsPeggy(){
		//we come here if items value is zero
		console.log("no value ")
		//remove cookies
		Cookies.remove('peggy');

		//display the original add to cart button
		document.getElementById("addBtnPeggy").style.display="inline-table";

		//hide everything else

		document.getElementById("plusBtnPeggy").style.display="none";
		document.getElementById("totalInTrolleyPeggy").style.display="none";
		document.getElementById("minusBtnPeggy").style.display="none";
		document.getElementById("removeBtnPeggy").style.display="none";



		//update the view - this will check the cookie to be passed to the basket..
		//and force the empty basket to be displayed if no items left
		location.reload();

	}



//NOW WE HAVE FUNCTIONS THAT LOOK AT BOTH COOKIES TOGETHER

		function viewCart(){
		//Get the value of both cookies as long as there's something there
		//using an exclusive or to return either zero or the cookie value
		//variable = (condition) ? value1:value2
		//and a proper or to compare the input..
		dipsyTotal=(Cookies.get('dipsy')=="" || Cookies.get('dipsy')==null)? 0:Cookies.get('dipsy');
		peggyTotal=(Cookies.get('peggy')=="" || Cookies.get('peggy')==null)? 0:Cookies.get('peggy');

		totalItems=parseInt(dipsyTotal)+parseInt(peggyTotal);

		//display the total number of items
		window.document.getElementById("output").innerHTML="&nbsp&nbsp(" + totalItems + " items)";

	}


	function calculatePrice(){
		//Set the price
		total=(parseInt(dipsyTotal)*39.99)+(parseInt(peggyTotal)*37.99);


		document.getElementById("totaldiv").innerHTML="Total:  £" + total.toFixed(2);
	}


	//For use on the emptyBasketBtn

	function clearAll(){


		Cookies.remove('dipsy');
		Cookies.remove('peggy');

		location.reload();


	}

	//For the reset button

	function updateTotals(){
		viewCart();
		calculatePrice();
	}


	//This method checks the value of cookies in the basket page and displays the appropriate
	//divs and values

	function checkCookie(){

		//Check to see if there's anything in the dipsy cookie then display div only if there is
		cookieVal1=(Cookies.get('dipsy')=="" || Cookies.get('dipsy')==null)? 0:Cookies.get('dipsy');
		cookieVal2=(Cookies.get('peggy')=="" || Cookies.get('peggy')==null)? 0:Cookies.get('peggy');
		cookieToNum=parseInt(cookieVal1)+parseInt(cookieVal2);
		console.log(cookieToNum);

		if(cookieToNum==0 || cookieToNum==null)

		//if theres nothing in total then do the empty basket

		{
			document.getElementById("emptyBasket").style.display="block";

		}

		//otherwise check
		else
		{
			//check the dipsy cookie
			if(cookieVal1==0 || cookieVal1==null)
			{
				//display nothing
				document.getElementById("dipsyBasket").style.display="none";
			}
			else
			//otherwise
			{
				document.getElementById("dipsyBasket").style.display="inline-table";
				document.getElementById("totalInTrolleyDipsy").style.display="inline-table";
				document.getElementById("totalInTrolleyDipsy").style.visibility="visible";
				//and the plus and minus buttons
				document.getElementById("plusBtnDipsy").style.display="inline-table";
				document.getElementById("plusBtnDipsy").style.visibility="visible";

				document.getElementById("minusBtnDipsy").style.display="inline-table";
				document.getElementById("minusBtnDipsy").style.visibility="visible";

				//Input figure to the total

				document.getElementById("totalInTrolleyDipsy").innerHTML= cookieVal1 + " in ";

			}

			if(cookieVal2==0 || cookieVal2==null)
			{
				//display nothing
				document.getElementById("peggyBasket").style.display="none";
			}
			else
			{
				document.getElementById("peggyBasket").style.display="inline-table";

				//display and make visible the total

				document.getElementById("totalInTrolleyPeggy").style.display="inline-table";
				document.getElementById("totalInTrolleyPeggy").style.visibility="visible";

				//and the plus and minus buttons
				document.getElementById("plusBtnPeggy").style.display="inline-table";
				document.getElementById("plusBtnPeggy").style.visibility="visible";

				document.getElementById("minusBtnPeggy").style.display="inline-table";
				document.getElementById("minusBtnPeggy").style.visibility="visible";
				//Input figure to the total

				document.getElementById("totalInTrolleyPeggy").innerHTML= cookieVal2 + " in ";

			}
		}

	}

	//A bit like that but for using on the product page, this updates the
	function checkCookieOnProducts(){
		//This works on load of the product page, so if we've stuff in the basket it should
		//display on the quantity
		console.log("Are we getting here?")

		//Check to see if there's anything in the dipsy cookie then display div only if there is
		anotherCookieValDipsy=(Cookies.get('dipsy')=="" || Cookies.get('dipsy')==null)? 0:Cookies.get('dipsy');
		anotherCookieValPeggy=(Cookies.get('peggy')=="" || Cookies.get('peggy')==null)? 0:Cookies.get('peggy');
		anotherCookieToNum=parseInt(anotherCookieValDipsy) + parseInt(anotherCookieValPeggy);
		console.log(anotherCookieToNum);

		if(anotherCookieToNum==0 || anotherCookieToNum==null)

		{
			//nowt to do as we don't display a basket here

		}
		else
		{
			//check the dipsy cookies
			if(anotherCookieValDipsy==0||anotherCookieValDipsy==null)
			{
				//do something
				//display the add btn as normal
			}
			else
			{
				//do something else - display the other buttons and total
				document.getElementById("totalInTrolleyDipsy").style.visibility="visible";
				document.getElementById("totalInTrolleyDipsy").style.display="inline-table";
				document.getElementById("plusBtnDipsy").style.visibility="visible";
				document.getElementById("plusBtnDipsy").style.display="inline-table";
				document.getElementById("minusBtnDipsy").style.visibility="visible";
				document.getElementById("minusBtnDipsy").style.display="inline-table";
				document.getElementById("totalInTrolleyDipsy").innerHTML= anotherCookieValDipsy + " in ";
				document.getElementById("addBtnDipsy").style.display="none";

			}

			//then check the values of the peggy cookies
			if(anotherCookieValPeggy==0||anotherCookieValPeggy==null)
			{
				//do something
			}
			else
			{
				//do something else
				document.getElementById("totalInTrolleyPeggy").style.visibility="visible";
				document.getElementById("totalInTrolleyPeggy").style.display="inline-table";
				document.getElementById("plusBtnPeggy").style.visibility="visible";
				document.getElementById("plusBtnPeggy").style.display="inline-table";
				document.getElementById("minusBtnPeggy").style.visibility="visible";
				document.getElementById("minusBtnPeggy").style.display="inline-table";
				document.getElementById("totalInTrolleyPeggy").innerHTML= anotherCookieValPeggy + " in ";
				document.getElementById("addBtnPeggy").style.display="none";
			}


		}
	}

	//When the basket loads we check these separate functions and update the totals
	//And then update the button group depending on the cookie value
	function callOnLoad(){

		viewCart();
		calculatePrice();
		checkCookie();

	}


	function clearAndCheck(){
		clearAll();
		checkCookie();

	}

	//Dummy function for the login page
	function validateUserNameAndPassword(){
		alert("Under Development");
	}

	//Dummy function for search button
	function searchBtnAction(){
		alert("Under Development");
	}

	//Dummy function for checkout button
	function checkout(){
		alert("Under Development");
	}
