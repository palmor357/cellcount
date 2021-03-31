$(document).ready(function () {
    $("#start").click(function () {
        $("#TotalCount").html("0");
        $(".Count").html("0");
        $("#btn").show();
        $("#MaxCount").val("100");
        $("#Table1").show();
        $("#Table2").hide();
        $("#btnreticu").hide();
        $("#RecTable").hide();
        $("#resIPR").hide();
        $("#IPR").hide();
        $("#dHTO").hide();
        document.getElementById("webcam").style.display = "none";
    });
});
$(document).ready(function () {
    $(".btncount").click(function () {
        $("#TotalCount").html(function (i, val) { return +val + 1 });
        if ($("#TotalCount").html() == $("#MaxCount").val()) {
            $("#btn").hide();
            $("#btnreticu").hide();
            document.getElementById("IPR").style.display = "block";
            var audio2 = new Audio('https://ia601503.us.archive.org/35/items/8BITCOIN02/8BIT_COIN_02.mp3');
            audio2.play();
            alert("Recuento Finalizado");
            var total = $("#MaxCount").val();
            $("#RecTable").show();

            // sacar recuento reticulocitos
            var HTOpac = $("#HTO").val();
            var retirecuento = $("#Reticul").html();
            var por_reticulocitos = retirecuento * 100 / total

            var num1 = por_reticulocitos * (HTOpac / 45)
            var num2 = 1 + (45 - HTOpac) * 0.05
            var num3 = num1 / num2
            var n = num3.toFixed(2);
            $("#resIPR").html(n);
            if (retirecuento = 0) {
                $("#resIPR").hide();
                $("#IPR").hide();
            }
            else{
                $("#resIPR").show();
                $("#IPR").show();
            }
           
        }
    });
});
$(document).ready(function () {
    $("#btntest").click(function () {
        var total = $("#MaxCount").val();
        var HTOpac = $("#HTO").val();
        var retirecuento = $("#Reticul").html();
        alert(total);
        alert(HTOpac);
        alert(retirecuento);
    });
});
$(document).ready(function () {
    $(".btncount").click(function () {
        var audio = new Audio('https://ia601906.us.archive.org/27/items/MOUSECLICK_201610/MOUSE_CLICK.mp3');
        audio.play();
    });
});
$(document).ready(function () {
    $("#btnBaso").click(function () {
        $("#Bas").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnEos").click(function () {
        $("#Eos").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnMie").click(function () {
        $("#Mie").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnJuv").click(function () {
        $("#Juv").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnBac").click(function () {
        $("#Bac").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnNeu").click(function () {
        $("#Neu").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnLin").click(function () {
        $("#Lin").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnMon").click(function () {
        $("#Mon").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnPlas").click(function () {
        $("#Plas").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnBla").click(function () {
        $("#Blas").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btneBla").click(function () {
        $("#eBlas").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnEritro").click(function () {
        $("#Eritro").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btnReticul").click(function () {
        $("#Reticul").html(function (i, val) { return +val + 1 });
    });
});
$(document).ready(function () {
    $("#btneBlasto").click(function () {
        $("#eBlasto").html(function (i, val) { return +val + 1 });
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "270px";
    document.getElementById("main").style.marginLeft = "270px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

$(document).ready(function () {
    $("#About").click(function () {
        alert("Powered By Palmor...");
    });
});

$(document).ready(function () {
    $("#btnCam").click(function () {
        document.getElementById("webcam").style.display = "block";
    });
});
$(document).ready(function () {
    $("#btnhide").click(function () {
        document.getElementById("webcam").style.display = "none";
    });
});
$(document).ready(function () {
    $("#print").click(function () {
        window.print();
    });
});
$(document).ready(function () {
    $("#btnReti").click(function () {
        $("#TotalCount").html("0");
        $("#btn").hide();
        $("#btnreticu").show();
        $(".Count").html("0");
        $("#MaxCount").val("500");
        $("#dHTO").show();
        document.getElementById("Table1").style.display = "none";
        document.getElementById("Table2").style.display = "block";
        document.getElementById("webcam").style.display = "none";
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        document.getElementById("btnReti").style.display = "block";
    });
});
