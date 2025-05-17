# SongJog Chat

<div align="center">
  <img src="frontend/public/favicon_io/android-chrome-512x512.png" alt="SongJog Chat Logo" width="128"/>
  <br />
  <img src="assets/chat.png" alt="SongJog Chat Main Interface" width="800"/>
  <br />
  <p>
    <b>A real-time chat application built with React and Node.js.</b>
  </p>
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#development">Development</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

## 📸 Screenshots

<div align="center">
  <h3>Authentication</h3>
  <img src="assets/login.png" alt="Login Page" width="800"/>
  <br />
  <em>Login Interface</em>
  
  <br /><br />
  
  <img src="assets/singup.png" alt="Signup Page" width="800"/>
  <br />
  <em>Signup Interface</em>
  
  <br /><br />
  
  <h3>Main Features</h3>
  <img src="assets/Chat_Sidebar.png" alt="Chat Sidebar" width="800"/>
  <br />
  <em>Chat Sidebar with Conversations</em>
  
  <br /><br />
  
  <img src="assets/chat.png" alt="Chat Interface" width="800"/>
  <br />
  <em>Main Chat Interface</em>
  
  <br /><br />
  
  <h3>User Features</h3>
  <img src="assets/profile.png" alt="User Profile" width="800"/>
  <br />
  <em>User Profile Page</em>
  
  <br /><br />
  
  <img src="assets/theme_settings.png" alt="Theme Settings" width="800"/>
  <br />
  <em>Theme and Settings</em>
</div>

## ✨ Features

- Real-time messaging using Socket.IO
- User authentication and authorization
- Modern UI with Tailwind CSS and DaisyUI
- Responsive design
- Theme support (light/dark mode - total 32 theme added)
- File sharing capabilities
- User profiles and settings
- Online/offline status
- File upload with Cloudinary
- Secure JWT authentication
- Cross-platform compatibility

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- DaisyUI
- Socket.IO Client
- Zustand (State Management)
- React Router
- Axios
- React Hot Toast
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.IO
- JWT Authentication
- Cloudinary (File Upload)
- Bcrypt (Password Hashing)
- Cookie Parser
- CORS

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/songjog-chat.git
cd songjog-chat
```

2. Install all dependencies (frontend and backend)
```bash
npm install
```

3. Environment Setup
Create `.env` files in both frontend and backend directories:

Backend (.env):
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Frontend (.env):
```env
VITE_API_URL=http://localhost:5000
```

## 💻 Development

### Available Scripts

In the project root directory, you can run:

```bash
# Install all dependencies (frontend and backend)
npm run install:all

# Run development servers (frontend and backend)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run tests
npm run test

# Clean all dependencies and build files
npm run clean
```

### Development Workflow

1. Start the development servers:
```bash
npm run dev
```
This will start both frontend (default: http://localhost:5173) and backend (default: http://localhost:5000) servers concurrently.

2. Make your changes in the respective directories:
   - Frontend code is in the `frontend/` directory
   - Backend code is in the `backend/` directory

3. The development servers will automatically reload when you make changes.

## 🚀 Deployment

### Production Build

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Environment Variables

Make sure to set up the following environment variables in your production environment:

Backend:
- `PORT`: The port your server will run on
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `CLOUDINARY_*`: Your Cloudinary credentials

Frontend:
- `VITE_API_URL`: Your backend API URL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Install dependencies (`npm install`)
4. Make your changes
5. Run tests (`npm run test`)
6. Run linting (`npm run lint`)
7. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
8. Push to the branch (`git push origin feature/AmazingFeature`)
9. Open a Pull Request

### Code Style

- Follow the existing code style
- Run `npm run lint` before committing
- Write meaningful commit messages
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rasheduel Hasan Sojib**
- GitHub: [@yourusername](https://github.com/rashedulhasansojib)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/rashedul-hasan-sojib)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Socket.IO](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Cloudinary](https://cloudinary.com/) 