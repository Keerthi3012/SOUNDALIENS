function startClassifiction()
{
    navigator.meidaDevices.getUserMdeia ({ audio: true });
    classifier = ml5.soundClassifer ('https://teachablemachine.withgoogle.com/models/YIxFho4hN/model.json', modelReady);


}

function modelReady(){
    classifier.classify(gotResults);
}

navigator.mediaDevices.getUserMedia();
navigator.mediaDevices.getUserMedia({ audio: true });
