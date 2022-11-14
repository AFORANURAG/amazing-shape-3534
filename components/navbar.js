// Rahul

function navbar() {
return `
<img src="https://i.ibb.co/rb4xZ3X/warrior.png"  id="ourlogo" alt="warrior" />
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
    <a href="workout_page.html">Pro-designed Plans </a>
  </div>
</div>
<a href="exercise.html">Exercise</a>
<!-- anurag Upadhyay -->
<div class="dropdown">
  <button class="dropbtn">Community
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <a href="jefit_community.html">Jefit Community</a>
    <a href="community.blogs.html">Blog</a>
  </div>

</div>
<a href="coach.html">Coach</a>
<a href="payment.html">Elite</a>

<div id="dropdown1">
  <button id="dropbtn1">Login</button>
  <div id="dropdown-content1">
  <a href="#">Notification</a>
  <a href="#"> Friends </a>
  <a href="">Settings</a>
  <a id="signOut" href="">Sign out</a>

</div>
</div>

<a href="signUp.html"><button id="signup">Sign Up</button></a>
<a href="javascript:void(0);" style="font-size:35px;" class="icon" onclick="navbar()">&#9776;</a>
`
}

export { navbar }



