# Personal Profile Portfolio

A modern, responsive portfolio website showcasing my tech skills, projects, and work experience. Built with React and featuring beautiful animations, gradients, and a sleek dark theme.

## 🚀 Features

- **Modern Hero Section** - Animated gradient background with floating orbs
- **Skills Showcase** - Interactive skill bars with progress indicators
- **Project Gallery** - Filterable project cards with tech stacks
- **Experience Timeline** - Professional work history with achievements
- **Contact Form** - Get in touch section with social links
- **Smooth Animations** - GSAP-powered scroll animations
- **Fully Responsive** - Works perfectly on all devices
- **Dark Theme** - Eye-friendly dark design with gradient accents

## 🛠️ Technologies Used

- React 19
- GSAP (GreenSock Animation Platform)
- CSS3 (Custom animations and gradients)
- React Router DOM
- HTML5

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Kushagra6009/PersonalProfile.git
cd PersonalProfile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

5. Visit the portfolio at [http://localhost:3000/portfolio](http://localhost:3000/portfolio)

## 📁 Project Structure

```
PersonalProfile/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Portfolio.js      # Main portfolio component
│   ├── Portfolio.css     # Portfolio styles
│   ├── App.js            # Main app component with routing
│   └── ...
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit `src/Portfolio.js` to customize:
- Personal details (name, title, bio)
- Skills and proficiency levels
- Projects and descriptions
- Work experience
- Contact information
- Social media links

### Modify Styling

Edit `src/Portfolio.css` to:
- Change color schemes
- Adjust animations
- Modify layout and spacing
- Update fonts and typography

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://Kushagra6009.github.io/PersonalProfile",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Other Platforms

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder to an S3 bucket

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🔧 Configuration

### Routes

- `/` - Home page (existing app)
- `/portfolio` - Portfolio website

### Adding New Sections

To add new sections to the portfolio:

1. Add the section component in `Portfolio.js`
2. Add corresponding styles in `Portfolio.css`
3. Update navigation links
4. Add smooth scroll functionality

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Features to Add

Future enhancements:
- [ ] Blog section
- [ ] Testimonials section
- [ ] Downloadable resume
- [ ] Email integration for contact form
- [ ] Dark/Light theme toggle
- [ ] Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Kushagra**

- GitHub: [@Kushagra6009](https://github.com/Kushagra6009)
- Portfolio: [View Portfolio](https://github.com/Kushagra6009/PersonalProfile)

## 🙏 Acknowledgments

- React team for the amazing framework
- GSAP for powerful animations
- Create React App for the project setup

## 📞 Contact

For questions or suggestions, please open an issue on GitHub or contact me through the portfolio contact form.

---

Made with ❤️ using React
