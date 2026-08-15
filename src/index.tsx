import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { AIChatScreen } from '../screens/AIChatScreen';
import { EditorScreen } from '../screens/EditorScreen';
import { ExportScreen } from '../screens/ExportScreen';
import { ProjectsScreen } from '../screens/ProjectsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { NavigationTabBar } from '../components/NavigationTabBar';
import { COLORS } from '../theme/theme';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    'onboarding' | 'home' | 'aichat' | 'editor' | 'export' | 'projects' | 'profile'
  >('onboarding');
  const [activeProject, setActiveProject] = useState('Product Launch.mp4');
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'aichat' | 'profile'>('home');

  // Handle opening editor with specific project name
  const handleOpenEditor = (title: string) => {
    setActiveProject(title);
    setCurrentScreen('editor');
  };

  // Handle navigation tab bar switches
  const handleSelectTab = (tab: 'home' | 'projects' | 'aichat' | 'profile') => {
    setActiveTab(tab);
    if (tab === 'home') setCurrentScreen('home');
    if (tab === 'projects') setCurrentScreen('projects');
    if (tab === 'aichat') setCurrentScreen('aichat');
    if (tab === 'profile') setCurrentScreen('profile');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      {/* Screen Views */}
      {currentScreen === 'onboarding' && (
        <OnboardingScreen
          onFinish={() => setCurrentScreen('home')}
          onSkip={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'home' && (
        <HomeScreen
          onOpenEditor={handleOpenEditor}
          onOpenAIChat={() => {
            setActiveTab('aichat');
            setCurrentScreen('aichat');
          }}
        />
      )}

      {currentScreen === 'aichat' && (
        <AIChatScreen
          onBack={() => setCurrentScreen('home')}
          onOpenEditor={handleOpenEditor}
        />
      )}

      {currentScreen === 'editor' && (
        <EditorScreen
          projectTitle={activeProject}
          onBack={() => setCurrentScreen('home')}
          onExport={() => setCurrentScreen('export')}
        />
      )}

      {currentScreen === 'export' && (
        <ExportScreen
          projectTitle={activeProject}
          onBack={() => setCurrentScreen('editor')}
          onDone={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'projects' && (
        <ProjectsScreen onOpenEditor={handleOpenEditor} />
      )}

      {currentScreen === 'profile' && <ProfileScreen />}

      {/* Bottom Navigation Tab Bar (Hidden during Onboarding, Editor & Export) */}
      {currentScreen !== 'onboarding' &&
        currentScreen !== 'editor' &&
        currentScreen !== 'export' && (
          <NavigationTabBar
            activeTab={activeTab}
            onSelectTab={handleSelectTab}
            onOpenCreate={() => handleOpenEditor('New Video.mp4')}
          />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
