$("#frmAcceso").on('submit',function(e)
{
    e.preventDefault();
    logina=$("#logina").val();
    clavea=$("#clavea").val();

    $.post("../ajax/usuario.php?op=verificar",
        {"logina":logina,"clavea":clavea},
        function(data)
    {
        if (data!="null")
        {
           // $(location).attr("href","escritorio2.php");    
           bootbox.alert("Usuario y/o Password incorrectos");        
        }
        else
        {
            bootbox.alert("Usuario y/o Password incorrectos");
        }
    });
})