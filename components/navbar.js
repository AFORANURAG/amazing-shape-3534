export default function navbar (){
return `


<img id="ourlogo" src="https://i.ibb.co/rb4xZ3X/warrior.png" alt="warrior" border="0" />

<!-- we are going to make a button here and fa-fa icon -->
<!--the reason getapp content div is here is that in the real website there is box shadow and it 
look like a box which only possible if it is under a div-->
<div class="dropdown" id="getappmain">
    <button class="dropbtn" id="getapp">Get App
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content" id="getappbtn">
      <a href="#">Workout App(IOS)</a>
      <a href="#">Workout App (Android)</a>
    
    </div>
  </div> 
  <div class="dropdown">
    <button class="dropbtn">Workout Plans 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Pro-designed Plans </a>
    </div>
  </div> 
<a href="">Exercise</a>
<!-- anurag Upadhyay -->
<div class="dropdown">
    <button class="dropbtn">Community
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Jefit Community</a>
      <a href="#">Blog</a>
    </div>
  </div> 
<a href="">Coach</a>
<a href="">Elite</a>
<a href="">Login</a>
<a href=""><button id="signup">Sign Up</button></a>
<a href="javascript:void(0);" style="font-size:25px;" class="icon" onclick="navbar()">&#9776;</a>
`
}
