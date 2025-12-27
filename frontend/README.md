# DataFogStudios - Frontend

React + Vite frontend for the DataFogStudios learning platform.

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── stores/         # State management (Zustand)
├── services/       # API & Socket.io clients
├── styles/         # Global and component styles
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📦 Dependencies

- React 19
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Socket.io Client (real-time chat)
- Zustand (state management)
- React Router (navigation)
- Lucide React (icons)

## 🏗️ Key Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode**: Optimized for low-light environments
- **Real-Time Chat**: Integrated Socket.io for messaging
- **Animations**: Smooth transitions with Framer Motion
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Development

### Environment Variables

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000
VITE_SOCKET_IO_URL=http://localhost:5001
```

### Build & Production

```bash
npm run build  # Build for production
npm run preview  # Preview production build locally
```

## 📚 Pages

- **HomePage** - Landing page with feature overview
- **CoursesPage** - Browse and enroll in courses
- **ChatPage** - Real-time messaging & communities
- **DonatePage** - Support the platform
- **AdminDashboard** - Admin controls (protected)

## 🎨 Design System

### Colors
- Primary: Blue (#3b82f6)
- Secondary: Cyan (#06b6d4)
- Accent: Amber (#f59e0b)
- Background: Slate-950 (#020617)

### Typography
- Heading Font: Inter Bold
- Body Font: Inter Regular
- Monospace: JetBrains Mono

## 🧪 Testing

```bash
npm test
```

## 📜 License

MIT - See LICENSE file

## 👨‍💼 About

Founded by Hassan S. Mohamed

---

For more information, see the main [README.md](../README.md)
