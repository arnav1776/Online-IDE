var lang=document.getElementById("lang");
var code=document.getElementById("codeArea");
var output=document.getElementById("output");
var button=document.getElementById("compile");

function init(lang,code){
    button.addEventListener("click",function(){
        var langid=lang.value;
        var value=code.value;
        var data={code:value,langId:langid};
        var convert=JSON.stringify(data);
        var request=new XMLHttpRequest();
        request.open("POST","https://codequotient.com/api/executeCode");
        request.setRequestHeader("Content-Type","application/json");
        request.send(convert);
        setTimeout(function(){
            var response=JSON.parse(request.responseText);
            result(response.codeId);
        },2000);
    });
}

function result(codeId){
  var request=new XMLHttpRequest();
  request.open("GET",`https://codequotient.com/api/codeResult/${codeId}`);
  request.send();
  request.addEventListener("load",function(event){
    var parent=JSON.parse(event.target.responseText);
    var data=JSON.parse(parent.data);
    if (data.output!==""){
      output.innerHTML=data.output;
    }
    else{
      output.innerHTML=data.errors;
    }
  });
}

init(lang,code);
