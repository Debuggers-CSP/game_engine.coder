---
layout: post
title: RPG Game Login
permalink: /rpg/login
comments: true
---

# RPG Login Page

<style>
    body {
        margin: 0;
        height: 100vh;
        background: url("https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltbc1876152fcd9f07/blt26c6dd2bf8c7f4d5/68d51d9ee8018d286edd55b2/ccdemo.jpg") no-repeat center/cover;
        font-family: Arial, sans-serif;
    }

    /* Login box fixed to center of screen */
    .position-center {
        position: relative;
        margin: 60px auto;  
        left: 0;
        top: 0;
        transform: none;
        z-index: 10; 
        max-width: 320px;
    }

    .login-box {
        width: 320px;
        padding: 30px;
        background: rgba(0,0,0,0.6);
        border-radius: 15px;
        box-shadow: 0 0 15px #000;
        color: white;
        text-align: center;
    }

    .login-box h2 {
        margin-bottom: 20px;
    }

    .input-field {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: none;
        border-radius: 8px;
        font-size: 16px;
    }

    .login-btn {
        width: 100%;
        padding: 12px;
        margin-top: 10px;
        background: #ffcc00;
        color: black;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        transition: 0.2s;
    }

    .login-btn:hover {
        background: #ffea6b;
    }

    .error-msg {
        color: #ff4444;
        margin-top: 10px;
        min-height: 20px;
    }

    /* Push comments lower if needed */
    #comments, .comments, .disqus, #disqus_thread {
        position: relative !important;
        z-index: 1 !important;
    }
</style>

<div class="login-box position-center">
    <h2>🎮 RPG Login</h2>

    <input type="text" id="username" class="input-field" placeholder="Username">
    <input type="password" id="password" class="input-field" placeholder="Password">

    <button class="login-btn" onclick="login()">Log In</button>

    <div id="error" class="error-msg"></div>
</div>

<script>
    function login() {
        const user = document.getElementById("username").value.trim();
        const pass = document.getElementById("password").value.trim();
        const errorBox = document.getElementById("error");

        if (user === "" || pass === "") {
            errorBox.innerHTML = "⚠ Please fill in both fields.";
            return;
        }

        // Simple demo login validation
        if (user === "player" && pass === "1234") {
            errorBox.style.color = "#00ff00";
            errorBox.innerHTML = "✔ Login successful! Entering game...";

            setTimeout(() => {
                window.location.href = "/rpg/game"; /* Change to your game page */
            }, 1000);
        } else {
            errorBox.style.color = "#ff4444";
            errorBox.innerHTML = "❌ Incorrect username or password.";
        }
    }
</script>
