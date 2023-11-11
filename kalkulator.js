// hide/unhide table formula start-------------------------------------------------------
function toggle() {
  var spolier = document.getElementById("spoiler");
  // var BgSorok = "#191970"; // what ever color you want
  // var BgLihat = "#2f4f4f"; // what ever color you want

  if (spolier.style.display == "none") {
    /* event.target.innerHTML = '<span class="down">&#9660;</span> Sorok formula'; */
    spolier.style.display = "";
    document.getElementById("tukarBg").innerHTML = "<span class='down'>&#9660;</span> Sorok formula";
    document.getElementById("tukarBg").style.backgroundColor = "#2f4f4f";
    document.getElementById("tukarBg").style.color = "#66cdaa";
    document.getElementById("tukarBg").style.borderBottomColor = "#2f4f4f";
  } else {
    /* event.target.innerHTML = '<span class="up">&#9650;</span> Lihat formula'; */
    spolier.style.display = "none";
    document.getElementById("tukarBg").innerHTML = "<span class='up'>&#9650;</span> Lihat formula";
    document.getElementById("tukarBg").style.backgroundColor = "#2f4f4f";
    document.getElementById("tukarBg").style.color = "#66cdaa";
    document.getElementById("tukarBg").style.borderBottomColor = "#008080";
  }
}
// hide/unhide table formula end-------------------------------------------------------

//popup info start-------------------------------------------------------------------
function myInfo1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup1").classList.toggle("show");
  }, 2000);
}

function myInfo2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup2").classList.toggle("show");
  }, 2000);
}

function myInfo3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup3").classList.toggle("show");
  }, 2000);
}

function myInfo4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup4").classList.toggle("show");
  }, 2000);
}

function myInfo5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup5").classList.toggle("show");
  }, 2000);
}

function myInfo6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup6").classList.toggle("show");
  }, 2000);
}

//function myInfo7() {
//  var popup = document.getElementById("myPopup7");
//  popup.classList.toggle("show");
//  setTimeout(function () {
//    document.getElementById("myPopup7").classList.toggle("show");
//  }, 2000);
//}

function myInfo8() {
  var popup = document.getElementById("myPopup8");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup8").classList.toggle("show");
  }, 2000);
}

function myInfo9() {
  var popup = document.getElementById("myPopup9");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup9").classList.toggle("show");
  }, 2000);
}

function myInfo10() {
  var popup = document.getElementById("myPopup10");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup10").classList.toggle("show");
  }, 2000);
}

function myInfo11() {
  var popup = document.getElementById("myPopup11");
  popup.classList.toggle("show");
  setTimeout(function() {
    document.getElementById("myPopup11").classList.toggle("show");
  }, 2000);
}
//popup info end-------------------------------------------------------------------

//https://stackoverflow.com/questions/42226161/input-field-remove-value-when-onclick-events-and-restore-the-value-if-not-set
//BASIC--------------------------------------------------------------------------
var inputToCheck = document.getElementById("basic");
inputToCheck.initialValue = inputToCheck.value || "";
inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});
inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});
//SHIFT--------------------------------------------------------------------------
var inputToCheck = document.getElementById("shift");
inputToCheck.initialValue = inputToCheck.value || "";
inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});
inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});
//PB--------------------------------------------------------------------------
var inputToCheck = document.getElementById("pb");
inputToCheck.initialValue = inputToCheck.value || "";
inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});
inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});
//DOBI--------------------------------------------------------------------------
var inputToCheck = document.getElementById("dobi");
inputToCheck.initialValue = inputToCheck.value || "";
inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});
inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});
//MAKAN--------------------------------------------------------------------------
var inputToCheck = document.getElementById("makan");
inputToCheck.initialValue = inputToCheck.value || "";
inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});
inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});
//OT1--------------------------------------------------------------------------
var inputToCheck = document.getElementById("ot");
inputToCheck.initialValue = inputToCheck.value || "";

inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});

inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});
//OT2--------------------------------------------------------------------------
//var inputToCheck = document.getElementById("odot_1");
//inputToCheck.initialValue = inputToCheck.value || "";

//inputToCheck.addEventListener("focus", function (e) {
//  this.value == this.initialValue ? (this.value = "") : "";
//});

//inputToCheck.addEventListener("blur", function (e) {
//  this.value == "" ? (this.value = this.initialValue) : "";
//});
//OT3--------------------------------------------------------------------------
var inputToCheck = document.getElementById("odot_2");
inputToCheck.initialValue = inputToCheck.value || "";

inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});

inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});
//OT4--------------------------------------------------------------------------
var inputToCheck = document.getElementById("odot_3");
inputToCheck.initialValue = inputToCheck.value || "";

inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});

inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});
//OT5--------------------------------------------------------------------------
var inputToCheck = document.getElementById("ph_1");
inputToCheck.initialValue = inputToCheck.value || "";

inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});

inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});
//OT6--------------------------------------------------------------------------
var inputToCheck = document.getElementById("ph_2");
inputToCheck.initialValue = inputToCheck.value || "";

inputToCheck.addEventListener("focus", function(e) {
  this.value == this.initialValue ? (this.value = "") : "";
});

inputToCheck.addEventListener("blur", function(e) {
  this.value == "" ? (this.value = this.initialValue) : "";
});

//5. reset button start------------------------------------------------------------------------------------------------------
function myFunction() {
  document.getElementById("myForm").reset();

  document.getElementById("output1").innerHTML =
    "= (asas + syif) &#247; 26 &#247; 8 x 1.5"; //reset formula ot1
  //document.getElementById("output2").innerHTML =
  //  "= (asas + syif) &#247; 26 &#247; 8 x 0.5"; //reset formula ot2
  document.getElementById("output3").innerHTML =
    "= (asas + syif) &#247; 26 &#247; 8 x 1.0"; //reset formula ot3
  document.getElementById("output4").innerHTML =
    "= (asas + syif) &#247; 26 &#247; 8 x 2"; //reset formula ot4
  document.getElementById("output5").innerHTML =
    "= (asas + syif) &#247; 26 &#247; 8 x 2"; //reset formula ot5
  document.getElementById("output6").innerHTML =
    "= (asas + syif) &#247; 26 &#247; 8 x 3"; //reset formula ot6

  document.getElementById("output").innerHTML = "&nbsp;&nbsp;&nbsp;RM 0.00"; //reset asas
  document.getElementById("output11").innerHTML = "+ RM 0.00"; //reset shift
  document.getElementById("output12").innerHTML = "+ RM 0.00"; //reset PB
  document.getElementById("output13").innerHTML = "+ RM 0.00"; //reset dobi
  document.getElementById("output17").innerHTML = "+ RM 0.00"; //reset makan
  document.getElementById("output7").innerHTML = "+ RM 0.00"; //reset ot1
  //  document.getElementById("output8").innerHTML = "+ RM 0.00"; //reset ot2
  document.getElementById("output15").innerHTML = "+ RM 0.00"; //reset ot3
  document.getElementById("output16").innerHTML = "+ RM 0.00"; //reset ot4
  document.getElementById("output9").innerHTML = "+ RM 0.00"; //reset ot5
  document.getElementById("output14").innerHTML = "+ RM 0.00"; //reset ot6
  document.getElementById("output10").innerHTML = "= RM 0.00"; //reset gaji
}
//5. reset button end------------------------------------------------------------------------------------------------------

//1. dapatan dari text box start------------------------------------------------------------------------------------------------------
//https://github.com/kaizhelam/BMI-Calculator
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  const basic = parseInt(document.getElementById("basic").value); //basic
  const shift = parseInt(document.getElementById("shift").value); // shift
  const pb = parseInt(document.getElementById("pb").value); // pb
  const dobi = parseInt(document.getElementById("dobi").value); // dobi
  const makan = parseInt(document.getElementById("makan").value); // makan

  const ot = parseInt(document.getElementById("ot").value); // ot1

  // const odot_1 = parseInt(document.getElementById("odot_1").value); // ot2
  const odot_2 = parseInt(document.getElementById("odot_2").value); // ot3
  const odot_3 = parseInt(document.getElementById("odot_3").value); // ot4

  const ph_1 = parseInt(document.getElementById("ph_1").value); // 0t5
  const ph_2 = parseInt(document.getElementById("ph_2").value); // 0t6
  //1. dapatan dari text box end------------------------------------------------------------------------------------------------------

  // 4.tayang keputusan start---------------------------------------------------------------------------------------------------------
  //formula
  const result1 = document.getElementById("output1"); //formula ot1
  const result2 = document.getElementById("output2"); // formula ot2
  const result3 = document.getElementById("output3"); // formula ot3
  const result4 = document.getElementById("output4"); // formula ot4
  const result5 = document.getElementById("output5"); // formula ot5
  const result6 = document.getElementById("output6"); // formula ot6
  //total
  const result = document.getElementById("output"); // basic
  const result7 = document.getElementById("output7"); // ot1
  //  const result8 = document.getElementById("output8"); //ot2
  const result15 = document.getElementById("output15"); //ot3
  const result16 = document.getElementById("output16"); //ot4
  const result9 = document.getElementById("output9"); // OT5
  const result14 = document.getElementById("output14"); // OT6
  const result10 = document.getElementById("output10"); // FULL GAJI
  const result11 = document.getElementById("output11"); // elaun shift
  const result12 = document.getElementById("output12"); // elaun pb
  const result13 = document.getElementById("output13"); // elaun dobi
  const result17 = document.getElementById("output17"); // elaun makan
  // 4.tayang keputusan end---------------------------------------------------------------------------------------------------------

  // 2.kira start-----------------------------------------------------------------------------------------------------------------
  /* contoh const bmi = (weight / ((height*height)/10000)).toFixed(2); */
  /* const basic_ot = ((basic / 26 / 8 * 1.5 * ot) + basic).toFixed(2); */
  let ot_1 = (((basic + shift) / 26 / 8) * 1.5 * ot).toFixed(2); // kira jumlah ot1
  //  let ot_2 = (((basic + shift) / 26 / 8) * 0.5 * odot_1).toFixed(2); //kira jumlah ot2
  let ot_3 = (((basic + shift) / 26) * 1 * odot_2).toFixed(2); //kira jumlah ot3
  let ot_4 = (((basic + shift) / 26 / 8) * 2 * odot_3).toFixed(2); //kira jumlah ot4
  let ot_5 = (((basic + shift) / 26) * 2 * ph_1).toFixed(2); //kira jumlah ot5
  let ot_6 = (((basic + shift) / 26 / 8) * 3 * ph_2).toFixed(2); //kira jumlah ot6
  let e_basic = (1 * basic).toFixed(2); //kira jumlah basic
  let e_shift = (1 * shift).toFixed(2); //kira jumlah elaun shift
  let e_pb = (1 * pb).toFixed(2); //kira jumlah elaun pb
  let e_dobi = (1 * dobi).toFixed(2); //kira jumlah elaun dobi
  let e_makan = (10 * makan).toFixed(2); //kira jumlah elaun makan

  let t_ot_1 = ((basic + shift) / 26 / 8) * 1.5 * ot;
  // let t_ot_2 = ((basic + shift) / 26 / 8) * 0.5 * odot_1;
  let t_ot_3 = ((basic + shift) / 26) * 1 * odot_2;
  let t_ot_4 = ((basic + shift) / 26 / 8) * 2 * odot_3;
  let t_ot_5 = ((basic + shift) / 26) * 2 * ph_1;
  let t_ot_6 = ((basic + shift) / 26 / 8) * 3 * ph_2;
  let t_e_makan = 10 * makan;
  let gaji = (
    basic +
    shift +
    pb +
    dobi +
    t_e_makan +
    t_ot_1 +
    // t_ot_2 +
    t_ot_3 +
    t_ot_4 +
    t_ot_5 +
    t_ot_6
  ).toFixed(2); //kira total all

  // kira formula----------------------------------------------------------------
  const ot1 = (((basic + shift) / 26 / 8) * 1.5).toFixed(2); //kira jumlah ot1
  //  const ot2 = (((basic + shift) / 26 / 8) * 0.5).toFixed(2); //kira jumlah ot2
  const ot3 = (((basic + shift) / 26 / 8) * 1.0).toFixed(2); //kira jumlah ot3
  const ot4 = (((basic + shift) / 26 / 8) * 2).toFixed(2); //kira jumlah ot4
  const ot5 = (((basic + shift) / 26 / 8) * 2).toFixed(2); //kira jumlah ot5
  const ot6 = (((basic + shift) / 26 / 8) * 3).toFixed(2); //kira jumlah ot6
  //2. kira end-----------------------------------------------------------------------------------------------------------------

  // 3. tayang start-----------------------------------------------------------------------------------------------
  //formula
  if (ot1) {
    result1.innerHTML = "= RM " + ot1 + " ";
  }
  //  if (ot2) {
  //   result2.innerHTML = "= RM " + ot2 + " ";
  //  }
  if (ot3) {
    result3.innerHTML = "= RM " + ot3 + " ";
  }
  if (ot4) {
    result4.innerHTML = "= RM " + ot4 + " ";
  }
  if (ot5) {
    result5.innerHTML = "= RM " + ot5 + " ";
  }
  if (ot6) {
    result6.innerHTML = "= RM " + ot6 + " ";
  }

  //total
  if (e_basic) {
    result.innerHTML = "&nbsp;&nbsp;&nbsp;RM " + e_basic; //untuk tayang basic
  }
  if (e_shift) {
    result11.innerHTML = "+ RM " + e_shift; //untuk tayang elaun shift
  }
  if (e_pb) {
    result12.innerHTML = "+ RM " + e_pb; //untuk tayang elaun pb
  }
  if (e_dobi) {
    result13.innerHTML = "+ RM " + e_dobi; //untuk tayang elaun dobi
  }
  if (e_makan) {
    result17.innerHTML = "+ RM " + e_makan; //untuk tayang elaun makan
  }
  if (ot_1) {
    result7.innerHTML = "+ RM " + ot_1; //untuk tayang 0t1
  }

  // if (ot_2) {
  //  result8.innerHTML = "+ RM " + ot_2; //untuk tayang 0t2
  //  }
  if (ot_3) {
    result15.innerHTML = "+ RM " + ot_3; //untuk tayang 0t3
  }
  if (ot_4) {
    result16.innerHTML = "+ RM " + ot_4; //untuk tayang 0t4
  }
  if (ot_5) {
    result9.innerHTML = "+ RM " + ot_5; //untuk tayang 0t5
  }
  if (ot_6) {
    result14.innerHTML = "+ RM " + ot_6; //untuk tayang 0t6
  }
  if (gaji) {
    result10.innerHTML = "= RM " + gaji; //untuk tayang jumlah gaji
  }
  //3.  tayang end------------------------------------------------------------------------------------------------
});

//myloader start---------------------------------------------------------------
var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
//myloader end----------
