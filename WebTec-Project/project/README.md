# Social Media Web Application

A simple, offline-capable social media web application built with Node.js, Express, MongoDB, HTML, CSS, and JavaScript.

## Features

- **User Authentication**: Register and login with username/password
- **Multiple User Accounts**: Support for multiple users
- **Post Creation**: Users can create and share posts
- **Social Interactions**: Like posts and add replies
- **Real-time Updates**: Posts and interactions update in real-time
- **Offline Capability**: Works offline with local storage fallback
- **Responsive Design**: Mobile-friendly interface

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB (localhost)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs for hashing

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running on localhost:27017)
- npm (comes with Node.js)

## Installation & Setup

1. **Clone or download the project files**
   ```bash
   # Create project directory
   mkdir social-media-app
   cd social-media-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   Make sure MongoDB is running on your local machine:
   ```bash
   # On Windows (if MongoDB is installed as a service)
   net start MongoDB
   
   # On macOS/Linux
   sudo systemctl start mongod
   # or
   mongod
   ```

4. **Start the application**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Access the application**
   Open your web browser and navigate to: `http://localhost:3000`

## Project Structure

```
social-media-app/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── README.md             # This file
└── public/               # Static files
    ├── index.html        # Main HTML file
    ├── styles.css        # CSS styles
    └── script.js         # Frontend JavaScript
```

## API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Login user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post (requires authentication)
- `POST /api/posts/:id/like` - Like/unlike a post (requires authentication)
- `POST /api/posts/:id/reply` - Add a reply to a post (requires authentication)

## Usage

1. **Register a new account** or **login** with existing credentials
2. **Create posts** by typing in the text area and clicking "Post"
3. **Interact with posts** by liking them or adding replies
4. **View all posts** from all users in the feed
5. **Logout** when done

## Features in Detail

### User Authentication
- Secure password hashing with bcryptjs
- JWT token-based authentication
- Session persistence with localStorage

### Posts & Interactions
- Create text-based posts
- Like/unlike posts with real-time counter updates
- Add replies to posts with threaded display
- Chronological post ordering (newest first)

### Offline Capability
- The frontend includes localStorage fallback for offline usage
- Data syncs when connection is restored

## Database Schema

### Users Collection
```javascript
{
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### Posts Collection
```javascript
{
  userId: ObjectId (ref: User),
  username: String,
  content: String,
  likes: [ObjectId] (ref: User),
  replies: [{
    userId: ObjectId (ref: User),
    username: String,
    content: String,
    createdAt: Date
  }],
  createdAt: Date
}
```

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Protected API routes

## Customization

### Styling
Edit `public/styles.css` to customize the appearance:
- Colors and themes
- Layout and spacing
- Responsive breakpoints

### Features
Extend functionality by modifying:
- `server.js` for backend features
- `public/script.js` for frontend features
- Database schemas for new data fields

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod`
- Check if port 27017 is available
- Verify MongoDB installation

### Port Already in Use
- Change the PORT in `server.js` or set environment variable:
  ```bash
  PORT=3001 npm start
  ```

### Dependencies Issues
- Clear node_modules and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## Development

### Adding New Features
1. Backend: Add routes in `server.js`
2. Frontend: Update `public/script.js` and `public/index.html`
3. Database: Modify schemas as needed

### Testing
- Test authentication flows
- Verify post creation and interactions
- Check offline functionality
- Test responsive design on different devices

## License

This project is licensed under the MIT License - see the package.json file for details.

## Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review the code comments
3. Test with a fresh MongoDB database
4. Ensure all dependencies are properly installed
```

This README provides comprehensive documentation for setting up, running, and understanding the social media application.
```

## Installation Instructions

To run the complete Node.js + MongoDB version locally:

1. **Install dependencies:**
   ```bash
   npm install express mongoose bcryptjs jsonwebtoken cors