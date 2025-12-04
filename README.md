# 📅 To-Do Week Tasks

React + Vite Application --- Weekly Organized To-Do Management

## 📌 Project Description

**To-Do Week Tasks** is a React application designed to help you plan
and manage tasks throughout the week.

The app allows you to: - ✔ Add new tasks\
- ✔ Organize tasks by days of the week\
- ✔ Mark tasks as completed\
- ✔ Delete tasks\
- ✔ Save all data in `localStorage`

## 🛠 Technologies Used

-   **React**
-   **Vite**
-   **JavaScript (ES6+)**
-   **CSS / Tailwind / Custom Styles**
-   **LocalStorage**

## 📂 Project Structure

    todo-Week-tasks/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── components/
    │   ├── assets/
    │   └── styles.css
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── README.md

## 🚀 How to Run the Project

### 1️⃣ Clone the repository

    git clone https://github.com/gogitakomladze/todo-Week-tasks.git
    cd todo-Week-tasks

### 2️⃣ Install dependencies

    npm install

### 3️⃣ Run in Development Mode

    npm run dev

Default URL: **http://localhost:5173**

### 4️⃣ Build for Production

    npm run build
    npm run preview

## 🧠 App Logic --- How It Works

### 🟦 State Management

Tasks are stored both in React state (`useState()`) and in
`localStorage`.

### 🟩 Adding a Task

    function addTask(task) {
      setTasks(prev => [{ ...task, id: Date.now() }, ...prev]);
    }

### 🟨 Toggling Task Completion

    function toggleComplete(id) {
      setTasks(prev =>
        prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
      );
    }

### 🟥 Deleting a Task

    function deleteTask(id) {
      setTasks(prev => prev.filter(t => t.id !== id));
    }

## 🌟 Future Improvements

-   🔄 Drag-and-drop task reordering\
-   🌙 Dark Mode\
-   🔔 Task reminders / notifications\
-   📆 Real calendar integration\
-   ☁ Cloud sync with a backend (Firebase / Express API)

## 👨‍💻 Author

**Gogita Komladze**\
