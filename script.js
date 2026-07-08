/* ==========================================
   LOVE VAULT v1.0
   SCRIPT.JS - PART 1
   Daily Data • Countdown • Passwords
========================================== */

// ---------- DOM Elements ----------
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("password");
const vaultQuestion = document.getElementById("vaultQuestion");

const missionHint = document.getElementById("missionHint");
const timer = document.getElementById("timer");

const intro = document.getElementById("intro");
const vaultScene = document.getElementById("vaultScene");
const vaultDoor = document.getElementById("vaultDoor");

const loveLetter = document.getElementById("loveLetter");

const dayTitle = document.getElementById("dayTitle");
const letterText = document.getElementById("letterText");

// images removed: memoryPhoto element no longer used

const voicePlayer = document.getElementById("voicePlayer");

const spotifyButton = document.getElementById("spotifyButton");
const songName = document.getElementById("songName");

const finished = document.getElementById("finished");

// ---------- Daily Data ----------

const vaultData = {

    4:{

        day:"Thursday",

        password:"gloria",

        hint:"The place where our story first began.",

        song:"Kendrick Lamar — Gloria",

        spotify:
"https://open.spotify.com/search/Kendrick%20Lamar%20Gloria",

        photo:"images/thursday.jpg",

        voice:"file:///C:/Users/user/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/7410C81BEF8BF9440AA7BDB957483F3A8EE5C38F/transfers/2026-28/WhatsApp%20Ptt%202026-07-08%20at%2010.13.32%20PM.ogg",

        message:
    `Salutations my beautiful ❤️

    Welcome to the first chamber of my Love Vault.

    I wanted to create something that no one else has—something that's ours.

    If you're reading this, it means you've completed today's mission, and I'm smiling just imagining your face right now.

    One thing I want you to know today is that you make ordinary days feel special. A simple conversation with you can turn a stressful day into one I'll remember for a long time.

    Today's challenge is simple:
    Smile at least once today... and if possible, let me be the reason.

    — Yours ❤️`

    },

    5:{

        day:"Friday",

        password:"aaliyah",

        hint:"The nickname that always makes you smile.",

        song:"Aaliyah — Let Me Know",

        spotify:
"https://open.spotify.com/search/Aaliyah%20Let%20Me%20Know",

        photo:"images/friday.jpg",

        voice:"file:///C:/Users/user/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/7410C81BEF8BF9440AA7BDB957483F3A8EE5C38F/transfers/2026-28/WhatsApp%20Ptt%202026-07-08%20at%2010.17.50%20PM.ogg",

        message:
    `Happy Friday, my love ❤️

    There are so many things I admire about you.

    The way you laugh.
    The way you care.
    The bluntness.
    The random conversations that somehow become my favorite part of the day.

    You probably don't realize it, but you've become one of my safest places.

    Thank you for being you.

    ❤️`

    },

    6:{

        day:"Saturday",

        password:"oakland",

        hint:"A place we'd love to visit together.",

        song:"Oakland Pt. 2",

        spotify:
"https://open.spotify.com/search/Oakland%20Pt%202",

        photo:"images/saturday.jpg",

        voice:"file:///C:/Users/user/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/7410C81BEF8BF9440AA7BDB957483F3A8EE5C38F/transfers/2026-28/WhatsApp%20Ptt%202026-07-08%20at%2010.20.28%20PM.ogg",

        message:
    `Happy Saturday ❤️

    Have you ever thought about all the memories we haven't made yet?

    The places we'll visit.
    The photos we'll take.
    The late-night drives.
    The laughs we'll have over absolutely nothing.

    Thinking about our future makes me excited because, if life allows it, I'd love to keep creating memories with you.

    Today's mission:

    Imagine one place you'd like us to go together one day.

    Maybe we'll actually make it happen.

    ❤️`

    },

    0:{

        day:"Sunday",

        password:"selflove",

        hint:"Something I hope you always have for yourself.",

        song:"Coi Leray — Self Love",

        spotify:
"https://open.spotify.com/search/Coi%20Leray%20Self%20Love",

        photo:"images/sunday.jpg",

        voice:"file:///C:/Users/user/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/7410C81BEF8BF9440AA7BDB957483F3A8EE5C38F/transfers/2026-28/WhatsApp%20Ptt%202026-07-08%20at%2010.22.16%20PM.ogg",

        message:
    `Happy Sunday, my love ❤️

    You've reached the final chamber of this week's Love Vault.

    Thank you for taking this little journey with me.

    I know this is just a website...

    But every line of code,
    every button,
    every animation,
    and every message

    was created with you in mind.

    I hope whenever life gets overwhelming, you remember this:

    You are appreciated.
    You are important.
    You are deeply loved.

    Thank you for being one of the best things that's happened to me.

    Forever ❤️`

    }

};

// ---------- Today's Day ----------

const today = new Date().getDay();

// ---------- Mission Hint ----------

function loadMission(){

    if(vaultData[today]){

        missionHint.textContent =
        "Our favourite colour?";

    }else{

        missionHint.textContent =
        "The Love Vault only opens from Thursday to Sunday ❤️";

    }

}

loadMission();

// ---------- Countdown ----------

function updateCountdown(){

    const now = new Date();

    let target = new Date();

    if(today >= 4){

        target.setDate(now.getDate()+1);

    }else{

        target.setDate(
            now.getDate()+(4-today)
        );

    }

    target.setHours(0,0,0,0);

    let distance =
    target.getTime()-now.getTime();

    if(distance < 0){

        distance = 0;

    }

    const hours =
    Math.floor(distance/(1000*60*60));

    const minutes =
    Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
    );

    const seconds =
    Math.floor(
        (distance%(1000*60))/1000
    );

    timer.textContent =
    `${hours}h ${minutes}m ${seconds}s`;

}

updateCountdown();

setInterval(updateCountdown,1000);

// ---------- Unlock Button ----------

unlockBtn.addEventListener("click",()=>{

    if(!vaultData[today]){

        alert(
        "❤️ The Love Vault only opens Thursday to Sunday."
        );

        return;

    }

    const entered =
    passwordInput.value.trim();

    const answer = vaultQuestion?.value.trim().toLowerCase();

    // If the question input exists, require the correct answer. Accept 'blue' or 'white'.
    if (vaultQuestion && answer !== "blue" && answer !== "white"){
        alert("Please answer the question: Our favourite colour?\nHint: blue or white");
        return;
    }

    const correct = (vaultData[today].password || "").toLowerCase();
    const attempt = entered.toLowerCase();

    // Allow the day's password or the testing passwords 'blue' or 'white'
    if (attempt === correct || attempt === "blue" || attempt === "white"){

        openVault();

    } else {

        alert("❌ Wrong password.");

    }

});

/* ==========================================
   LOVE VAULT v1.0
   SCRIPT.JS - PART 2A.1
   Vault Opening Animation
========================================== */

// Opens the vault after the correct password
function openVault() {

    // Stop hearts when leaving intro page
    stopHearts();

    // Hide intro screen
    intro.classList.add("fadeOut");

    // Wait for fade animation
    setTimeout(() => {

        intro.style.display = "none";

        // Show vault scene
        vaultScene.classList.remove("hidden");
        vaultScene.classList.add("fadeIn");

        // Wait a little before opening
        setTimeout(() => {

            // Spin vault door open
            vaultDoor.classList.add("openVault");

            // Create golden light burst
            createLightBurst();

            // Play vault opening sound (optional)
            try {
                const sound = new Audio("audio/vault.mp3");
                sound.play().catch(()=>{/* autoplay may be blocked by browser */});
            } catch (e) {
                console.warn('Vault sound unavailable', e);
            }

            // Reveal the letter after animation
            setTimeout(() => {

                vaultScene.classList.add("fadeOut");

                setTimeout(() => {

                    vaultScene.style.display = "none";

                    loveLetter.classList.remove("hidden");
                    loveLetter.classList.add("fadeIn");

                    // Load today's content
                    loadTodaysContent();

                },800);

            },2600);

        },800);

    },800);

}

/* ==========================================
   GOLDEN LIGHT BURST
========================================== */

function createLightBurst(){

    const burst = document.createElement("div");
    burst.className = "lightBurst";
    document.body.appendChild(burst);

    setTimeout(() => {
        burst.remove();
    }, 2200);

}

/* ==========================================
   LOVE VAULT v1.0
   SCRIPT.JS - PART 2A.2
   Load Today's Content
========================================== */

function loadTodaysContent(){

    const todayData = vaultData[today];

    if(!todayData){
        return;
    }

    // Day Title
    if(dayTitle){
        dayTitle.textContent = "❤️ " + todayData.day + " ❤️";
    }

    // Clear previous text
    if(letterText){
        letterText.textContent = "";
    }

    // Images removed: no photo displayed

    // Load Voice Note
    if (voicePlayer){
        voicePlayer.pause();
        voicePlayer.src = todayData.voice;
        voicePlayer.load();
    }

    // Song Name
    if(songName){
        songName.textContent = todayData.song;
    }

    // Spotify Button
    if(spotifyButton){
        spotifyButton.onclick = function(){
            window.open(
                todayData.spotify,
                "_blank"
            );
        };
    }

    // Start Typewriter
    if(letterText){
        typeWriter(
            todayData.message,
            letterText,
            35
        );
    }

}


/* ==========================================
   LOVE VAULT v1.0
   SCRIPT.JS - PART 2B.1
   Typewriter Effect
========================================== */

let typingFinished = false;

function typeWriter(text, element, speed = 35){

    typingFinished = false;

    element.innerHTML = "";

    let index = 0;

    // Create blinking cursor
    const cursor = document.createElement("span");
    cursor.className = "cursor";

    function type(){

        if(index < text.length){

            // Preserve line breaks
            if(text.charAt(index) === "\n"){

                element.innerHTML += "<br>";

            }else{

                element.innerHTML += text.charAt(index);

            }

            index++;

            element.appendChild(cursor);

            setTimeout(type, speed);

        }else{

            typingFinished = true;

            // Remove blinking cursor after typing
            cursor.remove();

            // Small fade animation after completion
            element.animate(
                [
                    {
                        opacity:0.8,
                        transform:"translateY(8px)"
                    },
                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }
                ],
                {
                    duration:600,
                    easing:"ease-out"
                }
            );

        }

    }

    type();

}


/* ==========================================
   LOVE VAULT v1.0
   SCRIPT.JS - PART 2B.2
   Floating Hearts & Sparkles
========================================== */

// ---------- Sparkles ----------

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    },2000);

}

// Sparkle every second
setInterval(createSparkle,1000);

// ---------- Celebration Burst ----------

function celebrationBurst(){

    for(let i = 0; i < 30; i++){

        setTimeout(() => {

            createHeart();

        }, i * 60);

    }

}

/* ==========================================
   LOVE VAULT v1.0
   SCRIPT.JS - FINAL
   Ending • Easter Egg • Love Meter
========================================== */

/* ------------------------------
   LOVE METER
------------------------------ */

function updateLoveMeter(){

    const progress = document.querySelector(".progress");

    if(!progress) return;

    const values = {
        4:25,   // Thursday
        5:50,   // Friday
        6:75,   // Saturday
        0:100   // Sunday
    };

    if(values[today]){

        progress.style.width = values[today] + "%";

    }

}

updateLoveMeter();

/* ------------------------------
   SUNDAY COMPLETION
------------------------------ */

function checkCompletion(){

    if(today !== 0){
        return;
    }

    setTimeout(()=>{

        const button = document.createElement("button");

        button.textContent = "❤️ Final Chapter ❤️";

        button.style.marginTop = "40px";

        button.style.padding = "18px 35px";

        button.style.fontSize = "18px";

        button.style.borderRadius = "40px";

        button.style.border = "none";

        button.addEventListener("click", () => {
            if (finished) {
                finished.classList.remove("hidden");
                finished.classList.add("fadeIn");
            }
            if (loveLetter) {
                loveLetter.classList.add("hidden");
            }
        });

        if (loveLetter) {
            loveLetter.appendChild(button);
        }

    }, 1500);

}

checkCompletion();
