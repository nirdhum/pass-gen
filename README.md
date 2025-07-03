# 🔐 PassGen – Password Generator

**PassGen** is a simple, secure, and customizable **password generator** built with **HTML**, **CSS**, and **JavaScript**. It allows users to generate strong passwords with options to include **uppercase**, **lowercase**, **numbers**, **symbols**, and set the **desired length**. It also includes a **copy-to-clipboard** button for easy use.

## 🌟 Features

- 🔢 Set password **length**
- 🔠 Include/exclude **uppercase letters**
- 🔡 Include/exclude **lowercase letters**
- 🔢 Include/exclude **numbers**
- 🔣 Include/exclude **symbols**
- 📋 **Copy password** to clipboard with one click
- ⚡ Instantly generates password on demand
- 🎨 Clean, responsive, and accessible UI

## 🚀 Live Demo

👉 [**Try it Live**](https://nirdhum.github.io/pass-gen/)

## 🛠️ Technologies Used

- **HTML5** – Structure and UI elements
- **CSS3** – Styling and responsive layout
- **JavaScript (ES6)** – Logic and functionality

## 📁 Project Structure

```
pass-gen/
├── index.html # Main HTML file
├── style.css # CSS styles
├── script.js # Password generation logic
└── README.md # Project documentation
```

## ⚙️ How It Works

### 1. Choose Settings

Users can customize:

- Password length (e.g. 8–20 characters)
- Whether to include:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols

### 2. Generate Password

Click the **"Generate Password"** button to create a new random password based on the selected criteria.

### 3. Copy to Clipboard

Click the **"Copy"** button to copy the generated password to your clipboard. A small notification (optional) confirms the action.

## 🧠 JavaScript Logic (Overview)

- Character pools are defined for each type: uppercase, lowercase, numbers, symbols.
- Based on user selections, a character set is assembled.
- A loop runs `length` times, selecting random characters from the pool.
- Clipboard API (`navigator.clipboard.writeText`) is used to copy the password.

## 🔧 Setup & Installation

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/nirdhum/pass-gen.git

# Navigate into the directory
cd pass-gen

# Open index.html in your browser
```

Or simply open index.html in any modern browser.

## 🙌 Contributing

- Contributions are welcome!
- Fork the repo
- Create a new branch
- Make your changes
- Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Nirdhum

## ⭐️ Show Your Support

If you find this project helpful, please give it a ⭐️ on GitHub and share it with others!
