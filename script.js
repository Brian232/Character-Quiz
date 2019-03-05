$("button").click(function(){
    var gumball = $("#powerLvl").val() && $("#attack").val();
    if("#powerLvl" <= 9000 && "#attack" === "Spirit Bomb") {
        $("#picGum").show();
        $("#picPika").hide();
        $("#picNaruto").hide();
        $("#picAang").hide();
        }  else{
        $("#picPika").show();
        }
        
});