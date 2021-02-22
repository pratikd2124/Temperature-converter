const cel_to_fahr = (celsius) => {
    celsius = document.getElementById("cls").value;
    var ctofahr = (celsius * 9/5) +32;
    return ctofahr;
}

    const fahr_to_cel = (fahrenhit) => {
        fahrenhit = document.getElementById("fhr").value;
        var fahrtoc = (fahrenhit - 32)*5/9;
        return fahrtoc;
}
const cel_to_kelvin = (celsius) => {
    celsius = document.getElementById("cls").value;
    var ctokel = celsius + 273.15;
    return ctokel;
}

const kelvin_to_cel = (kelvin) => {
    var keltocel = kelvin - 273.15;
    return keltocel;
}
const fahr_to_kel = (fahrenhit) => {
    fahrenhit = document.getElementById("fhr").value;
    var fahrtocel = fahr_to_cel(fahrenhit);
    var fahrtokel = fahrtocel + 273.15;
    return fahrtokel;
}
const kel_to_fahr = (kelvin) => {
    var keltoc = kelvin_to_cel(kelvin);
    var keltofahr = cel_to_fahr(keltoc);
    return keltofahr;
}

const btn = document.getElementById('convert');

btn.addEventListener("click",function(){
    document.getElementById("cls").value ;
    document.getElementById("fhr").value;
    document.getElementById("kvn").value;

});
//function cel_to_fahr(celsius){
  //  var ctemp = celsius;
    //var ctofahr = (ctemp * 9/5) +32;
    
//}