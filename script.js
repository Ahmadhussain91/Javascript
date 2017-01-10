document.getElementById("demo").innerHTML = "My First JavaScript";
function myFunction() {
    document.getElementById("demo2").innerHTML = "Paragraph changed.";
}

$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});