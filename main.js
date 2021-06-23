
function load() {

    console.log('ml5 version:', ml5.version);
    
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
        
    function modelLoaded() {
        
    console.log("Model Loaded!");
        
    }
    
    img = document.getElementById("bottle");
    
    classifier.classify(img, gotResult);
       
    img = document.getElementById("shoes");
    
    classifier.classify(img, gotResult1);
       
    img = document.getElementById("hp");
    
    classifier.classify(img, gotResult2);
       
    img = document.getElementById("t");
    
    classifier.classify(img, gotResult3);
      
    img = document.getElementById("bed");
    
    classifier.classify(img, gotResult4);
    
    }
    
    function gotResult(error, results) {
    
        if (error) {
            
        console.log(error);    
                
        } else {
            
        console.log(results);
            
        document.getElementById("bottle_Mobilenet_Model").innerHTML = results[0].label;
                
        }
            
        }
    
    function gotResult1(error, results) {
    
        if (error) {
            
        console.log(error);    
                
        } else {
            
        console.log(results);
            
        document.getElementById("shoes_Mobilenet_Model").innerHTML = results[0].label;
                
        }
            
        }
        
    function gotResult2(error, results) {
    
        if (error) {
            
        console.log(error);    
                
        } else {
            
        console.log(results);
            
        document.getElementById("hp_Mobilenet_Model").innerHTML = results[0].label;
                
        }
            
        }
        
        function gotResult3(error, results) {
    
            if (error) {
                
            console.log(error);    
                    
            } else {
                
            console.log(results);
                
            document.getElementById("t_Mobilenet_Model").innerHTML = results[0].label;
                    
            }
                
            }
                
        function gotResult4(error, results) {
    
            if (error) {
                
            console.log(error);    
                    
            } else {
                
            console.log(results);
                
            document.getElementById("bed_Mobilenet_Model").innerHTML = results[0].label;
                    
            }
                
            }