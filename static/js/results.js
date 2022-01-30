function getResult(r) {
  switch (r) {
    case 0:
        var g = "Control" ;
        var b = "Stimulated to Learn" ;
        var t = "Memantine" ;
        var c = "c-CS-m"
        break;
      case 1:
        var g = "Control" ;
        var b = "Stimulated to Learn" ;
        var t = "Saline" ;
        var c = "c-CS-s"
        break;
      case 2:
        var g = "Control" ;
        var b = "Not Stimulated to Learn" ;
        var t = "Memantine" ;
        var c = "c-SC-m"
        break;
      case 3:
        var g = "Control" ;
        var b = "Not Stimulated to Learn" ;
        var t = "Saline" ;
        var c = "c-SC-s"
        break;
      case 4:
        var g = "Trisomy" ;
        var b = "Stimulated to Learn" ;
        var t = "Memantine" ;
        var c = "t-CS-m"
        break;
      case 5:
        var g = "Trisomy" ;
        var b = "Stimulated to Learn" ;
        var t = "Saline" ;
        var c = "t-CS-s"
        break;
      case 6:
        var g = "Trisomy" ;
        var b = "Not Stimulated to Learn" ;
        var t = "Memantine" ;
        var c = "t-SC-m"
        break;
    case 7:
        var g = "Trisomy" ;
        var b = "Not Stimulated to Learn" ;
        var t = "Saline" ;
        var c = "t-SC-s"
        break;
    default:
        alert("Error occurred!");
        document.getElementById("formID").submit();
}
document.getElementById("genotype").value = g ;
document.getElementById("behavior").value = b ;
document.getElementById("treatment").value = t ;
document.getElementById("miceClass").value = c ;

}