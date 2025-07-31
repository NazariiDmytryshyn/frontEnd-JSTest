import "./App.css";
import { Box } from "@mui/material";
import { Input } from "./components/Input/Input";
import { Toast } from "./components/Toast/Toast";
import { SidebarMenu } from "./components/SidebarMenu/SidebarMenu";
import { mockSidebarData } from "./components/SidebarMenu/sidebarMockData";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 2,
      }}
    >
      <SidebarMenu menuItems={mockSidebarData} />
      <Input />
      <Toast />
    </Box>
  );
}

export default App;
