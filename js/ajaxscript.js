$(document).ready(function () {
   
// show data

function showData(){
    let op = "";
    $.ajax({
        type: "GET",
        url: "getData.php",
        dataType: 'json',
        success: function (response) {
            response.forEach(ele => {
                op += "<tr><td>" + ele.id + "</td><td>" + ele.name + "</td><td>" + ele.email + "</td><td>" + ele.password + "</td><td> <button name='edit' type='submit' data-m = " + ele.id + " class=' editid btn btn-warning me-2 '>edit</button><button name='del' data-m = " + ele.id + " type='submit' class=' delid btn btn-danger'>delete</button></td></tr>";
                
            });
            $("#tbody").html(op);
        }
    });
}

showData();



// Insert record

$("#btnadd").click(function (e) { 
    e.preventDefault();
    let id = $("#stid").val();
    let nm = $("#nameid").val();
    let em = $("#emailid").val();
    let pw = $("#passwordid").val();

    let data = {stid:id, name:nm, email:em, password:pw};

    $.ajax({
        type: "POST",
        url: "insert.php",
        data: JSON.stringify(data),
        success: function (response) {
            $("#message").css('padding', '10px 7px').text(response);
            $("#main-form")[0].reset();
            showData();
        }
    });
});


/// Delete record


$("#tbody").on("click", ".delid", function () {                     //event delegation
    let id = $(this).attr('data-m');  

    let data = {stid:id};

    $.ajax({
        type: "POST",
        url: "delete.php",
        data: JSON.stringify(data),
        success: function (response) {
            $("#message").css('padding', '10px 7px').text(response);
            showData();
        }
    });
});


/// Edit record

$("#tbody").on("click", ".editid", function () {                     //event delegation
    let id = $(this).attr('data-m');  

    let data = {stid:id};

    $.ajax({
        type: "POST",
        url: "edit.php",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (response) {
            let dt = response;
             $("#stid").val(dt.id);
             $("#nameid").val(dt.name);
             $("#emailid").val(dt.email);
             $("#passwordid").val(dt.password);
             showData();
        }
    });
});




});