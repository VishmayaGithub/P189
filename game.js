AFRAME.registerComponent("sugar",{
    init : function(){
        px = [22.86, -17.35, -12.81, 0.44,
            -25.89, 15.61, 11.95, -15.40,
            -14.09, 34.76, 2.29, 21.77, 1.57,
            34.72, 12.04, -10.90, 6.48];
      
          //z position array
          pz = [-4.71, 14.91, 56.74, 41.13,
            50.76, 57.84, 7.02, -5.24, -26.82,
            27.59, -35.78, 34.52, 31.32, -9.22,
            26.72, 27.24, 9.94];

            for (var i = 0; i < 20; i++) {
                var box = document.createElement("a-entity");
          
                posX = px[i];
                posY = 0.8;
                posZ = pz[i];
          
                position = { x: posX, y: posY, z: posZ };
          
                box.setAttribute("id", "box" + i);      
                box.setAttribute("position", position);
          
                box.setAttribute("geometry", {
                  primitive: "box",
                  height: 0.5,
                  width: 0.5,
                  depth: 0.5,
                });
          
               
                box.setAttribute("static-body", {});
          
                var sceneEl = document.querySelector("#scene");
                sceneEl.appendChild(box);
            }

    }
})