

function confirmReservation() {
    updateInformation();
    updateDisplayPanel();
    updateTable();
    updateStatistic();
    

}
function updateInformation() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("nameUpdate").textContent = "Name: " + name;

    var phone = document.getElementById("phoneInput").value;
    document.getElementById("phoneUpdate").textContent = "Phone: "+ phone;

    // update valid gender
    var gender = document.getElementsByName("genderInput");
    // var validGender = false;
    // var i = 0;
    // while(!validGender && i<gender.length)
    // {
    //     if(gender[i].checked)
    //     {
    //         validGender = true;
    //     }
    //     i++
    // }
    for(var i = 0; i< gender.length;i++)
    {
        if(gender[i].checked)
        {
            document.getElementById("gender").textContent = "Gender: " + gender[i].value;
        }
       
    }
    
}

function updateDisplayPanel() {
    // declare variable
    var childCount = parseInt(document.getElementById("chidren").value);
    var adultCount = parseInt(document.getElementById("adults").value);
    var startTime = document.getElementById("startTime");
    var endTime = document.getElementById("endTime");
    

    // update child count
    document.getElementById("chilCount").textContent = "Child Count: "+childCount;
    document.getElementById("adultCount").textContent = "Adult Count: "+adultCount

    // update start time

    var parseStartDate = startTime.value.split("-");
    var startYear = parseInt(parseStartDate[0]);
    var startMonth = parseInt(parseStartDate[1]);
    var startDay = parseInt(parseStartDate[2]);
    if(!(startYear<1992) && startMonth<12)
    {
       var startDate = startYear+"-"+startMonth+"-"+startDay;
        document.getElementById("startDate").textContent = "Start Date: " + startDate;
    }
    

    // update end time 
    
    var parseEndDate = endTime.value.split("-");
    var endYear = parseInt(parseEndDate[0]);
    var endMonth = parseInt(parseEndDate[1]);
    var endDay = parseInt(parseEndDate[2]);

    if(startYear<=endYear || startMonth<=endMonth  || startDay<=endDay) {
       
        var endDate = endYear+"-"+endMonth+"-"+endDay;
        document.getElementById("endDate").textContent = "End Date: " + endDate;
    }
   
    

    //update gender
   
}
var reservationArray = [];

function updateTable() {
    var name = document.getElementById("nameInput").value;
    var phone = document.getElementById("phoneInput").value;
    var childCount = parseInt(document.getElementById("chidren").value);
    var adultCount = parseInt(document.getElementById("adults").value);
    var startTime = document.getElementById("startTime").value;
    var endTime = document.getElementById("endTime").value;

    
    var newReservation = new Reservation(name, phone, childCount, adultCount, startTime, endTime);

   
      
    var insertTable = document.getElementById("tableBody");
    
  
    var row = insertTable.insertRow();
    var nameCell = row.insertCell();
    nameCell.textContent = newReservation.getName();

    var phoneCell = row.insertCell();
    phoneCell.textContent = newReservation.getPhone();

    var childCell = row.insertCell();
    childCell.textContent = newReservation.getChildCount();

    var adultCell = row.insertCell();
    adultCell.textContent = newReservation.getAdultCount();

    var startCell = row.insertCell();
    startCell.textContent = newReservation.getStartDate();

    var endCell = row.insertCell();
    endCell.textContent = newReservation.getEndDate();

    var subtotalCell = row.insertCell();
    subtotalCell.textContent = "$"+parseFloat(newReservation.calculateSubtotal()).toFixed(2);

    var taxCell = row.insertCell();
    taxCell.textContent = "$"+parseFloat(newReservation.calculateTax()).toFixed(2);

    var totalCell = row.insertCell();
    totalCell.textContent = "$"+parseFloat(newReservation.calculateTotal()).toFixed(2);

    reservationArray.push(newReservation);
    
    
    
        
   
}

function updateStatistic()
{
    console.log("array length is: "+reservationArray.length);
    var totalnumberReservation = reservationArray.length;
    document.getElementById("totalReservation").textContent = "Number of Reservation:"+ totalnumberReservation ;
    var totalReservation =0;
    var totalChildCount = 0;
    var totalAdultCount = 0;
   
   for(var i = 0; i<reservationArray.length; i++)
   {
    totalReservation += parseFloat(reservationArray[i].calculateTotal()).toFixed(2);
    totalChildCount += parseInt(reservationArray[i].getChildCount());
    totalAdultCount += parseInt(reservationArray[i].getAdultCount());
   }
   console.log("totalReservation "+ totalReservation);

   var averageReservation = parseFloat(totalReservation/reservationArray.length).toFixed(2);
   document.getElementById("averageReservation").textContent = "Average of Reservation: " + averageReservation;

   document.getElementById("totalChild").textContent ="Total number of underage customer: " +totalChildCount;
   document.getElementById("totalAdult").textContent = "Total of Adults: "+ totalAdultCount;


    
    
    

}