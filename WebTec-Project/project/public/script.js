class SocialMediaApp {
    constructor() {
        this.currentUser = null;
        this.token = localStorage.getItem('token');
        this.isLogin = true;
        this.init();
    }

    init() {
        this.setupEventListeners();
        if (this.token) {
            this.showMainSection();
            this.loadPosts();
        }
    }

    setupEventListeners() {
        // Auth tabs
        document.getElementById('login-tab').addEventListener('click', () => this.switchTab(true));
        document.getElementById('register-tab').addEventListener('click', () => this.switchTab(false));
        
        // Auth form
        document.getElementById('auth-form').addEventListener('submit', (e) => this.handleAuth(e));
        
        // Post form
        document.getElementById('post-form').addEventListener('submit', (e) => this.handleCreatePost(e));
        
        // Logout
        document.getElementById('logout-btn').addEventListener('click', () => this.logout());
    }

    switchTab(isLogin) {
        this.isLogin = isLogin;
        const loginTab = document.getElementById('login-tab');
        const registerTab = document.getElementById('register-tab');
        const emailField = document.getElementById('email');
        const authBtn = document.getElementById('auth-btn');

        if (isLogin) {
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            emailField.style.display = 'none';
            emailField.required = false;
            authBtn.textContent = 'Login';
        } else {
            loginTab.classList.remove('active');
            registerTab.classList.add('active');
            emailField.style.display = 'block';
            emailField.required = true;
            authBtn.textContent = 'Register';
        }
    }

    async handleAuth(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const endpoint = this.isLogin ? '/api/login' : '/api/register';
        const body = this.isLogin ? { username, password } : { username, email, password };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            if (response.ok) {
                this.token = data.token;
                this.currentUser = data.user;
                localStorage.setItem('token', this.token);
                this.showMainSection();
                this.loadPosts();
            } else {
                alert(data.error);
            }
        } catch (error) {
            alert('Network error. Please try again.');
        }
    }

    showMainSection() {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('main-section').style.display = 'block';
        if (this.currentUser) {
            document.getElementById('current-user').textContent = this.currentUser.username;
        }
    }

    async handleCreatePost(e) {
        e.preventDefault();
        const content = document.getElementById('post-content').value;

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({ content })
            });

            if (response.ok) {
                document.getElementById('post-content').value = '';
                this.loadPosts();
            }
        } catch (error) {
            alert('Error creating post');
        }
    }

    async loadPosts() {
        try {
            const response = await fetch('/api/posts');
            const posts = await response.json();
            this.renderPosts(posts);
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }

    renderPosts(posts) {
        const container = document.getElementById('posts-container');
        
        if (posts.length === 0) {
            container.innerHTML = '<div class="no-posts">No posts yet. Be the first to post!</div>';
            return;
        }

        container.innerHTML = posts.map(post => `
            <div class="post">
                <div class="post-header">
                    <div class="post-avatar">${post.username.charAt(0).toUpperCase()}</div>
                    <div class="post-info">
                        <h3>${post.username}</h3>
                        <div class="post-time">${new Date(post.createdAt).toLocaleString()}</div>
                    </div>
                </div>
                <div class="post-content">${post.content}</div>
                <div class="post-actions">
                    <button class="action-btn ${post.likes.includes(this.currentUser?.id) ? 'liked' : ''}" 
                            onclick="app.toggleLike('${post._id}')">
                        ❤️ ${post.likes.length}
                    </button>
                    <button class="action-btn">
                        💬 ${post.replies.length}
                    </button>
                </div>
                ${post.replies.length > 0 ? `
                    <div class="replies">
                        ${post.replies.map(reply => `
                            <div class="reply">
                                <div class="reply-header">
                                    <div class="reply-avatar">${reply.username.charAt(0).toUpperCase()}</div>
                                    <span class="reply-username">${reply.username}</span>
                                    <span class="reply-time">${new Date(reply.createdAt).toLocaleString()}</span>
                                </div>
                                <div class="reply-content">${reply.content}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                <div class="reply-form">
                    <input type="text" class="reply-input" placeholder="Write a reply..." 
                           id="reply-${post._id}">
                    <button class="reply-btn" onclick="app.addReply('${post._id}')">Reply</button>
                </div>
            </div>
        `).join('');
    }

    async toggleLike(postId) {
        try {
            const response = await fetch(`/api/posts/${postId}/like`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });

            if (response.ok) {
                this.loadPosts();
            }
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    }

    async addReply(postId) {
        const replyInput = document.getElementById(`reply-${postId}`);
        const content = replyInput.value.trim();

        if (!content) return;

        try {
            const response = await fetch(`/api/posts/${postId}/reply`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({ content })
            });

            if (response.ok) {
                replyInput.value = '';
                this.loadPosts();
            }
        } catch (error) {
            console.error('Error adding reply:', error);
        }
    }

    logout() {
        this.token = null;
        this.currentUser = null;
        localStorage.removeItem('token');
        document.getElementById('auth-section').style.display = 'block';
        document.getElementById('main-section').style.display = 'none';
        document.getElementById('auth-form').reset();
    }
}

// Initialize the app
const app = new SocialMediaApp();