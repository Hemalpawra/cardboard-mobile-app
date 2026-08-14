import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { SplashScreen } from "./components/SplashScreen";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { SignUpScreen } from "./components/SignUpScreen";
import { SignUpEmailScreen } from "./components/SignUpEmailScreen";
import { VerifyCodeScreen } from "./components/VerifyCodeScreen";
import { CreatePasswordScreen } from "./components/CreatePasswordScreen";
import { PermissionIntroScreen } from "./components/PermissionIntroScreen";
import { GalleryAccessScreen } from "./components/GalleryAccessScreen";
import { MicAccessScreen } from "./components/MicAccessScreen";
import { NotificationScreen } from "./components/NotificationScreen";
import { WorkspaceScreen } from "./components/WorkspaceScreen";
import { WorkspaceNameScreen } from "./components/WorkspaceNameScreen";
import { ImportingScreen } from "./components/ImportingScreen";
import { HomeScreen } from "./components/HomeScreen";
import { UploadingScreen } from "./components/UploadingScreen";
import { ProjectReadyScreen } from "./components/ProjectReadyScreen";
import { AiAssistantScreen } from "./components/AiAssistantScreen";
import { ProjectsScreen } from "./components/ProjectsScreen";
import { CollaborationScreen } from "./components/CollaborationScreen";

type AppScreen =
  | "splash"
  | "onboarding"
  | "signup"
  | "signup-email"
  | "verify-code"
  | "create-password"
  | "permission-intro"
  | "gallery-access"
  | "mic-access"
  | "notification"
  | "workspace"
  | "workspace-name"
  | "importing"
  | "uploading"
  | "project-ready"
  | "home"
  | "ai-assistant"
  | "projects"
  | "collaboration";

export default function App() {
  const [screen, setScreen] = useState<AppScreen>("splash");
  const email = "john@gmail.com";

  useEffect(() => {
    if (screen !== "splash") return;
    const t = setTimeout(() => setScreen("onboarding"), 2600);
    return () => clearTimeout(t);
  }, [screen]);

  return (
    <div className="w-screen h-screen bg-[#0d0d0f] relative overflow-hidden select-none">
      <div className="relative w-full h-full max-w-[430px] max-h-[932px] mx-auto border border-[#1f1f23] shadow-2xl">
        <AnimatePresence mode="wait">
          {screen === "splash" && (
            <SplashScreen key="splash" />
          )}

          {screen === "onboarding" && (
            <OnboardingScreen
              key="onboarding"
              onComplete={() => setScreen("signup")}
              onSkip={() => setScreen("signup")}
            />
          )}

          {screen === "signup" && (
            <SignUpScreen
              key="signup"
              onEmailSignUp={() => setScreen("signup-email")}
            />
          )}

          {screen === "signup-email" && (
            <SignUpEmailScreen
              key="signup-email"
              onBack={() => setScreen("signup")}
              onContinue={() => setScreen("verify-code")}
            />
          )}

          {screen === "verify-code" && (
            <VerifyCodeScreen
              key="verify-code"
              onBack={() => setScreen("signup-email")}
              onVerified={() => setScreen("create-password")}
              email={email}
            />
          )}

          {screen === "create-password" && (
            <CreatePasswordScreen
              key="create-password"
              onBack={() => setScreen("verify-code")}
              onContinue={() => setScreen("permission-intro")}
            />
          )}

          {screen === "permission-intro" && (
            <PermissionIntroScreen
              key="permission-intro"
              onBack={() => setScreen("create-password")}
              onContinue={() => setScreen("gallery-access")}
            />
          )}

          {screen === "gallery-access" && (
            <GalleryAccessScreen
              key="gallery-access"
              onBack={() => setScreen("permission-intro")}
              onAllow={() => setScreen("mic-access")}
              onSkip={() => setScreen("mic-access")}
            />
          )}

          {screen === "mic-access" && (
            <MicAccessScreen
              key="mic-access"
              onBack={() => setScreen("gallery-access")}
              onAllow={() => setScreen("notification")}
              onSkip={() => setScreen("notification")}
            />
          )}

          {screen === "notification" && (
            <NotificationScreen
              key="notification"
              onBack={() => setScreen("mic-access")}
              onEnable={() => setScreen("workspace")}
              onSkip={() => setScreen("workspace")}
            />
          )}

          {screen === "workspace" && (
            <WorkspaceScreen
              key="workspace"
              onBack={() => setScreen("notification")}
              onContinue={() => setScreen("workspace-name")}
            />
          )}

          {screen === "workspace-name" && (
            <WorkspaceNameScreen
              key="workspace-name"
              onBack={() => setScreen("workspace")}
              onContinue={() => setScreen("importing")}
            />
          )}

          {screen === "importing" && (
            <ImportingScreen
              key="importing"
              onBack={() => setScreen("workspace-name")}
              onGallery={() => setScreen("uploading")}
              onRecord={() => setScreen("uploading")}
              onAI={() => setScreen("ai-assistant")}
              onSkip={() => setScreen("home")}
            />
          )}

          {screen === "uploading" && (
            <UploadingScreen
              key="uploading"
              onComplete={() => setScreen("project-ready")}
            />
          )}

          {screen === "project-ready" && (
            <ProjectReadyScreen
              key="project-ready"
              onOpenProject={() => setScreen("ai-assistant")}
              onBack={() => setScreen("home")}
            />
          )}

          {screen === "home" && (
            <HomeScreen
              key="home"
              onNavigateAi={() => setScreen("ai-assistant")}
              onNavigateProjects={() => setScreen("projects")}
              onSelectCollaboration={() => setScreen("collaboration")}
              onSelectProject={() => setScreen("ai-assistant")}
            />
          )}

          {screen === "ai-assistant" && (
            <AiAssistantScreen
              key="ai-assistant"
              onBack={() => setScreen("home")}
            />
          )}

          {screen === "projects" && (
            <ProjectsScreen
              key="projects"
              onNavigateHome={() => setScreen("home")}
              onNavigateAi={() => setScreen("ai-assistant")}
              onNewProject={() => setScreen("importing")}
              onSelectProject={() => setScreen("ai-assistant")}
            />
          )}

          {screen === "collaboration" && (
            <CollaborationScreen
              key="collaboration"
              onBack={() => setScreen("home")}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
