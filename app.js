var compilebtn = document.getElementById('compilebtn');
var languages = document.querySelector('#languages');
var textbox = document.getElementById('textbox');
var outputResult = document.getElementById('outputResult');
var langCode;

languages.addEventListener('click', function()
{
    langCode = languages.options[languages.selectedIndex].value;
})

compilebtn.addEventListener('click', function(){

    var request = new XMLHttpRequest();
    request.open('POST', 'https://codequotient.com/api/executeCode');
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({code:textbox.value, langId:langCode}));

    request.addEventListener('load', function(event){
        var codeId = JSON.parse(event.target.responseText)
        var mainCodeId = codeId.codeId;

        setTimeout(function(){
        getRequestInterval(mainCodeId)}, 2000);
    })
    clearInterval(setTimeout);   
    })


function getRequestInterval(mainCodeId)
{
    var request = new XMLHttpRequest();

    request.open('GET',`https://codequotient.com/api/codeResult/${mainCodeId}`);
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.addEventListener('load', function(event)
    {
        var mainData = JSON.parse(event.target.responseText)
        mainData = JSON.parse(mainData.data);
       
        if(mainData.output !== '')
        {
            outputResult.innerText = mainData.output;
        }
        else
        {
            outputResult.innerText = mainData.errors;
        }
    })
}
