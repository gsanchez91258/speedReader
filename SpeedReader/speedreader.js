(function() {
var id;
var result;
var s;
var sz;
window.onload = function(){
  var stp = document.getElementById('stop');
  var strt = document.getElementById('start');
  var med = document.getElementById('medium');
  var big = document.getElementById('big');
  var bigger = document.getElementById('bigger');
  var out=document.getElementById('out');
  var sp = document.getElementById('ss');
  med.onclick=md;
  big.onclick=bg;
  bigger.onclick=bgr;
  strt.onclick=start;
  stp.onclick=stop;
  sp.onchange=speed;
};
function start() {
  sz="36pt";
  var stp = document.getElementById('stop');
  var strt = document.getElementById('start');
  stp.disabled=false;
  strt.disabled=true;
  stp.onclick=stop;
  var med = document.getElementById('medium');
  var big = document.getElementById('big');
  var bigger = document.getElementById('bigger');
  var out=document.getElementById('output');
  med.onclick=md;
  big.onclick=bg;
  bigger.onclick=bgr;
  var sp = document.getElementById('ss');
  s = sp.options[sp.selectedIndex].value;
  sp.onchange=speed;
  var text = document.getElementById('text').value;
  result = text.split(/[ \t\n]+/);
  var punc = [];
  var frm = [];
  var i=0; var j=-1;
  for (i=0;i<result.length;i++)
  {
    j++;
    var l=result[i];
    frm[j]=l;
    if ((l.endsWith(',')||l.endsWith('.')||l.endsWith('?')||l.endsWith('!')||l.endsWith(';')||l.endsWith(':')))
    {
      if (l.charAt(result[i].length-2)=='.' || l.charAt(result[i].length-2)==',' || l.charAt(result[i].length-2)=='?' || l.charAt(result[i].length-2)=='!'
      || l.charAt(result[i].length-2)==';' || l.charAt(result[i].length-2)==':') {
        l = result[i].slice(0,result[i].length-1);
        frm[j]=l;
      }
      j++;
      frm[j]=l;
    }
  }
  var tmp;
  var i=0;
  var j=0;
  var wc=0;
  var ss=0;
  var k=0;
  console.log(frm);
  counter=-1; var count=0;
  s=sp.options[sp.selectedIndex].value;
  var myFunction = function(){
    if (++counter>=frm.length) {
      counter=0;
    }
    out.innerHTML=frm[counter];
        l=frm[counter];
    s = sp.options[sp.selectedIndex].value;
    clearInterval(id);
    id= setInterval(myFunction, s);
  }
  id = setInterval(myFunction, s);
}
function speed() {
    var sp = document.getElementById('ss');
    s = sp.options[sp.selectedIndex].value;
  }
function stop() {
  var stp = document.getElementById('stop');
  var strt = document.getElementById('start');
  strt.disabled=false;
  stp.disabled=true;
  clearInterval(id);
  strt.onclick=start;
}
function md() {
  var out=document.getElementById('output');
  sz = "36pt";
  out.style.fontSize = sz;
}
function bg() {
    var out=document.getElementById('output');
    sz = "48pt";
    out.style.fontSize = sz;
}
function bgr() {
    var out=document.getElementById('output');
    sz = "60pt";
    out.style.fontSize = sz;
}})();
