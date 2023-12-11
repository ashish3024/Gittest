function calculateAge(){
    var dob=document.getElementById('dob').value;
    var today=new Date();
    var birthDate=new Date(dob);
    var ageInMillisecons=today-birthDate;
    var ageDate=new Date(ageInMillisecons);
    var years=ageDate.getUTCFullYear()-1970;
    var months=ageDate.getUTCMonth();
    var days=ageDate.getUTCDate()-1;
    document.getElementById('result').innerText=years+"years"+months+"months"+days+"days";
}