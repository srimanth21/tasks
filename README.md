# Task Management Web Application

A full-stack task management system with user authentication, real-time updates, and responsive design for web and mobile screens.

## 🎯 Features

- **User Authentication & Authorization**
  - JWT-based authentication
  - Secure password hashing
  - Role-based access control

- **CRUD Operations for Tasks**
  - Create, read, update, and delete tasks
  - Task filtering and sorting
  - Task status tracking (pending, in-progress, completed)

- **Real-time Updates**
  - WebSocket integration for live task updates
  - Instant notifications on task changes
  - Real-time collaboration

- **Responsive Design**
  - Mobile-first approach
  - Works seamlessly on all devices
  - Touch-friendly UI

## 🏗️ Project Structure

```
task-management-app/
├── server/                 # Backend (Node.js/Express)
│   ├── src/
│   │   ├── controllers/   # Route handlers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Auth & error handling
│   │   ├── utils/         # Helper functions
│   │   └── server.js      # Express app setup
│   ├── .env.example
│   └── package.json
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── context/       # Context API
│   │   ├── services/      # API services
│   │   ├── utils/         # Utilities
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public/
│   └── package.json
└── docker-compose.yml     # Docker configuration
```

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB / PostgreSQL
- **Authentication:** JWT (jsonwebtoken)
- **Real-time:** Socket.io
- **Validation:** Joi
- **Password Hashing:** bcrypt

### Frontend
- **Framework:** React 18+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Context API / Redux
- **HTTP Client:** Axios
- **Real-time:** Socket.io-client
- **UI Components:** Headless UI

### Development Tools
- **Version Control:** Git
- **Package Manager:** npm / yarn
- **Build Tool:** Vite
- **Testing:** Jest, React Testing Library
- **Linting:** ESLint, Prettier
- **Containerization:** Docker

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- MongoDB or PostgreSQL
- Git

### Backend Setup

```bash
cd server
npm install
cp .env.example .env
# Update .env with your configuration
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Docker Setup

```bash
docker-compose up -d
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Task Endpoints
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/status` - Update task status

### User Endpoints
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `DELETE /api/users/:id` - Delete user account

## 🔐 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- CORS protection
- Input validation and sanitization
- Rate limiting on API endpoints
- SQL injection prevention
- XSS protection
- HTTPS support (production)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🧪 Testing

```bash
# Run backend tests
cd server
npm test

# Run frontend tests
cd client
npm test
```

## 📖 Learning Outcomes

By completing this project, you will learn:

1. **Full-Stack Development**
   - Building a complete web application from scratch
   - Understanding the relationship between frontend and backend

2. **API Design & Integration**
   - RESTful API principles
   - API authentication and authorization
   - Error handling and validation

3. **Database Design**
   - Schema design for task management
   - Relationships and queries
   - Indexing for performance

4. **Frontend Development**
   - Component-based architecture
   - State management
   - Form handling and validation
   - Responsive design patterns

5. **Real-time Communication**
   - WebSocket implementation
   - Event-driven architecture
   - Real-time data synchronization

6. **DevOps & Deployment**
   - Docker containerization
   - Environment configuration
   - CI/CD pipeline basics

## 🤝 Contributing

Contributions are welcome! Please follow the coding standards and commit message conventions.

## 📄 License

MIT License - feel free to use this project for learning purposes.

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Happy Coding! 🎉**
