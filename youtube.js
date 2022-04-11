// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    videoId: "E5N4JO896Jg", // 최초 재생할 유튜브 ID영상
    playerVars: {
      autoplay: true, // 자동재생유무
      loop: true, // 박보재생유무
      playlist: "E5N4JO896Jg", // 반복 재생할 유튜브 영상 ID
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // mute 음소거
      },
    },
  });
}
