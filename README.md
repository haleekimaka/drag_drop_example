I used the InteractJS library to make the in-socket drag drop events. 

------------------------------------

The resources for InteractJS are as follows:

Git Repository: https://github.com/taye/interact.js
Documentation: http://interactjs.io/docs/
Demos/Main page: http://interactjs.io/

----------------------------

The X-Y coordinate information can be captured and sent over 
the socket connection, this is seen in the Node server terminal. 
Click and drag a tile and you will see information show/change.

The tiles can be dragged into the target area, an then an effect 
(highlighted border) is enabled. The highlighted border is disabled 
upon exit from the target area. 

Why? Well you can't designate the target by a div ID so it was easier to 
affect the tile itself to show it was selected. 

---------------------------

There are a few considerations/thoughts that came up while I was 
researching and creating this. 

1. There doesn't seem to be a built in way to create clones of the tiles,  
so they will have to be one time use in the target area. 

2. The target area is referred to as a "dropzone"

3. We will have to use individual IDs on the tiles or have logic to 
check the "text" on it, if we want to have related sound files. 

4. We need a way to quickly reset the board without reseting the 
socket ID/session. 



