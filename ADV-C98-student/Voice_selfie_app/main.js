var SpeechRecognition = window.webkitSpeechRecognition;

var recoginition = new SpeechRecognition();

function start()
{
    document.getElementById("text").innerHTML = "";
    recoginition.start();      
}

recoginition.onresult =function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
       if(Content =="take my selfie")
      {
        console.log("taking my selfie");
        speak();
       }
    document.getElementById("text").innerHTML = Content;
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("text").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("text").innerHTML = Content;
    console.log(Content);
    speak()

    Webcam.set({
         width:400,
         height:300,
         image_format : 'png',
         png_quality:90
    });
    camera = document.getElementById("camera");

    function take_snapshot()
    {
        Webcam.snap(function(data_url)  {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'">';
            
        });
    }
    
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking your Selfie in 5 Seconds";

    speak_data = document.getElementById("text").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}
