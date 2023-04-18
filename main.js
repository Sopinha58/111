webcam.set({
    with: 350, 
    height: 300,
    image_format: 'png',
    png_quality: 90
})
camera= document.getElementById("camera");
webcam.attach('#camera');

function take_snapshot(){
    webcam.snap(function (data_uri){
        
    }
    )
}