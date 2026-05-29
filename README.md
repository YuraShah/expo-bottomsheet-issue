## Environment
- Expo SDK: ~56.0.7
- @expo/ui: ~56.0.15
- Platform: Android

---

## Bug 1: Universal BottomSheet — gestures stop working after dismiss

### Description
After dismissing a BottomSheet on Android, a second overlay/modal appears 
underneath and all gestures on the screen stop responding.

### Steps to reproduce
1. Render `<BottomSheet>` inside `<Host>` conditionally (`isPresented && ...`)
2. Open the sheet
3. Dismiss it (swipe down or tap outside)
4. Observe: a ghost overlay remains, all touch gestures are blocked

### Expected
Sheet dismisses cleanly, screen is fully interactive

### Actual
A second modal appears below, gestures stop working entirely

### Code
bottom-sheet.tsx

---

## Bug 2: ModalBottomSheet (Jetpack Compose) — ScrollView not scrollable

### Description
A `<ScrollView>` inside `<RNHostView>` inside `<ModalBottomSheet>` 
does not respond to scroll gestures on Android.

### Steps to reproduce
1. Render `<ModalBottomSheet>` with `<RNHostView><ScrollView>` inside
2. Open the sheet
3. Try to scroll the content

### Expected
Content scrolls normally

### Actual
Scroll gestures are ignored, content is static

### Code
bottom-sheet.android.tsx
