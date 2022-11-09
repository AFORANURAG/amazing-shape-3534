export default function navbar (){
return `
<img id="ourlogo" src="https://lh3.googleusercontent.com/gCjn7gApZQnzHKhWwznCdf92wmdmdYz-cRCIt13hJa5FuNWeyVFlHMWseI32mrtBzK3UAmoj4KQxtsmMY9VoUEl9f92joicjotFDZenhJ2Qw-9Ca9zI3tDXwgtXJdh3-hG9XbId1ngNAf3Iq1KFFXKUJv1eAqVrecmloVa6uJ3eQyxuTzw_xk1iC53CVaVHdkMYuT0XaS1HzSZKBlc37iZVl4nC9XH1x_JXzGZdEI1lRA66CiPzIiV4oC6yEPYjnIO37wuKJJoSBGmk6qQ5iB3kyTUtCGvMRoSJNUic6JVY-6E3HaE0KFBSrM_OJ78cJ7qEwgsrPJI19dd8-YUtOqMitUJo7XggmHQ-TqP1d379Nwj5dUOG62BGBtNlsPxL__ZPHW7nsp703duUCuH0p9dayPsrTzERACxthlez8M-jy2aoSPErkk-oVogYTtm8UeCbuV0hokZfMVeV78s7ERbiHQbVMkfpHpUQmF0G2Qhi7He4gShtdHDVZwfmvc1-BF_uQj_PRmieK6_afdRYqMbztFMWZyXvBnDIq6i9B1UkWiOaV8Ag22TCigcQ337x5LDWf3Ao7pKKIAPi9CclCd6QsdjrZQv8gHAXzkS8OS3ZUnf62otsBrfmQM1vqHYv4cmc2TkeRyEuY1RfuXOsaVdecEo3gfi_GpMWDJugbdVGJRZcESjDKhFbdTeFtbw3sZahu5OxiV_EF8_chGi4W5MXl6DHNhzpBNhQDE36UlU7S_GwyBA6APgnJQ7LCTw0J9tpyIuxcI6UA8tRV4y9LddBvGqV50RMciDqhT4KZN1xDhim1oic8JzDMgbT7dRtVTxIy_LTvNmDtBW_POEoP2VfGSqGjw0tU28OgOgogrqiwIhtbHSS821Xpt3zfi_9Qsg8K-AnaOGO3aKxxhJCrkBf738vjZEABs4y--YzjwAaA=s500-no?authuser=0" alt="">

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
