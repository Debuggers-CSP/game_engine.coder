---
layout: post
title: RPG Game Login
permalink: /rpg/login
comments: True
---

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cinzel', 'Georgia', serif;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 40px 20px;
}

/* Animated background particles */
body::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: 
        radial-gradient(2px 2px at 20% 30%, white, transparent),
        radial-gradient(2px 2px at 60% 70%, white, transparent),
        radial-gradient(1px 1px at 50% 50%, white, transparent),
        radial-gradient(1px 1px at 80% 10%, white, transparent),
        radial-gradient(2px 2px at 90% 60%, white, transparent);
    background-size: 200% 200%;
    animation: stars 20s linear infinite;
    opacity: 0.3;
}

@keyframes stars {
    from { transform: translate(0, 0); }
    to { transform: translate(-50%, -50%); }
}

/* Animated background image */
body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background-image: url('/images/prettysky.png');
    background-size: 50% 100%;
    background-repeat: repeat-x;
    opacity: 0.3;
    z-index: 0;
    animation: skyDrift 60s linear infinite;
}

@keyframes skyDrift {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

.container {
    position: relative;
    z-index: 10;
    width: 90%;
    max-width: 450px;
}

.game-card {
    background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
    border-radius: 20px;
    padding: 40px;
    box-shadow: 
        0 8px 32px 0 rgba(0, 0, 0, 0.7),
        inset 0 0 20px rgba(255, 215, 0, 0.1),
        0 0 40px rgba(255, 215, 0, 0.2);
    border: 2px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.game-card:hover {
    transform: translateY(-5px);
    box-shadow: 
        0 12px 40px 0 rgba(0, 0, 0, 0.8),
        inset 0 0 30px rgba(255, 215, 0, 0.2),
        0 0 60px rgba(255, 215, 0, 0.3);
}

.game-title {
    text-align: center;
    color: #ffd700;
    font-size: 2.5em;
    margin-bottom: 10px;
    text-shadow: 
        0 0 10px rgba(255, 215, 0, 0.5),
        0 0 20px rgba(255, 215, 0, 0.3),
        2px 2px 4px rgba(0, 0, 0, 0.8);
    letter-spacing: 2px;
}

.game-subtitle {
    text-align: center;
    color: #c0c0c0;
    font-size: 1em;
    margin-bottom: 30px;
    font-style: italic;
    opacity: 0.8;
}

.tab-buttons {
    display: flex;
    margin-bottom: 30px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 5px;
}

.tab-btn {
    flex: 1;
    padding: 12px;
    border: none;
    background: transparent;
    color: #c0c0c0;
    cursor: pointer;
    font-size: 1.1em;
    font-family: 'Cinzel', 'Georgia', serif;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
}

.tab-btn:hover {
    color: #ffd700;
}

.tab-btn.active {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #1a1a2e;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
}

.form-container {
    display: none;
}

.form-container.active {
    display: block;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.form-group {
    margin-bottom: 25px;
    position: relative;
}

.form-label {
    display: block;
    color: #ffd700;
    margin-bottom: 8px;
    font-size: 0.95em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.form-input {
    width: 100%;
    padding: 14px 18px;
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 215, 0, 0.3);
    border-radius: 10px;
    color: #ffffff;
    font-size: 1em;
    font-family: 'Georgia', serif;
    transition: all 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.form-input::placeholder {
    color: rgba(192, 192, 192, 0.5);
    font-style: italic;
}

.submit-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    border: none;
    border-radius: 10px;
    color: #1a1a2e;
    font-size: 1.2em;
    font-weight: bold;
    font-family: 'Cinzel', 'Georgia', serif;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
    position: relative;
    overflow: hidden;
}

.submit-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.submit-btn:hover::before {
    width: 300px;
    height: 300px;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6);
}

.submit-btn:active {
    transform: translateY(0);
}

.message {
    margin-top: 20px;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    font-weight: 600;
    display: none;
}

.message.success {
    background: rgba(76, 175, 80, 0.2);
    border: 2px solid #4caf50;
    color: #4caf50;
}

.message.error {
    background: rgba(244, 67, 54, 0.2);
    border: 2px solid #f44336;
    color: #f44336;
}

.decorative-sword {
    text-align: center;
    font-size: 3em;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
}

.loading {
    display: none;
    text-align: center;
    margin-top: 15px;
}

.loading.active {
    display: block;
}

.loading-spinner {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 3px solid rgba(255, 215, 0, 0.3);
    border-top: 3px solid #ffd700;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Responsive design */
@media (max-width: 500px) {
    .game-card {
        padding: 30px 20px;
    }
    
    .game-title {
        font-size: 2em;
    }
    
    .tab-btn {
        font-size: 0.95em;
        padding: 10px;
    }
}
</style>

<div class="container">
    <div class="game-card">
        <div class="decorative-sword">🎮</div>
        <h1 class="game-title">RPG GAME</h1>
        <p class="game-subtitle">Login to Continue</p>
        
        <div class="tab-buttons">
            <button class="tab-btn active" onclick="switchTab('register', event)">Register</button>
            <button class="tab-btn" onclick="switchTab('login', event)">Login</button>

        </div>
        
        <!-- Registration Form -->
        <div id="register-form" class="form-container active">
            <form onsubmit="handleRegister(event)">
                <div class="form-group">
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-input" id="reg-firstname" placeholder="Enter your first name" required>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-input" id="reg-lastname" placeholder="Enter your last name" required>
                </div>
                
                <div class="form-group">
                    <label class="form-label">GitHub ID</label>
                    <input type="text" class="form-input" id="reg-github" placeholder="Enter your GitHub username" required>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-input" id="reg-password" placeholder="Create a password" required>
                </div>
                
                <button type="submit" class="submit-btn">
                    <span style="position: relative; z-index: 1;">Register</span>
                </button>
            </form>
        </div>
        
        <!-- Login Form -->
        <div id="login-form" class="form-container">
            <form onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label class="form-label">GitHub ID</label>
                    <input type="text" class="form-input" id="login-github" placeholder="Enter your GitHub username" required>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-input" id="login-password" placeholder="Enter your password" required>
                </div>
                
                <button type="submit" class="submit-btn">
                    <span style="position: relative; z-index: 1;">Login</span>
                </button>
            </form>
        </div>
        
        <div class="loading">
            <div class="loading-spinner"></div>
        </div>
        
        <div id="message" class="message"></div>
        
        <div id="continue-section" style="display: none; margin-top: 20px;">
            <button class="submit-btn" onclick="continueToGame()">
                <span style="position: relative; z-index: 1;">Continue to Game</span>
            </button>
            <button class="submit-btn" onclick="signOut()" style="margin-top: 15px; background: linear-gradient(135deg, #f44336, #e53935);">
                <span style="position: relative; z-index: 1;">Sign Out</span>
            </button>
        </div>
    </div>
</div>

<script>
const API_URL = (location.hostname === "localhost")
    ? "http://localhost:8587/api"
    : `${window.location.origin}/api`;

  function switchTab(tab, ev) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (ev?.target) ev.target.classList.add('active');

    document.querySelectorAll('.form-container').forEach(form => form.classList.remove('active'));
    document.getElementById(tab + '-form').classList.add('active');

    hideMessage();
  }

  function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = 'message ' + type;
    messageDiv.style.display = 'block';
  }

  function hideMessage() {
    document.getElementById('message').style.display = 'none';
  }

  function showLoading() {
    document.querySelector('.loading').classList.add('active');
  }

  function hideLoading() {
    document.querySelector('.loading').classList.remove('active');
  }

  function getSession() {
    try {
      return JSON.parse(localStorage.getItem("userSession") || "{}");
    } catch (e) {
      return {};
    }
  }

  function setSession(githubId, extra = {}) {
    localStorage.setItem("userSession", JSON.stringify({
      githubId,
      loginTime: new Date().toISOString(),
      ...extra
    }));
  }

  function clearSession() {
    localStorage.removeItem("userSession");
  }

  // --- RPG REGISTER ---
  async function handleRegister(event) {
    event.preventDefault();
    hideMessage();
    showLoading();

    const firstName = document.getElementById('reg-firstname').value.trim();
    const lastName = document.getElementById('reg-lastname').value.trim();
    const githubId = document.getElementById('reg-github').value.trim();
    const password = document.getElementById('reg-password').value;

    const userData = { FirstName: firstName, LastName: lastName, GitHubID: githubId, Password: password };

    try {
      const response = await fetch(`${API_URL}/rpg/data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await response.json().catch(() => ({}));
      hideLoading();

      if (response.ok) {
        showMessage(`🎉 Welcome, ${firstName}! Your account has been created successfully.`, 'success');
        event.target.reset();
        setTimeout(() => document.querySelectorAll('.tab-btn')[1].click(), 1200);
      } else {
        if (response.status === 409 || (data.message && data.message.includes('already exists'))) {
          showMessage(`⚠️ An account with this GitHub ID already exists. Please login instead.`, 'error');
        } else {
          showMessage(`⚠️ ${data.message || 'Registration failed. Please try again.'}`, 'error');
        }
      }
    } catch (error) {
      hideLoading();
      showMessage('⚠️ Connection failed. Ensure the Flask server is running.', 'error');
      console.error(error);
    }
  }

  // --- RPG LOGIN (Option A) ---
  async function handleLogin(event) {
    event.preventDefault();
    hideMessage();
    showLoading();

    const githubId = document.getElementById('login-github').value.trim();
    const password = document.getElementById('login-password').value;

    try {
      const response = await fetch(`${API_URL}/rpg/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ GitHubID: githubId, Password: password })
      });

      const data = await response.json().catch(() => ({}));
      hideLoading();

      if (!response.ok) {
        showMessage(`⚠️ ${data.message || 'Login failed. Check your credentials.'}`, 'error');
        return;
      }

      // ✅ Store session locally (this is now the source of truth)
      setSession(githubId, { name: data?.user?.name });

      showMessage(`✅ Logged in as ${githubId}. Redirecting...`, 'success');
      setTimeout(() => window.location.href = '/rpg/mode', 900);

    } catch (error) {
      hideLoading();
      showMessage('⚠️ Connection failed. Ensure the Flask server is running.', 'error');
      console.error(error);
    }
  }

  // Check if user is already logged in (Option A: localStorage)
  window.addEventListener('load', () => {
    const s = getSession();
    if (s?.githubId) {
      showMessage(`👋 You're already logged in as ${s.githubId}. Click 'Continue to Game' to proceed.`, 'success');

      document.querySelectorAll('.form-container').forEach(form => form.style.display = 'none');
      document.querySelector('.tab-buttons').style.display = 'none';
      document.getElementById('continue-section').style.display = 'block';
    }
  });

  function continueToGame() {
    window.location.href = '/rpg/mode';
  }

  async function signOut() {
    clearSession();
    showMessage('✅ Successfully signed out!', 'success');
    setTimeout(() => location.reload(), 800);
  }
</script>