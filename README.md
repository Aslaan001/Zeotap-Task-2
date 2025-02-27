# CDP Support Agent Chatbot

A chatbot designed to assist users with "how-to" questions related to four major Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap. The chatbot retrieves relevant information from official documentation and provides accurate guidance.

## 🚀 Features

### **1️⃣ How-To Question Handling**
- Understands and responds to user queries about specific tasks within each CDP.
- Examples:
  - "How do I set up a new source in Segment?"
  - "How can I create a user profile in mParticle?"
  - "How do I build an audience segment in Lytics?"
  - "How can I integrate my data with Zeotap?"

### **2️⃣ Documentation-Based Responses**
- Extracts relevant instructions from official CDP documentation:
  - **Segment:** [Docs](https://segment.com/docs/?ref=nav)
  - **mParticle:** [Docs](https://docs.mparticle.com/)
  - **Lytics:** [Docs](https://docs.lytics.com/)
  - **Zeotap:** [Docs](https://docs.zeotap.com/home/en-us/)
- Identifies and delivers step-by-step solutions from these sources.

### **3️⃣ Intelligent Question Handling**
- Processes **short and long** questions efficiently.
- Filters out unrelated queries (e.g., "Which movie is releasing this week?").

### **4️⃣ Bonus Features**
- **Cross-CDP Comparisons**: Explains differences in features and workflows across CDPs.
  - Example: "How does Segment's audience creation compare to Lytics'?"
- **Advanced Guidance**: Handles complex configurations and integration use cases.

## 📜 How to Use the Chatbot

1. **Ask a question** related to Segment, mParticle, Lytics, or Zeotap.
2. The chatbot fetches the relevant information from official documentation.
3. It provides a structured response with step-by-step guidance.

## 🛠 Tech Stack

- **Frontend**: React.js
- **AI Model**: Gemini Open-Source API
- **Data Handling**: API-based documentation retrieval
- **Deployment**: Vercel/Netlify

## 🏗 Installation & Running the Application

### **1️⃣ Install Dependencies**
```sh
npm install
```

### **2️⃣ Start the Development Server**
```sh
npm start
```

### **3️⃣ Deployment**
To deploy the application, use:
```sh
npm run build
```
This generates an optimized build that can be hosted on platforms like **Vercel, Netlify, or AWS**.

## 🌐 Live Demo
[[Chatbot Deployed Link](#) 
(https://jolly-longma-3038a2.netlify.app/)

---

Thanks for checking out my submission!

