# Offpista — Project Documentation

## Overview

Offpista is an iOS React Native application that combines a Netflix-style hero/main screen with a short-video Feed that behaves like TikTok / Instagram Reels. The app provides a primary discovery experience (hero carousels and featured content) and a vertical short-video feed for fast consumption.

## Key Features

- Netflix-like main screen (hero banner, genre badges, call-to-action Play button).
- Vertical short-video Feed with paging (TikTok/IG Reels style).
- Deep navigation from hero to Shorts feed:
  - When viewing a hero video, user can "View Short" and the app navigates to the Shorts tab, scrolls to the target post, and seeks the target video to the same playback time.
- Background cleanup: timers and playback are cleared/stopped when screens lose focus/unmount.
- Poster / thumbnail support for videos.
- Repeating and muted playback options for hero previews.
- Iconography provided by lucide-react-native and LucidPreact integration for additional assets.
- Assets and visual design based on provided Figma designs.

## Technologies Used

- Framework: React Native (iOS-targeted build)
- Navigation: React Navigation (useFocusEffect / useNavigation)
- Video playback: react-native-video (wrapped by a local VideoPlayer component which exposes pause/resume/seek via ref)
- Backend / API: Firebase (Firestore / Storage where applicable)
- Video hosting: Private Cloudinary account (shorts/videos hosted on Cloudinary)
- Icons: lucide-react-native, LucidPreact (integrated for extra icon assets)
- Styling: React Native StyleSheet, LinearGradient (react-native-linear-gradient)
- TypeScript for typed components and navigation params
- Figma: Design assets sourced from the provided Figma designs

## Architecture & Flow

- Main screens are organized under the app navigator (Bottom menu with tabs such as Home, Shorts, etc.).
- HeroSection component (example: src/components/common/HeroSection.tsx) renders a featured video preview and a CTA. It uses:
  - VideoPlayer (ref-based) for preview playback
  - useFocusEffect to start playback after a 3s delay when focused, and stops/clears timers on blur/unmount
  - navigation.navigate to pass { postId, seekTo } to the Shorts tab
- Shorts screen:
  - Reads navigation params (postId, seekTo) on focus
  - Uses a FlatList (or paging-enabled list) to render short items
  - scrollToIndex (with fallback to scrollToOffset/getItemLayout) to bring the target post into view
  - Propagates seekTo to the visible ShortItem
- ShortItem / per-item VideoPlayer:
  - Accepts seekTo and autoPlay props
  - Exposes a ref with seek / pause / resume methods (via useImperativeHandle)
  - Seeks to incoming seekTo once mounted/visible and resumes playback if required

## Notable Files (examples)

- src/components/common/HeroSection.tsx
- src/components/player/VideoPlayer.tsx (ref wrapper around react-native-video)
- src/screens/ShortsScreen.tsx (list of shorts; handles incoming nav params and scroll/seek)
- src/components/shorts/ShortItem.tsx (per-short wrapper that receives seekTo/autoPlay)
- src/navigation/\* (navigation constants and types)
- src/hooks/useColors.ts (theme colors)
- src/themes/dimensions.ts (layout helpers)

## How the "navigate + scroll + seek" flow works

1. HeroSection captures the current playback time (onProgress) into a ref.
2. When user taps Play/View Short:
   - HeroSection clears any pending timeouts and stops local playback.
   - Calls navigation.navigate('Shorts', { postId, seekTo: currentTime }).
3. Shorts screen on focus:
   - Reads route.params for postId and seekTo.
   - Finds the index of the post in the list and calls flatListRef.current.scrollToIndex({ index, viewPosition: 0.5 }).
   - After a short delay (to allow the target item to mount), Shorts screen sets a pendingSeek state containing { postId, seekTo }.
4. ShortItem receives seekTo and, when mounted/visible, calls playerRef.current.seek(seekTo) and resumes playback.

Recommendations applied in code:

- Use getItemLayout or stable item heights for reliable scrollToIndex.
- onScrollToIndexFailed fallback to scrollToOffset with estimated height.
- Small timeout before calling seek to ensure the native video component is mounted.

## Security & Requirements Compliance

- API/backend: implemented using Firebase (secure rules expected; ensure Firestore / Storage rules are configured for production).
- Video hosting: videos are stored in a private Cloudinary account (credentials and URLs must be kept out of source control; use secure env vars / secret manager).
- The project meets the specified requirements:
  - iOS React Native app with a main screen similar to Netflix.
  - Feed page with vertically scrolling videos like TikTok / Instagram Reels.
  - Deep-link style behavior from hero previews to Shorts feed with scroll-to-post and seek position preservation.
- Timeouts and playback are cleaned up when components lose focus or unmount to prevent background playback and resource leaks.

## Assets & Design

- UI assets and layout derived from the provided Figma design.
- Icons: lucide-react-native used throughout; LucidPreact integrated for additional icon assets when needed.
- Thumbnails/posters are used as video posters to match designs.

## How to run (iOS)

1. Install dependencies:
   - yarn install or npm install
2. Install CocoaPods:
   - cd ios && pod install && cd ..
3. Run on iOS simulator / device:
   - npx react-native run-ios
