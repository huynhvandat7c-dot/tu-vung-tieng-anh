// Dữ liệu từ vựng từ bức ảnh của bạn
const vocabulary = [
    { word: "concern", pos: "n", ipa: "/kən'sɜːn/", level: "B2", vi: "mối lo ngại", syn: "worry, apprehension", ant: "unconcern" },
    { word: "confuse", pos: "v", ipa: "/kən'fjuːz/", level: "B2", vi: "làm bối rối", syn: "bewilder, puzzle", ant: "" },
    { word: "consistency", pos: "n", ipa: "/kən'sɪstənsi/", level: "C1", vi: "sự nhất quán, kiên định", syn: "steadfastness", ant: "inconsistency" },
    { word: "demanding", pos: "adj", ipa: "/dɪ'mɑːndɪŋ/", level: "B2", vi: "đòi hỏi cao, khó khăn", syn: "challenging, taxing", ant: "undemanding, easy" },
    { word: "desperate", pos: "adj", ipa: "/'despərət/", level: "B2", vi: "tuyệt vọng", syn: "hopeless", ant: "hopeful" },
    { word: "distribution", pos: "n", ipa: "/ˌdɪstrɪ'bjuːʃn/", level: "B2", vi: "sự phân phối, phân bố", syn: "allocation", ant: "" },
    { word: "emergence", pos: "n", ipa: "/ɪ'mɜːdʒəns/", level: "C1", vi: "sự xuất hiện, nổi lên", syn: "appearance, rise", ant: "disappearance" },
    { word: "enemy", pos: "n", ipa: "/'enəmi/", level: "B1", vi: "kẻ thù", syn: "foe, adversary", ant: "friend, ally" },
    { word: "enhance", pos: "v", ipa: "/ɪn'hɑːns/", level: "B2", vi: "nâng cao, tăng cường", syn: "improve, boost", ant: "diminish, reduce" },
    { word: "essential", pos: "adj", ipa: "/ɪ'senʃl/", level: "B1", vi: "cần thiết, thiết yếu", syn: "vital, crucial", ant: "unnecessary" },
    { word: "ethically", pos: "adv", ipa: "/'eθɪkli/", level: "C1", vi: "về mặt đạo đức", syn: "morally", ant: "unethically" },
    { word: "evolve", pos: "v", ipa: "/ɪ'vɒlv/", level: "C1", vi: "phát triển, tiến hóa", syn: "develop, grow", ant: "" },
    { word: "expense", pos: "n", ipa: "/ɪk'spens/", level: "B2", vi: "chi phí", syn: "outlay", ant: "" },
    { word: "expert", pos: "n", ipa: "/'ekspɜːt/", level: "B1", vi: "chuyên gia", syn: "specialist, master", ant: "novice, amateur" },
    { word: "exploit", pos: "v", ipa: "/ɪk'splɔɪt/", level: "B2", vi: "khai thác, bóc lột", syn: "-", ant: "-" },
    { word: "financial", pos: "adj", ipa: "/faɪ'nænʃl/", level: "B1", vi: "thuộc về tài chính", syn: "-", ant: "-" },
    { word: "firm", pos: "adj", ipa: "/fɜːm/", level: "B2", vi: "kiên quyết, vững chắc", syn: "resolute, determined", ant: "irresolute" },
    { word: "frustrated", pos: "adj", ipa: "/frʌ'streɪtɪd/", level: "C1", vi: "thất vọng, bực bội", syn: "annoyed, angry", ant: "" }
];

let currentIndex = 0;
let quizIndex = 0;
let score = 0;

// Chuyển Tab (Flashcard <-> Quiz)
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-menu button').forEach(el => el.classList.remove('active'));

    if (tabName === 'card') {
        document.getElementById('tab-card').classList.add('active');
        document.getElementById('btn-tab-card').classList.add('active');
    } else {
        document.getElementById('tab-quiz').classList.add('active');
        document.getElementById('btn-tab-quiz').classList.add('active');
        initQuiz();
    }
}

// ---- LOGIC FLASHCARD ----
function updateCard() {
    const data = vocabulary[currentIndex];
    document.getElementById("word-en").innerText = data.word;
    document.getElementById("word-ipa").innerText = data.ipa;
    document.getElementById("word-pos").innerText = `(${data.pos})`;
    document.getElementById("word-level").innerText = data.level;
    document.getElementById("word-vi").innerText = data.vi;
    document.getElementById("word-syn").innerText = data.syn || "Không có";
    document.getElementById("word-ant").innerText = data.ant || "Không có";
    document.getElementById("card-counter").innerText = `${currentIndex + 1} / ${vocabulary.length}`;
    
    document.getElementById("flashcard").classList.remove("flipped");
}

function flipCard() {
    document.getElementById("flashcard").classList.toggle("flipped");
}

function nextWord() {
    currentIndex = (currentIndex + 1) % vocabulary.length;
    updateCard();
}

function prevWord() {
    currentIndex = (currentIndex - 1 + vocabulary.length) % vocabulary.length;
    updateCard();
}

function speakWord(event) {
    if (event) event.stopPropagation();
    const word = vocabulary[currentIndex].word;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}

// ---- LOGIC QUIZ (LIỆN ĐIỀN TỪ) ----
function initQuiz() {
    quizIndex = Math.floor(Math.random() * vocabulary.length);
    showQuizQuestion();
}

function showQuizQuestion() {
    const data = vocabulary[quizIndex];
    document.getElementById("quiz-vi").innerText = data.vi;
    document.getElementById("quiz-level").innerText = data.level;
    document.getElementById("quiz-hint").innerText = `Gợi ý: ${data.word.length} ký tự (bắt đầu bằng "${data.word[0]}")`;
    
    document.getElementById("user-input").value = "";
    document.getElementById("user-input").disabled = false;
    document.getElementById("user-input").focus();
    
    const feedback = document.getElementById("quiz-feedback");
    feedback.className = "feedback";
    feedback.innerText = "";
    
    document.getElementById("btn-next-quiz").style.display = "none";
}

function checkAnswer(event) {
    event.preventDefault();
    const input = document.getElementById("user-input").value.trim().toLowerCase();
    const target = vocabulary[quizIndex].word.toLowerCase();
    const feedback = document.getElementById("quiz-feedback");

    if (!input) return;

    if (input === target) {
        score += 10;
        document.getElementById("score").innerText = score;
        feedback.innerText = "🎉 Chính xác! Tuyệt vời!";
        feedback.className = "feedback correct";
        
        // Tự động phát âm từ vừa gõ đúng
        const utterance = new SpeechSynthesisUtterance(target);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    } else {
        feedback.innerHTML = `❌ Chưa đúng! Đáp án đúng là: <strong>${target}</strong> (${vocabulary[quizIndex].ipa})`;
        feedback.className = "feedback wrong";
    }

    document.getElementById("user-input").disabled = true;
    document.getElementById("btn-next-quiz").style.display = "block";
}

function nextQuizQuestion() {
    quizIndex = (quizIndex + 1) % vocabulary.length;
    showQuizQuestion();
}

// Khởi tạo mặt định
updateCard();
