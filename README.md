### 📄 `README.md`

```markdown
# VybeAi

VybeAi is an AI-assisted coding web application designed to help developers write, debug, and understand code with the help of artificial intelligence. Built with **Next.js** and powered by **Supabase** for backend services, VybeAi aims to accelerate development and boost productivity for coders of all levels.

---

## 🚀 Features

- ✨ AI-Powered Code Suggestions
- 🧠 Smart Code Explanation & Debugging
- 🗃️ Supabase Integration for User Authentication & Database
- 🎨 Simple and Responsive UI (Next.js App Router)
- 🔐 Secure and Scalable Architecture

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Supabase](https://supabase.com/)
- **Styling**: CSS (via `/styles/globals.css`)
- **Language**: TypeScript (optional, but recommended)

---

## 📁 Project Structure

```
VybeAi/
├── app/
│   ├── page.tsx         # Home page
│   └── layout.tsx       # App layout
├── public/              # Static assets
├── styles/
│   └── globals.css      # Global styles
├── .env.local           # Environment variables (API keys, etc.)
├── package.json         # Project config and dependencies
└── README.md            # You're reading it!
```

---

## 🧩 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/VybeAi.git
cd VybeAi
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env.local` file and add your Supabase keys:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧪 Test It Works

Make sure your homepage (`app/page.tsx`) renders a basic component:

```tsx
export default function Home() {
  return <h1>Welcome to VybeAi</h1>;
}
```

---

## 💡 Future Plans

- AI chatbot integration for real-time Q&A
- Code editing with GPT-style prompts
- Dark mode support
- Custom project templates

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.
