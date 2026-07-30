body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    width: 90%;
    max-width: 480px;
    background: #ffffff;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

h1 {
    color: #1a73e8;
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 20px;
}

/* Tab Navigation */
.tab-menu {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    background: #f1f3f4;
    padding: 5px;
    border-radius: 12px;
}

.tab-menu button {
    flex: 1;
    background: transparent;
    color: #5f6368;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s;
}

.tab-menu button.active {
    background: #ffffff;
    color: #1a73e8;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Flashcard */
.card {
    background-color: transparent;
    height: 260px;
    perspective: 1000px;
    cursor: pointer;
    margin-bottom: 20px;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 6px 15px rgba(0,0,0,0.08);
    border-radius: 15px;
    border: 1px solid #e0e0e0;
}

.card.flipped .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 15px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

.card-back {
    transform: rotateY(180deg);
    background: #f8fafd;
}

.level {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #e53935;
    color: white;
    padding: 3px 8px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 12px;
}

h2 {
    font-size: 30px;
    margin: 10px 0 5px 0;
    color: #2c3e50;
}

.btn-audio {
    background: #e8f0fe;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    color: #1a73e8;
    font-weight: bold;
    margin-top: 10px;
}

.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    background: #1a73e8;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
}

button:hover {
    background: #1557b0;
}

/* Quiz Box */
.quiz-box {
    background: #f8fafd;
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    padding: 20px;
    position: relative;
}

.quiz-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.score-badge {
    background: #e6f4ea;
    color: #137333;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: bold;
}

.quiz-prompt {
    margin: 15px 0;
}

.quiz-label {
    color: #70757a;
    font-size: 13px;
    margin: 0;
}

.quiz-prompt h3 {
    font-size: 24px;
    color: #202124;
    margin: 8px 0;
}

.quiz-hint {
    color: #1a73e8;
    font-size: 13px;
    font-weight: 500;
}

.quiz-form {
    display: flex;
    gap: 8px;
    margin-top: 15px;
}

input[type="text"] {
    flex: 1;
    padding: 12px;
    border: 2px solid #dadce0;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
}

input[type="text"]:focus {
    border-color: #1a73e8;
}

.feedback {
    margin-top: 15px;
    padding: 10px;
    border-radius: 8px;
    font-weight: bold;
    display: none;
}

.feedback.correct {
    display: block;
    background: #e6f4ea;
    color: #137333;
}

.feedback.wrong {
    display: block;
    background: #fce8e6;
    color: #c5221f;
}

.btn-next-quiz {
    width: 100%;
    margin-top: 15px;
    background: #34a853;
}

.btn-next-quiz:hover {
    background: #2d9247;
}
