
function addNewTweet() {

    let newTweetInput = document.getElementById("new-tweet");
    let newTweetInput2 = document.getElementById("new-tweet2");
  
    let newTweetText = newTweetInput2.value;
    let newTweetText2=newTweetInput.value;
    let input=newTweetText+newTweetText2;
    if (!newTweetText&&!newTweetText2) {
      return; 
    }        
    const newTweet = document.createElement("div");
    newTweet.classList.add("feed-tweet");
    newTweet.innerHTML = `
      <img src="./Images/MElabady.jpg" class="prof-img">
      <div class="feed-t-det">
        <div class="feed-details">
          <a href="" class="tweeter-name">
            Mahmoud
            <div>
            <span class="tweeter-handle">@m7moud_elabady </span></div>
            <div><span class="date">. Just now</span></div>
          </a>
        </div>
        <div class="tweet-text">
          <p>${input}</p>
        </div>
        <div class="tweet-icons">
                      <i class="fa-regular fa-comment"></i>
                      <i class="fa-solid fa-retweet"></i>
                    <i class="fa-regular fa-heart"></i>
                      <i class="fa-solid fa-arrow-up-from-bracket"></i>
  
                  </div>
      </div>
    `;
  
    let tweets = document.querySelector('.tweets');
    tweets.insertBefore(newTweet, tweets.firstChild);
    newTweetInput.value="";
    newTweetInput2.value=""; 
    document.getElementById("tweetDialog").close();
  
  }
  function showingDialog(){
  const dialog=document.getElementById("tweetDialog");
  dialog.showModal();
  }
  function closingDialog(){
    const dialog=document.getElementById("tweetDialog");
    dialog.close();  
    }
  
   
  
  function followBtn(btn){
    let followBtn=btn
    if (followBtn.innerHTML === 'Follow') {
      followBtn.innerHTML="Following";
      followBtn.className = 'unfollow-btn'
    } else {
      followBtn.innerHTML="Follow";
      followBtn.className = 'follow-btn'
    }
  }

 
  
  