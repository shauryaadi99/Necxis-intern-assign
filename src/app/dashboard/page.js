"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Collapse,
} from "@mui/material";
import Navbar from "../components/Navbar";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showUserStats, setShowUserStats] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        router.push("/");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (!user) return null;

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <Container className="mt-10">
        <Typography variant="h3" gutterBottom>
          Hello, {user.displayName} 👋
        </Typography>

        <Grid container spacing={4}>
          {/* Analytics Card */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box className="rounded-2xl p-6 shadow-lg bg-white dark:bg-gray-900 h-full transition-all duration-300">
              <Typography variant="h6" gutterBottom>
                📊 Analytics
              </Typography>
              <Collapse in={showAnalytics}>
                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc ml-4">
                  <li>Monthly Users: 4.2k</li>
                  <li>Growth: +18%</li>
                  <li>Bounce Rate: 27%</li>
                </ul>
              </Collapse>
              {!showAnalytics && (
                <Button onClick={() => setShowAnalytics(true)} className="mt-2">
                  View Details
                </Button>
              )}
            </Box>
          </Grid>

          {/* User Stats Card */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box className="rounded-2xl p-6 shadow-lg bg-white dark:bg-gray-900 h-full transition-all duration-300">
              <Typography variant="h6" gutterBottom>
                👤 User Stats
              </Typography>
              <Collapse in={showUserStats}>
                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc ml-4">
                  <li>Name: {user.displayName || "N/A"}</li>
                  <li>Email: {user.email}</li>
                  <li>
                    Joined:{" "}
                    {user.metadata?.creationTime
                      ? new Date(
                          user.metadata.creationTime
                        ).toLocaleDateString()
                      : "Unknown"}
                  </li>
                </ul>
              </Collapse>

              {!showUserStats && (
                <Button onClick={() => setShowUserStats(true)} className="mt-2">
                  View Details
                </Button>
              )}
            </Box>
          </Grid>

          {/* Settings Card */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box className="rounded-2xl p-6 shadow-lg bg-white dark:bg-gray-900 h-full transition-all duration-300">
              <Typography variant="h6" gutterBottom>
                ⚙️ Settings
              </Typography>
              <Collapse in={showSettings}>
                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc ml-4">
                  <li>Notifications: Enabled</li>
                  <li>Dark Mode: On</li>
                  <li>Language: English</li>
                </ul>
              </Collapse>
              {!showSettings && (
                <Button onClick={() => setShowSettings(true)} className="mt-2">
                  View Details
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>

        <Box mt={6} className="text-center">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleLogout}
            className="px-6 py-2"
          >
            Logout
          </Button>
        </Box>
      </Container>
    </>
  );
}
