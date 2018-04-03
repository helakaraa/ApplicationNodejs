$(document).ready(function(){
	$('.delete-contact').on('click',function(){

    var id=$(this).data('id');
    var url='/delete/'+id;
    if(confirm('delete Contact')){
    	$.ajax({
           url:url,
           type:'DELETE',
           success: function(result){
               console.log('Deleting Recipe...');
               window.location.href='/';
           },

           error:function(err){
           	  console.log(err);
           }
    	});
    }
	});

    $('.edit-contact').on('click',function(){

    	 $('#edit-form-firstname').val($(this).data('first_name'));

         $('#edit-form-lastname').val($(this).data('last_name'));

         $('#edit-form-id').val($(this).data('id'));

    });

});
