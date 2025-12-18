const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const feedback = { name, message };
    saveFeedback(feedback);
    displayFeedback(feedback);

    successMsg.textContent = "Thank you for your feedback 🐾";
    form.reset();
});

function saveFeedback(feedback) {
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
}

function displayFeedback(feedback) {
    const div = document.createElement("div");
    div.className = "feedback-card";
    div.innerHTML = `<strong>${feedback.name}</strong><p>${feedback.message}</p>`;
    feedbackList.appendChild(div);
}

window.onload = function () {
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.forEach(displayFeedback);
};
