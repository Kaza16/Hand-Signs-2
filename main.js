var prediction1="";
var prediction2="";
Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'"/>';

    })
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/N0m_oy5JN/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is"+prediction1;
    speakdata2="The second prediction is"+prediction2;
    var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterThis);
}




