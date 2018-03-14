$(document).ready(function(){
  $("#doSubmit").click(function()
  {
    const eurMoney = 100;
    const key = "ef542f51fcdefa4094711308fdcda624"
    $.ajax({
      url: 'http://data.fixer.io/api/latest?access_key=' + key,
      dataType: 'jsonp',
      success: function(json) {
        var from = $('#fromCurr option:selected').val();
        var fromRate = json.rates[from];
        var to = $('#toCurr option:selected').val();
        var toRate = json.rates[to];
        var value = $("#myValue").val();
        console.log(value);
        console.log(fromRate);
        console.log(toRate);
        var converted = value / fromRate * toRate;
        console.log(converted);
        $("#result").val(converted.toFixed(2));
        //console.log(values);
        //console.log(json);
      },
      fail: function(xhr, statusText, body) {
        console.log(body);
      }
    });
  });
});
