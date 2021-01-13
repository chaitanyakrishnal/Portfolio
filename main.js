// var browser_dots = document.getElementsByClassName("theam-dot")
// for(var i=0; i<browser_dots.length;i++){
//     if(true){}
// }

let theme = localStorage.getItem('theme-portfolio')
console.log("jrifjirji")
if(theme==null){
    onButtonClick("light-mode")
}else{
    onButtonClick(theme)
}
function onButtonClick(id){
    if(id=="light-mode"){
        document.getElementById("css-load").href="main.css"
        console.log(document.getElementById("css-load").href)
        console.log("jfiajrivjrefji")
    }
    if(id=="blue-mode"){
        document.getElementById("css-load").href="blue.css"
        console.log(document.getElementById("css-load").href)
        console.log("jfiajrivjrefji")
    }

    if(id=="green-mode"){
        document.getElementById("css-load").href="green.css"
        console.log(document.getElementById("css-load").href)
        console.log("jfiajrivjrefji")
    }

    if(id=="purple-mode"){
        document.getElementById("css-load").href="purple.css"
        console.log(document.getElementById("css-load").href)
        console.log("jfiajrivjrefji")
    }

    localStorage.setItem("theme-portfolio",id)
}


$(".nav-wrapper a").click(function (){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },2000) 
})

// $("#navigation a").click(function(){
//     $("body,html").animate({
//         scrollTop:$("#" + $(this).data('value')).offset().top
//     },2000)
        
//     })