Here’s a clean and professional `README.md` for your **Expo + Firebase FCM Push Notifications** repo:

---

### 📄 `README.md`

```markdown
# 🚀 Necxis Expo App - Firebase FCM Push Notifications

This is a React Native mobile application built using **Expo** that integrates **Firebase Cloud Messaging (FCM)** to handle **push notifications**. The app is part of the Necxis Internship Assignment.

---

## 📱 Features

- 🔔 Push notifications using Expo + Firebase Cloud Messaging
- 📲 Retrieves and logs Expo Push Token
- 📤 Ready to integrate with any backend (e.g., Next.js)
- ⚡ Uses modern Expo SDK and supports Android devices

---

## 📁 Folder Structure

```
necxis-app/
│
├── App.js                        # Root component for lifecycle & notification listeners
├── fcm.js                        # Push notification logic (permissions, token)
├── firebase.js                   # Firebase config file (if using Firebase)
├── components/
│   └── NotificationHandler.js    # (Optional) Background notification component
├── assets/
├── package.json
└── ...
```

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/necxis-app.git
cd necxis-app
```

### 2. Install dependencies

```bash
npm install
npx expo install expo-notifications
```

---

## 🔌 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a project or use an existing one
3. Go to **Project Settings > General > Your Apps**
4. Register your Android app (package name like `com.yourcompany.necxis`)
5. Download `google-services.json` (optional)
6. Go to **Cloud Messaging**, and copy your **Sender ID** and **Server Key**
7. Use your Firebase config inside `firebase.js`

---

## 📲 Run the App

```bash
npx expo start
```

> 💡 Make sure to run on a physical Android device to test push notifications.

---

## 🚀 Sending a Test Notification

Use [Expo's Push Notification Tool](https://expo.dev/notifications) to send a push notification.

1. Copy the **Expo Push Token** from console log.
2. Paste it in the Expo notification tool.
3. Send a test notification!

---

## ✅ Requirements

- Expo SDK 50 or higher
- Physical Android device
- Firebase Project with FCM enabled

---

## 🧠 Credits

- Built with 💙 using **React Native**, **Expo**, and **Firebase**
- Created for the **Necxis Internship Assignment**

---

## 📩 License

This project is licensed under the MIT License.
```

---

Let me know if you want to include screenshots, a demo GIF, or link it with your Next.js + Vercel backend!
