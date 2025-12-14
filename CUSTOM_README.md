# InstaConnect - A Social Media Platform

## 📱 Overview
InstaConnect is a social media web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to share photos, like and comment on posts, follow other users, and discover content through a personalized feed.

**Mini Project Submission** - Built in 5-6 hours by a final year engineering student

## ✨ Features Implemented

### User Authentication
- ✅ User Registration (Sign Up)
- ✅ User Login with JWT Token
- ✅ Secure password hashing with bcryptjs
- ✅ Protected Routes

### Core Functionality
- ✅ **Feed** - View all posts from the platform
- ✅ **Create Posts** - Upload images with captions
- ✅ **Like Posts** - Like/Unlike functionality
- ✅ **Comments** - Add comments to posts
- ✅ **Save Posts** - Bookmark posts for later
- ✅ **Follow Users** - Follow/Unfollow users
- ✅ **User Profiles** - View and edit profile information
- ✅ **Search Users** - Search for other users
- ✅ **Suggested Users** - Discover new users to follow

### Sample Data
- 📊 5 Pre-created users
- 📸 20 Sample posts with real images

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM (Object Data Modeling)
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image hosting (optional)

### Frontend
- **React.js** - UI Library
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Navigation
- **React Hot Toast** - Notifications

## 📦 Project Structure

```
FullStack-Instagram-Clone/
├── backend/
│   ├── config/          # Database and Cloudinary config
│   ├── controllers/     # Business logic
│   ├── middleware/      # Auth middleware
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── seed.js          # Database seeding
│   ├── index.js         # Server entry point
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/  # React components
    │   ├── pages/       # Page components
    │   ├── services/    # API calls
    │   ├── slices/      # Redux slices
    │   ├── App.js       # Main app component
    │   └── index.css    # Global styles
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd FullStack-Instagram-Clone
```

2. **Backend Setup**
```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Add your environment variables:
# MONGODB_URL=<your-mongodb-url>
# JWT_SECRET=<your-secret-key>
# CLOUD_NAME=<cloudinary-name> (optional)
# API_KEY=<cloudinary-api-key> (optional)
# API_SECRET=<cloudinary-api-secret> (optional)
# PORT=4000

# Seed the database with sample data
npm run seed

# Start the server
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install

# Start the development server
npm start
```

The app will be available at `http://localhost:3000`

## 📚 API Endpoints

### Authentication
- `POST /api/v1/signup` - Register new user
- `POST /api/v1/login` - Login user

### Posts
- `GET /api/v1/getAllPost` - Get all posts
- `POST /api/v1/createPost` - Create new post (auth required)
- `POST /api/v1/deletePost` - Delete post (auth required)
- `POST /api/v1/editPost` - Edit post (auth required)

### Interactions
- `POST /api/v1/like` - Like a post (auth required)
- `POST /api/v1/dislike` - Unlike a post (auth required)
- `POST /api/v1/createComment` - Add comment (auth required)
- `POST /api/v1/savePost` - Save post (auth required)

### Users
- `POST /api/v1/findCurrentUser` - Get current user (auth required)
- `POST /api/v1/follow` - Follow user (auth required)
- `POST /api/v1/allUsers` - Get all users (auth required)

## 👤 Test Accounts

You can log in with these pre-created accounts:
- **adventureseeker** / password123
- **naturelover** / password123
- **cityexplorer** / password123
- **photoartist** / password123
- **travelbugs** / password123

Or create your own account!

## 🎨 Customizations Made

- ✅ Changed branding from "Instagram" to "InstaConnect"
- ✅ Updated color scheme to purple (#7c3aed) theme
- ✅ Added smooth transitions and hover effects
- ✅ Improved UI with better spacing and typography
- ✅ Added helpful error messages
- ✅ Created database seeding script for demo data

## 📝 Notes

- All images are loaded from Unsplash for demo purposes
- Sample posts are generated automatically on first seed
- Database is automatically connected on server start
- Frontend automatically reloads on code changes

## 🐛 Common Issues & Solutions

**"Network Error" on signup/login:**
- Ensure backend is running on `http://localhost:4000`
- Check that MongoDB connection string is correct in .env

**Images not loading:**
- Check internet connection (Unsplash images need connectivity)
- Verify Cloudinary credentials if uploading custom images

**Port already in use:**
- Kill the process: `lsof -i :4000` (Mac/Linux) or use Task Manager (Windows)
- Or change the PORT in .env

## 📄 License

This project is created for educational purposes as a mini project submission.

---

**Built with ❤️ by Naman Sharma a Final Year Engineering Student**
