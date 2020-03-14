
$$("#add_button").on('click',function(){
  addBurger();
})


$(".devour").on('click', function(){
  devourBurger($(this));
})

function addBurger(){
  let burgName = $("#name_input").val();
  let obj = {name: burgName};
  $.ajax({
      url: 'api/post',
      method: 'POST',
      data: obj,
      dataType: 'json'
  })
}

async function devourBurger(object){
  let id = object.attr('id');
  let obj = {id: id};
  await $.ajax({
      url: 'api/devour',
      method: 'PUT',
      data: obj,
      dataType: 'json'
  })
  location.reload();
}