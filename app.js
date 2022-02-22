function init(){
    var topDiv = document.createElement("div");
    topDiv.setAttribute("id","top");

    var midDiv = document.createElement("div");
    midDiv.setAttribute("id","mid");

    var bottomDiv = document.createElement("div");
    bottomDiv.setAttribute("id","bottom");

    var body=document.body;
    body.appendChild(topDiv);
    body.appendChild(midDiv);
    body.appendChild(bottomDiv);

    var heading = document.createElement("h1");
    heading.innerText = "Online-IDE";
    var lang = document.createElement("h3");
    lang.innerText = "Select your language";
    topDiv.appendChild(heading);
    topDiv.appendChild(lang);

    var codeArea = document.createElement("textarea");
    codeArea.setAttribute("placeholder","Enter your code here");
    codeArea.setAttribute("class","box");
    codeArea.setAttribute("id","codeArea");
    midDiv.appendChild(codeArea);

    var output = document.createElement("textarea");
    output.setAttribute("placeholder","output");
    output.setAttribute("class","outbox");
    output.setAttribute("id","output");
    bottomDiv.appendChild(output);

}

init();

console.log("hi");