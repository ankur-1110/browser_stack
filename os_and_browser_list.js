
function os_and_browser_list() {
  //AJAX Call to get data from API
    alert("Entered");
    e.preventDefault();
    $.ajax({
      dataType: 'jsonp',
      jsonp : "callback",
      jsonpCallback : "os_and_browser_list",
      type: 'GET',
      url: 'https://https://api.browserstack.com/4/browsers',
      headers: {
        'Content-Type':'application/json'
      },
      data: {
        "username":ankurkumar7,
        "access_key":zzyHHUqg7y9PknuEprJ
      },

      statusCode: {
        401: function() {
          alert( "Unauthorized user" );
        }
      } ,
      success: function(data) {
       if (data.success) {
        obj = JSON.parse(data);
        alert(obj);
        create_os_browser_array("Windows", obj.Windows);
        create_os_browser_array("OS X", obj.OSX);
        create_os_browser_array("ios", obj.ios);
      }
    }
  });
}

//JSON Parsing Logic for creating OS and Browser Drop downs
function create_os_browser_array(os_name, obj){
  count_os = 0;
  count_os_browser = 0;
  var os_select_array = $("#os");
  var browser_select_array = $("#browser");
  os_version_list = true;
  os_browser_list = true;
  while(os_version_list){
    os_version = obj[count_os];
    os_value= os_name + " " + os_version;
  //  $("#os").append("<option>" + os_value "</option>");
    while (os_browser_list) {
    browser_value = os_version.browser + " " + os_version.browser_version;
    //Key for this drop down is OS value
    //$("#browser").append("<option value='os_value'>" + browser_value</option>");
    $("#browser").append("<option value='" + os_value + "'>" + browser_value  + "</option>");
    if (null === os_version.browser[count_os_browser+1]) {
      os_browser_list = false; 
    }
    count_os_browser++;
  }
  if (null === obj.Windows[count_os+1]) {
    os_browser_list = false; 
  }
  count_os++;
}
}

/**
 * Get the os and browser list
 */
 $.ready(function(){
$("#os_n_browser").on("click",function() {
  //debugger
//  alert("Handler for click called.");
  // debugger
  os_and_browser_list();
});

 });
