function data(){
    var link = document.getElementById('link').value;
    var format1 = document.getElementById('format').value;
    download(link, format1);
};


function download(link, format){
    //using loader. to api
    var iframe = '<iframe style="height:50px; border:none; overflow:hidden; background-color: crimson" src="https://loader.to/api/button/?url='+ link + '&f='+ format + '"></iframe>';
    var div = document.getElementById('btn').innerHTML = iframe;
}

