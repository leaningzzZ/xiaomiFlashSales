var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var tabs1 = document.getElementById("tabs1").getElementsByTagName("ul");
console.log(tabs1);
console.log("1");
for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showlist;
}

function showlist() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] == this) {
            tabs[i].className = "active";
            tabs1[i].className = "clearfix active";
        } else {
            tabs[i].className = "";
            tabs1[i].className = "clearfix";
        }
    }
}