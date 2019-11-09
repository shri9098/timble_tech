// $(document).ready(function()
// {
//     $('#pic').change(function ()
//     {
//         // alert('This file size is: ' + this.files[0].size/1024 + "KB");
//         if (this.files[0].size/1024> 2048){
//             Materialize.toast("Please Upload Image less than 2 MB.",2200);
//
//         }
//         else {
//             var img = $('#pic')[0].files[0];
//             var reader = new FileReader();
//             // console.log("--------1--------");
//             reader.onloadend = function(evt)
//             {
//                 $('#displayImg').attr('src',evt.target.result);
//             };
//             reader.readAsDataURL(img);
//         }
//     });
//
//
//
//
//
//         $('#slip').change(function ()
//     {
//
//         if (this.files[0].size/1024> 2048){
//             Materialize.toast("Please Upload file less than 2 MB.",2200);
//
//         }
//         else {
//             var fl = $('#slip')[0].files[0];
//             var reader = new FileReader();
//             // console.log("--------1--------");
//             reader.onloadend = function(evt)
//             {
//                 $('#displayImg').attr('src',evt.target.result);
//             };
//             reader.readAsDataURL(fl);
//         }
//     });
//
//
//     $("#first_name").change(function ()
//     {
//         $('#first_name_error').hide();
//     });
//     $("#first_name").focusout(function () {
//         if (this.value == null || this.value == "") {
//             $('#first_name_error').html("First Name should not be blank.");
//             $("#first_name_error").show();
//         }
//     });
//
//     $("#fathers_name").change(function ()
//     {
//         $('#fathers_name_error').hide();
//     });
//     $("#fathers_name").focusout(function () {
//         if (this.value == null || this.value == "") {
//             $('#fathers_name_error').html("Father's Name should not be blank.");
//             $("#fathers_name_error").show();
//         }
//     });
//     $("#location").change(function ()
//     {
//         $('#location_error').hide();
//     });
//     $("#location").focusout(function () {
//         if (this.value == null || this.value == "") {
//             $('#location_error').html("location Name should not be blank.");
//             $("#location_error").show();
//         }
//     });
//
//
//     $("#email").change(function ()
//     {
//         $('#email_error').hide();
//     });
//
//
//     $("#email").focusout(function () {
//         var email_atpos = this.value.indexOf("@");
//         var email_dotpos = this.value.lastIndexOf(".");
//         if (this.value== null || this.value == "") {
//             $('#email_error').html("Email should not be blank.");
//             $("#email_error").show();
//         }else if(1>email_atpos || email_atpos+2>email_dotpos || email_dotpos+2>=this.value.length){
//             $('#email_error').html("Email a valid Email Address.");
//             $("#email_error").show();
//         }
//     });
//     $("#mobile").change(function ()
//     {
//         $('#mobile_error').hide();
//     });
//     $("#mobile").focusout(function () {
//         if (this.value == null || this.value == "") {
//             $('#mobile_error').html("Mobile number should not be blank.");
//             $("#mobile_error").show();
//         }else if(this.value.length!=10){
//             $('#mobile_error').html("Enter valid Mobile number.");
//             $("#mobile_error").show();
//         }
//         else if (! this.value.match("^[789][0-9]{9}$")){
//             $('#mobile_error').html("Enter valid Mobile number...");
//             $("#mobile_error").show();
//         }
//     });
//
//
//
//       $("#pin").change(function ()
//     {
//         $('#pin_error').hide();
//     });
//     $("#pin").focusout(function () {
//         if (this.value == null || this.value == "") {
//             $('#pin_error').html("Pin number should not be blank.");
//             $("#pin_error").show();
//         }else if(this.value.length!=6){
//             $('#pin_error').html("Enter valid pin number.");
//             $("#pin_error").show();
//         }
//         else {
//             $('#pin_error').html("Enter valid Pin number...");
//             $("#pin_error").show();
//         }
//     });
//
//
//     $("#dob").change(function ()
//     {
//         if (this.value == null || this.value == "") {
//             alert("DOB should not be blank.");
//
//         }
//
//     });
//     $("#dob").focusout(function ()
//     {
//         if (this.value == null || this.value == "") {
//             alert('should not be blank');
//         }
//     });
//
//
//
// });
//
// function validate() {
//     var first_name = $("#first_name").val();
//     var fathers_name = $("#fathers_name").val();
//     var location = $("#location").val();
//     var email = $("#email").val();
//     var mobile = $("#mobile").val();
//     var pin = $("#pin").val();
//     var dob=$("#dob").val();
//     var pic=$("#pic").val();
//     var slip=$("#slip").val();
//
//
//     if (first_name == null || first_name == "") {
//         document.getElementById("first_name").focus();
//         $('#first_name_error').html("First Name should not be blank.");
//         $("#first_name_error").show();
//         return false;
//     }else { $("#first_name_error").hide();}
//
//     if (fathers_name == null || fathers_name == "") {
//         document.getElementById("fathers_name").focus();
//         $('#fathers_name_error').html("Father's Name should not be blank.");
//         $("#fathers_name_error").show();
//         return false;
//     }else { $("#fathers_name_error").hide();}
//
//     if (location == null || location == "") {
//         document.getElementById("location").focus();
//         $('#location_error').html("location Name should not be blank.");
//         $("#location_error").show();
//         return false;
//     }else { $("#location_error").hide();}
//     var email_atpos = email.indexOf("@");
//     var email_dotpos = email.lastIndexOf(".");
//     if (email== null || email == "") {
//         document.getElementById("email").focus();
//         $('#email_error').html("Email should not be blank.");
//         $("#email_error").show();
//         return false;
//     }else if(1>email_atpos || email_atpos+2>email_dotpos || email_dotpos+2>=email.length){
//         document.getElementById("email").focus();
//         $('#email_error').html("Email a valid Email Address.");
//         $("#email_error").show();
//         return false;
//     }else{ $("#email_error").hide();}
//     if (mobile == null || mobile == "") {
//         document.getElementById("mobile").focus();
//         $('#mobile_error').html("Mobile number should not be blank.");
//         $("#mobile_error").show();
//         return false;
//     }else if(mobile.length!=10){
//         document.getElementById("mobile").focus();
//         $('#mobile_error').html("Enter valid Mobile number.");
//         $("#mobile_error").show();
//         return false;
//     }else { $("#mobile_error").hide();}
//
//     if (pin == null || pin == "") {
//         document.getElementById("pin").focus();
//         $('#pin_error').html("pin number should not be blank.");
//         $("#pin_error").show();
//         return false;
//     }else if(mobile.length!=6){
//         document.getElementById("pin").focus();
//         $('#pin_error').html("Enter valid pin number.");
//         $("#pin_error").show();
//         return false;
//     }else { $("#pin_error").hide();}
//
//
//
//
//
//     if (dob.length!=10) {
//         document.getElementById("dob").focus();
//         $('#dob_error').html("Select Valid Date of Birth");
//         $("#dob_error").show();
//         return false;
//     }else{ $("#dob_error").hide();}
//
//
//     if (pic == null || pic=="") {
//         Materialize.toast("Please Upload Image",2200);
//
//         $('#pic_error').html("Upload Image.");
//         $("#pic_error").show();
//         return false;
//     }else { $("#pic_error").hide();}
//
//     if ($('#pic')[0].files[0].size/1024 > 2048)
//     {
//         Materialize.toast("Please Upload Image less than 2 MB.",2200);
//         return false;
//     }
//        if (slip == null || slip=="") {
//         Materialize.toast("Please Upload Image",2200);
//
//         $('#slip_error').html("Upload slip.");
//         $("#slip_error").show();
//         return false;
//
//     }else { $("#pic_error").hide();}
//     if ($('#slip')[0].files[0].size/1024 > 2048)
//     {
//         Materialize.toast("Please Upload payment slip.",2200);
//         return false;
//     }
//     return true;
// }
//
