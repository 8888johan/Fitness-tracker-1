function showLogin() {
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password:");

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById('profile-info').innerText = `Logged in as: ${userCredential.user.email}`;
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}
