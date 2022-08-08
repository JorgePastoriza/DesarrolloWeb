$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var subject = $("#subject").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "assets/php/process.php",
        data: "name=" + name + "&subject=" + subject + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $("#contactForm").trigger("reset");
}

/*    }).done(function(data){
        $("#contactForm").trigger("reset");
    };
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}*/