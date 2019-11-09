// function getRegisterData() {
//          $('#btnSubmit').attr('disabled','disabled');
//          $("#Preloader").show();
//         console.log("say hii");
//         var location = document.getElementById("location").value;
//         console.log(location);
//         var first_name = document.getElementById("first_name").value;
//         var father_name = document.getElementById("fathers_name").value;
//         var number = document.getElementById("mobile").value;
//         var email = (document.getElementById("email").value).toLowerCase();
//         var pin_number = document.getElementById("pin_number").value;
//
//         var dob = document.getElementById("dob").value;
//
//
//         var pay_slip = $('#pay_slip')[0].value;
//         var file = pay_slip.split('\\').pop();
//         file = file.split('').join('_');
//         var pic = $('#pic')[0].value;
//         var image = pic.split('\\').pop();
//         image = image.split(' ').join('_');
//         var register_data = {};
//         console.log(register_data);
//         register_data['location'] = location;
//         register_data["first_name"] = first_name;
//         register_data["father_name"] = father_name;
//         register_data["email"] = email;
//         register_data["number"] = number;
//         register_data["pin_number"] = pin_number;
//         register_data["dob"] = dob;
//
//
//         // Get the html uploaded file
//         var data = new FormData();
//         var img = $('#pic')[0].files[0];
//         data.append('img', img);
//         data.append('user-data',JSON.stringify(register_data));
//         // alert(JSON.stringify(register_data));
//         data.append('img_path', image.toString());
//         var data1 = new FormData();
//         var fl = $('#pay_slip')[0].files[0];
//         data1.append('fl', fl);
//         data1.append('user-data',JSON.stringify(register_data));
//         data1.append('fl_path', file.toString());
//         $.ajax({
//             url: "registration",
//             method: "POST",
//             data: data,
//             processData: false,
//             contentType: false,
//             success: function (json_data)
//              {
//             if(json_data.response==='success'){
//                 alert('Registration Successful');
//
//                 setTimeout(function() {
//                     location.reload();
//                 }, 3000);
//             }
//             else{
//                 alert('Something Wrong');
//
//             }
//         },
//         complete: function(){
//             // $("#Preloader").hide();
//              setTimeout(function() {
//                     location.reload();
//                 }, 3000);
//         }
//
//         });
// }
// function titleCase(str)
// {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }
//
//



//real code
