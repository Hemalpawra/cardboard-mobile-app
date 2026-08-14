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
import { NotificationsScreen } from "./components/NotificationsScreen";
import { ProjectsSearchScreen } from "./components/ProjectsSearchScreen";
import { ProjectEditingScreen } from "./components/ProjectEditingScreen";
import { ProjectExportScreen } from "./components/ProjectExportScreen";
import { ExportProgressScreen } from "./components/ExportProgressScreen";
import { CommentThreadScreen } from "./components/CommentThreadScreen";
import { ShareProjectScreen } from "./components/ShareProjectScreen";
import { VersionHistoryScreen } from "./components/VersionHistoryScreen";
import { VersionDetailsScreen } from "./components/VersionDetailsScreen";
import { RestoreProgressScreen } from "./components/RestoreProgressScreen";
import { ReviewChangesScreen } from "./components/ReviewChangesScreen";

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
  | "collaboration"
  | "notifications"
  | "projects-search"
  | "review-before"
  | "review-after"
  | "project-editing"
  | "project-export"
  | "export-progress"
  | "comment-thread"
  | "share-project"
  | "version-history"
  | "version-details"
  | "restore-progress";

export default function App() {
  const [screen, setScreenState] = useState<AppScreen>("splash");
  const [previousScreen, setPreviousScreen] = useState<AppScreen>("home");
  const email = "john@gmail.com";

  const setScreen = (newScreen: AppScreen) => {
    setPreviousScreen(screen);
    setScreenState(newScreen);
  };

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
              onBack={() => setScreen("onboarding")}
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
              onOpenProject={() => setScreen("project-editing")}
              onBack={() => setScreen("home")}
            />
          )}

          {screen === "home" && (
            <HomeScreen
              key="home"
              onNavigateAi={() => setScreen("ai-assistant")}
              onNavigateProjects={() => setScreen("projects")}
              onSelectCollaboration={() => setScreen("notifications")}
              onSelectProject={() => setScreen("project-editing")}
              onNotifications={() => setScreen("notifications")}
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
              onSelectProject={() => setScreen("project-editing")}
              onSearch={() => setScreen("projects-search")}
            />
          )}

          {screen === "collaboration" && (
            <CollaborationScreen
              key="collaboration"
              onBack={() => setScreen("project-editing")}
              onShare={() => setScreen("share-project")}
              onComment={() => setScreen("comment-thread")}
            />
          )}

          {screen === "notifications" && (
            <NotificationsScreen
              key="notifications"
              onBack={() => setScreen("home")}
            />
          )}

          {screen === "projects-search" && (
            <ProjectsSearchScreen
              key="projects-search"
              onBack={() => setScreen("projects")}
              onSelectProject={() => setScreen("project-editing")}
            />
          )}

          {screen === "review-before" && (
            <ReviewChangesScreen
              key="review-before"
              defaultTab="before"
              onBack={() => setScreenState(previousScreen)}
              onApply={() => setScreen("project-editing")}
            />
          )}

          {screen === "review-after" && (
            <ReviewChangesScreen
              key="review-after"
              defaultTab="after"
              onBack={() => setScreenState(previousScreen)}
              onApply={() => setScreen("project-editing")}
              onDiscard={() => setScreen("review-before")}
            />
          )}

          {screen === "project-editing" && (
            <ProjectEditingScreen
              key="project-editing"
              onBack={() => setScreenState(previousScreen === "review-before" || previousScreen === "review-after" ? previousScreen : "home")}
              onExport={() => setScreen("project-export")}
              onNavigateVersionHistory={() => setScreen("version-history")}
              onNavigateCollaboration={() => setScreen("collaboration")}
            />
          )}

          {screen === "project-export" && (
            <ProjectExportScreen
              key="project-export"
              onBack={() => setScreen("project-editing")}
              onExportStart={() => setScreen("export-progress")}
            />
          )}

          {screen === "export-progress" && (
            <ExportProgressScreen
              key="export-progress"
              onHome={() => setScreen("home")}
              onShare={() => setScreen("home")}
            />
          )}

          {screen === "comment-thread" && (
            <CommentThreadScreen
              key="comment-thread"
              onBack={() => setScreen("collaboration")}
            />
          )}

          {screen === "share-project" && (
            <ShareProjectScreen
              key="share-project"
              onBack={() => setScreen("collaboration")}
            />
          )}

          {screen === "version-history" && (
            <VersionHistoryScreen
              key="version-history"
              onBack={() => setScreen("project-editing")}
              onSelectVersion={() => setScreen("version-details")}
            />
          )}

          {screen === "version-details" && (
            <VersionDetailsScreen
              key="version-details"
              onBack={() => setScreen("version-history")}
              onRestore={() => setScreen("restore-progress")}
            />
          )}

          {screen === "restore-progress" && (
            <RestoreProgressScreen
              key="restore-progress"
              onHome={() => setScreen("home")}
              onEdit={() => setScreen("project-editing")}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
