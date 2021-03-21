

$(document).ready(function (){


    (function(){
        // Send contact Form
        var formsAll = document.querySelectorAll('#contactForm');
        for (var i = 0; i < formsAll.length; i++) {
            var form = formsAll[i];

            form.onsubmit = function(){
                var formData = $( this ).serializeArray();

                $.ajax({
                    url:'enviar.php',
                    method:'POST',
                    data:formData,
                    success:function(response){
                        response = JSON.parse(response);
                        if(response.status=="success")
                            window.location = 'obrigado';
                        else
                            alert(response.msg);
                    },
                    error:function(response){
                        alert("Erro ao enviar a mensagem");
                    }
                });

                return false;
            }
        }
    })();





});
