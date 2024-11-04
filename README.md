# 🕌 Dar al Islam Boston Website

A modern, responsive website for Dar al Islam Boston built with Next.js, TypeScript, and Tailwind CSS.

## 📖 Overview

This website serves as the digital presence for Dar al Islam Boston, providing information about prayer times, services, and community resources. The project uses modern web technologies to create a fast, accessible, and user-friendly experience.

## 🛠️ Tech Stack

- 🔷 **Framework**: Next.js 15 with App Router
- 📝 **Language**: TypeScript
- 🎨 **Styling**: Tailwind CSS
- 🧩 **UI Components**: Custom components with shadcn/ui principles
- 🔤 **Fonts**: Google Fonts (Inter, Noto Naskh Arabic)
- ✍️ **Typography**: @tailwindcss/typography

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/your-username/dar-al-islam-boston.git
cd dar-al-islam-boston
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open the site**
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
/dar-al-islam-boston
├── /app                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── khutba-evaluation/# Khutba evaluation page
│   ├── directions/       # Directions page
│   ├── contact/          # Contact page
│   ├── resources/        # Resources page
│   ├── mailing-list/     # Mailing list page
│   └── donations/        # Donations page
├── /components           # Reusable components
│   ├── ui/              # UI components
│   ├── navigation/      # Navigation components
│   └── forms/           # Form components
├── /lib                 # Utility functions
├── /public             # Static assets
└── /styles            # Global styles
```

## 📊 Current Progress

### ✅ Completed:
- 🏗️ Basic project setup and configuration
- 📱 Core pages structure
- 🧭 Navigation components (Header & Footer)
- 🔤 Arabic font support
- 📐 Responsive design
- 🎯 Basic UI components

### 🚧 In Progress:
- 📝 Form submissions and handling
- 📨 SendFox integration for mailing list
- 💳 Stripe integration for donations
- 🖼️ Image optimization and assets
- 📚 Content management system

### 📋 Todo:
- 🔄 Set up form submission endpoints
- 💰 Implement Stripe payment processing
- 📬 Add SendFox mailing list integration
- 🎛️ Create admin dashboard
- 📝 Add content management system
- 🔍 Implement search functionality
- ⏰ Add prayer times API integration
- 🧪 Set up automated testing
- 📊 Add analytics
- 🎯 Implement SEO optimizations

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the Repository** 🔱
   - Click the 'Fork' button at the top right of this page

2. **Clone Your Fork** 📥
   ```bash
   git clone https://github.com/your-username/dar-al-islam-boston.git
   ```

3. **Create a Branch** 🌿
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes** ✏️
   - Follow the existing code style
   - Add comments where necessary
   - Update tests if needed

5. **Commit Your Changes** 💾
   ```bash
   git commit -m "Add: brief description of your changes"
   ```

6. **Push to Your Fork** 🚀
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** 🎯
   - Go to the original repository
   - Click 'New Pull Request'
   - Select your fork and branch
   - Add a description of your changes
   - Submit the pull request

### 📜 Contribution Guidelines

- ✨ Follow the existing code style and conventions
- 📝 Write meaningful commit messages
- 📚 Update documentation as needed
- 🧪 Add tests for new features
- ✅ Ensure all tests pass before submitting
- 🎯 Keep pull requests focused on a single feature or fix

## 👩‍💻 Development Guidelines

- 📝 Use TypeScript for all new code
- 🧩 Follow the component structure in `/components`
- 🎨 Use Tailwind CSS for styling
- 📱 Ensure responsive design works on all screen sizes
- ♿ Maintain accessibility standards
- 🌐 Test across different browsers

## ⚙️ Setup Requirements

- 📦 Node.js 18.0 or higher
- 📦 npm or yarn
- 📦 Git

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

## 📄 License

[MIT License](LICENSE)

## 📞 Contact

For questions or support, please [create an issue](https://github.com/your-username/dar-al-islam-boston/issues) or contact the maintainers.