'use client';

import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';

export default function Navbar({ user, onLogout }) {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        background: 'linear-gradient(to right, #3b82f6, #2563eb)',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        px: 2,
        py: 1,
      }}
    >
      <Toolbar className="flex justify-between items-center w-full">
        <Typography
          variant="h6"
          className="text-white font-semibold tracking-wide hover:opacity-90 transition-opacity duration-200 cursor-pointer"
        >
          🚀 Internship Dashboard
        </Typography>

        {user && (
          <Box className="flex items-center gap-4">
            <Avatar
              alt={user.displayName}
              src={user.photoURL}
              sx={{
                width: 36,
                height: 36,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              className="cursor-pointer"
            />
            <Typography
              variant="body1"
              className="text-white font-medium hover:text-blue-200 transition-colors duration-200 cursor-pointer"
            >
              {user.displayName}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={onLogout}
              className="border-white text-white hover:bg-white hover:text-blue-700 transition-all duration-200"
              sx={{ borderRadius: 2, px: 2, py: 0.5, fontWeight: 'bold' }}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
