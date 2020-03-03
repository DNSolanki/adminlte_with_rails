$(document).ready(function(){
  if($("#datatable_tbl").length > 0) {
    $('#datatable_tbl').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : true
    })
  }

  // if ($('[id^="changeStatus-"]').length > 0) {
  //   $('body').off('click', '[id^="changeStatus-"]').on('click', '[id^="changeStatus-"]', function (e) {
  //     var self = $(this);
  //     var status = $(this).attr('id').split('-')[1];
  //     var id = $(this).attr('id').split('-')[2];

  //     var msgStatus = status == 'Active' ? 'inactive' : 'active';
  //     if(confirm("Are you sure to "+ msgStatus)){
  //       swal(msgStatus + "!", "Your record has been " + msgStatus + "!", "success");
  //       var current_element = $(this);
  //       url = "users/status_update";
  //       $.ajax({
  //         type:"POST",
  //         url: url,
  //         dataType: "json",
  //         data: {id: id,status:msgStatus},
  //         success: function(data)
  //         {   
  //           location.reload();
  //         }
  //       });
  //     } 

  //   });
  // }

  if ($('[id^="changeStatus-"]').length > 0) {
    $('body').off('click', '[id^="changeStatus-"]').on('click', '[id^="changeStatus-"]', function (e) {
        var self = $(this);
        var status = $(this).attr('id').split('-')[1];
        var id = $(this).attr('id').split('-')[2];
        var msgStatus = status == 'Active' ? 'Inactived' : 'Actived';
         var msgStatus1 = status == 'Active' ? 'Inactive' : 'Active';
        swal({
            title: "Are you sure?",
            text: "You want " + msgStatus1 + " this record !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, ' + msgStatus1 + ' it!',
            cancelButtonText: "No, Cancel please!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
          function (isConfirm) {
            if (isConfirm) {
              $.post("users/status_update", {id: id , status: msgStatus1},
                  function (data) {
                      if (data.success) {
                          if (status == 'Active') {
                              self.attr('id', 'changeStatus-Inactive-' + id).removeClass('btn-info').addClass('btn-danger').html('<i class="fa fa-thumbs-down"> Inactive</i>');
                          } else {
                              self.attr('id', 'changeStatus-Active-' + id).removeClass('btn-danger').addClass('btn-info').html('<i class="fa fa-thumbs-up"> Active</i>');
                          }
                      }
                  });
              swal(msgStatus + "!", "Your record has been " + msgStatus + "!", "success");
            } else {
                 swal("Action Aborted!", "The original information is safe :)", "error");
            }
          });

     });
    }
    

})