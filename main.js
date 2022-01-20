Webcam.set({
     width:300,
     height:300,
     image_format:'png',
     png_quality:90
    })
    Webcam.attach("#camera");
    function Capture()
    {
        Webcam.snap(function(data_uri){
            
         document.getElementById("result").innerHTML = "<img src="+data_uri+" id='capture'>" ;
        })
    }
     console.log("Ml5 Version",ml5.version);
     classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fGg7PXcwh/model.json",modelLoaded); // json - Java script object notation
     function modelLoaded()
     {
       console.log("A");

     }
      function Identify()
      {
          var image = document.getElementById("capture");
          classifier.classify(image,gotResult);
          
      }
      function gotResult(error,result)
      {
          if (error)
          {
              console.log(error);
          }
          else
          {
              console.log(result);
             document.getElementById("Object").innerHTML = result[0].label;
               document.getElementById("Acc").innerHTML = result[0].confidence*100+"%";

          }

      }
      // image classifier - start the model
      // ml5 - mediator between js and model
      // model loaded - helps us know whether the model has started 
       