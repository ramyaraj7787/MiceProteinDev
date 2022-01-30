
function requiredCheck() {
    var count = 0;
    var DYRK1A_N = $("#DYRK1A_N").val();
    var ITSN1_N = $("#ITSN1_N").val();
    var BDNF_N = $("#BDNF_N").val();
    var NR1_N = $("#NR1_N").val();
    var NR2A_N = $("#NR2A_N").val();
    var pAKT_N = $("#pAKT_N").val();
    var pBRAF_N = $("#pBRAF_N").val();
    var pCAMKII_N = $("#pCAMKII_N").val();
    var pCREB_N = $("#pCREB_N").val();
    var pELK_N = $("#pELK_N").val();
    var pERK_N = $("#pERK_N").val();
    var pJNK_N = $("#pJNK_N").val();
    var PKCA_N = $("#PKCA_N").val();
    var pMEK_N = $("#pMEK_N").val();
    var pNR1_N = $("#pNR1_N").val();
    var pNR2A_N = $("#pNR2A_N").val();
    var pNR2B_N = $("#pNR2B_N").val();
    var pPKCAB_N = $("#pPKCAB_N").val();
    var pRSK_N = $("#pRSK_N").val();
    var AKT_N = $("#AKT_N").val();
    var BRAF_N = $("#BRAF_N").val();
    var CAMKII_N = $("#CAMKII_N").val();
    var CREB_N = $("#CREB_N").val();
    var ELK_N = $("#ELK_N").val();
    var ERK_N = $("#ERK_N").val();
    var GSK3B_N = $("#GSK3B_N").val();
    var JNK_N = $("#JNK_N").val();
    var MEK_N = $("#MEK_N").val();
    var TRKA_N = $("#TRKA_N").val();
    var RSK_N = $("#RSK_N").val();
    var APP_N = $("#APP_N").val();
    var Bcatenin_N = $("#Bcatenin_N").val();
    var SOD1_N = $("#SOD1_N").val();
    var MTOR_N = $("#MTOR_N").val();
    var P38_N = $("#P38_N").val();
    var pMTOR_N = $("#pMTOR_N").val();
    var DSCR1_N = $("#DSCR1_N").val();
    var AMPKA_N = $("#AMPKA_N").val();
    var NR2B_N = $("#NR2B_N").val();
    var pNUMB_N = $("#pNUMB_N").val();
    var RAPTOR_N = $("#RAPTOR_N").val();
    var TIAM1_N = $("#TIAM1_N").val();
    var pP70S6_N = $("#pP70S6_N").val();
    var NUMB_N = $("#NUMB_N").val();
    var P70S6_N = $("#P70S6_N").val();
    var pGSK3B_N = $("#pGSK3B_N").val();
    var pPKCG_N = $("#pPKCG_N").val();
    var CDK5_N = $("#CDK5_N").val();
    var S6_N = $("#S6_N").val();
    var ADARB1_N = $("#ADARB1_N").val();
    var AcetylH3K9_N = $("#AcetylH3K9_N").val();
    var RRP1_N = $("#RRP1_N").val();
    var BAX_N = $("#BAX_N").val();
    var ARC_N = $("#ARC_N").val();
    var ERBB4_N = $("#ERBB4_N").val();
    var nNOS_N = $("#nNOS_N").val();
    var Tau_N = $("#Tau_N").val();
    var GFAP_N = $("#GFAP_N").val();
    var GluR3_N = $("#GluR3_N").val();
    var GluR4_N = $("#GluR4_N").val();
    var IL1B_N = $("#IL1B_N").val();
    var P3525_N = $("#P3525_N").val();
    var pCASP9_N = $("#pCASP9_N").val();
    var PSD95_N = $("#PSD95_N").val();
    var SNCA_N = $("#SNCA_N").val();
    var Ubiquitin_N = $("#Ubiquitin_N").val();
    var pGSK3B_Tyr216_N = $("#pGSK3B_Tyr216_N").val();
    var SHH_N = $("#SHH_N").val();
    var BAD_N = $("#BAD_N").val();
    var BCL2_N = $("#BCL2_N").val();
    var pS6_N = $("#pS6_N").val();
    var pCFOS_N = $("#pCFOS_N").val();
    var SYP_N = $("#SYP_N").val();
    var H3AcK18_N = $("#H3AcK18_N").val();
    var EGR1_N = $("#EGR1_N").val();
    var H3MeK4_N = $("#H3MeK4_N").val();
    var CaNA_N = $("#CaNA_N").val();

    checkNullField(DYRK1A_N, 1);
    checkNullField(ITSN1_N, 2);
    checkNullField(BDNF_N, 3);
    checkNullField(NR1_N, 4);
    checkNullField(NR2A_N, 5);
    checkNullField(pAKT_N, 6);
    checkNullField(pBRAF_N, 7);
    checkNullField(pCAMKII_N, 8);
    checkNullField(pCREB_N, 9);
    checkNullField(pELK_N, 10);
    checkNullField(pERK_N, 11);
    checkNullField(pJNK_N, 12);
    checkNullField(PKCA_N, 13);
    checkNullField(pMEK_N, 14);
    checkNullField(pNR1_N, 15);
    checkNullField(pNR2A_N, 16);
    checkNullField(pNR2B_N, 17);
    checkNullField(pPKCAB_N, 18);
    checkNullField(pRSK_N, 19);
    checkNullField(AKT_N, 20);
    checkNullField(BRAF_N, 21);
    checkNullField(CAMKII_N, 22);
    checkNullField(CREB_N, 23);
    checkNullField(ELK_N, 24);
    checkNullField(ERK_N, 25);
    checkNullField(GSK3B_N, 26);
    checkNullField(JNK_N, 27);
    checkNullField(MEK_N, 28);
    checkNullField(TRKA_N, 29);
    checkNullField(RSK_N, 30);
    checkNullField(APP_N, 31);
    checkNullField(Bcatenin_N, 32);
    checkNullField(SOD1_N, 33);
    checkNullField(MTOR_N, 34);
    checkNullField(P38_N, 35);
    checkNullField(pMTOR_N, 36);
    checkNullField(DSCR1_N, 37);
    checkNullField(AMPKA_N, 38);
    checkNullField(NR2B_N, 39);
    checkNullField(pNUMB_N, 40);
    checkNullField(RAPTOR_N, 41);
    checkNullField(TIAM1_N, 42);
    checkNullField(pP70S6_N, 43);
    checkNullField(NUMB_N, 44);
    checkNullField(P70S6_N, 45);
    checkNullField(pGSK3B_N, 46);
    checkNullField(pPKCG_N, 47);
    checkNullField(CDK5_N, 48);
    checkNullField(S6_N, 49);
    checkNullField(ADARB1_N, 50);
    checkNullField(AcetylH3K9_N, 51);
    checkNullField(RRP1_N, 52);
    checkNullField(BAX_N, 53);
    checkNullField(ARC_N, 54);
    checkNullField(ERBB4_N, 55);
    checkNullField(nNOS_N, 56);
    checkNullField(Tau_N, 57);
    checkNullField(GFAP_N, 58);
    checkNullField(GluR3_N, 59);
    checkNullField(GluR4_N, 60);
    checkNullField(IL1B_N, 61);
    checkNullField(P3525_N, 62);
    checkNullField(pCASP9_N, 63);
    checkNullField(PSD95_N, 64);
    checkNullField(SNCA_N, 65);
    checkNullField(Ubiquitin_N, 66);
    checkNullField(pGSK3B_Tyr216_N, 67);
    checkNullField(SHH_N, 68);
    checkNullField(BAD_N, 69);
    checkNullField(BCL2_N, 70);
    checkNullField(pS6_N, 71);
    checkNullField(pCFOS_N, 72);
    checkNullField(SYP_N, 73);
    checkNullField(H3AcK18_N, 74);
    checkNullField(EGR1_N, 75);
    checkNullField(H3MeK4_N, 76);
    checkNullField(CaNA_N, 77);
   
    if (count > 0) {
        alert("Fill all details");
        return false;

    } else {
       
        return  $('#fdata').attr('action', '/result');
    
    }

    function checkNullField(id, val) {
        
        if (id == "" || id == null) {
            count++;
            addCssError(val);
        } else {
            //count--;
            addCssSuccess(val);
        }
    }
}

function addCssError(val) {
    return (val == 1) ? $("#DYRK1A_N").addClass("errorMessage")
        : (val == 2) ? $("#ITSN1_N").addClass("errorMessage")
            : (val == 3) ? $("#BDNF_N").addClass("errorMessage")
                : (val == 4) ? $("#NR1_N").addClass("errorMessage")
                    : (val == 5) ? $("#NR2A_N").addClass("errorMessage")
                        : (val == 6) ? $("#pAKT_N").addClass("errorMessage")
                            : (val == 7) ? $("#pBRAF_N").addClass("errorMessage")
                                : (val == 8) ? $("#pCAMKII_N").addClass("errorMessage")
                                    : (val == 9) ? $("#pCREB_N").addClass("errorMessage")
                                        : (val == 10) ? $("#pELK_N").addClass("errorMessage")
                                            : (val == 11) ? $("#pERK_N").addClass("errorMessage")
                                                : (val == 12) ? $("#pJNK_N").addClass("errorMessage")
                                                    : (val == 13) ? $("#PKCA_N").addClass("errorMessage")
                                                        : (val == 14) ? $("#pMEK_N").addClass("errorMessage")
                                                            : (val == 15) ? $("#pNR1_N").addClass("errorMessage")
                                                                : (val == 16) ? $("#pNR2A_N").addClass("errorMessage")
                                                                    : (val == 17) ? $("#pNR2B_N").addClass("errorMessage")
                                                                        : (val == 18) ? $("#pPKCAB_N").addClass("errorMessage")
                                                                            : (val == 19) ? $("#pRSK_N").addClass("errorMessage")
                                                                                : (val == 20) ? $("#AKT_N").addClass("errorMessage")
                                                                                    : (val == 21) ? $("#BRAF_N").addClass("errorMessage")
                                                                                        : (val == 22) ? $("#CAMKII_N").addClass("errorMessage")
                                                                                            : (val == 23) ? $("#CREB_N").addClass("errorMessage")
                                                                                                : (val == 24) ? $("#ELK_N").addClass("errorMessage")
                                                                                                    : (val == 25) ? $("#ERK_N").addClass("errorMessage")
                                                                                                        : (val == 26) ? $("#GSK3B_N").addClass("errorMessage")
                                                                                                            : (val == 27) ? $("#JNK_N").addClass("errorMessage")
                                                                                                                : (val == 28) ? $("#MEK_N").addClass("errorMessage")
                                                                                                                    : (val == 29) ? $("#TRKA_N").addClass("errorMessage")
                                                                                                                        : (val == 30) ? $("#RSK_N").addClass("errorMessage")
                                                                                                                            : (val == 31) ? $("#APP_N").addClass("errorMessage")
                                                                                                                                : (val == 32) ? $("#Bcatenin_N").addClass("errorMessage")
                                                                                                                                    : (val == 33) ? $("#SOD1_N").addClass("errorMessage")
                                                                                                                                        : (val == 34) ? $("#MTOR_N").addClass("errorMessage")
                                                                                                                                            : (val == 35) ? $("#P38_N").addClass("errorMessage")
                                                                                                                                                : (val == 36) ? $("#pMTOR_N").addClass("errorMessage")
                                                                                                                                                    : (val == 37) ? $("#DSCR1_N").addClass("errorMessage")
                                                                                                                                                        : (val == 38) ? $("#AMPKA_N").addClass("errorMessage")
                                                                                                                                                            : (val == 39) ? $("#NR2B_N").addClass("errorMessage")
                                                                                                                                                                : (val == 40) ? $("#pNUMB_N").addClass("errorMessage")
                                                                                                                                                                    : (val == 41) ? $("#RAPTOR_N").addClass("errorMessage")
                                                                                                                                                                        : (val == 42) ? $("#TIAM1_N").addClass("errorMessage")
                                                                                                                                                                            : (val == 43) ? $("#pP70S6_N").addClass("errorMessage")
                                                                                                                                                                                : (val == 44) ? $("#NUMB_N").addClass("errorMessage")
                                                                                                                                                                                    : (val == 45) ? $("#P70S6_N").addClass("errorMessage")
                                                                                                                                                                                        : (val == 46) ? $("#pGSK3B_N").addClass("errorMessage")
                                                                                                                                                                                            : (val == 47) ? $("#pPKCG_N").addClass("errorMessage")
                                                                                                                                                                                                : (val == 48) ? $("#CDK5_N").addClass("errorMessage")
                                                                                                                                                                                                    : (val == 49) ? $("#S6_N").addClass("errorMessage")
                                                                                                                                                                                                        : (val == 50) ? $("#ADARB1_N").addClass("errorMessage")
                                                                                                                                                                                                            : (val == 51) ? $("#AcetylH3K9_N").addClass("errorMessage")
                                                                                                                                                                                                                : (val == 52) ? $("#RRP1_N").addClass("errorMessage")
                                                                                                                                                                                                                    : (val == 53) ? $("#BAX_N").addClass("errorMessage")
                                                                                                                                                                                                                        : (val == 54) ? $("#ARC_N").addClass("errorMessage")
                                                                                                                                                                                                                            : (val == 55) ? $("#ERBB4_N").addClass("errorMessage")
                                                                                                                                                                                                                                : (val == 56) ? $("#nNOS_N").addClass("errorMessage")
                                                                                                                                                                                                                                    : (val == 57) ? $("#Tau_N").addClass("errorMessage")
                                                                                                                                                                                                                                        : (val == 58) ? $("#GFAP_N").addClass("errorMessage")
                                                                                                                                                                                                                                            : (val == 59) ? $("#GluR3_N").addClass("errorMessage")
                                                                                                                                                                                                                                                : (val == 60) ? $("#GluR4_N").addClass("errorMessage")
                                                                                                                                                                                                                                                    : (val == 61) ? $("#IL1B_N").addClass("errorMessage")
                                                                                                                                                                                                                                                        : (val == 62) ? $("#P3525_N").addClass("errorMessage")
                                                                                                                                                                                                                                                            : (val == 63) ? $("#pCASP9_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                : (val == 64) ? $("#PSD95_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                    : (val == 65) ? $("#SNCA_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                        : (val == 66) ? $("#Ubiquitin_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                            : (val == 67) ? $("#pGSK3B_Tyr216_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                : (val == 68) ? $("#SHH_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                    : (val == 69) ? $("#BAD_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                        : (val == 70) ? $("#BCL2_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                            : (val == 71) ? $("#pS6_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                                : (val == 72) ? $("#pCFOS_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                                    : (val == 73) ? $("#SYP_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                                        : (val == 74) ? $("#H3AcK18_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                                            : (val == 75) ? $("#EGR1_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                                                : (val == 76) ? $("#H3MeK4_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                                                    : (val == 77) ? $("#CaNA_N").addClass("errorMessage")
                                                                                                                                                                                                                                                                                                                        : "";
}
function addCssSuccess(val) {
    return (val == 1) ? $("#DYRK1A_N").addClass("successMessage")
        : (val == 2) ? $("#ITSN1_N").addClass("successMessage")
            : (val == 3) ? $("#BDNF_N").addClass("successMessage")
                : (val == 4) ? $("#NR1_N").addClass("successMessage")
                    : (val == 5) ? $("#NR2A_N").addClass("successMessage")
                        : (val == 6) ? $("#pAKT_N").addClass("successMessage")
                            : (val == 7) ? $("#pBRAF_N").addClass("successMessage")
                                : (val == 8) ? $("#pCAMKII_N").addClass("successMessage")
                                    : (val == 9) ? $("#pCREB_N").addClass("successMessage")
                                        : (val == 10) ? $("#pELK_N").addClass("successMessage")
                                            : (val == 11) ? $("#pERK_N").addClass("successMessage")
                                                : (val == 12) ? $("#pJNK_N").addClass("successMessage")
                                                    : (val == 13) ? $("#PKCA_N").addClass("successMessage")
                                                        : (val == 14) ? $("#pMEK_N").addClass("successMessage")
                                                            : (val == 15) ? $("#pNR1_N").addClass("successMessage")
                                                                : (val == 16) ? $("#pNR2A_N").addClass("successMessage")
                                                                    : (val == 17) ? $("#pNR2B_N").addClass("successMessage")
                                                                        : (val == 18) ? $("#pPKCAB_N").addClass("successMessage")
                                                                            : (val == 19) ? $("#pRSK_N").addClass("successMessage")
                                                                                : (val == 20) ? $("#AKT_N").addClass("successMessage")
                                                                                    : (val == 21) ? $("#BRAF_N").addClass("successMessage")
                                                                                        : (val == 22) ? $("#CAMKII_N").addClass("successMessage")
                                                                                            : (val == 23) ? $("#CREB_N").addClass("successMessage")
                                                                                                : (val == 24) ? $("#ELK_N").addClass("successMessage")
                                                                                                    : (val == 25) ? $("#ERK_N").addClass("successMessage")
                                                                                                        : (val == 26) ? $("#GSK3B_N").addClass("successMessage")
                                                                                                            : (val == 27) ? $("#JNK_N").addClass("successMessage")
                                                                                                                : (val == 28) ? $("#MEK_N").addClass("successMessage")
                                                                                                                    : (val == 29) ? $("#TRKA_N").addClass("successMessage")
                                                                                                                        : (val == 30) ? $("#RSK_N").addClass("successMessage")
                                                                                                                            : (val == 31) ? $("#APP_N").addClass("successMessage")
                                                                                                                                : (val == 32) ? $("#Bcatenin_N").addClass("successMessage")
                                                                                                                                    : (val == 33) ? $("#SOD1_N").addClass("successMessage")
                                                                                                                                        : (val == 34) ? $("#MTOR_N").addClass("successMessage")
                                                                                                                                            : (val == 35) ? $("#P38_N").addClass("successMessage")
                                                                                                                                                : (val == 36) ? $("#pMTOR_N").addClass("successMessage")
                                                                                                                                                    : (val == 37) ? $("#DSCR1_N").addClass("successMessage")
                                                                                                                                                        : (val == 38) ? $("#AMPKA_N").addClass("successMessage")
                                                                                                                                                            : (val == 39) ? $("#NR2B_N").addClass("successMessage")
                                                                                                                                                                : (val == 40) ? $("#pNUMB_N").addClass("successMessage")
                                                                                                                                                                    : (val == 41) ? $("#RAPTOR_N").addClass("successMessage")
                                                                                                                                                                        : (val == 42) ? $("#TIAM1_N").addClass("successMessage")
                                                                                                                                                                            : (val == 43) ? $("#pP70S6_N").addClass("successMessage")
                                                                                                                                                                                : (val == 44) ? $("#NUMB_N").addClass("successMessage")
                                                                                                                                                                                    : (val == 45) ? $("#P70S6_N").addClass("successMessage")
                                                                                                                                                                                        : (val == 46) ? $("#pGSK3B_N").addClass("successMessage")
                                                                                                                                                                                            : (val == 47) ? $("#pPKCG_N").addClass("successMessage")
                                                                                                                                                                                                : (val == 48) ? $("#CDK5_N").addClass("successMessage")
                                                                                                                                                                                                    : (val == 49) ? $("#S6_N").addClass("successMessage")
                                                                                                                                                                                                        : (val == 50) ? $("#ADARB1_N").addClass("successMessage")
                                                                                                                                                                                                            : (val == 51) ? $("#AcetylH3K9_N").addClass("successMessage")
                                                                                                                                                                                                                : (val == 52) ? $("#RRP1_N").addClass("successMessage")
                                                                                                                                                                                                                    : (val == 53) ? $("#BAX_N").addClass("successMessage")
                                                                                                                                                                                                                        : (val == 54) ? $("#ARC_N").addClass("successMessage")
                                                                                                                                                                                                                            : (val == 55) ? $("#ERBB4_N").addClass("successMessage")
                                                                                                                                                                                                                                : (val == 56) ? $("#nNOS_N").addClass("successMessage")
                                                                                                                                                                                                                                    : (val == 57) ? $("#Tau_N").addClass("successMessage")
                                                                                                                                                                                                                                        : (val == 58) ? $("#GFAP_N").addClass("successMessage")
                                                                                                                                                                                                                                            : (val == 59) ? $("#GluR3_N").addClass("successMessage")
                                                                                                                                                                                                                                                : (val == 60) ? $("#GluR4_N").addClass("successMessage")
                                                                                                                                                                                                                                                    : (val == 61) ? $("#IL1B_N").addClass("successMessage")
                                                                                                                                                                                                                                                        : (val == 62) ? $("#P3525_N").addClass("successMessage")
                                                                                                                                                                                                                                                            : (val == 63) ? $("#pCASP9_N").addClass("successMessage")
                                                                                                                                                                                                                                                                : (val == 64) ? $("#PSD95_N").addClass("successMessage")
                                                                                                                                                                                                                                                                    : (val == 65) ? $("#SNCA_N").addClass("successMessage")
                                                                                                                                                                                                                                                                        : (val == 66) ? $("#Ubiquitin_N").addClass("successMessage")
                                                                                                                                                                                                                                                                            : (val == 67) ? $("#pGSK3B_Tyr216_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                : (val == 68) ? $("#SHH_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                    : (val == 69) ? $("#BAD_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                        : (val == 70) ? $("#BCL2_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                            : (val == 71) ? $("#pS6_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                                : (val == 72) ? $("#pCFOS_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                                    : (val == 73) ? $("#SYP_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                                        : (val == 74) ? $("#H3AcK18_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                                            : (val == 75) ? $("#EGR1_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                                                : (val == 76) ? $("#H3MeK4_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                                                    : (val == 77) ? $("#CaNA_N").addClass("successMessage")
                                                                                                                                                                                                                                                                                                                        : "";
}

function clear() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i < elements.length; i++) {
        if (elements[i].type == "text") {
          elements[i].value = "";
        }
  }
}
$("input").keyup(function() {
    $("input").css("opacity", ".4");
});

$("#dropdown-select").on("change", () => {
  switch ($("#dropdown-select").val()) {
      case "proteins":
        $("#batchFiles").css("display","none")
        $("#proteins").css("display","block")
        $("#submitBtn").css("display","block")
      break;
      case "batchFiles":
        $("#proteins").css("display","none")
        $("#batchFiles").css("display","block")
        $("#submitBtn").css("display","block")
      break;
  }
})

