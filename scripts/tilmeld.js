function registration(){
    // get the values from the checkInputs
    const navnValue = navn.value.trim();
    const alderValue = alder.value.trim();
    const rolleValue = rolle.value.trim();

		if(navn=='')
		{
			setErrorFor(navn,'Indtast venligst dit navn');
		}

        else
		{
			setSuccessFor(navn)
		}
	
		if(alder=='')
		{
			setErrorFor(alder,'Indtast venligst din alder');
		}

        else
		{
			setSuccessFor(alder)
		}

		if(rolle=='')
		{
			setErrorFor(rolle,'Indtast venligst din rolle');
		}

        else
		{
			setSuccessFor(rolle)
		}
    }
	function clearFunc()
	{
		document.getElementById("t1").value="";
		document.getElementById("t2").value="";
		document.getElementById("t3").value="";
	
    }